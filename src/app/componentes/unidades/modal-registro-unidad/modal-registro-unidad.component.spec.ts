import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroUnidadComponent } from './modal-registro-unidad.component';

describe('ModalRegistroUnidadComponent', () => {
  let component: ModalRegistroUnidadComponent;
  let fixture: ComponentFixture<ModalRegistroUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistroUnidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistroUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
