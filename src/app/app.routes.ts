import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PagesaboutComponent } from './pagesabout/pagesabout.component';
import { SegundapaginaComponent } from './segundapagina/segundapagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { TercerapaginaComponent } from './tercerapagina/tercerapagina.component';
import { CuartapaginaComponent } from './cuartapagina/cuartapagina.component';

export const routes: Routes = [

    {path: "", component:InicioComponent},
    {path: "inicio", component:InicioComponent},
    {path: "Gatote", component:SegundapaginaComponent},
    {path: "MasGatos", component:TercerapaginaComponent},
    {path: "Perro", component:CuartapaginaComponent}
];
