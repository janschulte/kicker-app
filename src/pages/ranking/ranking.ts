import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Player, PlayersProvider } from '../../providers/api/players/players';

@Component({
  selector: 'page-list',
  templateUrl: 'ranking.html'
})
export class RankingPage {

  players: Player[];
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private playerApi: PlayersProvider
  ) {
    this.playerApi.getPlayers().subscribe(players => this.players = players);
  }

  playerClicked(player: Player) { }
}
