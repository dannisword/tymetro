import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-chang-password',
  templateUrl: './chang-password.component.html',
  styleUrls: ['./chang-password.component.scss'],
})
export class ChangPasswordComponent extends BaseComponent implements OnInit {
  public changPasswordForm: FormGroup;
  public isSubmitted: boolean = false;
  constructor(
    protected injector: Injector,
    protected api: ApiService,
    protected formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnInit() {
    this.changPasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.nullValidator]],
      newPassword: ['', [Validators.required, Validators.nullValidator]],
      reconfirmPassword: ['', [Validators.required, Validators.nullValidator]],
    })
  }

  get errorControl() {
    return this.changPasswordForm.controls;
  }

  async onConfirm() {
    this.isSubmitted = !this.changPasswordForm.valid;
    if (this.changPasswordForm.valid == false) {
      return;
    }

    const data = {
      Token: localStorage.getItem('Token'),
      OldPassword: this.changPasswordForm.value.oldPassword,
      NewPassword: this.changPasswordForm.value.newPassword
    }
    const resp = await this.api.changePassword(data);
    if (resp.Code == 0) {
      super.onBack('/dashboards/member');
      return;
    }
    this.alert(resp.Message);
    return;
  }
}
