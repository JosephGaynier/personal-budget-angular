import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements AfterViewInit {
  public data = {
    datasets: [
      {
        data: [30, 350, 90],
        backgroundColor: [
          '#ffcd56',
          '#ff6384',
          '#36a2eb',
          '#fd6b19',
          '#32CD32',
          '#800080',
          '#8B4513',
        ],
      },
    ],
    labels: ['Eat out', 'Rent', 'Groceries'],
  };

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget').subscribe((res: any) => {
      for (let i = 0; i < res.MyBudget.length; i++) {
        this.data.datasets[0].data[i] = res.MyBudget[i].budget;
        this.data.labels[i] = res.MyBudget[i].title;
      }
      this.createChart();
    });
  }

  // tslint:disable-next-line: typedef
  createChart() {
    const ctx = document.getElementById('myChart');
    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: this.data,
    });
  }
}
