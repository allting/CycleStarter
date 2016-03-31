import {Observable, Subject} from 'rx';
import CycleDOM from '@cycle/dom';
import intent from './intent';
import model from './model';
import view from './view';

const { h1, div, makeDOMDriver } = CycleDOM;

function main(sources) {
  const actions = intent(sources);
  const state$ = model(actions);
  const sinks$ = view(state$);

  return {
    DOM: sinks$
  };

/*
  return {
    DOM: Observable.of(
      h1("Hello World")
    )
  };
*/
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
