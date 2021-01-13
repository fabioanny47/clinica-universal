import { Component } from '@angular/core';
import {Router} from '@angular/router';
import{AuthService} from '../servicios/auth.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

email:string
password:string


constructor(private authservice: AuthService, public router: Router) {}

ngOnInit () {} 

onSubmitLogin ( ) {

this.authservice.login(this.password, this.email).then(res =>{  
this.router.navigate(['/hist']);
}).catch(err => alert ('los datos son incorrectos o no existe el usuario'))


}

}
