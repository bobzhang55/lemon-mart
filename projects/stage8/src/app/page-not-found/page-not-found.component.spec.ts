import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { commonTestingModules } from '../common/common.testing'
import { PageNotFoundComponent } from './page-not-found.component'

describe('PageNotFoundComponent', () => {
    let component: PageNotFoundComponent
    let fixture: ComponentFixture<PageNotFoundComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [...commonTestingModules, PageNotFoundComponent],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(PageNotFoundComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
