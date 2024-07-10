import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RentalManagementService } from "./rentalmanagement.service";
import { ReturnRentalInput } from "../rentalManagement/ReturnRentalInput";
import { CreateRentalInput } from "../rentalManagement/CreateRentalInput";
import { SimCardStatusOutput } from "../rentalManagement/SimCardStatusOutput";

@swagger.ApiTags("rentalManagements")
@common.Controller("rentalManagements")
export class RentalManagementController {
  constructor(protected readonly service: RentalManagementService) {}

  @common.Post("/rentals")
  @swagger.ApiOkResponse({
    type: CreateRentalInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateRental(
    @common.Body()
    body: ReturnRentalInput
  ): Promise<CreateRentalInput> {
        return this.service.CreateRental(body);
      }

  @common.Get("/simcards/:id/status")
  @swagger.ApiOkResponse({
    type: SimCardStatusOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSimCardStatus(
    @common.Body()
    body: ReturnRentalInput
  ): Promise<SimCardStatusOutput> {
        return this.service.GetSimCardStatus(body);
      }

  @common.Patch("/rentals/:id/return")
  @swagger.ApiOkResponse({
    type: ReturnRentalInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReturnRental(
    @common.Body()
    body: ReturnRentalInput
  ): Promise<ReturnRentalInput> {
        return this.service.ReturnRental(body);
      }
}
