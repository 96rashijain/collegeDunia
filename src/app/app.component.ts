import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as data from "./colleges.json";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-solid-svg-icons";;
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  collegeData = data.default.colleges;
  filmIcon = faStar;
  tagIcon = faTag;

  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    console.log(this.collegeData);
    var counter = 0;
    $(window).scroll(function () {
      if (
        $(window).scrollTop() == $(document).height() - $(window).height() &&
        counter < 2
      ) {
        appendData();
      }
    });
    function appendData() {
      var html = "";
      for (var i = 0; i < 10; i++) {
        html +=
          '<p class="dynamic">Dynamic Data :  This is test data.<br />Next line.</p>';
      }
      $("#myScroll").append(html);
      counter++;

      if (counter == 2)
        $("#myScroll").append(
          '<button id="uniqueButton" style="margin-left: 50%; background-color: powderblue;">Click</button><br /><br />'
        );
    }
  }
}
