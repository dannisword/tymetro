import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public async getNewAdvertising(count: string, lang: string) {
    const url = `/api/Advertising/GetNewAdvertising?count=${count}&lang=${lang}`;
    return await this.http.get<any>(url).toPromise();
  }
}
