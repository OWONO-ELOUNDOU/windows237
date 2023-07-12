import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseServiceComponent } from './house-service.component';

describe('HouseServiceComponent', () => {
  let component: HouseServiceComponent;
  let fixture: ComponentFixture<HouseServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
