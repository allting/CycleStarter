import {div, h1} from '@cycle/dom';

function view(sinks$){
  return sinks$.map(sink=>
    div([
      h1(sink)
    ])
 );
};

export default view;
