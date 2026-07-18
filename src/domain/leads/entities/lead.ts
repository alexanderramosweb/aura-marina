import { LeadName } from "../value-objects/lead-name";
import { Email } from "../value-objects/email";
import { Phone } from "../value-objects/phone";
import { Source } from "../value-objects/source";
import { CreatedAt } from "../value-objects/created-at";

export class Lead {
  public readonly createdAt: CreatedAt;

  constructor(
    public readonly name: LeadName,
    public readonly email: Email,
    public readonly phone: Phone,
    public readonly source: Source,
  ) {
    this.createdAt = new CreatedAt();
  }
}
