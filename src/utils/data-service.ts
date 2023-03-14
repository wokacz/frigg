import { Observable } from 'rxjs'


export abstract class DataService<Type> {
  public abstract getOne: (id: number | string) => Observable<Type>
  public abstract getMany: () => Observable<Type[]>
  public abstract create: (model: Type) => Observable<Type>
  public abstract update: (model: Type) => Observable<Type>
  public abstract delete: (id: number | string) => Observable<any>
}
