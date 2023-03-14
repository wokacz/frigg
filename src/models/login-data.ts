import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Model } from '../utils/models'


export class LoginData extends FormGroup implements Model<LoginData> {
  constructor() {
    super({
      userName: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(32) ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6), Validators.maxLength(32) ]),
    })
  }

  fromJSON(json: any): LoginData {
    const model = new LoginData()
    model.get('userName')?.patchValue(json['userData'])
    model.get('password')?.patchValue(json['password'])
    return model
  }
}
