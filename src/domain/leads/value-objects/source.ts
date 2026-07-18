const ALLOWED_SOURCES = [
  "meta_ads",
  "google_ads",
  "tiktok_ads",
  "organic",
  "referral",
  "manual",
] as const;

export class Source {
  public readonly value: string;

  constructor(source: string) {
    const normalizedSource = source.trim().toLowerCase();

    if (
      !ALLOWED_SOURCES.includes(
        normalizedSource as (typeof ALLOWED_SOURCES)[number],
      )
    ) {
      throw new Error("Invalid lead source.");
    }

    this.value = normalizedSource;
  }
}
