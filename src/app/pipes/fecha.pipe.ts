import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(getFecha: string): unknown {
    let fecha:Date = new Date(getFecha);
    // console.log(fecha);
    getFecha = fecha.getFullYear() + "-" + ("0" + (fecha.getMonth() + 1)).slice(-2) + "-" + ("0" + fecha.getDate()).slice(-2) + " 00:00:00.0";
    return getFecha;
  }

}
