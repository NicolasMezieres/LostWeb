import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Signin } from './signin';
import { Toast } from '../../services/toast/toast';
import { toastMock } from './mock/toast.spec';
import { Router } from '@angular/router';
import { routerMock } from './mock/router.spec';
import { Auth } from '../../services/auth';
import { authMock } from './mock/auth.spec';
import { MatDialog } from '@angular/material/dialog';
import { matDialogMock } from './mock/dialog.spec';
import { of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
describe('forget password', () => {
  let component: Signin;
  let fixture: ComponentFixture<Signin>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signin],
      providers: [
        { provide: Toast, useValue: toastMock },
        { provide: Router, useValue: routerMock },
        { provide: Auth, useValue: authMock },
        { provide: MatDialog, useValue: matDialogMock },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(Signin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('open dialog', () => {
    it('should open dialog forget password', () => {});
  });
  describe('submit form', () => {
    it('should return role admin', () => {
      component.signinForm.setValue({
        identifier: 'identifier',
        password: 'password',
      });
      jest
        .spyOn(authMock, 'signin')
        .mockReturnValue(of({ message: 'success connexion', role: 'Admin' }));
      expect(component.submitForm(new Event('submit')));
      expect(toastMock.successToast).toHaveBeenCalledWith('success connexion');
      expect(routerMock.navigate).toHaveBeenCalledWith(['home']);
    });
    it('should return role user', () => {
      component.signinForm.setValue({
        identifier: 'identifier',
        password: 'password',
      });
      jest
        .spyOn(authMock, 'signin')
        .mockReturnValue(of({ message: 'signin succes', role: 'User' }));
      expect(component.submitForm(new Event('submit')));
      expect(toastMock.failToast).toHaveBeenCalledWith(
        'Your account are unauthorized'
      );
    });
    it('should return error', () => {
      component.signinForm.setValue({
        identifier: 'identifier',
        password: 'password',
      });
      jest
        .spyOn(authMock, 'signin')
        .mockReturnValue(
          throwError(
            () => new HttpErrorResponse({ error: { message: 'error server' } })
          )
        );
      expect(component.submitForm(new Event('submit')));
      expect(toastMock.failToast).toHaveBeenCalledWith('error server');
    });
  });
});
