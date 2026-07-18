import { Lead } from "../../../domain/leads/entities/lead";
import type { LeadRepository } from "../../../domain/leads/repositories/lead.repository";

export class InMemoryLeadRepository implements LeadRepository {
  async create(lead: Lead): Promise<void> {
    console.log("========== NUEVO LEAD ==========");

    console.log("Nombre:", lead.name.value);

    console.log("Email:", lead.email.value);

    console.log("Teléfono:", lead.phone.value);

    console.log("Source:", lead.source.value);

    console.log("Fecha de creación:", lead.createdAt.value);

    console.log("===============================");
  }
}
