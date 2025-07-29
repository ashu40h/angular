import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
import { provideHttpClient } from '@angular/common/http'; // ✅ ADD THIS




bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient()]

});
