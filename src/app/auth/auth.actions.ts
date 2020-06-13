import { Action } from "@ngrx/store";


export const LOGIN= 'LOGIN'
export const LOGOUT='LOGOUT'



export class Login implements Action {

readonly type = LOGIN

constructor (
public payload:
  {
 email: string,
 UserId: string,
 token: string,
tokenExpirationDate: Date,
}){}

}
export class Logout implements Action{//No pasamos data al State
  readonly type = LOGOUT
}

export type AuthActionsGenerals = Login|Logout
