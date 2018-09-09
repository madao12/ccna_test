import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { PreTestComponent } from './pre-test/pre-test.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionService } from './question.service';
import { ResultService } from './result.service';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { OrderModule } from 'ngx-order-pipe';

import { FilterPipe } from './filter.pipe';







@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizComponent,
    DetailsComponent,
    ControlPanelComponent,
    PreTestComponent,
    FilterPipe
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    OrderModule




  ],
  providers: [QuestionService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
