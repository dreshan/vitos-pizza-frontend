import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzadetailsComponent } from './pizzadetails.component';

describe('PizzadetailsComponent', () => {
  let component: PizzadetailsComponent;
  let fixture: ComponentFixture<PizzadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
