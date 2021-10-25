import Time from '@src/utils/time';

export type GameChampion = {
  imageUrl: string;
  level: number;
};

export type GameSpell = {
  imageUrl: string;
};

export type GameItem = {
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

export type GamePlayer = {
  champion: GameChampion;
  summonerId: string;
  summonerName: string;
};

export type GameTeam = {
  teamId: number;
  players: GamePlayer[];
};

enum GameTypes {
  SOLO_RANK = '솔랭',
  GENERAL = '일반',
  FREE_RANK = '자유랭크',
}

export class GameAttributes {
  champion!: GameChampion;
  spells!: GameSpell[];
  items!: GameItem[];
  gameId!: string;
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

  get kda(): string {
    const { kill, death, assist } = this.stats.general;
    if (death === 0) return 'Perfect';

    return ((kill + assist) / death).toFixed(2);
  }

  get relativeTime(): string {
    return new Time(this.createDate * 1000).getRelativeString(Date.now());
  }

  get formattedGameLength(): string {
    return new Time(this.gameLength * 1000).format();
  }
}

export default Game;
