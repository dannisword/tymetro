import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public async getData() {
    const url = `/api/Student/GetStudentRecords`;
    //const url = `/api/App/GetAppStores`;
    const param = {
      schoolYear: '110',
      keyword: ''
    };
    return this.http.post<any>(url, param).toPromise();
  }
  /**
   * 取得文宣 依語系取得
   * @param count 
   * @param lang 
   * @returns 
   */
  public async getNewAdvertising(count: string, lang: string) {
    const url = `/api/Advertising/GetNewAdvertising?count=${count}&lang=${lang}`;

    return this.http.get<any>(url).toPromise();
  }
  /**
   * 取得目前營運狀態
   * @param lang 
   * @returns 
   */
  public async getNowStatus(lang: string) {
    const url = `/api/BusinessStatus/GetNowStatus?lang=${lang}`;
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * 取得重大訊息
   * @param lang 
   * @returns 
   */
  public async getImportant(lang: string) {
    const url = `/api/BusinessStatus/GetImportant?lang=${lang}`;
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * 取得商品清單
   * @returns 
   */
  public async getProductList() {
    const url = `/api/Redeem/GetProductList`;
    return await this.http.post<Array<any>>(url, '').toPromise();
  }
  /**
   * 登入
   * @param account 
   * @param password 
   * @returns 
   */
  public async login(account, password) {
    const param = {
      Account: account,
      Password: password
    }
    console.log(param);
    const url = `/api/Member/Login`;
    return await this.http.post<any>(url, param).toPromise();
  }
  /**
   * 登出
   * @param memberID 
   * @returns 
   */
  public async logout(memberID: string) {
    const param = {
      MemberID: '00010B15-8047-4A8A-BF27-AB3EE89E311E'
    }
    const url = `/api/Member/logout`;
    return await this.http.post<any>(url, param).toPromise();
  }
  /**
   * 註冊
   * @param data 
   * @returns 
   */
  public async register(data) {
    const url = `/api/Member/Register`;
    return await this.http.post<any>(url, data).toPromise();
  }
}
