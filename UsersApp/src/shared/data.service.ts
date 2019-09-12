import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user/user.model';

@Injectable({providedIn: 'root'})
export class DataService {

    constructor(private http: HttpClient) {}

    fetchUsers() {
        return this.http.get<User[]>('http://5d78b288a8c27100149863f8.mockapi.io/users');
    }

    addNewUser( postData ) {
        console.log(postData);
        return this.http.post<User>('http://5d78b288a8c27100149863f8.mockapi.io/users', postData);
    }

    getUser(id: string) {

        return this.http.get<User>('http://5d78b288a8c27100149863f8.mockapi.io/users/' + id);
    }

    editUser(id: string, user: User) {
        return this.http.put<User>('http://5d78b288a8c27100149863f8.mockapi.io/users/' + id, user);
    }
    deleteUser(id: string) {
        return this.http.delete<User>('http://5d78b288a8c27100149863f8.mockapi.io/users/'+ id);
    }

}
