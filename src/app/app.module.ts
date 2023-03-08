import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
//import { reducers, metaReducers } from './reducers';
import { counterReducer } from './state/reducers/counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { divisionReducer } from './state/reducers/divisionReducer';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, blubb: divisionReducer }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
