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
  public isSubmitted = false;
  public defaultDate = "1977-01-01";
  public transportations: any;
  public jobs: any;

  @Input() public readonly mode: DateTimePickerMode = 'date-time';
  @ViewChild(IonModal) modal!: IonModal;
  public opened = false;
  public value: Date;

  constructor(protected injector: Injector,
    protected formBuilder: FormBuilder,
    protected datePicker: DatePicker,
    protected api: ApiService) {
    super(injector);
    /*
    this.memberForm = this.formBuilder.group({
      Id: ['', [Validators.required, Validators.minLength(10)]],
      Name: ['', [Validators.required, Validators.nullValidator]],
      PhoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Birthday: [''],
      Address: ['',],
      OriginTrans: [''],
      JobTitle: ['']
    })*/
    this.memberForm = this.formBuilder.group({
      Id: [''],
      Name: [''],
      PhoneNumber: [''],
      Email: [''],
      Birthday: [''],
      Address: ['',],
      OriginTrans: [''],
      JobTitle: ['']
    })
  }

  async ngOnInit() {
    // get json data
    const resp = await this.api.getData();
    this.transportations = resp.Transportations;
    this.jobs = resp.Jobs;
    //


  }

  get errorControl() {
    return this.memberForm.controls;
  }
  onGoBack(event) {
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
    this.isSubmitted = true;
    if (this.memberForm.valid == true) {
      return false;
    }
    console.log(this.memberForm.value)
  }

  async onCancel() {
    super.onBack('dashboards/member');
  }

  onDatePicker() {
    this.opened = true;
  }

  updateValue(elm) {
    console.log(elm);
  }

  cancel() {
    this.opened = false;
  }

}
