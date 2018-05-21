import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { QUESTIONS } from '../question-list';
import { Question } from '../question';

import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedQuestions: Question[];
  question: Question;
  i = 0;
  j = 1;
  correctOption = 0;
  correct = 0;
  wrongOption = 0;
  numberOfQuestions;
  progress = 0;

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }




  constructor(private questionService: QuestionService) {


   }

  ngOnInit() {
    this.selectedQuestions = this.questionService.getSelectedQuestions();
    this.question = this.selectedQuestions[0];
    this.numberOfQuestions = this.selectedQuestions.length;
    this.getPercentage(this.j, this.numberOfQuestions);

  }
  getNextQuestion() {
    if (this.correctOption === this.question.numberOfAnswers && this.wrongOption === 0) {
      this.correct++;
      this.question.isCorrect = true;
    } else {
      this.question.isCorrect = false;
    }
    this.i++;
    this.j++;
    this.getPercentage(this.j, this.numberOfQuestions);
    this.question = this.selectedQuestions[this.i];

    this.correctOption = 0;
    this.wrongOption = 0;
  }
  getPercentage(i: number, numberOfQuestions: number) {

    this.progress = (i / numberOfQuestions) * 100;

  }


  onClick(isTrue: boolean, element: HTMLInputElement) {
    // when checking
    if (element.checked) {
      if (isTrue === true) {
        this.correctOption++;

      } else {
        this.wrongOption++;

      }
    } else {
      if (isTrue === true) {
        this.correctOption--;
      } else {
        this.wrongOption--;
      }
    }
  }

}
