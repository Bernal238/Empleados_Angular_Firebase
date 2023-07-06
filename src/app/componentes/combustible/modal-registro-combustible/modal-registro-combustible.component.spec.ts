import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroCombustibleComponent } from './modal-registro-combustible.component';

describe('ModalRegistroCombustibleComponent', () => {
  let component: ModalRegistroCombustibleComponent;
  let fixture: ComponentFixture<ModalRegistroCombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegistroCombustibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistroCombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
