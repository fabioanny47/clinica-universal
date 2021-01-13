import { Component, OnInit } from '@angular/core';
import {TaskI} from '../modelos/taks.interface'
import {TodoService} from '../servicios/todo.service'
import {ActivatedRoute} from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-todo-detailss',
  templateUrl: './todo-detailss.page.html',
  styleUrls: ['./todo-detailss.page.scss'],
})
export class TodoDetailssPage implements OnInit {
todo: TaskI = {

nombre:'',

med:'',

 
documento: '',
 

historia:'',

img:'',



};

todoId = null;

  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController
  ) { }

  ngOnInit() {
this.todoId= this.route.snapshot.params['id'];
if(this.todoId){
this.loadTodo();

}

  }

  async loadTodo(){
const loading = await this.loadingController.create({
message: 'cargando...'


});
await loading.present();
this.todoService.getTodo(this.todoId).subscribe(res =>{
loading.dismiss();
this.todo = res ; 

});


}
async saveTodo(){

  const loading = await this.loadingController.create({
    message: 'guardando...'
    
    
    });
await loading.present();

if(this.todoId){
this.todoService.updateTodo(this.todo, this.todoId).then(()=>{
loading.dismiss();
this.nav.navigateForward('/hist');


});

} else{
  
  this.todoService.addTodo(this.todo).then(()=>{
    loading.dismiss();
    this.nav.navigateForward('/hist');

  });
}

}


  onRemove(idTodo: string){
this.todoService.removeTodo(idTodo);
this.nav.navigateForward('/hist');

}


}
 