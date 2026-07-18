export class Email {
  public readonly value: string;

  constructor(email: string) {
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail.includes("@")) {
      throw new Error("Invalid email.");
    }

    this.value = normalizedEmail;
  }
}
