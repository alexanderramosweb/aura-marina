export class CreatedAt {
  public readonly value: Date;

  constructor(date: Date = new Date()) {
    this.value = date;
  }
}
