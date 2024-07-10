/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  SimCard as PrismaSimCard,
  Rental as PrismaRental,
  Modem as PrismaModem,
} from "@prisma/client";

export class SimCardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SimCardCountArgs, "select">): Promise<number> {
    return this.prisma.simCard.count(args);
  }

  async simCards(args: Prisma.SimCardFindManyArgs): Promise<PrismaSimCard[]> {
    return this.prisma.simCard.findMany(args);
  }
  async simCard(
    args: Prisma.SimCardFindUniqueArgs
  ): Promise<PrismaSimCard | null> {
    return this.prisma.simCard.findUnique(args);
  }
  async createSimCard(args: Prisma.SimCardCreateArgs): Promise<PrismaSimCard> {
    return this.prisma.simCard.create(args);
  }
  async updateSimCard(args: Prisma.SimCardUpdateArgs): Promise<PrismaSimCard> {
    return this.prisma.simCard.update(args);
  }
  async deleteSimCard(args: Prisma.SimCardDeleteArgs): Promise<PrismaSimCard> {
    return this.prisma.simCard.delete(args);
  }

  async findRentals(
    parentId: string,
    args: Prisma.RentalFindManyArgs
  ): Promise<PrismaRental[]> {
    return this.prisma.simCard
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .rentals(args);
  }

  async getModem(parentId: string): Promise<PrismaModem | null> {
    return this.prisma.simCard
      .findUnique({
        where: { id: parentId },
      })
      .modem();
  }
}