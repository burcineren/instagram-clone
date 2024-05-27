import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { PostsState } from './core/store/posts/posts.state';
import { NgxsModule } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { CommentState } from './core/store/comments/comments.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      NgxsModule.forRoot([PostsState,CommentState])
    ),
    provideClientHydration(),
    provideHttpClient()
  ],
};
