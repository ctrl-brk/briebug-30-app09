import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;

  get showTooltip(): boolean {
    return !this.form.valid && (!this.form.pristine || this.form.touched);
  }

  constructor(private _fb: FormBuilder, private _router: Router, private _svcAuth: AuthService) {}

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.form.invalid) return;
    this.isLoading = true;
    this._svcAuth.login(this.form.value.username, this.form.value.password).subscribe(
      data => {
        // @ts-ignore
        this._svcAuth.token = data.access_token;
        // noinspection JSIgnoredPromiseFromCall
        this._router.navigate(['/drinks']);
      },
      e => {
        this.isLoading = false;
        alert(e.error.message);
      }
    );
  }

  private initForm() {
    this.form = this._fb.group({
      username: ['victor@avila.com', [Validators.required, Validators.email]],
      password: ['test', Validators.required]
    })
  }
}
