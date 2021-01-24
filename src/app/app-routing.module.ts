import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { AdminlayoutComponent } from './admin/common/adminlayout/adminlayout.component';
import { ChannelComponent } from './site/channel/channel.component';
import { ChannellistComponent } from './admin/channellist/channellist.component';
import { ChannelviewComponent } from './admin/channelview/channelview.component';
import { EditingComponent } from './site/editing/editing.component';
import { FooterComponent } from './site/common/footer/footer.component';
import { HeaderComponent } from './site/common/header/header.component';
import { IndexComponent } from './site/index/index.component';
import { LayoutComponent } from './site/common/layout/layout.component';
import { LoginComponent } from './site/login/login.component';
import { OptionsComponent } from './admin/options/options.component';
import { PostlistComponent } from './admin/postlist/postlist.component';
import { TagComponent } from './site/tag/tag.component';
import { TagsComponent } from './site/tags/tags.component';
import { ViewComponent } from './site/view/view.component';
import { FrameComponent } from './site/common/frame/frame.component';

const routes: Routes = [
  {
    path: 'adminedit', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: AdmineditComponent
      }
    ]
  },
  {
    path: 'channelview', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: ChannelviewComponent
      }
    ]
  },
  {
    path: 'admin', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: AdminComponent
      }
    ]
  },
  {
    path: 'options', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: OptionsComponent
      }
    ]
  },
  {
    path: 'channels', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: ChannellistComponent
      }
    ]
  },
  {
    path: 'posts', component: AdminlayoutComponent,
    children: [
      {
        path: '', outlet: 'content',
        component: PostlistComponent
      }
    ]
  },
  {
    path: 'login', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: LoginComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: IndexComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'view', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: ViewComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'editing', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: EditingComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'channel', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: ChannelComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'tags', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: TagsComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'tag', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: TagComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'frame', component: FrameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
