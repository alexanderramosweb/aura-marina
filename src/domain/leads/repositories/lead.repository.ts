import type { Lead } from "../entities/lead";

export interface LeadRepository {
  create(lead: Lead): Promise<void>;
}
