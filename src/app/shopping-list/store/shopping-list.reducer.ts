import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from "../store/shopping-list.actions";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 20),
  ]
};

export function shoppingListReducer(state = initialState, action:ShoppingListActions.AddIngridient ) {//Copiarmos el estado actual  con  otro objeto y lepasamos el metodo de la clase action
  switch (action.type) {//examinar que tipo de accion se realiza
    case ShoppingListActions.ADD_INGREDIENT: //Usar la constante del archivo action
    //state.ingredients.push() NUNCA SE ACTUALIZA EL ESTADO ACTUAL O ANTERIOR
      return {//RETORMANOS EL NUEVO ESTADO 
        ...state,//Operador spread:copida las propiedades del array anterior y añade nuevas a un nuveo array
        ingredients: [...state.ingredients, action.payload]//solo actualizamos la propiedad que quiero cambiar y añadimos esa propiedad del metoda de la clase Action
      };
  }
}
