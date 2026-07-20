import { google } from "googleapis";
import path from "node:path";

const keyFile = path.join(
  process.cwd(),
  "credentials",
  "google-service-account.json",
);

export const auth = new google.auth.GoogleAuth({
  keyFile,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
