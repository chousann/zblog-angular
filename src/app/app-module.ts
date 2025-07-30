import { CUSTOM_ELEMENTS_SCHEMA, NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { ChannellistComponent } from './admin/channellist/channellist.component';
import { ChannelviewComponent } from './admin/channelview/channelview.component';
import { AdminlayoutComponent } from './admin/common/adminlayout/adminlayout.component';
import { OauthComponent } from './admin/common/oauth/oauth.component';
import { SitesComponent } from './admin/common/sites/sites.component';
import { OptionsComponent } from './admin/options/options.component';
import { PostlistComponent } from './admin/postlist/postlist.component';
import { EditorComponent } from './common/editor/editor.component';
import { MarkdownComponent } from './common/markdown/markdown.component';
import { UploadComponent } from './common/upload/upload.component';
import { VditorComponent } from './common/vditor/vditor.component';
import { AuthorizecodeComponent } from './site/authorizecode/authorizecode.component';
import { AvatarsettingComponent } from './site/avatarsetting/avatarsetting.component';
import { ChannelComponent } from './site/channel/channel.component';
import { FooterComponent } from './site/common/footer/footer.component';
import { FrameComponent } from './site/common/frame/frame.component';
import { HeaderComponent } from './site/common/header/header.component';
import { LayoutComponent } from './site/common/layout/layout.component';
import { ListComponent } from './site/common/list/list.component';
import { PagerComponent } from './site/common/pager/pager.component';
import { PostsComponent } from './site/common/posts/posts.component';
import { RightComponent } from './site/common/right/right.component';
import { SidebarComponent } from './site/common/sidebar/sidebar.component';
import { EditingComponent } from './site/editing/editing.component';
import { IndexComponent } from './site/index/index.component';
import { LoginComponent } from './site/login/login.component';
import { SearchComponent } from './site/search/search.component';
import { TagComponent } from './site/tag/tag.component';
import { TagsComponent } from './site/tags/tags.component';
import { UserhomeComponent } from './site/userhome/userhome.component';
import { ViewComponent } from './site/view/view.component';
import { EditorDirective } from './editor.directive';
import { Ai } from './ai/ai';
import { LoadingComponent } from './common/loading/loading.component';

@NgModule({
  declarations: [
    App,
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
    AvatarsettingComponent,
    UploadComponent,
    OauthComponent,
    SearchComponent,
    AuthorizecodeComponent,
    Ai,
    LoadingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    RouterOutlet
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }