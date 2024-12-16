import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtstimeComponent } from './firtstime.component';

describe('FirtstimeComponent', () => {
  let component: FirtstimeComponent;
  let fixture: ComponentFixture<FirtstimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtstimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirtstimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
