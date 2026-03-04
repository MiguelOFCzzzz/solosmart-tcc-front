import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// O import aponta para o novo nome do arquivo .page.ts
import { SoloIAPage } from './soloia.page';

const routes: Routes = [
  {
    path: '',
    component: SoloIAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoloIAPageRoutingModule {}