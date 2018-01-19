import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Player, PlayersProvider } from '../../providers/api/players/players';
import { GamesProvider, TwoOnTwoGame, Game } from '../../providers/api/games/games';

@Component({
  selector: 'page-add-game',
  templateUrl: 'add-game.html'
})
export class AddGamePage {

  public players: Player[];
  public gameType: string;
  public playerOneHome: Player;
  public playerTwoHome: Player;
  public playerOneAway: Player;
  public playerTwoAway: Player;
  public homeGoals: number = 0;
  public awayGoals: number = 0;

  constructor(
    public navCtrl: NavController,
    private playerApi: PlayersProvider,
    private gameApi: GamesProvider
  ) {
    this.playerApi.getPlayers().subscribe(players => {
      this.players = players;
    });
  }

  public confirmGame() {
    let game: Game = {
      awayGoals: this.awayGoals,
      homeGoals: this.homeGoals,
      date: new Date(),
      homePlayerOne: this.playerOneHome,
      awayPlayerOne: this.playerOneAway 
    };
    if (this.gameType === 'two') {
      game = {
        homePlayerTwo: this.playerTwoHome,
        awayPlayerTwo: this.playerTwoAway
      } as TwoOnTwoGame;
    }
    this.gameApi.createGame(game);
  }

}
