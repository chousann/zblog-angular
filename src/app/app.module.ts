import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './site/index/index.component';
import { LayoutComponent } from './site/common/layout/layout.component';
import { HeaderComponent } from './site/common/header/header.component';
import { FooterComponent } from './site/common/footer/footer.component';
import { LoginComponent } from './site/login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RightComponent } from './site/common/right/right.component';
import { PostsComponent } from './site/common/posts/posts.component';
import { ViewComponent } from './site/view/view.component';
import { EditingComponent } from './site/editing/editing.component';
import { MarkdownComponent } from './common/markdown/markdown.component';
import { LocalstorageService } from './service/localstorage/localstorage.service';
import { AccountProfile } from './model/AccountProfile';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminlayoutComponent } from './admin/common/adminlayout/adminlayout.component';
import { PostlistComponent } from './admin/postlist/postlist.component';
import { ChannellistComponent } from './admin/channellist/channellist.component';
import { ChannelComponent } from './site/channel/channel.component';
import { TagsComponent } from './site/tags/tags.component';
import { TagComponent } from './site/tag/tag.component';
import { ListComponent } from './site/common/list/list.component';
import { EditorComponent } from './common/editor/editor.component';
import { EditorDirective } from './editor.directive';
import { VditorComponent } from './common/vditor/vditor.component';
import { OptionsComponent } from './admin/options/options.component';
import { SitesComponent } from './admin/common/sites/sites.component';
import { ChannelviewComponent } from './admin/channelview/channelview.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { FrameComponent } from './site/common/frame/frame.component';
import { UserhomeComponent } from './site/userhome/userhome.component';
import { SidebarComponent } from './site/common/sidebar/sidebar.component';
import { PagerComponent } from './site/common/pager/pager.component';
import { PagelinkComponent } from './site/common/pagelink/pagelink.component';
import { AvatarsettingComponent } from './site/avatarsetting/avatarsetting.component';
import { UploadComponent } from './common/upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RightComponent,
    PostsComponent,
    ViewComponent,
    EditingComponent,
    MarkdownComponent,
    AdminComponent,
    AdminlayoutComponent,
    PostlistComponent,
    ChannellistComponent,
    ChannelComponent,
    TagsComponent,
    TagComponent,
    ListComponent,
    EditorComponent,
    EditorDirective,
    VditorComponent,
    OptionsComponent,
    SitesComponent,
    ChannelviewComponent,
    AdmineditComponent,
    FrameComponent,
    UserhomeComponent,
    SidebarComponent,
    PagerComponent,
    PagelinkComponent,
    AvatarsettingComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
