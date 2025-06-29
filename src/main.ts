import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
