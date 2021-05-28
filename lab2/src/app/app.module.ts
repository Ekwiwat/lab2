import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import { CatalogModule } from './catalog/catalog.module';
import { ProductDetailComponent } from './catalog/product-detail/product-detail.component';
import { ProductListComponent } from './catalog/product-list/product-list.component';
import { HomeModule } from './home/home.module';
import { MainContentComponent } from './home/main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainContentComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
  }, {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    HomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }



