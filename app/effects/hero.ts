import { Injectable } from '@angular/core';
import { HeroService } from './../hero.service';
import { Effect, Actions } from '@ngrx/effects';
import { HeroActions } from './../actions/hero';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/switchMap';

@Injectable()
export class HeroEffects {
    constructor(private update$: Actions, 
                private heroActions: HeroActions,
                private heroService: HeroService ){ }

  @Effect() loadHeroes$ = this.update$
      .ofType(this.heroActions.loadHeroes().type)
      .switchMap(() => this.heroService.getHeroes())
      .map((heroes) => this.heroActions.loadHeroesSuccess(heroes))
}