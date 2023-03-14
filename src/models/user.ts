import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Model } from '../utils/models'


export class User extends FormGroup implements Model<User> {
  ID?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date

  constructor() {
    super({
      id: new FormControl(''),
      firstName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]),
      lastName: new FormControl('', [ Validators.required, Validators.maxLength(32) ]),
      email: new FormControl('', [ Validators.required, Validators.maxLength(128), Validators.email ]),
      userName: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(32) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(32) ]),
    })
  }

  fromJSON(json: any): User {
    this.ID = json['ID']
    this.createdAt = json['createdAt']
    this.updatedAt = json['updatedAt']
    this.deletedAt = json['deletedAt']
    this.get('firstName')?.patchValue(json['firstName'])
    this.get('lastName')?.patchValue(json['lastName'])
    this.get('email')?.patchValue(json['email'])
    return this
  }
}
