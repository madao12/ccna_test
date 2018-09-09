import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

export interface Config {
  apiUrl: string;
}


@Injectable()
export class QuestionService {
  questions: Question[];
  selected: Question[];
  selectedQuestions;
  questionsUrl;
  questionsType;
  studentAem;
  config: Config = {
    apiUrl: 'http://localhost:4000'
  };



  constructor(private http: HttpClient, private configService: ConfigService) {
    this.showConfig();

  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }

  setSelectedQuestions(selectedQuestions: Question[]) {
    this.selected = selectedQuestions;
  }

  setQuestionsUrl(url: string) {
    this.questionsUrl = url;
  }
  setQuestionsType(name: string) {
    this.questionsType = name;
  }
  getQuestionType() {
    return this.questionsType;
  }

  addDefaultSelected(selectedQuestions: Question[]) {
    const uri = this.config.apiUrl + '/questions/add';
    const obj = {
      _id: 'defaultId',
      selected: selectedQuestions
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  addSelectedQuestions(testTime, testType, selectedQuestions: Question[]) {
    const uri = this.config.apiUrl + '/questions/update';
    const obj = {
      testTime: testTime,
      testType: testType,
      selected: selectedQuestions
    };
    this.http.put(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getSelectedQuestions(): Observable<any> {
    const uri =  this.config.apiUrl + '/questions/';
    console.log(this.config.apiUrl);
    return this.http.get(uri);

  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          apiUrl: data['apiUrl']
      });
  }

  setAem(studentAem) {
    this.studentAem  = studentAem;
  }
  getAem() {
    return this.studentAem;
  }

}
