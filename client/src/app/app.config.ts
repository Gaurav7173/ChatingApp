import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { InitService } from '../core/services/init-service';
import { lastValueFrom } from 'rxjs';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from '../core/interceptors/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    
    provideRouter(routes,withViewTransitions()),
    provideHttpClient(withInterceptors([errorInterceptor])),

    provideAppInitializer(async()=>{
      const initService=inject(InitService);
      return new Promise<void>((resolve)=>{
        setTimeout(()=>{

          try{
        return lastValueFrom(initService.init());

      }finally{
        const splash=document.getElementById('initial-splash');
        if(splash){
          splash.remove();
        }
        resolve();
        
      }

        },500)


      })
      
    })
  ]
};
function providerHttpclient(arg0: HttpFeature<HttpFeatureKind.Interceptors>): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

