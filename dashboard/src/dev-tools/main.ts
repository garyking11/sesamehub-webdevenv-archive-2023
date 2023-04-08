import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ToolbarModule } from './dev-tools.module';
import { ResetNavHtml } from './services/dev-tools-sidebar.service';

//noinspection TypeScriptValidateTypes
platformBrowserDynamic()
    .bootstrapModule(
        ToolbarModule,
    )
    .catch(err => console.error(err));
