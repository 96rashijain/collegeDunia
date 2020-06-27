import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data from "./colleges.json";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import * as $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  collegeData = data.default.colleges;
  filmIcon = faStar;
  tagIcon = faTag;

  size = this.collegeData.length;
  number: number[] = [0, 2, 4, 6, 8];
  anyLeftColleges = true;
  collegeShow = "";

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    console.log(this.collegeData);
    var counter = 0;
    var scrollLoad = true;

    $(window).scroll(
      function (event) {
        let div = $(this).get(0);
        if (
          scrollLoad &&
          $(document).height() - $(window).height() - $(window).scrollTop() <=
            800
        ) {
          if (this.number.length !== 25) {
            const x: number = this.number.length;
            for (let i = 2 * x; i < 2 * x + 9; i = i + 2) {
              this.number.push(i);
            }
          }
          if (this.number.length === 25) {
            this.anyLeftColleges = false;
            this.collegeShow = "No more colleges to show";
          }
        }
      }.bind(this)
    );
  }
}
