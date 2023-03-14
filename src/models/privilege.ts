import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Model } from '../utils/models'


export class Privilege extends FormGroup implements Model<Privilege> {
  ID?: string
  createdAt?: Date
  deletedAt?: Date
  updatedAt?: Date

  constructor() {
    super({
      name: new FormControl('', [ Validators.required, Validators.maxLength(64) ]),
      description: new FormControl('', [ Validators.maxLength(255) ]),
    })
  }

  fromJSON(json: any): Privilege {
    this.ID = json['ID']
    this.createdAt = json['createdAt']
    this.updatedAt = json['updatedAt']
    this.deletedAt = json['deletedAt']
    this.get('name')?.patchValue(json['name'])
    this.get('description')?.patchValue(json['description'])
    return this
  }
}
