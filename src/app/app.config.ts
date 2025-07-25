import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // 👈 add this

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter([]),
    importProvidersFrom(FormsModule) // 👈 add this
  ]
};
