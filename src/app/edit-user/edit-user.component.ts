import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { User } from "../user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "dream-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  user: User;

  constructor(private _serv: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    // to extract the route parameter,
    // snapshot = static current information about the activated route
    // paramMap = key / value pair of all the route parameters
    let userid = this.route.snapshot.paramMap.get("userid");

    // fetch the user from server by ID
    this._serv.getUserById(userid).subscribe(response => {
      this.user = response;

      console.log(this.user);
    });
  }
}
