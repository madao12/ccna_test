import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';


interface Test {
  name: string;
  url: string;
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})


export class ControlPanelComponent implements OnInit {
  selectedQuestions: Question[];
  tests;
  selectedTest: Test;

  constructor(private questionService: QuestionService) {
    this.tests = [
      {name: 'ICND 1', url: 'assets/data/list-questions.json'},
      {name: 'ICND 2', url: 'assets/data/list-questions2.json'}
    ];
   }

  ngOnInit() {
    this.getSelectedQuestions();
  }
/*
  getSelectedQuestions() {
    this.questionService.getSelectedQuestions()
    .subscribe(selected => {
      this.selectedQuestions = selected.selected;
    });
  }*/
  getSelectedQuestions() {
    this.selectedQuestions = this.questionService.getSelected();
  }

  setQuestionsUrl() {
    this.questionService.setQuestionsUrl(this.selectedTest.url);
  }
  addSelected() {
  this.questionService.addSelectedQuestions(this.selectedQuestions);
  }


}
