import { Pipe, PipeTransform } from '@angular/core';

import { TaskI } from '../modelos/taks.interface';


@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(doc:TaskI[],texto: string): TaskI[] {

if(texto.length === 0 ){return doc;}
    
texto = texto.toLocaleLowerCase();

return doc.filter( taskI=> {

return taskI.documento.includes(texto)
|| taskI.nombre.toLocaleLowerCase().includes(texto);

});



  }

}
