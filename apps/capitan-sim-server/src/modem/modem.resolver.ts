import * as graphql from "@nestjs/graphql";
import { ModemResolverBase } from "./base/modem.resolver.base";
import { Modem } from "./base/Modem";
import { ModemService } from "./modem.service";

@graphql.Resolver(() => Modem)
export class ModemResolver extends ModemResolverBase {
  constructor(protected readonly service: ModemService) {
    super(service);
  }
}
