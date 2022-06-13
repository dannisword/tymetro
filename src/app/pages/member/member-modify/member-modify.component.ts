import { Component, Injector, OnInit, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ApiService } from '../../_services/api.service';
import { ChangPasswordComponent } from '../../login/chang-password/chang-password.component';

export type DateTimePickerMode = 'date-time' | 'date' | 'time';

@Component({
  selector: 'app-member-modify',
  templateUrl: './member-modify.component.html',
  styleUrls: ['./member-modify.component.scss'],
})
export class MemberModifyComponent extends BaseComponent implements OnInit {
  public memberForm: FormGroup;
  public member: any = {};
  public isSubmitted = false;
  public defaultDate = "1977-01-01";
  public transportations: any;
  public jobs: any;
  public register: any = false;
  @Input() public readonly mode: DateTimePickerMode = 'date-time';
  @ViewChild(IonModal) modal!: IonModal;

  constructor(protected injector: Injector,
    protected formBuilder: FormBuilder,
    protected datePicker: DatePicker,
    protected api: ApiService) {
    super(injector);

    this.register = Boolean(this.route.snapshot.paramMap.get('new'));

    this.memberForm = this.formBuilder.group({
      Id: ['', [Validators.required, Validators.minLength(10)]],
      Name: [''],
      PhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9-]+$')]],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Birthday: [''],
      Address: ['',],
      OriginTrans: [''],
      JobTitle: [''],
      ReadNotice: [false]
    })
  }

  async ngOnInit() {
    // get json data
    const resp = await this.api.getData();
    this.transportations = resp.Transportations;
    this.jobs = resp.Jobs;
    // get 
    if (this.register == true) {
      await this.getMember();
      console.log('修改');
    }
  }

  get errorControl() {
    return this.memberForm.controls;
  }

  onGoBack(event) {
    console.log(this.register);
    if (this.register == true) {
     
      super.onBack('dashboards/login');
      return;
    }
    super.onBack('dashboards/member');
  }

  async onChangPassword() {
    const options = {
      componentProps: {
        title: this.translateService.instant('變更密碼'),
        data: []
      },
      swipeToClose: true
    }
    const modelData = await this.openModal(ChangPasswordComponent, options);
  }

  async onConfirm() {
    this.isSubmitted = !this.memberForm.valid;

    if (this.memberForm.valid == false) {
      this.snackbarService.warning('必填欄位，尚未完成');
      return;
    }
    //modifyMember
    const member = {
      Token: localStorage.getItem("Token"),
      Id: this.memberForm.value.Id,
      Address: this.memberForm.value.Address,
      Birthday: this.memberForm.value.Birthday,
      Email: this.memberForm.value.Email,
      Name: this.memberForm.value.Name,
      Tel: this.memberForm.value.PhoneNumber,
      OriginTrans: this.memberForm.value.OriginTrans,
      JobTitle: this.memberForm.value.JobTitle,
      ReadNotice: this.memberForm.value.ReadNotice
    };
    const resp = await this.api.modifyMember(member);
    if (resp.Code != '0') {
      this.snackbarService.warning(resp.Message);
    }
    this.snackbarService.success('異動成功');
    await this.getMember();
  }

  async onCancel() {
    super.onBack('dashboards/member');
  }

  async getMember() {
    const member = await this.api.reviewerMember();
    if (member.Code != '0') {
      this.alert(member.Message);
      return;
    }
    this.member = member.Data;
  }
}
