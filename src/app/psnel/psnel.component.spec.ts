import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsnelComponent } from './psnel.component';

describe('PsnelComponent', () => {
  let component: PsnelComponent;
  let fixture: ComponentFixture<PsnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
