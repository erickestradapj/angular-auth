import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private _user!: User;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  public get user(): User {
    return this.authService.user;
  }

  public set user(value: User) {
    this._user = value;
  }

  public logout() {
    this.router.navigateByUrl('/auth');
    this.authService.logout();
  }
}
