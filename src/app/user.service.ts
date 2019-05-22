import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    // hit the mock json-server and fetch values from there
    return this._http.get<User[]>("http://localhost:3000/users");
  }

  // fetch the corresponding user by Id
  getUserById(userid): Observable<User> {
    return this._http.get<User>("http://localhost:3000/users/" + userid);
  }

  adUser(newUser: User): Observable<User> {
    return this._http.post<User>("http://localhost:3000/users", newUser);
  }

  deleteUser(id): Observable<{}> {
    return this._http.delete("http://localhost:3000/users/" + id);
  }

  updateUser(user: User) {
    this._http.put("http://localhost:3000/users/" + user.id, user);
  }
}
