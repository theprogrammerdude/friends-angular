import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  login = false;

  constructor() {}

  ngOnInit() {}

  showLogin() {
    this.login = !this.login;
  }
}
