import { Component, Input, OnInit } from "@angular/core";
import { Guest } from '../app.component';

@Component({
  selector: "meal-schedule",
  templateUrl: "./mealSchedule.component.html",
  styleUrls: ["./mealSchedule.component.scss"]
})
export class MealSchedule implements OnInit {
  guestList;

  constructor() {

  }

  ngOnInit() {

  }
}
