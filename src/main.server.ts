import { bootstrapApplication, BootstrapContext, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

//  const bootstrap = () => bootstrapApplication(AppComponent, config);

//  export default bootstrap;

export default function (context: BootstrapContext) {
  return bootstrapApplication(AppComponent, config, context);
}
