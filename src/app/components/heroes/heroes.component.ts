import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:any[]=[];
  constructor(  private _heroesService:HeroesService,
                private _router:Router) {
    this.heroes=_heroesService.get_heroes();
   }

  ngOnInit() {
    console.log(this.heroes);
  }

  verHeroe(ind:number){
    this._router.navigate(['/heroe',ind]);
  }

}
