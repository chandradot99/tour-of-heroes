import * as fromHeroList from './hero-list';
import * as fromDashboard from './dashboard';
import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
import {combineReducers} from '@ngrx/store';

export interface AppState {
    heroes: fromHeroList.HeroListState;
    dashboardHeroes: fromDashboard.DashboardState;
}

export default compose(combineReducers) ({
    heroes: fromHeroList.reducer,
    dashboardHeroes: fromDashboard.reducer
});