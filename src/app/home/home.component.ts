import { Component, OnInit, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const myNumbers = interval(1000);
    this.subscription = myNumbers.subscribe((val) => console.log(val));
  }

  // stop counting when user leaves the page
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
