export class Phone {
  public readonly value: string;

  constructor(phone: string) {
    const normalizedPhone = phone.trim();

    if (normalizedPhone.length === 0) {
      throw new Error("Phone is required.");
    }

    this.value = normalizedPhone;
  }
}
