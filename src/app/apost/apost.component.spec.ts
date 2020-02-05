import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApostComponent } from './apost.component';

describe('ApostComponent', () => {
  let component: ApostComponent;
  let fixture: ComponentFixture<ApostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
