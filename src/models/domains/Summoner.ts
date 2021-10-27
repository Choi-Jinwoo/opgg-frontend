type LadderRank = {
  rank: number;
  rankPercentOfTop: number;
};

type League = {
  hasResult: boolean;
  losses: number;
  wins: number;
  tierRank: TierRank;
};

type TierRank = {
  division: string;
  imageUrl: string;
  lp: number;
  name: string;
  season: number;
  shortString: string;
  string: string;
  tier: string;
  tierDivision: string;
  tierRankPoint: number;
};

export type SummonerAttrs = {
  name: string;
  level: number;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
  ladderRank: LadderRank;
  leagues: League[];
};

class Summoner {
  name: string;
  level: number;
  previousTiers: TierRank[];
  profileBackgroundImageUrl: string;
  profileBorderImageUrl: string;
  profileImageUrl: string;
  url: string;
  ladderRank: LadderRank;
  leagues: League[];

  static from(summoner: SummonerAttrs): Summoner {
    return new Summoner(summoner);
  }

  constructor(summoner: SummonerAttrs) {
    this.name = summoner.name;
    this.level = summoner.level;
    this.profileBackgroundImageUrl = summoner.profileBackgroundImageUrl;
    this.profileBorderImageUrl = summoner.profileBorderImageUrl;
    this.previousTiers = summoner.previousTiers;
    this.profileImageUrl = summoner.profileImageUrl;
    this.url = summoner.url;
    this.ladderRank = summoner.ladderRank;
    this.leagues = summoner.leagues;
  }
}

export default Summoner;
