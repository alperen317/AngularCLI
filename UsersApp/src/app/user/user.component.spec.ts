import { TestBed, async, ComponentFixture, fakeAsync, flush, tick } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponent } from './user.component';
import { FormsModule, NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Observable, of } from 'rxjs';
import { DataMockService } from '../shared/data-mock.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('User Component', () => {
    let DATA;
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let de: DebugElement;
    let form: DebugElement;
    let el: HTMLElement;

    let mockRouter;
    const mockDataService = new DataMockService;
    beforeEach(async(() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [UserComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({})
                    }
                },
                { provide: DataService, useValue: mockDataService },
                { provide: Router, useValue: routerSpy }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
            el = de.nativeElement;
            form = fixture.debugElement.query(By.css('form'));
        });
    }));
    it('should be created', () => {
        fixture = TestBed.createComponent(UserComponent);
        comp = fixture.componentInstance;
        expect(comp).toBeTruthy();
    });
    it('component title \'Kayıt Formu\' ', () => {
        expect(comp.title).toBe('Kayıt Formu');
    });
    it('component title \'Kayıt Düzenleme\' ', () => {
        expect(comp.title).not.toBe('Kayıt Düzenleme');
    });
    it('h1 text \'Kayıt Formu\' ', () => {
        fixture.detectChanges();
        let h1 = fixture.debugElement.nativeElement.querySelector('h1');
        expect(h1.textContent).toContain('Kayıt Formu');
    });
    it('id undefined', () => {
        expect(comp.id).toBeUndefined();
    });
    it('editMode = false', () => {
        expect(comp.editMode).not.toBeTruthy();
    });
    it(`form should be invalid`, async(() => {
        let formInput = fixture.debugElement.nativeElement.querySelectorAll('input');
        for (let index of formInput) {
            expect(index.validity.valid).toBe(false);
        }
    }));
    it('Name input invalid', async( () => {
        fixture.detectChanges();
        const nameInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="name"]');
        fixture.whenStable().then( () => {
            nameInput.value = '';
            nameInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            const spanName =  fixture.debugElement.nativeElement.querySelector('[data-test-id="helpName"]');
            expect(spanName).not.toBe(undefined);
        });
    }));
    it('Name input valid', async( () => {
        fixture.detectChanges();
        const nameInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="name"]');
        fixture.whenStable().then( () => {
            nameInput.value = 'Ali';
            nameInput.dispatchEvent(new Event('blur'));
            nameInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(nameInput.validity.valid).toBe(true);
        });
        
    }));
    it('Email input invalid', async( () => {
        fixture.detectChanges();
        const emailInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="email"]');
        fixture.whenStable().then( () => {
            emailInput.value = 'alialperena';
            emailInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            const spanEmail = fixture.debugElement.nativeElement.querySelector('[data-test-id="helpEmail"]');
            expect(spanEmail).not.toBe(undefined);
        });
    }));
    it('Email input valid', async( () => {
        fixture.detectChanges();
        const emailInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="email"]');
        //console.log(emailInput);
        fixture.whenStable().then( () => {
            emailInput.value = 'alialperena@gmail.com';
            emailInput.dispatchEvent(new Event('input'));
            emailInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            expect(emailInput.validity.valid).toBe(true);
        });
    }));
    it('Tc input invalid', async( () => {
        fixture.detectChanges();
        const tcInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="tc"]');
        fixture.whenStable().then(() => {
            tcInput.value = '8675113612';
            tcInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            const spanTc = fixture.debugElement.nativeElement.querySelector('[data-test-id="helpTc"]');
            expect(spanTc.textContent).toContain('Kontrol !');
        });
    }));
    it('Tc input valid', async( () => {
        fixture.detectChanges();
        const tcInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="tc"]');
        fixture.whenStable().then(() => {
            tcInput.value = '86751136120';
            tcInput.dispatchEvent(new Event('blur'));
            tcInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(tcInput.validity.valid).toBe(true);
        });
    }));
    it('Avatar invalid', async( () => {
        fixture.detectChanges();
        const avatarInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="avatar"]');
        fixture.whenStable().then( () => {
            avatarInput.value = ' ';
            avatarInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            const spanAvatar = fixture.debugElement.nativeElement.querySelector('[data-test-id="helpAvatar"]');
            expect(spanAvatar.textContent).toContain('Kontrol !');
        });
    }));
    it('Avatar valid', async (() => {
        fixture.detectChanges();
        const avatarInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="avatar"]');
        fixture.whenStable().then( () => {
            avatarInput.value = 'avatar1';
            avatarInput.dispatchEvent(new Event('blur'));
            avatarInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(avatarInput.validity.valid).toBe(true);
        });
    }));
    it('Id invalid', async( () => {
        fixture.detectChanges();
        const idInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="id"');
        fixture.whenStable().then( () => {
            idInput.value = ' ';
            idInput.dispatchEvent(new Event('blur'));
            fixture.detectChanges();
            const spanId = fixture.debugElement.nativeElement.querySelector('[data-test-id="helpId"]');
            expect(spanId.textContent).toContain('Kontrol !');
        });
    }));
    it('Id valid', async( () => {
        fixture.detectChanges();
        const idInput = fixture.debugElement.nativeElement.querySelector('[data-test-id="id"');
        fixture.whenStable().then( () => {
            idInput.value = '55';
            idInput.dispatchEvent(new Event('blur'));
            idInput.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            expect(idInput.validity.valid).toBe(true);
        });
    }));
    it('Form invalid', async( () => {
        fixture.detectChanges();
        let formInput = fixture.debugElement.nativeElement.querySelectorAll('input');
        //let helpForm = fixture.debugElement.nativeElement.querySelector('[data-test-id="HelpForm"');
        fixture.whenStable().then( () => {
            formInput[0].value = 'Ali';
            formInput[1].value = 'alialperen';
            formInput[2].value = '86751136120';
            formInput[3].value = 'avatar1';
            formInput[4].value = '55';
            for (let index of formInput) {
                index.dispatchEvent(new Event('blur'));
                index.dispatchEvent(new Event('input'));
            }
            fixture.detectChanges();
            expect(fixture.componentInstance.submitted).toBe(false);
            let HelpForm = fixture.debugElement.nativeElement.querySelector('[data-test-id="HelpForm"');
            expect(HelpForm).not.toBe(null);
            expect(fixture.componentInstance.signupForm.valid).toBe(false);
        });
    }));
    it('Form valid', async( () => {
        fixture.detectChanges();
        let FormInput = fixture.debugElement.nativeElement.querySelectorAll('input');
        fixture.whenStable().then( () => {
            FormInput[0].value = 'Ali';
            FormInput[1].value = 'alialperen@gmail.com';
            FormInput[2].value = '86751136120';
            FormInput[3].value = 'avatar1';
            FormInput[4].value = '55';
            for (let index of FormInput) {
                index.dispatchEvent(new Event('blur'));
                index.dispatchEvent(new Event('input'));
            }
            fixture.detectChanges();
            expect(fixture.componentInstance.submitted).toBe(false);
            let HelpForm = fixture.debugElement.nativeElement.querySelector('[data-test-id="HelpForm"');
            expect(HelpForm).toBe(null);
            expect(fixture.componentInstance.signupForm.valid).toBe(true);
            fixture.componentInstance.onSubmit();
            fixture.detectChanges();
            let HelpSuccess = fixture.debugElement.nativeElement.querySelector('[data-test-id="HelpSuccess"');
            expect(HelpSuccess).not.toBe(undefined);
        });
    }));
});

describe('User Component EditMode = True Save', () => {
    let DATA;
    let comp: UserComponent;
    let fixture: ComponentFixture<UserComponent>;
    let de: DebugElement;
    let form: DebugElement;
    let el: HTMLElement;

    let mockRouter;
    const mockDataService = new DataMockService;
    beforeEach( async (() => {
        const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
            ],
            declarations: [UserComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({id : '4'})
                    }
                },
                { provide: DataService, useValue: mockDataService },
                { provide: Router, useValue: routerSpy }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(UserComponent);
            comp = fixture.componentInstance;
            de = fixture.debugElement;
            el = de.nativeElement;
            form = fixture.debugElement.query(By.css('form'));
        });
    }));
    it('h1 \'Kayıt Düzenleme\' ', () => {
        fixture.detectChanges();
        let h1 = fixture.debugElement.nativeElement.querySelector('h1');
        expect(h1.textContent).toContain('Kayıt Düzenleme');
    });
    it('id = 4 ', fakeAsync( () => {
        fixture.detectChanges();
        expect(fixture.componentInstance.id).toBe('4');
        
    }));
    it('EditUser ', () => {
        expect(fixture.componentInstance.editUser).toBe(undefined);
        expect(fixture.componentInstance.editMode).toBe(false);
        fixture.detectChanges();
        expect(fixture.componentInstance.editUser).not.toBe(undefined);
        expect(fixture.componentInstance.editMode).toBeTruthy();
    });
    it('Edit User ', fakeAsync( () => {
        fixture.detectChanges();
        //console.log(fixture.componentInstance.editUser);
        fixture.componentInstance.editUser.name = 'Ali';
        fixture.componentInstance.saveUser(fixture.componentInstance.editUser);
        let router: Router = fixture.debugElement.injector.get(Router);
        const spy = router.navigate as jasmine.Spy;
        const navArgs = spy.calls.first().args[0];
        expect(navArgs[0]).toEqual("/");
   }));
    it('Data length = 3 ', fakeAsync( () => {
        fixture.componentInstance.ngOnInit();
        flush();
        let data = mockDataService.fetchUsers();
        flush();
        let length = data['value'].length;
        expect(length).toBe(3);
   }));
    it('Delete user', fakeAsync( () => {
        fixture.componentInstance.deleteUser();
        flush();
        let router: Router = fixture.debugElement.injector.get(Router);
        const spy = router.navigate as jasmine.Spy;
        const navArgs = spy.calls.first().args[0];
        expect(navArgs[0]).toEqual("/");
   }));
});
