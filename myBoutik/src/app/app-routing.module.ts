import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { VestesComponent } from './pages/vestes/vestes.component';
import { PullsComponent } from './pages/pulls/pulls.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { PontalonsComponent } from './pages/pontalons/pontalons.component';
import { ChaussuresComponent } from './pages/chaussures/chaussures.component';
import { AccessoiresComponent } from './pages/accessoires/accessoires.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AdminComponent } from './admin/admin/admin.component';


import { UpdateProductComponent } from './admin/update-product/update-product.component';





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
  { path: 'product/update/:id', component: UpdateProductComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
