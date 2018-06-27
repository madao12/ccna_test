import { Component, OnInit} from '@angular/core';
import { ResultService } from '../result.service';
import { Question } from '../question';


import { QuestionService } from '../question.service';

interface Result {
  aem: String;
  correct: number;
  numberOfQuestions: number;
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {
  results: Result;
  studentAem: String;
  selectedQuestions: Question[] = [];
  start = false;
  setAem = false;
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
  counter = 0;
  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }

  constructor(private resultService: ResultService, private questionService: QuestionService) {
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
      console.log(this.selectedQuestions);
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
    if (this.i === this.numberOfQuestions) {
      this.addResults();
    }
  }

  addResults() {
    this.results = {
      aem: this.studentAem,
      correct: this.correct,
      numberOfQuestions: this.numberOfQuestions
    };
    this.resultService.addResults(this.results);
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
