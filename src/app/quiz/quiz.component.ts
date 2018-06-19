import { Component, OnInit, ViewChild, Input} from '@angular/core';

import { Question } from '../question';

import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedQuestions: Question[] = [];
  start = false;
  question: Question;
  i = 0;
  j = 1;
  correctOption = 0;
  wrongOption = 0;
  numberOfQuestions;
  correct = 0;
  progress = 0;
  timeLeft = 10;
  interval;
  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }

  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
    this.getSelectedQuestions();
  }

  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(selected => {
      this.selectedQuestions = selected.selected;
      this.question = this.selectedQuestions[0];
      this.numberOfQuestions = this.selectedQuestions.length;
      this.getPercentage(this.j, this.numberOfQuestions);
    });
  }

  checkChoice(isTrue: boolean, element: HTMLInputElement) {
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

  getPercentage(j: number, numberOfQuestions: number) {
    this.progress = (j / numberOfQuestions) * 100;
  }




  startTimer() {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.timeLeft = 0;
        }
      }, 1000);
    }



}
