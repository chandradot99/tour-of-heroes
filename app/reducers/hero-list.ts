import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { HeroActions } from './../actions/hero';
import { Hero } from './../hero';

export type HeroListState = Hero[];
const initialState: HeroListState = [];


export function reducer(state = initialState, action: Action): HeroListState {
    var heroActions = new HeroActions;
    switch (action.type){
        case 'Load Heroes Success': {
            return action.payload;
        }
    }

}