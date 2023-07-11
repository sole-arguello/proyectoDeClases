import { Pipe, PipeTransform } from '@angular/core';

// <h1>{{employee}}</h1>
@Pipe({
  name: 'employee'
})
export class EmployeePipe implements PipeTransform {
  //value con el tipo de dato que recibe : devuelve el mismo tipo que recibe
  transform(value: string): string {
     //recibe: COSTUMER_SUPPORT devuelve: COSTUMER SUPPORT

    return value.split('_').join(' ');
  }

}
