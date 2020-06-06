import { NgModule } from '@angular/core';
import {WelcomeComponent} from './welcome.component'
import 'rxjs/operators'
import { WelcomeService } from './welcome.service';

@NgModule({
    imports: [],
    declarations: [],
    exports: [WelcomeComponent],
    entryComponents: [],
    providers: [WelcomeService]
})
export class MotogpMdodule { }