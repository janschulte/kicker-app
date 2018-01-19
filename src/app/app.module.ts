import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AddGamePage } from '../pages/add-game/add-game';
import { RankingPage } from '../pages/ranking/ranking';
import { GamesProvider } from '../providers/api/games/games';
import { PlayersProvider } from '../providers/api/players/players';
import { SettingsProvider } from '../providers/settings/settings';
import { MyApp } from './app.component';
import { CreatePlayerPage } from '../pages/create-player/create-player';

@NgModule({
  declarations: [
    MyApp,
    AddGamePage,
    RankingPage,
    CreatePlayerPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddGamePage,
    RankingPage,
    CreatePlayerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PlayersProvider,
    SettingsProvider,
    GamesProvider
  ]
})
export class AppModule { }
