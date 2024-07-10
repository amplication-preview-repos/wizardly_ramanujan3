import { ModemWhereUniqueInput } from "../modem/ModemWhereUniqueInput";
import { RentalCreateNestedManyWithoutSimCardsInput } from "./RentalCreateNestedManyWithoutSimCardsInput";

export type SimCardCreateInput = {
  phoneNumber?: string | null;
  modem?: ModemWhereUniqueInput | null;
  rentals?: RentalCreateNestedManyWithoutSimCardsInput;
};
