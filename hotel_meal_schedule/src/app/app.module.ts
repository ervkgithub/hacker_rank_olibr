
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GuestForm } from './guestForm/guestForm.component';
import { MealSchedule } from './mealSchedule/mealSchedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MealSchedule,
    GuestForm
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
