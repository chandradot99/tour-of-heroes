import { AppState } from './reducers/index';
import { HeroActions } from './actions/hero';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]  
})

export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes$: Observable<any>;
  selectedHero: Hero;

  constructor(private heroService: HeroService, 
              private router: Router,
              private store: Store<AppState>,
              private heroActions: HeroActions) {
    this.heroes$ = this.store.select('heroes');
  }

  getHeroes(): void {
    // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    this.store.dispatch(this.heroActions.loadHeroes());
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}