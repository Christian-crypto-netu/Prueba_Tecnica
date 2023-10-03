import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  jsonData: any[] = [];
  selectedSeries: any | null = null;


  constructor(private http: HttpClient) {}
  

  ngOnInit(): void {
    this.http.get('./assets/sample.json').subscribe((data: any) => {
      // Filtrar y ordenar los resultados
      const filteredResults = data.entries
        .filter((entry: any) => entry.releaseYear >= 2010 && entry.programType === 'series')
        .sort((a: any, b: any) => a.title.localeCompare(b.title));
      
      // Tomar los primeros 20 resultados
      this.jsonData = filteredResults.slice(0, 20);
    });
  }

  onMouseOver(index: number) {
    // Aplicar efecto de reducción de opacidad y borde blanco al posicionar el mouse sobre el resultado
    document.getElementsByClassName('result-box')[index].classList.add('hovered');
  }
  
  onMouseOut(index: number) {
    // Remover efecto de reducción de opacidad y borde blanco al quitar el mouse del resultado
    document.getElementsByClassName('result-box')[index].classList.remove('hovered');
  }
  
  openPopup(series: any) {
    // Abrir un popup mostrando la información completa de la serie seleccionada
    this.selectedSeries = series;
  }
  closePopup() {
    this.selectedSeries = null;
  }
    
  

  }
