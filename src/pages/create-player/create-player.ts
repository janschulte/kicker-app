import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PlayersProvider } from '../../providers/api/players/players';

@Component({
  selector: 'page-create-player',
  templateUrl: 'create-player.html',
})
export class CreatePlayerPage {

  public playerName: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private playerApi: PlayersProvider
  ) { }

  public createPlayer() {
    this.playerApi.createPlayer(this.playerName).subscribe(res => {
      
    });
  }

}
