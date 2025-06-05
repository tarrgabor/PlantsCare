import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewwateringComponent } from './addnewwatering.component';

describe('AddnewwateringComponent', () => {
  let component: AddnewwateringComponent;
  let fixture: ComponentFixture<AddnewwateringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewwateringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewwateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
