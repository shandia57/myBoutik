import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
// Pages
import { AppComponent } from './app.component';
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
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardProductComponent } from './layout/card-product/card-product.component';

import { CreateProductComponent } from './admin/create-product/create-product.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';

// admin
import { AdminComponent } from './admin/admin/admin.component';
import { AdminProductComponent } from './layout/admin/admin-product/admin-product.component';
// admin Pages
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


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    VestesComponent,
    PullsComponent,
    TshirtsComponent,
    PontalonsComponent,
    ChaussuresComponent,
    AccessoiresComponent,
    PromotionsComponent,
    ConnexionComponent,
    PanierComponent,
    HomepageComponent,
    CardProductComponent,
    AdminComponent,
    AdminProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    AdminVestesComponent,
    UpdateVestesComponent,
    AdminTshirtsComponent,
    UpdateTshirtsComponent,
    AdminPontalonsComponent,
    UpdatePontalonsComponent,
    AdminChaussuresComponent,
    UpdateChassuresComponent,
    AdminAccessoiresComponent,
    UpdateAccessoiresComponent,
    AdminPromotionsComponent,
    UpdatePromotionsComponent,
    AdminPullsComponent,
    UpdatePullsComponent,
    PullsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,


    // Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
