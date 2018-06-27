import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { ResultService } from '../result.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

interface Result {
  aem: String;
  correct: number;
  numberOfQuestions: number;
  _id: String;
}

interface Test {
  name: string;
  url: string;
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
  results: Result[] = [];
  i;
  j;
  scoreAvg = 2;
  scoreSum = 0;

  constructor(
    private questionService: QuestionService,
    private confirmationService: ConfirmationService,
    private resultService: ResultService,
    private router: Router
  ) {
    this.tests = [
      {name: 'ICND 1', url: 'assets/data/list-questions.json'},
      {name: 'ICND 2', url: 'assets/data/list-questions2.json'}
    ];

   }

  ngOnInit() {
    this.getSelectedQuestions();
    this.getResults();
  }

  addSelected() {
    this.questionService.addSelectedQuestions(this.selectedQuestions);
  }


  getResults() {
    this.resultService.getAllResults().subscribe(res => {
      this.results = res;
      this.resultAverage(this.results);
    });


  }
  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(res => this.selectedQuestions = res.selected);
  }

  removeResult(id) {
    this.resultService.removeResults(id).subscribe(res => {
      console.log('Deleted');
    });
  }


  removeAllResults() {
    for (this.i = 0; this.i < this.results.length; this.i++) {
      this.removeResult(this.results[this.i]._id);
    }
  }

  resultAverage(results) {
    for (this.j = 0; this.j < results.length; this.j++) {
      this.scoreSum +=  (results[this.j].studentResults.correct / results[this.j].studentResults.numberOfQuestions);
    }
    this.scoreAvg = this.scoreSum / results.length;
  }

  confirmDeleteResults() {
    this.confirmationService.confirm({
        message: 'Do you want to delete all the results?',
        header: 'Delete Confirmation',
        accept: () => {
          this.removeAllResults();
          this.getResults();
        }
    });
  }

  confirmEditTest() {
    this.confirmationService.confirm({
        message: 'Do you want to edit the test?',
        header: 'Edit Test',
        accept: () => {
          this.router.navigate(['/question']);
        }
    });
  }




}
