import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParternshipComponent } from './parternship.component';

describe('ParternshipComponent', () => {
  let component: ParternshipComponent;
  let fixture: ComponentFixture<ParternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParternshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
