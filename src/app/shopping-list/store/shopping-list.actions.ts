import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT' //creamos una variable que deberia tener el mismo nombre del identificador

//Generamos el nombre de nuestra accion e implementamos la intervaz Action
//La interfaz Action puede tener dos propiedades:type y payload
export  class AddIngridient  implements Action{
readonly type= ADD_INGREDIENT //es el identificado da la accion, readonly no permite cambiar este tipo desde otro lugar

//Permite recibir un argumento publico desde otro componente
constructor(public payload:Ingredient){}

}
