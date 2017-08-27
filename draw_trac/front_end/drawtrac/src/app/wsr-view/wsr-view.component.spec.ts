import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsrViewComponent } from './wsr-view.component';

describe('WsrViewComponent', () => {
  let component: WsrViewComponent;
  let fixture: ComponentFixture<WsrViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsrViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
