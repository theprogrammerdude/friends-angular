import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { TooltipModule } from "ng2-tooltip-directive";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { IndexComponent } from "./components/index/index.component";
import { FeedComponent } from "./components/feed/feed.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { FriendlistComponent } from "./components/friendlist/friendlist.component";
import { PostContentComponent } from "./components/post-content/post-content.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { ImagesComponent } from "./components/images/images.component";
import { VideosComponent } from "./components/videos/videos.component";
import { TimelinePostsComponent } from "./components/timeline-posts/timeline-posts.component";
import { AboutComponent } from "./components/about/about.component";
import { AlbumComponent } from "./components/album/album.component";
import { TimelineFriendsComponent } from "./components/timeline-friends/timeline-friends.component";
import { CreatePostComponent } from './components/create-post/create-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FeedComponent,
    TimelineComponent,
    FriendlistComponent,
    PostContentComponent,
    MessagesComponent,
    ImagesComponent,
    VideosComponent,
    TimelinePostsComponent,
    AboutComponent,
    AlbumComponent,
    TimelineFriendsComponent,
    CreatePostComponent
  ],
  imports: [BrowserModule, AppRoutingModule, TooltipModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
