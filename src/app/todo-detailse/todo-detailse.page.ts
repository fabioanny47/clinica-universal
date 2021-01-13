import { Component, OnInit } from '@angular/core';
import {TaskI2} from '../modelos/taks.interface'
import {TodoService} from '../servicios/todo.service'
import {ActivatedRoute} from '@angular/router'
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-todo-detailse',
  templateUrl: './todo-detailse.page.html',
  styleUrls: ['./todo-detailse.page.scss'],
})
export class TodoDetailsePage implements OnInit {

 

  cit: TaskI2 = {

   doctor:'',
    
    fecha:'',
    };

citId = null;


  constructor(
    private route: ActivatedRoute, private nav: NavController,
    private todoService: TodoService, private loadingController: LoadingController) { }

ngOnInit() {
  

  this.citId= this.route.snapshot.params['id2'];
  if(this.citId){
  this.loadCit();
  
  }

  }
  


  async loadCit(){
    const loading = await this.loadingController.create({
    message: 'cargando...'


});  

await loading.present();
this.todoService.getCit(this.citId).subscribe(res =>{
loading.dismiss();
this.cit = res ; 

});

}
async saveTodo(){

  const loading = await this.loadingController.create({
    message: 'guardando...'
    
    
    });
await loading.present();

if(this.citId){
this.todoService.updateCit(this.cit, this.citId).then(()=>{
loading.dismiss();
this.nav.navigateForward('/tab2');


});

} else{
  
  this.todoService.addCit(this.cit).then(()=>{
    loading.dismiss();
    this.nav.navigateForward('/tab2');

  });
}

}


}
