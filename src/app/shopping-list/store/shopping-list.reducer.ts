import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from "../store/shopping-list.actions";

//Estado inicial
const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 20),
    new Ingredient('Queso', 4),
  ]
};


//Copiamos el estado actual de la variable state  en otro objeto y le pasamos el metodo de la clase action
//state tendra el estado anterio por primera vez que es inicialidado
export function shoppingListReducer(state = initialState, action:ShoppingListActions.AddIngridient ) {//ShoppingListActions es nuestra clase Acction
  switch (action.type) {//validar  que tipo de accion se realiza
    case ShoppingListActions.ADD_INGREDIENT: // Usar la accion "ADD_INGREDIENT" usando la  constante del archivo action
    //state.ingredients.push()NO SE HACE: NUNCA SE ACTUALIZA EL ESTADO ACTUAL O ANTERIOR Directamente
      return {//RETORMANOS EL NUEVO ESTADO
        ...state,//copida las propiedades del array anterior y añade nuevas a un nuveo array
        ingredients: [...state.ingredients, action.payload]//solo actualizamos las propiedad del objeto state que quiero cambiar y añadimos la propiedad payload del clase Action
      };
     default: return state//Asingar el estado inicial y devolverlo sin cambios antes añadir nuevos elementos
  }
}
