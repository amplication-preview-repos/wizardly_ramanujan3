/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SimCardWhereInput } from "./SimCardWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class SimCardCountArgs {
  @ApiProperty({
    required: false,
    type: () => SimCardWhereInput,
  })
  @Field(() => SimCardWhereInput, { nullable: true })
  @Type(() => SimCardWhereInput)
  where?: SimCardWhereInput;
}

export { SimCardCountArgs as SimCardCountArgs };
