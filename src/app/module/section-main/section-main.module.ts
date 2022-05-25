import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { moduleRoutes } from './section-main.routing';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forChild(moduleRoutes),
    CommonModule
  ],
  providers: [],
  exports: [
    RouterModule,
  ],
})
export class SectionMainModule { 
  
  constructor() {
  }
  
}
