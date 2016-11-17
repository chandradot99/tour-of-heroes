import { HeroesComponent } from './heroes.component';
import * as dashboard from './actions/dashboard';
import { Store } from '@ngrx/store';
import { AppState } from './reducers/index';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit{ 
  topHeroes$: Observable<any>;

  constructor(private heroService: HeroService,
              private store: Store<AppState>) {
    this.topHeroes$ = this.store.select('dashboardHeroes');
    // the above topHeroes$ observable can also be assigned by AppState 'heroes'.
    // since I have implemented 'heroes' and 'dashboardHeroes' differently for better understanding
    // therefore i am using 'dashboardHeroes'.
  }

  ngOnInit() {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes.slice(1,5));
    this.store.dispatch(new dashboard.LoadTopHeroesAction())
  }

}