import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Model } from '../utils/models'


export class Role extends FormGroup implements Model<Role> {
  ID?: string
  createdAt?: Date
  deletedAt?: Date
  updatedAt?: Date

  constructor() {
    super({
      name: new FormControl('', [ Validators.required, Validators.maxLength(64) ]),
    })
  }

  fromJSON(json: any): Role {
    this.ID = json['ID']
    this.createdAt = json['createdAt']
    this.updatedAt = json['updatedAt']
    this.deletedAt = json['deletedAt']
    this.get('name')?.patchValue(json['name'])
    return this
  }
}
