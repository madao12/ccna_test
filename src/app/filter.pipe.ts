import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'filterID'})
export class FilterPipe implements PipeTransform {

    transform(questions: any, idSearch: string): any[] {

        if (!questions || !idSearch) {
          return questions;
      }
      // return questions.filter(question => question.id.indexOf(areaname) !== -1);
      return questions.filter(question => question.id === idSearch);
    }
}
