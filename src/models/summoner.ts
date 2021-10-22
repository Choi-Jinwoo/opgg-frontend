import TierRank from './tierRank';

export class SummonerAttributes {
  name!: string;
  level!: number;
  previousTiers!: TierRank[];
  profileBackgroundImageUrl!: string;
  profileBorderImageUrl!: string;
  profileImageUrl!: string;
  url!: string;
  ladderRank!: {
    rank: number;
    rankPercentOfTop: number;
  };
  leagues!: {
    hasResults: boolean;
    losses: number;
    wins: number;
    tierRank: TierRank[];
  };

  constructor(summoner: SummonerAttributes) {
    this.name = summoner.name;
    this.level = summoner.level;
    this.profileBackgroundImageUrl = summoner.profileBackgroundImageUrl;
    this.profileBorderImageUrl = summoner.profileBorderImageUrl;
    this.profileImageUrl = summoner.profileImageUrl;
    this.url = summoner.url;
    this.ladderRank = summoner.ladderRank;
    this.leagues = summoner.leagues;
  }
}

class Summoner extends SummonerAttributes {
  static from(summoner: SummonerAttributes): Summoner {
    summoner.previousTiers = summoner.previousTiers.map(TierRank.from);
    summoner.leagues.tierRank = summoner.leagues.tierRank.map(TierRank.from);

    return new Summoner(summoner);
  }
}

export default Summoner;
