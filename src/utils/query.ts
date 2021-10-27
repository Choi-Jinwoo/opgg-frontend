class Querystring {
  get(key: string, search: string): string | null {
    const query = new URLSearchParams(search);

    return query.get(key);
  }
}

export default new Querystring();
