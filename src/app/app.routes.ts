import { Routes } from '@angular/router';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { DeleteproductComponent } from './pages/deleteproduct/deleteproduct.component';
import { ViewallComponent } from './pages/viewall/viewall.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path:"add",
        component :AddproductComponent
    },
    {
        path :"update",
        component :EditproductComponent
    },
    {
        path:"delete",
        component:DeleteproductComponent
    },
    {
        path:"view-all",
        component : ViewallComponent
    },
    { path: '', component: HomeComponent }  // 👈 Add this as default route

];
