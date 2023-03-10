import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import {
  CounterActionDecrement,
  CounterActionIncrement,
  CounterActionReset,
} from './counter.actions';
import { CounterState } from './counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
})
export class CounterComponent {
  @Select(CounterState.selectStateData)
  count$?: Observable<number>;

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(new CounterActionIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterActionDecrement());
  }

  reset() {
    this.store.dispatch(new CounterActionReset());
  }
}
