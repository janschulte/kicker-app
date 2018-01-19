import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SettingsProvider } from '../../settings/settings';
import { Observable } from 'rxjs/Rx';

const testPlayer: Player[] = [
  {
    name: 'Looser',
    eloSolo: 12,
    eloTeam: 345,
    goalsGot: 12312,
    goalsShot: 0
  },
  {
    name: 'Großmeister',
    eloSolo: 2345,
    eloTeam: 3454,
    goalsGot: 12,
    goalsShot: 24535
  }
]

@Injectable()
export class PlayersProvider {

  constructor(
    public http: HttpClient,
    private settings: SettingsProvider
  ) { }

  getPlayers(): Observable<Player[]> {
    // return this.http.get<Player[]>(this.settings.settings.url);
    return Observable.of(testPlayer);
  }

  createPlayer(name: string): Observable<Player> {
    // return this.http.post<Player>(this.settings.settings.url, { name });
    const player: Player = {
      eloSolo: 1000,
      eloTeam: 1000,
      goalsGot: 0,
      goalsShot: 0,
      name
    }
    testPlayer.push(player);
    return Observable.of(player);
  }

}

export interface Player {
  name: string;
  eloSolo?: number;
  eloTeam?: number;
  goalsShot?: number;
  goalsGot?: number;
}