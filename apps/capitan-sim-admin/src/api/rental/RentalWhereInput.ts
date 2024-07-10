import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SimCardWhereUniqueInput } from "../simCard/SimCardWhereUniqueInput";

export type RentalWhereInput = {
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  simCard?: SimCardWhereUniqueInput;
};
