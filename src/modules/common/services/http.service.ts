import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { env } from '../../../env/env'


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly api: string = env.api

  constructor(private httpClient: HttpClient) {

  }

  get<Type>(url: string): Observable<Type> {
    return this.httpClient.get<Type>(`${ this.api }${ url }`)
  }

  post<Type>(url: string, body: any): Observable<Type> {
    return this.httpClient.post<Type>(`${ this.api }${ url }`, body)
  }

  put<Type>(url: string, body: any): Observable<Type> {
    return this.httpClient.put<Type>(`${ this.api }${ url }`, body)
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(`${ this.api }${ url }`)
  }
}
