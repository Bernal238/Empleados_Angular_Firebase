import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegiosUsuariosComponent } from './privilegios-usuarios.component';

describe('PrivilegiosUsuariosComponent', () => {
  let component: PrivilegiosUsuariosComponent;
  let fixture: ComponentFixture<PrivilegiosUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegiosUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivilegiosUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
