/// <reference path="phaser/phaser.d.ts"/>

class mainState extends Phaser.State {
    game: Phaser.Game;

    preload():void {
        super.preload();
        this.game.load.image("player","assets/player.png");
    }

    create():void {
        super.create();
        var _bgColor = '#CBCE76';
        this.stage.setBackgroundColor(_bgColor);

        var player = this.game.add.sprite(
            this.game.world.centerX,
            this.game.world.centerY,
            'player'
        );
    }

    update():void {
        super.update();
    }
}

class SimpleGame {
    game:Phaser.Game;

    constructor() {
        this.game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

        this.game.state.add('main', mainState);
        this.game.state.start('main');
    }
}

window.onload = () => {
    var game = new SimpleGame();
};
