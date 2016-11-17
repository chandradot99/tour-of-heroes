import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as dashboard from './../actions/dashboard';
import { HeroService } from './../hero.service';

@Injectable()

export class DashboardEffects {
    constructor(private update$: Actions,
                private heroService: HeroService) {}
            

    @Effect() loadTopHeroes$ = this.update$
        .ofType(dashboard.DashboardActions.LOAD_TOP_HEROES)
        .switchMap(() => this.heroService.getHeroes())
        .map((heroes) => new dashboard.LoadTopHeroesActionSuccess(heroes))


}

