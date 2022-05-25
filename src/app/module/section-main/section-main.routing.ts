import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { MainComponent } from './main/main.component';

export const moduleRoutes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'one',
                component: ComponentOneComponent,
            },
            {
                path: 'two',
                component: ComponentTwoComponent,
            },
            {
                path: 'three',
                component: ComponentThreeComponent,
            },
            {
                path: '**', 
                redirectTo: 'main', 
                pathMatch: 'full',
            },
        ]
    }
];
