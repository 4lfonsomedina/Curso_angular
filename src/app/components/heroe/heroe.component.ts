import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe:any[]=[];
  constructor(  private _ActivatedRoute:ActivatedRoute,
                private _heroesService:HeroesService,
                private _router:Router) {
    this._ActivatedRoute.params.subscribe( params =>{
      console.log(params.id);
      this.heroe=_heroesService.get_heroe(params.id);
    })
  }

  ngOnInit() {
  }

  regresarHeroes(){
    this._router.navigate(['/heroes']);
  }
}
