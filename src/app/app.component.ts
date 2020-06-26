import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data from "./colleges.json";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";;
import { faStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  collegeData = data.default.colleges;
  filmIcon = faStar;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    console.log(this.collegeData);
  }
}
