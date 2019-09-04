import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativoSemanalChartComponent } from './comparativo-semanal-chart.component';

describe('ComparativoSemanalChartComponent', () => {
  let component: ComparativoSemanalChartComponent;
  let fixture: ComponentFixture<ComparativoSemanalChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativoSemanalChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativoSemanalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
