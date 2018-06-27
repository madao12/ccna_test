import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';

import { QuizComponent } from './quiz/quiz.component';
import { Question } from './question';
import { DetailsComponent } from './details/details.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';


const routes: Routes = [
  {path: '', component: QuizComponent },
  {path: 'control_panel', component: ControlPanelComponent, data: {} },
  {path: 'question', component: QuestionsComponent, data: {} },
  {path: 'details', component: DetailsComponent, data: {} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
