import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})

// inject the Http instance-service inside Authentication Service
export class AuthenticationService {
  constructor(private _http: HttpClient) {}

  validateByEmail(email, password): Observable<User> {
    // API call via json-server (db.json)
    // mock server API call
    //console.log("Inside Auth service" + email + "---" + password);
    return this._http.get<User>(
      "http://localhost:3000/users?email=" + email + "&password=" + password
    );
  }
}
