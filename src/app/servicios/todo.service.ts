import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TaskI, TaskI2} from '../modelos/taks.interface'


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<TaskI>;
  private citCollection: AngularFirestoreCollection<TaskI2>
  private todos: Observable<TaskI[]>;
  private cit: Observable<TaskI2[]>;

  constructor(db:AngularFirestore) {

  this.todosCollection = db.collection<TaskI> ('todos');
  this.todos = this.todosCollection.snapshotChanges().pipe(map(
  actions => {
   return actions.map(a =>{
 const data = a.payload.doc.data();
 const id = a.payload.doc.id;
return {id , ...data};

   } );

  }  
  ));


this.citCollection = db.collection<TaskI2>('cit');
this.cit = this.citCollection.snapshotChanges().pipe(map(
actions =>{
return actions.map(b =>{

const data2 = b.payload.doc.data();
const id2 = b.payload.doc.id;
return {id2, ...data2};


});





}




));

   }

getTodos(){

return this.todos;

}

getTodo (id : string) {

return this.todosCollection.doc<TaskI>(id).valueChanges();


}

updateTodo (todo: TaskI, id: string) {
return this.todosCollection.doc(id).update(todo);
}

addTodo(todo:TaskI){

return this.todosCollection.add(todo);
}


removeTodo(id:string ){

return this.todosCollection.doc(id).delete();


}


getCits(){
return this.cit;


}

getCit (id2 : string) {

  return this.citCollection.doc<TaskI2>(id2).valueChanges();
  
  
  }


  updateCit (cit: TaskI2, id2: string) {
    return this.citCollection.doc(id2).update(cit);
    }

    addCit(cit:TaskI2){

      return this.citCollection.add(cit);
      }



}
