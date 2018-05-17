import { Component, OnInit } from '@angular/core';
import { Question } from '../question';

import { QuestionService } from '../question.service';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],

})
export class QuestionsComponent implements OnInit {
  sourceQuestions: Question[];
  selectedQuestions: Question[];



  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
    // this.questionService.getQuestions().then(questions => this.sourceQuestions = questions);
    this.sourceQuestions = this.questionService.getQuestions();
    this.selectedQuestions = this.questionService.getSelectedQuestions();
  }

  setSelectedQuestions() {


    this.questionService.setSelectedQuestions(this.selectedQuestions);
  }


}
