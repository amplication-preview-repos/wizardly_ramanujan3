import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("ReturnRentalInputObject")
class ReturnRentalInput {
    @Field(() => Date)
    @Type(() => Date)
    endDate!: Date;
}

export { ReturnRentalInput as ReturnRentalInput };