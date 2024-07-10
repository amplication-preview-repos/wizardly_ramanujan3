import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SimCardService } from "./simCard.service";
import { SimCardControllerBase } from "./base/simCard.controller.base";

@swagger.ApiTags("simCards")
@common.Controller("simCards")
export class SimCardController extends SimCardControllerBase {
  constructor(protected readonly service: SimCardService) {
    super(service);
  }
}
