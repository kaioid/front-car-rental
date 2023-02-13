import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfFaturaComponent } from './pdf-fatura/pdf-fatura.component';
import { ListaFaturaComponent } from './lista-fatura/lista-fatura.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';


const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [PdfFaturaComponent, ListaFaturaComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(maskConfig)
  ],
  exports: [
    PdfFaturaComponent,
    ListaFaturaComponent,
  ]
})
export class FaturaModule { }
