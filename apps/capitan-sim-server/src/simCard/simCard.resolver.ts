import * as graphql from "@nestjs/graphql";
import { SimCardResolverBase } from "./base/simCard.resolver.base";
import { SimCard } from "./base/SimCard";
import { SimCardService } from "./simCard.service";

@graphql.Resolver(() => SimCard)
export class SimCardResolver extends SimCardResolverBase {
  constructor(protected readonly service: SimCardService) {
    super(service);
  }
}
