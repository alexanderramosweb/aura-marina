import { getSecret } from "astro:env/server";

export const env = {
  google: {
    spreadsheetId: getSecret("GOOGLE_SPREADSHEET_ID"),
    sheetName: getSecret("GOOGLE_SHEET_NAME"),
  },
};
