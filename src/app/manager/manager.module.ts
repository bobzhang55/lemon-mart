import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'

import { UserResolve } from '../user/user/user.resolve'
import { UserService } from '../user/user/user.service'
import { ManagerComponent } from './manager.component'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerRoutingModule } from './manager-routing.module'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { UserManagementComponent } from './user-management/user-management.component'
import { UserTableComponent } from './user-table/user-table.component'

@NgModule({
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ManagerComponent,
    ManagerHomeComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
    UserTableComponent,
  ],
  providers: [UserService, UserResolve],
})
export class ManagerModule {}
