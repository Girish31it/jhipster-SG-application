import { NgModule } from '@angular/core';

import { JhipsterSgAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterSgAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterSgAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSgAppSharedCommonModule {}
