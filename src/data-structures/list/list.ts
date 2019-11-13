export default class List {
  private dataStore: unknown[];
  private listSize: number;
  public position: number;

  constructor() {
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  public append(element: unknown): void {
    this.dataStore[this.listSize] = element;
    this.listSize += 1;
  }

  public find(element: unknown): number {
    return this.dataStore.findIndex((item) => item === element);
  }

  public remove(element: unknown): boolean {
    const foundIndex = this.find(element);

    if (foundIndex > -1) {
      this.dataStore.splice(foundIndex, 1);
      this.listSize -= 1;
      return true;
    }

    return false;
  }

  public length(): number {
    return this.listSize;
  }

  public toString(): string {
    return this.dataStore.toString();
  }

  public insert(element: unknown, after: unknown): boolean {
    const insertPosition = this.find(after);
    if (insertPosition > -1) {
      this.dataStore.splice(insertPosition + 1, 0, element);
      this.listSize += 1;
      return true
    }

    return false;
  }

  public clear(): void {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.position = 0;
  }

  public contains(element: unknown): boolean {
    return this.dataStore.includes((item: unknown) => item === element)
  }

  public front(): void {
    this.position = 0;
  }

  public end(): void {
    this.position = this.listSize - 1;
  }

  public prev(): void {
    if (this.position > 0) {
      this.position -= 1;
    }
  }

  public next(): void {
    if (this.position < this.listSize - 1) {
      this.position += 1;
    }
  }

  public currPos(): number {
    return this.position;
  }
  public moveTo(position: number) {
    this.position = position;
  }

  public getElement(): unknown {
    return this.dataStore[this.position];
  }
}
