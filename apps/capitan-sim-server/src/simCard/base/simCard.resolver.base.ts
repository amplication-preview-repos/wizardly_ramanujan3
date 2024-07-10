/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SimCard } from "./SimCard";
import { SimCardCountArgs } from "./SimCardCountArgs";
import { SimCardFindManyArgs } from "./SimCardFindManyArgs";
import { SimCardFindUniqueArgs } from "./SimCardFindUniqueArgs";
import { CreateSimCardArgs } from "./CreateSimCardArgs";
import { UpdateSimCardArgs } from "./UpdateSimCardArgs";
import { DeleteSimCardArgs } from "./DeleteSimCardArgs";
import { RentalFindManyArgs } from "../../rental/base/RentalFindManyArgs";
import { Rental } from "../../rental/base/Rental";
import { Modem } from "../../modem/base/Modem";
import { SimCardService } from "../simCard.service";
@graphql.Resolver(() => SimCard)
export class SimCardResolverBase {
  constructor(protected readonly service: SimCardService) {}

  async _simCardsMeta(
    @graphql.Args() args: SimCardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SimCard])
  async simCards(
    @graphql.Args() args: SimCardFindManyArgs
  ): Promise<SimCard[]> {
    return this.service.simCards(args);
  }

  @graphql.Query(() => SimCard, { nullable: true })
  async simCard(
    @graphql.Args() args: SimCardFindUniqueArgs
  ): Promise<SimCard | null> {
    const result = await this.service.simCard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SimCard)
  async createSimCard(
    @graphql.Args() args: CreateSimCardArgs
  ): Promise<SimCard> {
    return await this.service.createSimCard({
      ...args,
      data: {
        ...args.data,

        modem: args.data.modem
          ? {
              connect: args.data.modem,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => SimCard)
  async updateSimCard(
    @graphql.Args() args: UpdateSimCardArgs
  ): Promise<SimCard | null> {
    try {
      return await this.service.updateSimCard({
        ...args,
        data: {
          ...args.data,

          modem: args.data.modem
            ? {
                connect: args.data.modem,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SimCard)
  async deleteSimCard(
    @graphql.Args() args: DeleteSimCardArgs
  ): Promise<SimCard | null> {
    try {
      return await this.service.deleteSimCard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Rental], { name: "rentals" })
  async findRentals(
    @graphql.Parent() parent: SimCard,
    @graphql.Args() args: RentalFindManyArgs
  ): Promise<Rental[]> {
    const results = await this.service.findRentals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Modem, {
    nullable: true,
    name: "modem",
  })
  async getModem(@graphql.Parent() parent: SimCard): Promise<Modem | null> {
    const result = await this.service.getModem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
