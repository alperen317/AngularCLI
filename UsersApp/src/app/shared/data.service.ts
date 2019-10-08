import { User } from 'src/app/user/user.model';
import { Observable } from 'rxjs/internal/Observable';

export abstract class DataService {
    abstract fetchUsers(): Observable<User[]>;
    abstract addNewUser( postData: User ): Observable<User>;
    abstract getUser(id: string): Observable<User>;
    abstract editUser(id: string, user: User): Observable<User>;
    abstract deleteUser(id: string): Observable<User>;
}
