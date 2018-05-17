import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe } from './filter.pipe';
import { QuestionService } from './question.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';

// PrimeNG Modules
import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';






@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizComponent,
    FilterPipe,
    DetailsComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // PrimeNG mods
    CheckboxModule,
    PickListModule,
    ButtonModule,
    ProgressBarModule,
    AccordionModule,
    FieldsetModule



  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
