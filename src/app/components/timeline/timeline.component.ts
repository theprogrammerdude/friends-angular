import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"]
})
export class TimelineComponent implements OnInit {
  about = false;
  posts = true;
  album = false;
  friends = false;
  clicked = true;

  constructor() {}

  ngOnInit() {}

  showPosts() {
    if (!this.posts) {
      this.posts = !this.posts;
    }

    this.clicked;

    this.album = false;
    this.about = false;
    this.friends = false;
  }

  showAbout() {
    if (this.about === false) {
      this.about = !this.about;
    }

    this.posts = false;
    this.album = false;
    this.friends = false;
  }

  showAlbum() {
    if (this.album === false) {
      this.album = !this.album;
    }

    this.about = false;
    this.posts = false;
    this.friends = false;
  }

  showFriends() {
    if (this.friends === false) {
      this.friends = !this.friends;
    }

    this.about = false;
    this.posts = false;
    this.album = false;
  }
}
