import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SettingsProvider } from '../../settings/settings';
import { Observable } from 'rxjs/Observable';
import { Player } from '../players/players';

@Injectable()
export class GamesProvider {

  constructor(
    private http: HttpClient,
    private settings: SettingsProvider
  ) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.settings.settings.url);
  }

  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(this.settings.settings.url, game);
  }
}

export interface Game {
  date: Date;
  homeGoals: number;
  awayGoals: number;
  homePlayerOne: Player;
  awayPlayerOne: Player;
}

export interface TwoOnTwoGame extends Game {
  homePlayerTwo: Player;
  awayPlayerTwo: Player;
}