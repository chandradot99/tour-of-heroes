import { Hero } from './../hero';
import { Action } from '@ngrx/store';

export const DashboardActions = {
    LOAD_TOP_HEROES: 'load top heroes',
    LOAD_TOP_HEROES_SUCCESS: 'loap top heroes success'
}

export class LoadTopHeroesAction implements Action {
    type = DashboardActions.LOAD_TOP_HEROES;

    constructor() {} 
}

export class LoadTopHeroesActionSuccess implements Action {
    type = DashboardActions.LOAD_TOP_HEROES_SUCCESS;
    constructor(public payload: Hero[]) {}
}