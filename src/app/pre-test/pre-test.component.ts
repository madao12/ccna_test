import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { Question } from '../question';
import { Router } from '@angular/router';

import { QuestionService } from '../question.service';


@Component({
  selector: 'app-pre-test',
  templateUrl: './pre-test.component.html',
  styleUrls: ['./pre-test.component.css']
})
export class PreTestComponent implements OnInit {
  studentAem: String;
  selectedQuestions: Question[] = [];
  testTime: number;
  testType;

  constructor(private resultService: ResultService, private questionService: QuestionService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getSelectedQuestions();
    }, 1);

  }

  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(res => {
      this.selectedQuestions = res.selected;
      this.testTime = res.testTime;
      this.testType = res.testType;
      console.log(this.selectedQuestions);
    });
  }

  setAem() {
    this.questionService.setAem(this.studentAem);
  }

  startTest() {
    this.router.navigate(['/test']);
  }

}
