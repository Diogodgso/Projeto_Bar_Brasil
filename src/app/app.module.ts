import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbButtonModule, NbInputModule, NbLayoutModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HistoriaComponent } from './historia/historia.component';
import { FuncionamentoComponent } from './funcionamento/funcionamento.component';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [

    AppComponent,
    CardapioComponent,
        HistoriaComponent,
        FuncionamentoComponent,
        HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
