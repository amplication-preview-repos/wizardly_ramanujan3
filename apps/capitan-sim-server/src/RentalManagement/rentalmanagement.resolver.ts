import * as graphql from "@nestjs/graphql";
import { CreateRentalInput } from "../rentalManagement/CreateRentalInput";
import { SimCardStatusOutput } from "../rentalManagement/SimCardStatusOutput";
import { ReturnRentalInput } from "../rentalManagement/ReturnRentalInput";
import { RentalManagementService } from "./rentalmanagement.service";

export class RentalManagementResolver {
  constructor(protected readonly service: RentalManagementService) {}

  @graphql.Mutation(() => CreateRentalInput)
  async CreateRental(
    @graphql.Args()
    args: CreateRentalInput
  ): Promise<CreateRentalInput> {
    return this.service.CreateRental(args);
  }

  @graphql.Query(() => SimCardStatusOutput)
  async GetSimCardStatus(
    @graphql.Args()
    args: string
  ): Promise<SimCardStatusOutput> {
    return this.service.GetSimCardStatus(args);
  }

  @graphql.Mutation(() => ReturnRentalInput)
  async ReturnRental(
    @graphql.Args()
    args: ReturnRentalInput
  ): Promise<ReturnRentalInput> {
    return this.service.ReturnRental(args);
  }
}
