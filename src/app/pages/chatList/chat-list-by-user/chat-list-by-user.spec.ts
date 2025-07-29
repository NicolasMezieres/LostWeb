import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListByUser } from './chat-list-by-user';

describe('ChatListByUser', () => {
  let component: ChatListByUser;
  let fixture: ComponentFixture<ChatListByUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatListByUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatListByUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
