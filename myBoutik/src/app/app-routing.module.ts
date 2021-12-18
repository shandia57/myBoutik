import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { VestesComponent } from './pages/vestes/vestes.component';
import { PullsComponent } from './pages/pulls/pulls.component';
import { PullsDetailsComponent } from './pages/pulls/pulls-details/pulls-details.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { PontalonsComponent } from './pages/pontalons/pontalons.component';
import { ChaussuresComponent } from './pages/chaussures/chaussures.component';
import { AccessoiresComponent } from './pages/accessoires/accessoires.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminComponent } from './admin/admin/admin.component';

// admin pages
import { AdminVestesComponent } from './admin/pages/vestes/admin-vestes/admin-vestes.component';
import { UpdateVestesComponent } from './admin/pages/vestes/update-vestes/update-vestes.component';
import { AdminPullsComponent } from './admin/pages/pulls/admin-pulls/admin-pulls.component';
import { UpdatePullsComponent } from './admin/pages/pulls/update-pulls/update-pulls.component';
import { AdminTshirtsComponent } from './admin/pages/tshirts/admin-tshirts/admin-tshirts.component';
import { UpdateTshirtsComponent } from './admin/pages/tshirts/update-tshirts/update-tshirts.component';
import { AdminPontalonsComponent } from './admin/pages/pontalons/admin-pontalons/admin-pontalons.component';
import { UpdatePontalonsComponent } from './admin/pages/pontalons/update-pontalons/update-pontalons.component';
import { AdminChaussuresComponent } from './admin/pages/chaussures/admin-chaussures/admin-chaussures.component';
import { UpdateChassuresComponent } from './admin/pages/chaussures/update-chassures/update-chassures.component';
import { AdminAccessoiresComponent } from './admin/pages/accessoires/admin-accessoires/admin-accessoires.component';
import { UpdateAccessoiresComponent } from './admin/pages/accessoires/update-accessoires/update-accessoires.component';
import { AdminPromotionsComponent } from './admin/pages/promotions/admin-promotions/admin-promotions.component';
import { UpdatePromotionsComponent } from './admin/pages/promotions/update-promotions/update-promotions.component';

// 
const routes: Routes = [


  { path: '', component: HomepageComponent },
  { path: 'vestes', component: VestesComponent },
  { path: 'pulls', component: PullsComponent },
  { path: 'tshirts', component: TshirtsComponent },
  { path: 'pontalons', component: PontalonsComponent },
  { path: 'chaussures', component: ChaussuresComponent },
  { path: 'accessoires', component: AccessoiresComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'admin', component: AdminComponent },

  { path: 'pulls/:id', component: PullsDetailsComponent, pathMatch: 'full' },



  { path: 'admin/vestes', component: AdminVestesComponent },
  { path: 'admin/pulls', component: AdminPullsComponent, },
  { path: 'admin/tshirts', component: AdminTshirtsComponent },
  { path: 'admin/pontalons', component: AdminPontalonsComponent },
  { path: 'admin/chaussures', component: AdminChaussuresComponent },
  { path: 'admin/accessoires', component: AdminAccessoiresComponent },
  { path: 'admin/promotions', component: AdminPromotionsComponent },

  { path: 'admin/vestes/:id', component: UpdateVestesComponent, pathMatch: 'full' },
  { path: 'admin/pulls/:id', component: UpdatePullsComponent, pathMatch: 'full' },
  { path: 'admin/tshirts/:id', component: UpdateTshirtsComponent, pathMatch: 'full' },
  { path: 'admin/pontalons/:id', component: UpdatePontalonsComponent, pathMatch: 'full' },
  { path: 'admin/chaussures/:id', component: UpdateChassuresComponent, pathMatch: 'full' },
  { path: 'admin/accessoires/:id', component: UpdateAccessoiresComponent, pathMatch: 'full' },
  { path: 'admin/promotions/:id', component: UpdatePromotionsComponent, pathMatch: 'full' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
