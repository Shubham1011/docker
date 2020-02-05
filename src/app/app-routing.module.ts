import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { AboutComponent } from './about/about.component';
import { ApostComponent } from './apost/apost.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FoundComponent } from './found/found.component';


const routes: Routes = [
  {
    path:'',
    component:ApostComponent,
    pathMatch:'full'
  },
  {
    path:'addpost',
    component:AddpostComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'post',
    component:ApostComponent
  },
  {
    path:'found/:id',
    component:FoundComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[AddpostComponent,AboutComponent,ApostComponent,PagenotfoundComponent,FoundComponent]