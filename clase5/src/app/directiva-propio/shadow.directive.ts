import { Directive, ElementRef } from '@angular/core';

// <h1 appShadow>hola</h1>
@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
//recibo una referencia al html a la cual agrego la directiva
  constructor(private elem: ElementRef) { 
    console.log(elem)
    //APLICO EL SHADOW siendo nativeElement ref de loque veo en consola
    elem.nativeElement.style.filter = 'drop-shadow(1px 1px 1px red'
  }

}
