import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './modules/menu/menu.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { TableComponent } from './modules/table/table.component';
import { CardsComponent } from './modules/cards/cards.component';
import { TreeComponent } from './modules/tree/tree.component';
import { UserDetailsComponent } from './modules/userDetails/userDetails.component';

import { DataService } from './services/data.service';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent, pathMatch: 'full' },
    { path: 'table', component: TableComponent, pathMatch: 'full' },
    { path: 'cards', component: CardsComponent, pathMatch: 'full' },
    { path: 'tree', component: TreeComponent, pathMatch: 'full' },
    { path: ':componentSlug/:id', component: UserDetailsComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        WelcomeComponent,
        TableComponent,
        CardsComponent,
        TreeComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
