import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Question } from './question';
import { QUESTIONS } from './question-list';
import { SELECTED } from './selected-list';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class QuestionService {
  // questions = QUESTIONS;
  questions: Question[];
  selected: Question[] = [];
  questionsUrl = 'assets/data/list-questions.json';
  constructor(private http: HttpClient) { }

 /*getQuestions() {
    return this.questions;
}*/
  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  getSelectedQuestions() {
    return this.selected;
  }

  setSelectedQuestions(selectedQuestions: Question[]) {
    this.selected = selectedQuestions;
  }

}
