import { ModemWhereUniqueInput } from "../modem/ModemWhereUniqueInput";
import { RentalUpdateManyWithoutSimCardsInput } from "./RentalUpdateManyWithoutSimCardsInput";

export type SimCardUpdateInput = {
  phoneNumber?: string | null;
  modem?: ModemWhereUniqueInput | null;
  rentals?: RentalUpdateManyWithoutSimCardsInput;
};
