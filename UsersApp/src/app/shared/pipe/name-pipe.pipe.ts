import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: any, ...args): any {
    let splitted = value.split(" ");
    let newName ="";
    for (let i of splitted) {
      newName += i[0].toUpperCase( )
    }


    return newName;
  }

}
