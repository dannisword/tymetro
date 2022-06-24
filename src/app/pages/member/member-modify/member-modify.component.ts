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
  public opened: any = false;

  @Input() public readonly mode: DateTimePickerMode = 'date-time';
  @ViewChild(IonModal) modal!: IonModal;

  constructor(protected injector: Injector,
    protected formBuilder: FormBuilder,
    protected datePicker: DatePicker,
    protected api: ApiService) {
    super(injector);

    //this.register = Boolean(this.route.snapshot.paramMap.get('new'));
    if (this.route.snapshot.paramMap.get('new') == 'true') {
      this.register = true;
    }
    this.memberForm = this.formBuilder.group({
      Id: ['', [Validators.required, Validators.minLength(10)]],
      Name: ['', [Validators.required]],
      PhoneNumber: [''], // [Validators.required, Validators.pattern('^[0-9-]+$')]
      Email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      Birthday: [''],
      Address: ['',],
      OriginTrans: [''],
      JobTitle: [''],
      ReadNotice: [false],
      Password: [''],
      ReconfirmPassword: ['']
    })
  }

  async ngOnInit() {
    // get json data
    const resp = await this.api.getData();
    this.transportations = resp.Transportations;
    this.jobs = resp.Jobs;
    // get 
    if (this.register == false) {
      await this.getMember();
    }
  }

  get errorControl() {
    return this.memberForm.controls;
  }

  onGoBack(event) {
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
    console.log(modelData);
  }

  onClose(opened) {
    this.opened = opened;
  }

  onVerifyLetter(close) {
    this.presentLoading();
    const user = this.getStore('userInfo');
    const param = {
      Id: user.Id
    };
    this.api.verifyLetter(param).then(resp => {
      this.onDismiss();
      this.opened = false;
    });
  }
  async onChang(data) {
    console.log(data);
    let url = 'https://www.tymetro.com.tw/tymetro-new/tw/_images/document/ticketson02/tab02/08.pdf';
    if (data == 'member') {
      url = 'https://www.tymetro.com.tw/tymetro-new/tw/_pages/service/protocol.html';
    }
    this.goToBrowser(url);
  }

  async onConfirm() {
    this.isSubmitted = !this.memberForm.valid;

    if (this.memberForm.valid == false) {
      this.snackbarService.warning('必填欄位，尚未完成');
      return;
    }
    
    // 註冊
    if (this.register == true) {
      await this.registerUser();
    } else {
      await this.modifyMember();
    }
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

  async registerUser() {
    if (this.memberForm.value.Password == "" && this.memberForm.value.ReconfirmPassword == "") {
      this.alert('密碼未輸入完整');
      return;
    }
    if (this.memberForm.value.Password != this.memberForm.value.ReconfirmPassword) {
      this.snackbarService.warning('再次確認密碼錯誤');
      return;
    }

    let member = {
      Token: localStorage.getItem("Token"),
      Address: this.memberForm.value.Address,
      Birthday: this.memberForm.value.Birthday,
      Email: this.memberForm.value.Email,
      Id: this.memberForm.value.Id,
      Name: this.memberForm.value.Name,
      Password: this.memberForm.value.Password,
      Tel: this.memberForm.value.PhoneNumber,
      OriginTrans: this.memberForm.value.OriginTrans,
      JobTitle: this.memberForm.value.JobTitle,
      ReadNotice: '1'
    };

    this.api.register(member).then(resp => {
      if (resp.Code == '0') {
        super.onBack('/dashboards/login');
      } else {
        this.snackbarService.success(resp.Message);
      }
    });
  }

  async modifyMember() {
    await this.presentLoading();
    let member = {
      Token: localStorage.getItem("Token"),
      Address: this.memberForm.value.Address,
      Birthday: this.memberForm.value.Birthday,
      Email: this.memberForm.value.Email,
      Id: this.memberForm.value.Id,
      Name: this.memberForm.value.Name,
      Tel: this.memberForm.value.PhoneNumber,
      OriginTrans: this.memberForm.value.OriginTrans,
      JobTitle: this.memberForm.value.JobTitle,
      ReadNotice: '1'
    };
    this.api.modifyMember(member).then(resp => {
      this.onDismiss();
      if (resp.Data.IsMailModify == true) {
        this.opened = true;
      }
      else {
        this.snackbarService.success('會員資料修改成功');
      }
      this.getMember();
    });
  }

}
