import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SimCardWhereUniqueInput } from "../simCard/SimCardWhereUniqueInput";

export type RentalUpdateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  simCard?: SimCardWhereUniqueInput | null;
};
