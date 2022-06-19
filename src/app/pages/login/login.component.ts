import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseComponent implements OnInit {

  public account: string;
  public password: string;

  constructor(protected injector: Injector,
    protected api: ApiService) {
    super(injector);
  }

  ngOnInit() { }

  onGoBack(event) {
    super.onBack('/dashboards/home');
  }

  onForgotPW() {
    super.onBack('/dashboards/forgot');
  }

  async onLogin() {
    const resp = await this.api.login(this.account, this.password);
    if (resp.Code == 0) {
      localStorage.setItem('Token', resp.Data.Token);
      super.onBack('/dashboards/member');
    } else {
      this.alert(resp.Message);
    }
  }
  
  onRegister() {
    this.onNavigate('/dashboards/member-modify/true');
  }
}
