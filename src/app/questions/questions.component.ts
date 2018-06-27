import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { QuestionService } from '../question.service';

interface Test {
  name: string;
  url: string;
}


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],

})



export class QuestionsComponent implements OnInit {
  sourceQuestions: Question[] = [];
  selectedQuestions: Question[] = [];
  tests;
  selectedTest: Test;

  constructor(private questionService: QuestionService) {
    this.tests = [
      {name: 'ICND 1', url: 'assets/data/list-questions.json'},
      {name: 'ICND 2', url: 'assets/data/list-questions2.json'}
    ];
    }

  ngOnInit() {
    this.questionService.addDefaultSelected(this.selectedQuestions);
  }

  addSelected() {
    this.questionService.addSelectedQuestions(this.selectedQuestions);
  }

  getQuestions():  Question[] {
    this.questionService.getQuestions().subscribe(questions => this.sourceQuestions = questions);
    return this.sourceQuestions;
  }

  setQuestionsUrl(url) {
    this.questionService.setQuestionsUrl(url);
    this.getQuestions();
  }


}
