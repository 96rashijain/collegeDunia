import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data from "./colleges.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  collegeData = data.default.colleges;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    console.log(this.collegeData);
  }
}
