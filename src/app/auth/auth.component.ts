import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {

  public loading =  false;
  private loadingSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadingSubscription = this.authService.loading.subscribe( value => this.loading = value);
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }


}
