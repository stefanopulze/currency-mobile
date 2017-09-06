import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';

import {AppComponent} from './app.component';
import {AppStorage} from './_helpers/app-storage';
import {GlobalErrorHandler} from './_helpers/globalErrorHandler.handler';
import {AuthRequestOptions} from './_helpers/authRequestOptions';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {ProfileComponent} from './page/profile/profile.component';
import {AuthService} from './service/auth.service';
import {routing} from './app.routing';
import { ExpenceComponent } from './page/expence/expence.component';
import {TransactionService} from './service/transaction.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    ExpenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppStorage,
    AuthService,
    TransactionService,
    { provide: ErrorHandler,  useClass: GlobalErrorHandler },
    {
      provide: RequestOptions,
      deps: [AppStorage],
      useFactory: AuthRequestFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function AuthRequestFactory(storage: AppStorage) {
  return new AuthRequestOptions(storage);
}
