import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

interface Test {
  name: string;
  url: string;
  topics: any;
  pdf: any;
}


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],

})



export class QuestionsComponent implements OnInit {
  sourceQuestions: Question[] = [];
  selectedQuestions: Question[] = [];
  tests;
  testTime: number;
  testType: string;
  selectedTest: Test;
  topic;

  constructor(private questionService: QuestionService, private router: Router, private modalService: NgbModal) {
    this.tests = [
      {
        name: 'ICND Part 1',
        url: 'assets/data/list-questions.json',
        pdf: 'assets/data/100-101.pdf',
        topics: [
          'All topics',
          'Operation of IP Data Networks',
          'LAN Switching Technologies',
          'IP addressing (IPv4 / IPv6)',
          'IP Routing Technologies',
          'IP Services',
          'Network Device Security',
          'Troubleshooting'
        ]
      },
      {
        name: 'ICND Part 2',
        url: 'assets/data/list-questions2.json',
        pdf: 'assets/data/200-101.pdf',
        topics: [
          'All topics',
          'LAN Switching Technologies',
          'IP Routing Technologies',
          'IP Services',
          'Troubleshooting',
          'WAN Technologies'
        ]
      }
    ];
    }

  ngOnInit() {
    this.questionService.addDefaultSelected(this.selectedQuestions);
    this.topic = 'All topics';
    this.setQuestionsUrl(this.tests[0]);
  }

  addSelected() {
    // this.selectedQuestions.testTime = this.testTime;
    this.testType = this.questionService.getQuestionType();
    this.questionService.addSelectedQuestions(this.testTime, this.testType, this.selectedQuestions);
    this.router.navigate(['/control_panel']);
    console.log('d', this.testType);
  }

  getQuestions():  Question[] {
    this.questionService.getQuestions().subscribe(questions => this.sourceQuestions = questions);
    this.selectedQuestions = [];
    return this.sourceQuestions;
  }

  setQuestionsUrl(selection) {
    this.selectedTest = selection;
    this.questionService.setQuestionsUrl(selection.url);
    this.questionService.setQuestionsType(selection.name);
    this.getQuestions();
  }

  setTopic(selection) {

    this.topic = selection;
    console.log(this.topic);
  }

  setSelected(question, source, target) {
    const index = source.indexOf(question);
    source.splice(index, 1);
    target.push(question);
  }


  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openQuestionDetails(Qcontent) {
    this.modalService.open(Qcontent, { size: 'lg' });
  }

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }





}


