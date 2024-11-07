import { Routes } from "@angular/router";
import { HeaderPage } from './header.page';

export const headerRoutes: Routes = [
    {
      path: '',
      component: HeaderPage,
      children: [
        {
          path: 'home',
          title: '学－home',
          loadComponent: () => import('../home/home.page').then( m => m.HomePage)
        },
        {
          path: 'hiragana',
          title: '平仮名－hiragana',
          loadComponent: () => import('../hiragana/hiragana.page').then( m => m.HiraganaPage)
        },
        {
          path: 'katakana',
          title: '片仮名－katakana',
          loadComponent: () => import('../katakana/katakana.page').then( m => m.KatakanaPage)
        },
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full',
        },
      ],
    },
  ];