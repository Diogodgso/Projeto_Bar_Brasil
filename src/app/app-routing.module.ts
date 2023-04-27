import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoriaComponent } from './historia/historia.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { FuncionamentoComponent } from './funcionamento/funcionamento.component';
import { LoginComponent } from './account/login/login.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'about', component: HistoriaComponent},
  {path: 'products', component: CardapioComponent},
  {path: 'store', component: FuncionamentoComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
