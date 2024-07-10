import { Injectable } from "@nestjs/common";
import { CreateRentalInput } from "../rentalManagement/CreateRentalInput";
import { SimCardStatusOutput } from "../rentalManagement/SimCardStatusOutput";
import { ReturnRentalInput } from "../rentalManagement/ReturnRentalInput";

@Injectable()
export class RentalManagementService {
  constructor() {}
  async CreateRental(args: CreateRentalInput): Promise<CreateRentalInput> {
    throw new Error("Not implemented");
  }
  async GetSimCardStatus(args: string): Promise<SimCardStatusOutput> {
    throw new Error("Not implemented");
  }
  async ReturnRental(args: ReturnRentalInput): Promise<ReturnRentalInput> {
    throw new Error("Not implemented");
  }
}
