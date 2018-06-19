import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { OnDestroy } from '@angular/core';
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


  constructor(private questionService: QuestionService) {  }

  ngOnInit() {
    this.questionService.addDefaultSelected(this.selectedQuestions);
    this.questionService.getQuestions().subscribe(questions => this.sourceQuestions = questions);

  }

  setSelected() {
    this.questionService.setSelectedQuestions(this.selectedQuestions);

  }

  getQuestions():  Question[] {
    this.questionService.getQuestions().subscribe(questions => this.sourceQuestions = questions);
    return this.sourceQuestions;
  }



}
