import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import{ DatosService } from '../servicios/datos.service';
import {TaskI} from   '../modelos/taks.interface';
import {TodoService} from '../servicios/todo.service';





export interface dato {
id : string;
documento : string;
historia : string;
nombre : string;
img : string;
}

@Component({
  selector: 'app-histo',
  templateUrl: './histo.page.html',
  styleUrls: ['./histo.page.scss'],
})
export class HistoPage implements OnInit {


todos: TaskI[]=[];
textoBuscar:'';





  public datoRooms : any [];

 constructor(private todoService: TodoService, public authservice : AuthService, public datoservice : DatosService ) { }


 Onlogout (){

this.authservice.logout();
}


  ngOnInit() {

this.todoService.getTodos().subscribe(res=> this.todos= res);













 this.datoservice.getDatoRooms().subscribe(datos =>{

datos.map(dato => {

const data : dato = dato.payload.doc.data() as dato ;

data.id = dato.payload.doc.id;


})


 })


 

 

  }

buscarHistoria(event){
const texto = event.target.value;
this.textoBuscar = texto;



}




}
