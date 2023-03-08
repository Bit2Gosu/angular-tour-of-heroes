import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

export const initialState = 1;

export const divisionReducer: ActionReducer<number, Action> = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('divisionReducer -> increment', state);
    return state * 2;
  }),
  on(decrement, (state) => state / 2),
  on(reset, (state) => 0)
);
