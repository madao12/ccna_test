import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResultService } from '../result.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  testResults = [];
  studentAem;
  correct = 0;
  scorePercent = 0;

  constructor(
    private resultService: ResultService,
    private questionService: QuestionService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.testResults = this.resultService.getTestResults();
      this.correct = this.resultService.getCorrect();
      if (!this.testResults) {
        this.resultsNotSet();
      }
    }, 1);
  }

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }
  resultsNotSet() {
    this.router.navigate(['/']);
  }


  openQuestionDetails(content) {
    this.modalService.open(content, { size: 'lg' });
  }





}
