import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VestesComponent } from './pages/vestes/vestes.component';
import { PullsComponent } from './pages/pulls/pulls.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { PontalonsComponent } from './pages/pontalons/pontalons.component';
import { ChaussuresComponent } from './pages/chaussures/chaussures.component';
import { AccessoiresComponent } from './pages/accessoires/accessoires.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { PanierComponent } from './pages/panier/panier.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardProductComponent } from './layout/card-product/card-product.component';
import { AdminComponent } from './admin/admin/admin.component';


// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AdminNavComponent } from './admin/layout/admin-nav/admin-nav.component';
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
    AdminNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

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
