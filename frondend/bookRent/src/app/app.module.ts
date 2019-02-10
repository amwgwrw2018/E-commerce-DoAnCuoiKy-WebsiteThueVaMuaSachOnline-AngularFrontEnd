import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BookSliderComponent } from './book-slider/book-slider.component';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component';
import { BookCarousel1Component } from './book-carousel1/book-carousel1.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';
import { HttpClientModule }    from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { CookieService } from 'ngx-cookie-service';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { BookTypeListMenuComponent } from './book-type-list-menu/book-type-list-menu.component';
import { WebInfoLogoComponent } from './web-info-logo/web-info-logo.component';
import { IntroducePageComponent } from './introduce-page/introduce-page.component';
import { DataTablesModule } from 'angular-datatables';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserTransactionHistoryComponent } from './user-transaction-history/user-transaction-history.component';
import { ChapterUploadPageComponent } from './chapter-upload-page/chapter-upload-page.component';
import { OwlModule } from 'ngx-owl-carousel';
import { AuthorAddNewBookFormComponent } from './author-add-new-book-form/author-add-new-book-form.component';
import { InaccessiblePageComponent } from './inaccessible-page/inaccessible-page.component';
import { BookDetailForBuyingAndRentComponent } from './book-detail-for-buying-and-rent/book-detail-for-buying-and-rent.component';
import { SuccessfulPurchasedPageComponent } from './successful-purchased-page/successful-purchased-page.component';
import { BookByBookTypePageComponent } from './book-by-book-type-page/book-by-book-type-page.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BookSliderComponent,
    TopMenuBarComponent,
    BookCarousel1Component,
    BookDetailPageComponent,
    LoginFormComponent,
    PageFooterComponent,
    MainPageContentComponent,
    SignUpFormComponent,
    BookTypeListMenuComponent,
    WebInfoLogoComponent,
    IntroducePageComponent,
 
    PaymentFormComponent,
    UserDetailComponent,
    UserTransactionHistoryComponent,
    ChapterUploadPageComponent,
    AuthorAddNewBookFormComponent,
    InaccessiblePageComponent,
    BookDetailForBuyingAndRentComponent,
    SuccessfulPurchasedPageComponent,
    BookByBookTypePageComponent,
    SearchFieldComponent
  ],
  imports: [
  DataTablesModule,
  HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule,
    OwlModule,
    RouterModule.forRoot([])
  ],
  providers: [CookieService,


  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
