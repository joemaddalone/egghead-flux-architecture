import { Dispatcher } from 'flux'

const flux = new Dispatcher()

export function register(callback){
  return flux.register(callback)
}

export function dispatch(actionType, action = {}){
  if(!actionType){
    throw new Error('missing type')
  }
  flux.dispatch(actionType, ...action)
}
