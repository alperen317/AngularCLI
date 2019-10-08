// import {HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { DataService } from './data.service';
// import { TestBed } from '@angular/core/testing';

// describe('DataService', () => {
//     let httpTestingController: HttpTestingController;
//     let service: DataService;

//     beforeEach( () => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [
//                 DataService
//             ]
//         });
//         httpTestingController = TestBed.get(HttpTestingController);
//         service = TestBed.get(DataService);
//     });
//     describe('getUser', () => {
//         it('should call get with the correct URL', () => {
//             service.getUser('10').subscribe();
//             const req = httpTestingController.expectOne('http://5d78b288a8c27100149863f8.mockapi.io/users/10');
//             req.flush({ id: '4',
//             createdAt: '2019-09-11T10:55:58.632Z',
//             name: 'Ruthie DuBuque',
//             avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg',
//             email: 'email 4',
//             identity: 'identity 4'});
//             httpTestingController.verify();
//         });
//     });
// });
