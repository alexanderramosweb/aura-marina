import { sheets } from "../../google/sheets-client";
import { env } from "../../../config/env";

import { Lead } from "../../../domain/leads/entities/lead";
import type { LeadRepository } from "../../../domain/leads/repositories/lead.repository";

export class GoogleSheetsLeadRepository implements LeadRepository {
  async create(lead: Lead): Promise<void> {
    await sheets.spreadsheets.values.append({
      spreadsheetId: env.google.spreadsheetId,
      range: env.google.sheetName,

      valueInputOption: "USER_ENTERED",

      requestBody: {
        values: [
          [
            lead.name.value,
            lead.email.value,
            lead.phone.value,
            lead.source.value,
            lead.createdAt.value.toISOString(),
          ],
        ],
      },
    });
  }
}
