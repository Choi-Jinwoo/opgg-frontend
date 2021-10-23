export class TierRankAttributes {
  division!: string;
  imageUrl!: string;
  lp!: number;
  name!: string;
  season!: number;
  shortString!: string;
  string!: string;
  tier!: string;
  tierDivision!: string;
  tierRankPoint!: number;

  constructor(tierRank: TierRankAttributes) {
    this.division = tierRank.division;
    this.imageUrl = tierRank.imageUrl;
    this.lp = tierRank.lp;
    this.name = tierRank.name;
    this.season = tierRank.season;
    this.shortString = tierRank.shortString;
    this.string = tierRank.string;
    this.tier = tierRank.tier;
    this.tierDivision = tierRank.tierDivision;
    this.tierRankPoint = tierRank.tierRankPoint;
  }
}

class TierRank extends TierRankAttributes {
  static from(tierRank: TierRankAttributes): TierRank {
    return new TierRank(tierRank);
  }

  get seasonString(): string {
    return `S${this.season}`;
  }
}

export default TierRank;
