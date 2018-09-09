import { Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { ResultService } from '../result.service';
import { Question } from '../question';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { QuestionService } from '../question.service';

interface Result {
  aem: String;
  correct: number;
  numberOfQuestions: number;
  score: number;
  test;

}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit, OnDestroy {

  results: Result;
  studentAem: String = '';
  selectedQuestions: Question[] = [];
  question: Question;
  index = 0;
  correctOption = 0;
  wrongOption = 0;
  numberOfQuestions;
  correct = 0;
  progress = 0;
  testTime: number;
  timeLeft: number;
  interval;
  counter = 0;

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }

  constructor(
    private resultService: ResultService,
    private questionService: QuestionService,
    private router: Router,
    config: NgbCarouselConfig,
  ) {
    config.interval = 100000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  @HostListener('window:beforeunload', ['$event'])
  doSomething($event) {
    $event.returnValue = 'Your data will be lost!';
  }


  ngOnInit() {
    setTimeout(() => {
      this.getSelectedQuestions();
      this.getAem();
      console.log('student aem:', this.studentAem);
      console.log('time', this.timeLeft);
    }, 1);

  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(res => {
      this.selectedQuestions = res.selected;
      this.testTime = res.testTime;
      this.question = this.selectedQuestions[this.index];
      this.numberOfQuestions = this.selectedQuestions.length;
      this.getPercentage(1 + this.index, this.numberOfQuestions);
      this.startTimer();
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

  setUserChoice(choice, element: HTMLInputElement) {
    if (element.checked) {
      choice.isSelected = !choice.isSelected;
    } else {
      choice.isSelected = !choice.isSelected;
    }
    console.log(choice.isSelected);
  }

  getNextQuestion() {
    if (this.correctOption === this.question.numberOfAnswers && this.wrongOption === 0) {
      this.correct++;
      this.question.isCorrect = true;
    } else {
      this.question.isCorrect = false;
    }
    this.index++;
    this.getPercentage(1 + this.index, this.numberOfQuestions);
    this.question = this.selectedQuestions[this.index];
    this.correctOption = 0;
    this.wrongOption = 0;
    if (this.index === this.numberOfQuestions) {
      this.endTest();
    }
  }

  addResults() {
    this.results = {
      aem: this.studentAem,
      correct: this.correct,
      numberOfQuestions: this.numberOfQuestions,
      score: (this.correct / this.numberOfQuestions),
      test: this.selectedQuestions
    };
    this.resultService.setResults(this.selectedQuestions, this.correct);
    this.resultService.addResults(this.results);
  }

  getPercentage(currentIndex: number, numberOfQuestions: number) {
    this.progress = (currentIndex / numberOfQuestions) * 100;
  }

  startTimer() {
      this.timeLeft = this.testTime * 60;
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else if (this.timeLeft === 0) {
          this.timeLeft = -1;
          this.endTest();
        }
      }, 1000);
    }

  getAem() {
    this.studentAem = this.questionService.getAem();
    if (!this.studentAem) {
      this.aemNotSet();
    }
  }


  endTest() {
    this.addResults();
    this.router.navigate(['/details']);
  }

  aemNotSet() {
    this.router.navigate(['/']);
  }







}
