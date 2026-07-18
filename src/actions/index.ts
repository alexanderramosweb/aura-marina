import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { InMemoryLeadRepository } from "../infrastructure/leads/repositories/in-memory-lead.repository";

import { CreateLeadUseCase } from "../application/leads/use-cases/create-lead.use-case";

export const server = {
  createLead: defineAction({
    accept: "form",

    input: z.object({
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      source: z.string(),
    }),

    async handler(input) {
      const leadRepository = new InMemoryLeadRepository();

      const createLeadUseCase = new CreateLeadUseCase(leadRepository);

      return createLeadUseCase.execute(input);
    },
  }),
};
