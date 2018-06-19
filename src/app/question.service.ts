
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

interface ServerUrl {
  name: string;
  url: string;
}

@Injectable()
export class QuestionService {
  // questions = QUESTIONS;
  questions: Question[];
  selected: Question[];
  selectedQuestions: Question[];
  questionsUrl;
  apiRoot: ServerUrl;
  ss: Observable<any>;
  constructor(private http: HttpClient) {
    this.getServerUrl().subscribe(serverUrl => this.apiRoot = serverUrl);
    this.ss = this.getSelectedDB();
  }

  getQuestions(): Observable<Question[]> {

    return this.http.get<Question[]>(this.questionsUrl);
  }
  getSelected() {
    console.log(this.apiRoot);
    return this.selected;
  }
  getServerUrl() {
    return this.http.get<ServerUrl>('assets/config/config.json');
  }

  setSelectedQuestions(selectedQuestions: Question[]) {
    console.log(this.apiRoot);
    this.selected = selectedQuestions;
  }

  setQuestionsUrl(url: string) {
    this.questionsUrl = url;
  }

  addDefaultSelected(selectedQuestions: Question[]) {
    const uri = this.apiRoot.url + '/questions/add';
    const obj = {
      _id: 'defaultId',
      selected: selectedQuestions
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  addSelectedQuestions(selectedQuestions: Question[]) {
    console.log(this.apiRoot);
    const uri = this.apiRoot.url + '/questions/update';
    const obj = {
      selected: selectedQuestions
    };
    this.http.put(uri, obj)
        .subscribe(res => console.log('Done'));
  }
/*
  getSelectedQuestions(): Observable<any> {

    console.log(this.apiRoot);
    const uri =  this.apiRoot.url + '/questions/';
    return this.http.get(uri);

  }*/
  getSelectedDB() {
    console.log(this.apiRoot);
    const uri =  'http://192.168.1.102:4000' + '/questions/';
    return this.http.get(uri);

  }
  getSelectedQuestions(): Observable<any> {
    return this.ss;
  }





}
