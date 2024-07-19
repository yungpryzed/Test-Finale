import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteocardComponent } from './meteocard.component';

describe('MeteocardComponent', () => {
  let component: MeteocardComponent;
  let fixture: ComponentFixture<MeteocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteocardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
