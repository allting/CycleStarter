const { h1, div, makeDOMDriver } = CycleDOM;

function main(sources) {
  return {
    DOM: Rx.Observable.of(
      div([
        h1("Hello Cycle!")
      ])
    )
  };
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
