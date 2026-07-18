import type { CreateLeadDTO } from "../dtos/create-lead.dto";
import { Lead } from "../../../domain/leads/entities/lead";
import { LeadName } from "../../../domain/leads/value-objects/lead-name";
import { Email } from "../../../domain/leads/value-objects/email";
import { Phone } from "../../../domain/leads/value-objects/phone";
import { Source } from "../../../domain/leads/value-objects/source";
import type { LeadRepository } from "../../../domain/leads/repositories/lead.repository";

export class CreateLeadUseCase {
  constructor(private readonly leadRepository: LeadRepository) {}

  async execute(data: CreateLeadDTO) {
    const leadName = new LeadName(data.name);

    const email = new Email(data.email);

    const phone = new Phone(data.phone);

    const source = new Source(data.source);

    const lead = new Lead(leadName, email, phone, source);

    await this.leadRepository.create(lead);

    return {
      success: true,
    };
  }
}
