import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreactivePostComponent } from './addreactive-post.component';

describe('AddreactivePostComponent', () => {
  let component: AddreactivePostComponent;
  let fixture: ComponentFixture<AddreactivePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreactivePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreactivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
