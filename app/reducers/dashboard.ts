import { Action } from '@ngrx/store';
import { Hero } from './../hero';
import * as dashboard from './../actions/dashboard';

export type DashboardState = Hero[];
const initialState: DashboardState = [];

export function reducer(state = initialState, action: Action) {
    console.log("in reducer", action);
    switch(action.type) {
        case dashboard.DashboardActions.LOAD_TOP_HEROES_SUCCESS: {
            return action.payload;
        }
    }    
}
