import { Module } from "@nestjs/common";
import { ModemModuleBase } from "./base/modem.module.base";
import { ModemService } from "./modem.service";
import { ModemController } from "./modem.controller";
import { ModemResolver } from "./modem.resolver";

@Module({
  imports: [ModemModuleBase],
  controllers: [ModemController],
  providers: [ModemService, ModemResolver],
  exports: [ModemService],
})
export class ModemModule {}
