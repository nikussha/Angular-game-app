import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

let arr = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [arr],
  exports: [arr],
})
export class MaterialModule {}
