import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { EntityDataModule } from '@ngrx/data'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { of } from 'rxjs'

import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'
import { entityConfig } from '../../entity-metadata'
import { User } from '../../user/user/user'
import { UserTableComponent } from './user-table.component'

describe('UserTableComponent', () => {
	let component: UserTableComponent
	let fixture: ComponentFixture<UserTableComponent>

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			providers: [...commonTestingProviders],
			imports: [
				...commonTestingModules,
				FormsModule,
				EntityDataModule.forRoot(entityConfig),
				EffectsModule.forRoot([]),
				StoreModule.forRoot({}),
				UserTableComponent,
			],
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(UserTableComponent)
		component = fixture.componentInstance
		component.items$ = of([new User()])
		Object.assign(component, { skipLoading: true })
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
