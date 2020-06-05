import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  //Declarar un observable para luego recibir la respuesta del select
  //El observable devuelve recibe un obeto con la propiedad ingredients cuyo valor es un array
  someIngredients:Observable<{ingredients:Ingredient[]}>
  //ingredients: Ingredient[];
 // private subscription: Subscription;

  constructor(
    //private slService: ShoppingListService,
    //private loggingService: LoggingService,
    //Definir el tipo de objeto exactamente que esperamos del reducer ya que el reducer pertenece al stado global(Store)
    private store:Store<{shoppingList:{ingredients:Ingredient[]}}>
  ) {}

  ngOnInit() {
//Consumir data del estado global(Store)
//Select devuelve un observable
    this.someIngredients= this.store.select('shoppingList')//Recibe la data que retorna la funcion Reducer:En este caso un array.
    // this.ingredients = this.slService.getIngredients();
    // this.subscription = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );

   // this.loggingService.printLog('Hello from ShoppingListComponent ngOnInit!');
  }

  onEditItem(index: number) {
    //this.slService.startedEditing.next(index);
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }
}
