import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SimCardListRelationFilter } from "../simCard/SimCardListRelationFilter";

export type ModemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  model?: StringNullableFilter;
  status?: "Option1";
  simCards?: SimCardListRelationFilter;
};
