import { Component, OnInit, ViewChild, Input } from '@angular/core';


import { Question } from '../question';

import {NgForm} from '@angular/forms';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() selectedQuestions;


  constructor(private questionService: QuestionService) { }

  ngOnInit() {

  }

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }


}
