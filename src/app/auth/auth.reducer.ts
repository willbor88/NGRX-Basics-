//import { State } from '@ngrx/store';
import { User } from "./user.model";
import * as AuthActions from "./auth.actions";
export interface State{
  user:User
}


const initialState={

  user:null
}


export function authReducer(state=initialState, action:AuthActions.AuthActionsGenerals){

switch(action.type){

case AuthActions.LOGIN:

const user= new User
(action.payload.email,
 action.payload.UserId,
 action.payload.token,
 action.payload.tokenExpirationDate)
  return {
    ...state,
    user:user
  }

case AuthActions.LOGOUT:
  return {
    ...state,
    user:null
  }

default:
return state
}

}
