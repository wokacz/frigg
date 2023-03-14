import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './pages/home/home.component'
import { RouterModule } from '@angular/router'
import { routes } from './routes'
import { CommonElementsModule } from '../common/common.module'


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonElementsModule
  ],
})
export class HomeModule {
}
