import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesaboutComponent } from './pagesabout.component';

describe('PagesaboutComponent', () => {
  let component: PagesaboutComponent;
  let fixture: ComponentFixture<PagesaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesaboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
