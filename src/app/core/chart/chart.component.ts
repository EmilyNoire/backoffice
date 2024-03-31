import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { APIService } from '../../shared/services/apiservice.service';
import { APIProduct } from '../../shared/interfaces/product';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('acquisitions') private chartRef!: ElementRef;

  constructor(private apiService: APIService) {}

  categories: string[] = [];

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.apiService.getStoreProducts().subscribe(data => {
      this.categories = data.map((item: APIProduct) => {
        let category: string = item.data.category ? item.data.category.trim() : '';
        category = category.replace(/^\d+$/, '');
        category = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
        return category || 'Other';
      });
      const ctx = this.chartRef.nativeElement.getContext('2d');
      const uniqueValues = [...new Set(this.categories)];
      const repetitions = uniqueValues.map(value => this.categories.filter(item => item === value).length);
      if (ctx) {
        const acquisitions = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: uniqueValues,
            datasets: [{
              label: 'PolarArea Graphic',
              data: repetitions,
              backgroundColor: ['#004A5F', '#00818E', '#80BFC4']
            }]
          },
        });
      }   
    });
    
  }
}