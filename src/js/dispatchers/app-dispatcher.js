import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register( callback ) {
  return flux.register( callback );
}

export function dispatch( actionType, action ){
  flux.dispatch( actionType, action );
}
