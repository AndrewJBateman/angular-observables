import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000);
    this.subscription = myNumbers.subscribe(val => console.log(val))

    // const myObservable = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.next('third package');
    //   }, 6000);
    //   setTimeout(() => {
    //     observer.complete() ;
    //   }, 8000);
    // });

    // myObservable.subscribe(
    //   (data: number) => {
    //     console.log(data);
    //   },
    //   (error: number) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('completed');
    //   }
    // )
    
  }

  //stop counting when user leaves the page
  ngOnDestroy() {
    this.subscription.unsubscribe();  
  }

}
