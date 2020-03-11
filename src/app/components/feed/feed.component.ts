import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"]
})
export class FeedComponent implements OnInit {
  posts = true;
  friends = false;
  messages = false;
  images = false;
  videos = false;

  constructor() {}

  ngOnInit() {}

  showFriendsList() {
    if (this.friends === false) {
      this.friends = !this.friends;
    }

    this.posts = false;
    this.messages = false;
    this.images = false;
    this.videos = false;
  }

  showPosts() {
    if (!this.posts) {
      this.posts = !this.posts;
    }

    this.messages = false;
    this.friends = false;
    this.images = false;
    this.videos = false;
  }

  showMessages() {
    if (this.messages === false) {
      this.messages = !this.messages;
    }

    this.posts = false;
    this.friends = false;
    this.images = false;
    this.videos = false;
  }

  showImages() {
    if (this.images === false) {
      this.images = !this.images;
    }

    this.posts = false;
    this.messages = false;
    this.friends = false;
    this.videos = false;
  }

  showVideos() {
    if (this.videos === false) {
      this.videos = !this.videos;
    }

    this.posts = false;
    this.messages = false;
    this.friends = false;
    this.images = false;
  }
}
