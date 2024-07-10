import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModemService } from "./modem.service";
import { ModemControllerBase } from "./base/modem.controller.base";

@swagger.ApiTags("modems")
@common.Controller("modems")
export class ModemController extends ModemControllerBase {
  constructor(protected readonly service: ModemService) {
    super(service);
  }
}
