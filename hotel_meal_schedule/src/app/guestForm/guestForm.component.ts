import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Guest } from '../app.component';

@Component({
  selector: "guest-form",
  templateUrl: "./guestForm.component.html",
  styleUrls: ["./guestForm.component.scss"]
})
export class GuestForm implements OnInit {
  @Output() onGuestAdded: EventEmitter<Guest> = new EventEmitter<Guest>();

  constructor() {}

  ngOnInit() {

  }
}
