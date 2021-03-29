import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { DeactivateConfirmComponent } from './components/deactivate-confirm/deactivate-confirm.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'compose',
    component: ComposeComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ComposeComponent,
    DeactivateConfirmComponent,
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
