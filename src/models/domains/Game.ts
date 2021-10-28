import KDACalculator from '@src/lib/Calculator/KDACalculator';
import Time from '@src/utils/time';
import KDA from '../KDA';

export type OPScores = 'ACE' | 'MVP';

export type MultiKillStrings =
  | 'Double Kill'
  | 'Triple Kill'
  | 'Quadra Kill'
  | 'Penta Kill';

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
  largestMultiKillString: MultiKillStrings;
  opScoreBadge: OPScores;
};

type WardStats = {
  sightWardsBought: number;
  visionWardsBought: number;
};

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

export type GameStats = {
  general: GeneralStats;
  ward: WardStats;
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

export enum GameTypes {
  SOLO_RANK = '솔랭',
  GENERAL = '일반',
  FREE_RANK = '자유 5:5 랭크',
  RANDOM = '무작위 총력전',
}

export type GameAttrs = {
  gameId: string;
  champion: GameChampion;
  spells: GameSpell[];
  items: GameItem[];
  createDate: number;
  gameLength: number;
  gameType: GameTypes;
  stats: GameStats;
  peak: string[];
  isWin: boolean;
};

class Game implements KDA {
  gameId: string;
  champion: GameChampion;
  spells: GameSpell[];
  items: GameItem[];
  createDate: number;
  gameLength: number;
  gameType: GameTypes;
  stats: GameStats;
  peak: string[];
  isWin: boolean;

  static from(game: GameAttrs): Game {
    return new Game(game);
  }

  constructor(game: GameAttrs) {
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

  get kdaRate(): number {
    const { kill, death, assist } = this.stats.general;

    return new KDACalculator(kill, death, assist).calculate();
  }

  get relativeTime(): string {
    return new Time(this.createDate * 1000).getRelativeString(Date.now());
  }

  get formattedGameLength(): string {
    return new Time(this.gameLength * 1000).format();
  }
}

export default Game;
