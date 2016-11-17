import * as fromHeroList from './hero-list';
import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

export interface AppState {
    heroes: fromHeroList.HeroListState;
}

export default compose(combineReducers) ({heroes: fromHeroList.reducer});