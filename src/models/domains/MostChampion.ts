import UsedChampion, { UsedChampionAttrs } from './UsedChampion';

export type MostChampionAttrs = UsedChampionAttrs & {
  cs: number;
  rank: number;
};

class MostChampion extends UsedChampion {
  cs: number;
  rank: number;

  static from(mostChampion: MostChampionAttrs): MostChampion {
    return new MostChampion(mostChampion);
  }

  constructor(mostChampion: MostChampionAttrs) {
    super(mostChampion);
    this.cs = mostChampion.cs;
    this.rank = mostChampion.rank;
  }
}

export default MostChampion;
