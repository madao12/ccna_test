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
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
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






@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuizComponent,
    FilterPipe,
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule




  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
