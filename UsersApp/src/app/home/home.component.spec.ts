import { HomeComponent } from "./home.component";
import { ComponentFixture, TestBed, async} from '@angular/core/testing';
import { DataMockService } from '../shared/data-mock.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeModule } from './home.module';
import { DataService } from '../shared/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { NamePipePipe } from '../shared/pipe/name-pipe.pipe';
import { By } from 'protractor';


describe('Home Component', () => {
    let data;
    let router: Router;
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    const mockDataService = new DataMockService;
    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
        TestBed.configureTestingModule({
            imports: [
                //RouterTestingModule,
                //HomeModule,
                HttpClientTestingModule,
            ],
            declarations: [
                NamePipePipe,
                HomeComponent
            ],
            providers: [
                { provide: DataService, useValue: mockDataService },
                { provide: Router, useValue: routerSpy }
                ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            comp = fixture.componentInstance;
        });
    }));
    it('should be created', () => {
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });
    it('should have users', () => {
        fixture.detectChanges();
        expect(fixture.componentInstance.data.length).toBeGreaterThan(0);
        fixture.componentInstance.subscription.unsubscribe();
    });
    it('should display users ', () => {
        fixture.detectChanges();
        const users = fixture.nativeElement.querySelectorAll('[data-test-id="user"]');
        expect(users.length).toBe(3);
    });
    it('User card click', () => {
        fixture.detectChanges();
        const users = fixture.nativeElement.querySelectorAll('[data-test-id="user"]');
        users[0].dispatchEvent(new Event('click'));
        const router: Router = fixture.debugElement.injector.get(Router);
        const spy = router.navigate as jasmine.Spy;
        const navArgs = spy.calls.first().args[0];
        const id = fixture.componentInstance.data[0].id;
        expect(navArgs[0]).toBe('/user/' + id);
    });
});
