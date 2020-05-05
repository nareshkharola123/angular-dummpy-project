import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from 'src/app/user/user.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {

  private userSub: Subscription;
  isAuthenticated = false;
  user: User

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      userData => {
        this.isAuthenticated = !!userData;
        this.user = userData;
      }
    )
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}
