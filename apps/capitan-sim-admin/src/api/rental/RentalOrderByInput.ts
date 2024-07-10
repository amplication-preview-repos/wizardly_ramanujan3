import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  userId?: SortOrder;
  simCardId?: SortOrder;
};
