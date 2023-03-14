import { Injectable } from '@angular/core'
import { DataService } from '../utils/data-service'
import { User } from '../models/user'
import { map, Observable } from 'rxjs'
import { HttpService } from '../modules/common/services/http.service'


@Injectable({
  providedIn: 'root',
})
export class UsersService implements DataService<User> {
  private readonly url: string = '/users'

  constructor(private httpService: HttpService) {

  }

  getMany(): Observable<User[]> {
    return this.httpService.get<any[]>(this.url).pipe(map(response => response.map(new User().fromJSON)))
  }

  getOne(id: number | string): Observable<User> {
    return this.httpService.get<any>(`${this.url}/${ id }`).pipe(map(new User().fromJSON))
  }

  create(model: User): Observable<User> {
    return this.httpService.post<any>(this.url, model.value).pipe(map(new User().fromJSON))
  }

  update(model: User): Observable<User> {
    return this.httpService.put<any>(`${this.url}/${ model.ID }`, model.value).pipe(map(new User().fromJSON))
  }

  delete(id: number | string): Observable<any> {
    return this.httpService.delete(`${this.url}/${ id }`)
  }
}

