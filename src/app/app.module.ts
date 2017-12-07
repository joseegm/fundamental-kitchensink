import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { TableComponent } from './modules/table/table.component';
import { TableDetailsComponent } from './modules/table/tableDetails/tableDetails.component';

import { UsersService } from './services/users/users.service';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: 'table', component: TableComponent, pathMatch: 'full' },
    { path: 'table/:id', component: TableDetailsComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        WelcomeComponent,
        TableComponent,
        TableDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
    providers: [
        UsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
