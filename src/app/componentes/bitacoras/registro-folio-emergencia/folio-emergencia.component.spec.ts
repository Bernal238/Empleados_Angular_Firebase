import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolioEmergenciaComponent } from './folio-emergencia.component';

describe('FolioEmergenciaComponent', () => {
  let component: FolioEmergenciaComponent;
  let fixture: ComponentFixture<FolioEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolioEmergenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolioEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
