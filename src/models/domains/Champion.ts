export type ChampionAttrs = {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
};

class Champion {
  id: number;
  key: string;
  name: string;
  imageUrl: string;

  constructor(champion: ChampionAttrs) {
    this.id = champion.id;
    this.key = champion.key;
    this.name = champion.name;
    this.imageUrl = champion.imageUrl;
  }
}

export default Champion;
