import { HeroEffects } from './effects/hero';
import { EffectsModule } from '@ngrx/effects';
import { HeroActions } from './actions/hero';
import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { AppRoutingModule }     from './app-routing.module';
import { StoreDevtoolsModule }  from '@ngrx/store-devtools';
import { StoreModule }          from '@ngrx/store';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';
import reducer from './reducers/index';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(HeroEffects)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [ HeroService, HeroActions ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }