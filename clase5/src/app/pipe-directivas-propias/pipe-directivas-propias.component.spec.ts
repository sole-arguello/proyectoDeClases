import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDirectivasPropiasComponent } from './pipe-directivas-propias.component';

describe('PipeDirectivasPropiasComponent', () => {
  let component: PipeDirectivasPropiasComponent;
  let fixture: ComponentFixture<PipeDirectivasPropiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipeDirectivasPropiasComponent]
    });
    fixture = TestBed.createComponent(PipeDirectivasPropiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
