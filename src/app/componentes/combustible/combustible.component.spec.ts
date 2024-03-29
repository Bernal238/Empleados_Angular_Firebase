import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombustibleComponent } from './combustible.component';

describe('CombustibleComponent', () => {
  let component: CombustibleComponent;
  let fixture: ComponentFixture<CombustibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombustibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombustibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
