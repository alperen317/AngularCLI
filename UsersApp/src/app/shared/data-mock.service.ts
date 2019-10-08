import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../user/user.model';
import { of } from 'rxjs';

@Injectable()
export class DataMockService implements DataService {

    private data = [
        {
            id: '3',
            createdAt: '2019-09-11T14:03:03.841Z',
            name: 'Katrina Braun',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rangafangs/128.jpg',
            email: 'email3@gmail.com',
            identity: 'identity 3'
          },
          {
            id: '4',
            createdAt: '2019-09-11T10:55:58.632Z',
            name: 'Ruthie DuBuque',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/enda/128.jpg',
            email: 'email4@gmail.com',
            identity: 'identity 4'
          },
          {
            id: '5',
            createdAt: '2019-09-11T14:34:17.968Z',
            name: 'Kory Rau',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vj_demien/128.jpg',
            email: 'email5@gmail.com',
            identity: 'identity 5'
          }
    ];

    constructor() {}

    fetchUsers(): Observable<User[]> {
        return of(this.data);
    }
    addNewUser(postData: User): Observable<User> {
        this.data.push(postData);
        return of(postData);
    }
    getUser(id: string): Observable<User> {
        let user = this.data.find((tempUser: User) => tempUser.id === id);
        return of(user);
    }
    editUser(id: string, user: User): Observable<User> {
        let userIndex = this.data.findIndex((tempUser: User) => tempUser.id === id);
        if(userIndex !== -1){
            this.data[userIndex] = user;
        }
        return of(user);
    }
    deleteUser(id: string): Observable<User> {
        let userIndex = this.data.findIndex((tempUser: User) => tempUser.id === id);
        let user = this.data.find((tempUser: User) => tempUser.id === id);
        if(userIndex !== -1){
            this.data.splice(userIndex, 1);
        }
        return of(user);
    }

}
