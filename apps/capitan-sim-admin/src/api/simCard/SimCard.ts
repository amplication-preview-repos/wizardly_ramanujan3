import { Modem } from "../modem/Modem";
import { Rental } from "../rental/Rental";

export type SimCard = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  phoneNumber: string | null;
  modem?: Modem | null;
  rentals?: Array<Rental>;
};
