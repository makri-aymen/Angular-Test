import {Route} from '@angular/router';
import { AppComponent } from './app.component';
// import { SectionMainModule } from './module/section-main/section-main.module';

export const appRoutes: Route[] = [

    //this for redirecting the user
    {path: '', redirectTo: 'app', pathMatch: 'full'},

    {
        path: 'app',
        loadChildren: () => import('src/app/module/section-main/section-main.module').then(m => m.SectionMainModule),
        // children: [
        //     {
        //         path: 'sectionMain',
        //         loadChildren: () => import('src/app/module/section-main/section-main.module').then(m => m.SectionMainModule),
        //     },
        //     {
        //         path: 'sectionOne',
        //         loadChildren: () => import('src/app/module/section-one/section-one.module').then(m => m.SectionOneModule),
        //     },
        //     {
        //         path: 'sectionTwo',
        //         loadChildren: () => import('src/app/module/section-two/section-two.module').then(m => m.SectionTwoModule),
        //     }
        // ]
    },

    //this used for weird routs 
    {path: '**', redirectTo: ''},
];
