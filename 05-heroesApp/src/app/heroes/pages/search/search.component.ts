import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

    term: string ='';
    heroes: Heroe[]=[];
    heroeSelect: Heroe| undefined;

  constructor( private heroesService: HeroesService){}

  ngOnInit(): void {
   
  }
  searching(){
    this.heroesService.getSugerencias(this.term)
    .subscribe(heroes =>this.heroes=heroes);

  }
  optionSelect(event: MatAutocompleteSelectedEvent){
    if(!event.option.value){
      this.heroeSelect =undefined;
      return;
    }
   const heroe: Heroe=event.option.value;
   this.term = heroe.superhero;

  this.heroesService.getHeroePorId(heroe.id!)
  .subscribe( heroe=> this.heroeSelect= heroe);

  }


}
