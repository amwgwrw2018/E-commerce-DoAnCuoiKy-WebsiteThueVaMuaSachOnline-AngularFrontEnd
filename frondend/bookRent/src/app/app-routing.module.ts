import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {BookDetailPageComponent} from "./book-detail-page/book-detail-page.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {MainPageContentComponent} from "./main-page-content/main-page-content.component";
import {SignUpFormComponent} from "./sign-up-form/sign-up-form.component";
import {BookByBookTypePageComponent} from "./book-by-book-type-page/book-by-book-type-page.component";
import {AuthGuardService} from "./auth-guard.service";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UserTransactionHistoryComponent} from "./user-transaction-history/user-transaction-history.component";
import  {ChapterUploadPageComponent} from "./chapter-upload-page/chapter-upload-page.component";
import{AuthorAddNewBookFormComponent} from "./author-add-new-book-form/author-add-new-book-form.component";
import{CheckRoleAuthorGuardGuard} from "./check-role-author-guard.guard";
import {BookDetailForBuyingAndRentComponent} from "./book-detail-for-buying-and-rent/book-detail-for-buying-and-rent.component";
import {InaccessiblePageComponent} from "./inaccessible-page/inaccessible-page.component";
import {SuccessfulPurchasedPageComponent} from "./successful-purchased-page/successful-purchased-page.component";
import {IntroducePageComponent} from "./introduce-page/introduce-page.component";
const routes: Routes = [
    {path: '', component: MainPageContentComponent, pathMatch: 'full'},
  { path: 'bookDetail/:id', component: BookDetailPageComponent },
  { path: 'login', component: LoginFormComponent },
 {path:'signUp',component:SignUpFormComponent},
{path:'introduction',component:IntroducePageComponent},
 {path:'userDetail/:id',component:UserDetailComponent},
 {path:'userTransactionHistory/:id',component:UserTransactionHistoryComponent},
 {path:'chapterUpload/:id',component:ChapterUploadPageComponent},
 {path:'addNewBook',component:AuthorAddNewBookFormComponent,canActivate: [CheckRoleAuthorGuardGuard]},
 {path:'bookPurchasedDetail/:id',component:BookDetailForBuyingAndRentComponent},
 {path:'inaccessiblePage',component:InaccessiblePageComponent},
 {path:'SuccessfulPurchased',component:SuccessfulPurchasedPageComponent},
 {path:'bookByBookType/:bookTypeId',component:BookByBookTypePageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
   providers: [
    AuthGuardService,
    CheckRoleAuthorGuardGuard
  ]
})
export class AppRoutingModule { 


}
