import { Component, OnInit, Input } from '@angular/core';
import { ResultService } from '../result.service';
import { QuestionService } from '../question.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() selectedQuestions;
  @Input() studentAem;
  @Input() correct;
  @Input() numberOfQuestions;


  constructor(private resultService: ResultService, private questionService: QuestionService) { }

  ngOnInit() {

  }

  numToLetter(k: number) {
    return String.fromCharCode(65 + k);
  }


}
