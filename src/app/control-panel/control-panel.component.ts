import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { ResultService } from '../result.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




interface Result {
  aem: String;
  correct: number;
  numberOfQuestions: number;
  test: any;
  _id: String;
}

interface Test {
  name: String;
  url: String;
}



@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css'],
  providers: [ConfirmationService]
})


export class ControlPanelComponent implements OnInit {
  selectedQuestions: Question[] = [];

  tests;
  selectedTest: Test;
  results = [];
  testTime: number;
  i;
  j;
  scoreAvg = 0;
  scoreSum = 0;
  timeUp = -7200;
  order;
  reverse = false;
  constructor(
    private questionService: QuestionService,
    private confirmationService: ConfirmationService,
    private resultService: ResultService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.tests = [
      {name: 'ICND 1', url: 'assets/data/list-questions.json'},
      {name: 'ICND 2', url: 'assets/data/list-questions2.json'}
    ];

   }

  ngOnInit() {
    setTimeout(() => {
      this.getSelectedQuestions();
      this.getResults();
    }, 10);

    setInterval(() => {
      this.getResults();
    }, 10000);
    this.startUpTimer();
  }

  getResults() {
    this.resultService.getAllResults().subscribe(res => {
      this.results = res;
      this.resultAverage(this.results);

    });


  }
  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(res => {
      this.selectedQuestions = res.selected;
      this.testTime = res.testTime;
    });
  }

  removeResult(id) {
    this.resultService.removeResults(id).subscribe(res => {
      console.log('Deleted');
    });
  }




  removeAllResults() {
    for (let counter = 0; counter < this.results.length; counter++) {
      this.removeResult(this.results[counter]._id);
    }
  }

  resultAverage(results) {
    for (let counter = 0; counter < results.length; counter++) {
      this.scoreSum +=  (results[counter].studentResults.score);
    }
    this.scoreAvg = this.scoreSum / results.length;
    this.scoreSum = 0;
  }


  startUpTimer() {
    setInterval(() => {
        this.timeUp++;
    }, 1000);
  }

  resetTimer() {
    this.timeUp = -7200;
    console.log(this.timeUp);
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  editTest() {
    this.router.navigate(['/question']);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  openStudentResult(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openQuestionDetails(Qcontent) {
    this.modalService.open(Qcontent, { size: 'lg' });
  }

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }






}
