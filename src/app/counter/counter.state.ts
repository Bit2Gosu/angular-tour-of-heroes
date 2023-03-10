import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  CounterActionDecrement,
  CounterActionIncrement,
  CounterActionReset,
} from './counter.actions';

export interface CounterStateModel {
  count: number;
}

@State<CounterStateModel>({
  name: 'counter',
  defaults: {
    count: 0,
  },
})
@Injectable()
export class CounterState {
  @Selector()
  static selectStateData(state: CounterStateModel) {
    return state.count;
  }

  @Action(CounterActionIncrement)
  increment(ctx: StateContext<CounterStateModel>) {
    const state: CounterStateModel = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1,
    });
  }

  @Action(CounterActionDecrement)
  decrement(ctx: StateContext<CounterStateModel>) {
    const state: CounterStateModel = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count - 1,
    });
  }

  @Action(CounterActionReset)
  reset(ctx: StateContext<CounterStateModel>) {
    const state: CounterStateModel = ctx.getState();
    ctx.setState({
      ...state,
      count: 0,
    });
  }
}
