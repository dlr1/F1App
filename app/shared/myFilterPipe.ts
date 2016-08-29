import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterPipe'})
export class MyFilterPipe implements PipeTransform {
  transform(data: Array<any>, columns: Array<any>, filterValue:string): Array<any> {
     return data;
  }
}