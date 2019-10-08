import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

// import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
// import { By } from '@angular/platform-browser';
// import { TaskService } from './task.service';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       imports: [FormsModule],
//       providers: [TaskService]
//     }).compileComponents();
//   }));
//   it('should create the app', async(() =>  {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it('should show default task in h2 tag ', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const de = fixture.debugElement.query(By.css('h2'));
//     expect(de.nativeElement.textContent).toEqual('testapp');
//   });
//   it('should keep input and h2 in sync', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const inputDe =  fixture.debugElement.query(By.css('input[name="title"]'));
//     const inputEl = inputDe.nativeElement;
//     inputEl.value = 'Update task 1';
//     inputEl.dispatchEvent(new Event('input'));
//     fixture.detectChanges();
//     const de = fixture.debugElement.query(By.css('h2'));
//     expect(de.nativeElement.textContent).toEqual('Update task 1');
//   });
//   it('should keep input and h2 in sync', async( () =>  {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const inputDe = fixture.debugElement.query(By.css('input[name="title"]'));
//     const inputEl = inputDe.nativeElement;
//     inputEl.value = 'Updated Task 1';
//     inputEl.dispatchEvent(new Event('input'));
//     fixture.whenStable().then( () =>  {
//       fixture.detectChanges();
//       const de = fixture.debugElement.query(By.css('h2'));
//       expect(de.nativeElement.textContent).toEqual('Updated Task 1');
//     });
//   }));
  
//   it('should keep input and h2 in sync', fakeAsync(() => {
//   const fixture = TestBed.createComponent(AppComponent);
//   fixture.detectChanges();
//   const inputDe = fixture.debugElement.query(By.css('input[name="title"]'));
//   const inputEl = inputDe.nativeElement;
//   inputEl.value = 'Updated Task 1';
//   inputEl.dispatchEvent(new Event('input'));
//   tick();
//   fixture.detectChanges();
//   const de = fixture.debugElement.query(By.css('h2'));
//   expect(de.nativeElement.textContent).toEqual('Updated Task 1');
//   }));
//   it('should display number of times title was updated by pressing enter button', fakeAsync( () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const taskService = fixture.debugElement.injector.get(TaskService);
//     const spy =  spyOn(taskService, 'update').and.returnValue(Promise.resolve('success'));
//     fixture.detectChanges();
//     const inputDe = fixture.debugElement.query(By.css('input[name="title"]'));
//     const inputEl = inputDe.nativeElement;
//     inputEl.value = 'Updated Task 1';
//     inputEl.dispatchEvent(new Event('input'));
//     inputEl.dispatchEvent(new KeyboardEvent('keydown', {
//       'key': 'Enter'
//     }));
//     tick();
//     fixture.detectChanges();
//     const de = fixture.debugElement.query(By.css('h2'));
//     expect(de.nativeElement.textContent).toEqual('Updated Task 1');
//     const updateCountDe = fixture.debugElement.query(By.css('h3'));
//     expect(updateCountDe.nativeElement.textContent).toEqual('Updated: 1 times');
//     expect(spy).toHaveBeenCalled();
//   }));
// });

describe('AppComponent', () => {
    beforeEach(async( () => {
      TestBed.configureTestingModule({
        declarations: [ AppComponent],
        imports: [FormsModule],
      }).compileComponents();
    }));
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
    it('Component title Form', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toBe('Form');
    });
    it('Dom h3 text Form', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      const h3 = fixture.debugElement.nativeElement.querySelector('h3');
      expect(h3.textContent).toBe('Form');
    }));
    it('form Label text', async( () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const formLabel = fixture.debugElement.nativeElement.querySelectorAll('label');
      expect(formLabel[0].textContent).toBe('First Name');
      expect(formLabel[1].textContent).toBe('Last Name');
      expect(formLabel[2].textContent).toBe('Email');
      expect(formLabel[3].textContent).toBe('Password');
    }));
    it('form submitted false', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const comp = fixture.componentInstance;
      fixture.detectChanges();
      const form = comp.form;
      expect(form.submitted).toBe(false);
    });
    // it('form submitted true', async (() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const comp = fixture.componentInstance;
    //   const form = comp.form;
    //   const formInput = fixture.debugElement.nativeElement.querySelectorAll('input');
    //   console.log(formInput);
    //   formInput[0].value = 'Ali';
    //   formInput[1].value = 'Aslan';
    //   formInput[2].value = 'alialperena@gmail.com';
    //   formInput[3].value = '123456';
    //   fixture.detectChanges();
    //   console.log(formInput[0].value);
    //   comp.onSubmit();

    // }));
    it('should be ok ', async( () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      fixture.whenStable().then( () => {
        const input = fixture.debugElement.queryAll(By.css('input'));
        input[0].nativeElement.value = 'Ali';
        input[1].nativeElement.value = 'ASLAN';
        input[2].nativeElement.value = 'alialperena@gmail.com';
        input[3].nativeElement.value = '123456';
        for (let index of input) {
          index.nativeElement.dispatchEvent(new Event('input'));
        }
        fixture.detectChanges();
        expect(fixture.componentInstance.model.firstName).toEqual("Ali");
        expect(fixture.componentInstance.model.lastName).toEqual("ASLAN");
        expect(fixture.componentInstance.model.email).toEqual("alialperena@gmail.com");
        expect(fixture.componentInstance.model.password).toEqual("123456");
        fixture.componentInstance.onSubmit();
        fixture.detectChanges();
        console.log(
          fixture.componentInstance.form.submitted);
      });
       
    }));
});
