export class LeadName {
  public readonly value: string;

  constructor(name: string) {
    const normalizedName = name.trim();

    if (normalizedName.length < 2) {
      throw new Error("Lead name must contain at least 2 characters.");
    }

    this.value = normalizedName;
  }
}
