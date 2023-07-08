import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVarComponent } from './template-var.component';

describe('TemplateVarComponent', () => {
  let component: TemplateVarComponent;
  let fixture: ComponentFixture<TemplateVarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVarComponent]
    });
    fixture = TestBed.createComponent(TemplateVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
