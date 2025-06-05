import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewplantComponent } from './addnewplant.component';

describe('AddnewplantComponent', () => {
  let component: AddnewplantComponent;
  let fixture: ComponentFixture<AddnewplantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddnewplantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewplantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
