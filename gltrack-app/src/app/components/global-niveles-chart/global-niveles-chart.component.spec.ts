import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNivelesChartComponent } from './global-niveles-chart.component';

describe('GlobalNivelesChartComponent', () => {
  let component: GlobalNivelesChartComponent;
  let fixture: ComponentFixture<GlobalNivelesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalNivelesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalNivelesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
