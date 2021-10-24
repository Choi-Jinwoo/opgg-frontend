type Champion = {
  imageUrl: string;
  level: number;
};

type Spell = {
  imageUrl: string;
};

type Item = {
  imageUrl: string;
};

type GeneralStats = {
  kill: number;
  death: number;
  assist: number;
  kdaString: string;
  cs: number;
  csPerMin: number;
  contributionForKillRate: string;
  goldEarned: number;
  totalDamageDealtToChampions: number;
  largestMultiKillString: string;
  opScoreBadge: string;
};

type WardStats = {
  sightWardsBought: number;
  visionWardsBought: number;
};

enum GameTypes {
  SOLO_RANK = '솔랭',
  GENERAL = '일반',
  FREE_RANK = '자유랭크',
}

export class GameAttributes {
  champion!: Champion;
  spells!: Spell[];
  items!: Item[];
  gameId!: number;
  createDate!: number;
  gameLength!: number;
  gameType!: GameTypes;
  stats!: {
    general: GeneralStats;
    ward: WardStats;
  };
  peak!: string[];
  isWin!: boolean;

  constructor(game: GameAttributes) {
    this.champion = game.champion;
    this.spells = game.spells;
    this.items = game.items;
    this.gameId = game.gameId;
    this.createDate = game.createDate;
    this.gameLength = game.gameLength;
    this.gameType = game.gameType;
    this.stats = game.stats;
    this.peak = game.peak;
    this.isWin = game.isWin;
  }
}

class Game extends GameAttributes {
  static from(game: GameAttributes): Game {
    return new Game(game);
  }
}

export default Game;
