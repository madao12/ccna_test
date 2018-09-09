import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

export interface Config {
  apiUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  selectedResults: any[];
  correct: any;
  config: Config = {
    apiUrl: 'http://localhost:4000'
  };

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.showConfig();
   }

  addResults(result: any) {
    const uri = this.config.apiUrl + '/results/add';
    const obj = {
      studentResults: result
    };
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
    console.log('apiurl', this.config.apiUrl);
  }

  getAllResults(): Observable<any> {
    const uri = this.config.apiUrl + '/results/';
    console.log(this.config.apiUrl);
    return this.http.get(uri);
  }

  removeResults(id) {
    const uri = this.config.apiUrl + '/results/delete/' + id;
    return this.http.get(uri);
  }



  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          apiUrl: data['apiUrl']
      });
  }

  setResults(selectedResults, correct) {
    this.selectedResults = selectedResults;
    this.correct = correct;
  }


  getTestResults() {
    return this.selectedResults;
  }
  getCorrect() {
    return this.correct;
  }


}
