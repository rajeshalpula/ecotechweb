import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aqi-dashboard',
  templateUrl: './aqi-dashboard.component.html',
  styleUrls: ['./aqi-dashboard.component.sass']
})
export class AqiDashboardComponent implements OnInit {

  view: any[] = [600, 100];

  // options for the chart
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  timeline = false;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  public single = [
    {
      "name": "China",
      "value": 2243772
    },
    {
      "name": "USA",
      "value": 1126000
    },
    {
      "name": "Norway",
      "value": 296215
    },
    {
      "name": "Japan",
      "value": 257363
    },
    {
      "name": "Germany",
      "value": 196750
    },
    {
      "name": "France",
      "value": 204617
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
