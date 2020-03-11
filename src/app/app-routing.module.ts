import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./components/index/index.component";
import { FeedComponent } from "./components/feed/feed.component";
import { TimelineComponent } from "./components/timeline/timeline.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "feed", component: FeedComponent },
  { path: "timeline", component: TimelineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
