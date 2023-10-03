import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  jsonData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get('./assets/sample.json').subscribe(data => {
        this.jsonData = data;
      })
  }
}
