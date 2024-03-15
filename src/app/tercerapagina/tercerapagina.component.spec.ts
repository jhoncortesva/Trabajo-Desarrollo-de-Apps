import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerapaginaComponent } from './tercerapagina.component';

describe('TercerapaginaComponent', () => {
  let component: TercerapaginaComponent;
  let fixture: ComponentFixture<TercerapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TercerapaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TercerapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
