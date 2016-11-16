import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import { HeroActions } from './../actions/hero';
import { Hero } from './../hero';

export type HeroListState = Hero[];
const initialState: HeroListState = [];


