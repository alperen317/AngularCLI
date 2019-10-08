// import { HomeComponent } from "./home.component";
// import { ComponentFixture } from '@angular/core/testing';
// import { DebugElement } from '@angular/core';


// let comp: HomeComponent;
// let fixture: ComponentFixture<HomeComponent>;
// let page: Page;

// describe('Home Component Create', () => {
//     beforeEach( () => {
//         const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
//     });
// });



// class Page {
//     heroRows: HTMLLIElement[];
//     navSpy: jasmine.Spy;
  
//     constructor() {
//       const heroRowNodes = fixture.nativeElement.querySelectorAll('li');
//       this.heroRows = Array.from(heroRowNodes);
  
  
//       // Get the component's injected router navigation spy
//       const routerSpy = fixture.debugElement.injector.get(Router);
//       this.navSpy = routerSpy.navigate as jasmine.Spy;
//     };
//   }