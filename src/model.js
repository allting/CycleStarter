import {Observable} from 'rx';

function model(actions){
  return actions.hello$.combineLatest(actions.world$);
}

export default model;
