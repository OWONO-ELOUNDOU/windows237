import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucceedOfferComponent } from './succeed-offer.component';

describe('SucceedOfferComponent', () => {
  let component: SucceedOfferComponent;
  let fixture: ComponentFixture<SucceedOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucceedOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucceedOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
