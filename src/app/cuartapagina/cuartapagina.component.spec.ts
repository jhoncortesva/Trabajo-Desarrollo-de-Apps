import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartapaginaComponent } from './cuartapagina.component';

describe('CuartapaginaComponent', () => {
  let component: CuartapaginaComponent;
  let fixture: ComponentFixture<CuartapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuartapaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuartapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
