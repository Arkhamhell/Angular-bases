import { NgModule } from '@angular/core';
import { ContadorComponent } from './Components/contador/contador.component';



@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class CounterModule {

}