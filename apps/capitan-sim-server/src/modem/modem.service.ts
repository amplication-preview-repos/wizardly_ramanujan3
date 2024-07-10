import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModemServiceBase } from "./base/modem.service.base";

@Injectable()
export class ModemService extends ModemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
