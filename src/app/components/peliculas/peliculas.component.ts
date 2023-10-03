import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  jsonData: any[] = [];
  selectedMovies: any | null = null;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
      this.httpClient.get('./assets/sample.json').subscribe((data: any) => {
      
        const filteredResults = data.entries
        .filter((entry : any) => entry.releaseYear >= 2010 && entry.programType === 'movie')
        .sort((a: any, b: any) => a.title.localeCompare(b.title));

        this.jsonData = filteredResults.slice(0, 20);

      });
  }

  onMouseOver(index: number){
    document.getElementsByClassName('result-box')[index].classList.add('hovered');
  }

  onMouseOut(index: number){
    document.getElementsByClassName('result-box')[index].classList.remove('hovered');
  }
  
  openPopup(movie: any){
    this.selectedMovies = movie;
  }

  closePopup(){
    this.selectedMovies = null;
  }

}
