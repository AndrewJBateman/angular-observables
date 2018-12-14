import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id']; //+ coerces id into a string
        }

      )
  }

}
