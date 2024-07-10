import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ModemWhereUniqueInput } from "../modem/ModemWhereUniqueInput";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type SimCardWhereInput = {
  id?: StringFilter;
  phoneNumber?: StringNullableFilter;
  modem?: ModemWhereUniqueInput;
  rentals?: RentalListRelationFilter;
};
