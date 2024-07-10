/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SimCardWhereInput } from "./SimCardWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SimCardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SimCardWhereInput,
  })
  @ValidateNested()
  @Type(() => SimCardWhereInput)
  @IsOptional()
  @Field(() => SimCardWhereInput, {
    nullable: true,
  })
  every?: SimCardWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimCardWhereInput,
  })
  @ValidateNested()
  @Type(() => SimCardWhereInput)
  @IsOptional()
  @Field(() => SimCardWhereInput, {
    nullable: true,
  })
  some?: SimCardWhereInput;

  @ApiProperty({
    required: false,
    type: () => SimCardWhereInput,
  })
  @ValidateNested()
  @Type(() => SimCardWhereInput)
  @IsOptional()
  @Field(() => SimCardWhereInput, {
    nullable: true,
  })
  none?: SimCardWhereInput;
}
export { SimCardListRelationFilter as SimCardListRelationFilter };
