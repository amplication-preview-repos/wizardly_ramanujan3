import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { SimCardWhereUniqueInput } from "../simCard/SimCardWhereUniqueInput";

export type RentalCreateInput = {
  startDate?: Date | null;
  endDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  simCard?: SimCardWhereUniqueInput | null;
};
