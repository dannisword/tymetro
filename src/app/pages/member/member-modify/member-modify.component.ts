import { Component, Injector, OnInit, Input, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { BaseComponent } from 'src/app/_shared/component/base/base.component';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { ApiService } from '../../_services/api.service';

export type DateTimePickerMode = 'date-time' | 'date' | 'time';

@Component({
  selector: 'app-member-modify',
  templateUrl: './member-modify.component.html',
  styleUrls: ['./member-modify.component.scss'],
})
export class MemberModifyComponent extends BaseComponent implements OnInit {
  public ionicForm: FormGroup;
  public isSubmitted = false;
  public defaultDate = "1977-01-01";



  @Input() public readonly mode: DateTimePickerMode = 'date-time';

  /** Reference to the `ion-modal` element that wraps the datetime picker. */
  @ViewChild(IonModal) modal!: IonModal;
  public opened = false;
  public value: Date;
  public transportations: any;
  public jobs: any;

  constructor(protected injector: Injector,
    protected formBuilder: FormBuilder,
    protected datePicker: DatePicker,
    protected api: ApiService) {
    super(injector);
  }

  async ngOnInit() {
    const resp = await this.api.getData();
    this.transportations = resp.Transportations;
    this.jobs = resp.Jobs;

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
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

  onGoBack(event) {
    super.onBack('dashboards/member');
  }
  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  submitForm() {

    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
}
