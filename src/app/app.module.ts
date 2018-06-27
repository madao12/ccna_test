import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuestionService } from './question.service';
import { ResultService } from './result.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNG Modules
import {CheckboxModule} from 'primeng/checkbox';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';





@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizComponent,
    DetailsComponent,
    ControlPanelComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
    DropdownModule,
    FieldsetModule,
    TableModule,
    ConfirmDialogModule,
    InputTextModule




  ],
  providers: [QuestionService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
