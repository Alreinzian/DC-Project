import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  publishers =[
    {
      id:'DC Comics',
      desc:'DC - Comics'

    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    }
  ];

  heroe: Heroe={
    superhero:"",
    alter_ego:"",
    characters:"",
    first_appearance:"",
    publisher:Publisher.DCComics,
    alt_img:"",
     
    
  }

  constructor(
    private heroesService:HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog:MatDialog){}


  ngOnInit(): void {
    if(!this.router.url.includes("edit")){
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.heroesService.getHeroePorId(id)))
    .subscribe( heroe =>this.heroe = heroe);
  }


  save(){
   if(this.heroe.superhero.trim().length ===0){
    return;
   }

   if(this.heroe.id){
    this.heroesService
    .updateHeroe(this.heroe)
    .subscribe(heroe =>this.mostrarSnakbar("Registro Actulizando "));

   }else{

     this.heroesService
     .addHeroe(this.heroe)
     .subscribe(heroe=>{
     this.router.navigate(['/heroes/edit',heroe.id]);
     this.mostrarSnakbar('Registro creado');
    })
   }
  

  }


  delete(){
    const dialog = this.dialog.open(ConfirmarComponent,{
      width:'250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        
        if(result){
          this.heroesService.deleteHeroe(this.heroe.id!)
          .subscribe(resp=>{
            this.router.navigate(['/heroe/list']);
      
          });
    }
  }
  )



  }

  mostrarSnakbar(mensaje: string){
    this.snackBar.open(mensaje, 'ok!',{
      duration:2500

    });

  }
}
