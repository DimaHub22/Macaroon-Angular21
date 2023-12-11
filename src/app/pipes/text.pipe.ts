import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: string): string {

    const maxlength: number = 95;
    if(value.length < maxlength){
      return value
    }else{
      return value.slice(0, maxlength) + '...'
    }

  }

}
