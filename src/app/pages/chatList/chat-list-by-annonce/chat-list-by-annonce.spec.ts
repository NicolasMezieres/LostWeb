import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListByAnnonce } from './chat-list-by-annonce';

describe('ChatListByAnnonce', () => {
  let component: ChatListByAnnonce;
  let fixture: ComponentFixture<ChatListByAnnonce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatListByAnnonce]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatListByAnnonce);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
