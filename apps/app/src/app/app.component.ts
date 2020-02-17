import { Component } from '@angular/core';
import { AuthService } from '@app/auth';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cheers!';

  links = [
    { path: '/drinks', icon: 'local_bar', title: 'Drinks' },
  ];

  get loggedIn(): boolean {
    return this._svcAuth.loggedIn;
  }

  constructor(private _svcAuth: AuthService, private _router: Router) {
  }

  onAvatarClick() {
    if (this.loggedIn)
      this._svcAuth.logout();

    this._router.navigate(['/login']);
  }
}
