import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT' //creamos una variable que deberia tener el mismo nombre del identificador

export  class AddIngridient  implements Action{//Generamos el nombre de nuestra accion e implementamos la intervaz Action
readonly type= ADD_INGREDIENT //es el identificado da la accion, readonly no permite cambiar este tipo desde otro logar
payload:Ingredient

}