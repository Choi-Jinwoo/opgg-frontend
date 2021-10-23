class Querystring {
  get(key: string): string | null {
    const query = new URLSearchParams(location.search);

    return query.get(key);
  }
}

export default new Querystring();
