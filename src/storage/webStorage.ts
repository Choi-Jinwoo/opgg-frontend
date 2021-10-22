class WebStorage<T> {
  constructor(private key: string, private storage: Storage) {}

  read(): T | null {
    const json = this.storage.getItem(this.key);
    if (json === null) return null;

    return JSON.parse(json);
  }

  save(data: T): void {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  delete(): void {
    this.storage.removeItem(this.key);
  }
}

export default WebStorage;
