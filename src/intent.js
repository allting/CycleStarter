import {Observable} from 'rx';

function intent(sources){
  return {
    hello$ : Observable.just("Hello Cycle.js"),
    world$ : Observable.just(" and World")  
  };
}

export default intent;
