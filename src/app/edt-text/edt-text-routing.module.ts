import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdtTextPage } from './edt-text.page';

const routes: Routes = [
  {
    path: '',
    component: EdtTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdtTextPageRoutingModule {}
