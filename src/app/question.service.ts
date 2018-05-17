import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from './question';
import { QUESTIONS } from './question-list';
import { SELECTED } from './selected-list';


@Injectable()
export class QuestionService {
  questions = QUESTIONS;
  selected: Question[] = [];
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.questions;
}

  getSelectedQuestions() {
    return this.selected;


  }

  setSelectedQuestions(questions: Question[]) {
    this.selected = questions;
  }

}
