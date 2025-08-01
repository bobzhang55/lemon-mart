/* eslint-disable prettier/prettier */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
	let component: HomeComponent
	let fixture: ComponentFixture<HomeComponent>

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [HomeComponent, RouterTestingModule],
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})
})
