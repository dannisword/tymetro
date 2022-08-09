import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private alert: AlertController
  ) { }

  public async getData() {
    const url = `/assets/data.json`;

    return this.http.get<any>(url).toPromise();
  }
  /**
   * 取得文宣 依語系取得
   * @param count
   * @param lang
   * @returns
   */
  public async getNewAdvertising(count: string, lang: string) {
    const url = `/api/Advertising/GetNewAdvertising?count=${count}&lang=${lang}`;
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * 取得目前營運狀態
   * @param lang
   * @returns
   */
  public async getNowStatus(lang: string) {
    const url = `/api/BusinessStatus/GetNowStatus?lang=${lang}`;
    return this.http.get<any>(url).toPromise();
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
    return await this.http.post<any>('/api/Redeem/GetProductList', '').toPromise();
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
    return await this.http.post<any>('/api/Member/Login', param).toPromise();
  }
  /**
   * 取得帳號資訊
   * @returns 
   */
  public async reviewerMember() {
    const param = {
      Token: localStorage.getItem('Token')
    }
    return await this.http.post<any>('/api/Member/ReviewerMember', param).toPromise();
  }
  /**
   * 登出
   * @param memberID
   * @returns
   */
  public async logout(memberID: string) {
    const param = {
      Token: localStorage.getItem('Token')
    }
    return await this.http.post<any>(`/api/Member/logout`, param).toPromise();
  }
  /**
   * 註冊
   * @param data
   * @returns
   */
  public async register(data) {
    return await this.http.post<any>('/api/Member/Register', data).toPromise();
  }
  /**
   * 發驗證信
   * @param data 
   * @returns 
   */
  public async verifyLetter(data) {
    return await this.http.post<any>('/api/Member/VerifyLetter', data).toPromise();
  }
  /**
   * 變更密碼
   * @param data 
   * @returns 
   */
  public async changePassword(data) {
    return await this.http.post<any>('/api/Member/ChangePassword', data).toPromise();
  }
  /**
   * 忘記密碼
   * @param data 
   * @returns 
   */
  public async forgetPassword(data) {
    return await this.http.post<any>('/api/Member/ForgetPassword', data).toPromise();
  }
  /**
   * 會員資料修改
   * @param data 
   * @returns 
   */
  public async modifyMember(data) {
    return await this.http.post<any>('/api/Member/ModifyMember', data).toPromise();
  }
  /**
   * 取得紀念商品明細
   * @returns 
   */
  public async getSouvenir() {

    const param = {
      category: "2"
    }
    return await this.http.post<any>('/api/Souvenir/GetSouvenir', param).toPromise();
  }
  /**
   * 兌換商品
   * @param data 
   * @returns 
   */
  public async redeemProduct(data) {
    return await this.http.post<any>('/api/Redeem/RedeemProduct', data).toPromise();
  }
  /**
   * 取得虛擬商品清單
   * @returns 
   */
  public async getVirtualProductList() {
    const param = {
      isDiscount: "1"
    }
    return await this.http.post<any>('/api/Redeem/RedeemProduct', param).toPromise();
  }
  /**
   * 兌換虛擬商品?
   * @returns 
   */
  public async redeemVirtualProduct() {
    return await this.http.post<any>('/api/Redeem/RedeemProduct', '').toPromise();
  }
  /**
   * 查詢歷史點數
   * @returns 
   */
  public async getPointsByToken(page) {
    const data = {
      Token: localStorage.getItem('Token'),
      Page: page
    }
    return await this.http.post<any>('/api/PointRecord/GetPointsByToken', data).toPromise();
  }
  /**
   * 取得我的票卡
   * @returns 
   */
  public async getVehicleType(lang) {
    const url = `/api/vehicle/GetVehicleType?lang=${lang}&type=`
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * 
   * @returns 取得使用者卡片
   */
  public async getMemberVehicle() {
    const data = {
      Token: localStorage.getItem('Token')
    }
    return await this.http.post<any>('/api/vehicle/GetMemberVehicle', data).toPromise();
  }
  /**
   * 新增卡片
   * @param exterCode 
   * @param type 
   * @returns 
   */
  public async addVehicle(exterCode, type) {
    const data = {
      Token: localStorage.getItem('Token'),
      ExterCode: exterCode,
      Type: type
    }
    return await this.http.post<any>('/api/vehicle/AddVehicle', data).toPromise();
  }
  /**
   * 刪除卡片
   * @param exterCode 
   * @returns 
   */
  public async delMemberVehicle(exterCode) {
    const data = {
      CardNo: exterCode
    }
    return await this.http.post<any>('/api/vehicle/DelMemberVehicle', data).toPromise();
  }
  /**
   * 
   * @param kind Latest: 最新公告; Activities: 活動消息; Serve: 旅客服務; delay:誤點證明;
   * @returns 
   */

  public async getLink(kind) {
    const url = `/api/GetData?kind=${kind}`;
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * @param kind Latest: 最新公告; Activities: 活動消息; Serve: 旅客服務; delay:誤點證明;
   * @param kind 
   * @returns 
   */
  public async getLinkData(kind) {
    const url = `/api/GetData?kind=${kind}`;
    return await this.http.get<any>(url).toPromise();
  }
  /**
   * 取得版本
   * @returns 
   */
  public async getVersion(){
    return await this.http.post<any>('/api/GetVersion', '').toPromise();
  }
/**
 * 刪除會員資料
 * @param param 
 * @returns 
 */
  public async deleteMember(param){
    return await this.http.post<any>('/api/Member/DeleteMember', param).toPromise();
  }
}
