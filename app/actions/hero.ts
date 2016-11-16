import { Hero } from './../hero';
import { Action } from '@ngrx/store';

export class HeroActions {
    loadHeroes(): Action {
        return {
            type: 'Load Heroes'
        }
    }

    loadHeroesSuccess(heroes: Hero[]): Action {
        return {
            type: 'Load Heroes Success',
            payload: heroes
        }
    }
}