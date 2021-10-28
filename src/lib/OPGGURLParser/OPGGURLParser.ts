/**
 * @description opgg-static URL 파싱 라이브러리
 */
class OPGGURLParser {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  parseChampion(): string {
    const regexp = new RegExp(/\/\w+(?=.png)/);
    const matchResult = this.url.match(regexp);

    if (matchResult === null) return '';

    return matchResult[0];
  }
}

export default OPGGURLParser;
