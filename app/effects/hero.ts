import { Injectable } from '@angular/core';
import { HeroService } from './../hero.service';
import { Effect, Actions } from '@ngrx/effects';
import { HeroActions } from './../actions/hero';
import 'rxjs';

@Injectable()
export class HeroEffects {
    constructor(private update$: Actions, 
                private heroActions: HeroActions,
                private heroService: HeroService ){}
     
  @Effect() loadHeroes$ = this.update$
      .ofType(this.heroActions.loadHeroes().type)
      .map(x => console.log('ashish'));
}