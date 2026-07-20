import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { GoogleSheetsLeadRepository } from "../infrastructure/leads/repositories/google-sheets-lead.repository";

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
      const leadRepository = new GoogleSheetsLeadRepository();

      const createLeadUseCase = new CreateLeadUseCase(leadRepository);

      return await createLeadUseCase.execute(input);
    },
  }),
};
