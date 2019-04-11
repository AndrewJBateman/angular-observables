# Angular Observables

This project uses the Observables in Angular 7 to stop a process by using ngOnDestroy to avoid memory leak if a page process is left running when the web page is exited.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

"The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. It is mainly used to implement distributed event handling systems. Observables, help JavaScript as a language integrate the observer design pattern."

## Screenshots

![Example screenshot](./img/observables.png).

## Technologies

* [Angular v7.2.12](https://angular.io/) & [Angular CLI v7.3.8](https://cli.angular.io/).

* [RxJS Library v6.4.0](https://angular.io/guide/rx-library) used to handle datastreams and propagation of change using observables.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

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
    this.subscription = myNumbers.subscribe(val => console.log(val));
  }

  // stop counting when user leaves the page
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

```

## Features

* When the use clicks on the 'Home' link the couter starts counting up every second. If the use clicks on 'User 1' or 'User 2' then the counting stops. This demonstrates that the Angular function`ngOnDestroy()` is working correctly.

## Status & To-Do List

* Status: very simple working app.

* To-Do: This could be used as a sand-box to try out other angular functionality.

## Inspiration

* [Angular RxJS Observables. Understanding the approach](https://www.youtube.com/watch?v=R7Y8k8mHEeA).

* [Link to article by Jen Cooper of Telerik Developer Digest:](https://developer.telerik.com/topics/web-development/introduction-observables-angular-developers/)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
