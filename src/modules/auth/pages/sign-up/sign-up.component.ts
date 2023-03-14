import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { User } from '../../../../models/user'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [ './sign-up.component.scss' ],
})
export class SignUpComponent {
  user: FormGroup = new User()

  submit(): void {
    this.user.markAllAsTouched()
    if (this.user.valid) {

    }
  }
}
