import { User } from "../user/User";
import { SimCard } from "../simCard/SimCard";

export type Rental = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  startDate: Date | null;
  endDate: Date | null;
  user?: User | null;
  simCard?: SimCard | null;
};
