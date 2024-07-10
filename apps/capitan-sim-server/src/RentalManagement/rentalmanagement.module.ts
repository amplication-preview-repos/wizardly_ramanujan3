import { Module } from "@nestjs/common";
import { RentalManagementService } from "./rentalmanagement.service";
import { RentalManagementController } from "./rentalmanagement.controller";
import { RentalManagementResolver } from "./rentalmanagement.resolver";

@Module({
  controllers: [RentalManagementController],
  providers: [RentalManagementService, RentalManagementResolver],
  exports: [RentalManagementService],
})
export class RentalManagementModule {}
