import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { AdmineditComponent } from './admin/adminedit/adminedit.component';
import { ChannellistComponent } from './admin/channellist/channellist.component';
import { ChannelviewComponent } from './admin/channelview/channelview.component';
import { AdminlayoutComponent } from './admin/common/adminlayout/adminlayout.component';
import { OptionsComponent } from './admin/options/options.component';
import { PostlistComponent } from './admin/postlist/postlist.component';
import { AuthorizecodeComponent } from './site/authorizecode/authorizecode.component';
import { AvatarsettingComponent } from './site/avatarsetting/avatarsetting.component';
import { ChannelComponent } from './site/channel/channel.component';
import { FooterComponent } from './site/common/footer/footer.component';
import { FrameComponent } from './site/common/frame/frame.component';
import { HeaderComponent } from './site/common/header/header.component';
import { LayoutComponent } from './site/common/layout/layout.component';
import { EditingComponent } from './site/editing/editing.component';
import { IndexComponent } from './site/index/index.component';
import { LoginComponent } from './site/login/login.component';
import { SearchComponent } from './site/search/search.component';
import { TagComponent } from './site/tag/tag.component';
import { TagsComponent } from './site/tags/tags.component';
import { UserhomeComponent } from './site/userhome/userhome.component';
import { ViewComponent } from './site/view/view.component';
import { Ai } from './ai/ai';
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
        path: '', outlet: 'content',
        component: LoginComponent
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
    path: 'search', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: SearchComponent
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
  },
  {
    path: 'userhome', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: UserhomeComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'avatarsetting', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: AvatarsettingComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'authorizecode', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: AuthorizecodeComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },
  {
    path: 'edit', component: LayoutComponent,
    children: [
      {
        path: '', outlet: 'header',
        component: HeaderComponent
      },
      {
        path: '', outlet: 'content',
        component: AdmineditComponent
      },
      {
        path: '', outlet: 'footer',
        component: FooterComponent
      }
    ]
  },{
    path: 'ai', component: Ai
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
