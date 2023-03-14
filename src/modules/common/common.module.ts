import { NgModule } from '@angular/core'
import { InputComponent } from './input/input.component'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppLayoutComponent } from './layout/app-layout/app-layout.component'


@NgModule({
  declarations: [
    InputComponent,
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    FormsModule,
    ReactiveFormsModule,
    AppLayoutComponent,
  ],
})
export class CommonElementsModule {

}
