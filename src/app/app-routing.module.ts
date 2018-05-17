import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';

import { QuizComponent } from './quiz/quiz.component';
import {Question} from './question';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: QuestionsComponent },
  {path: 'quiz', component: QuizComponent, data: {} },
  {path: 'details', component: DetailsComponent, data: {} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
