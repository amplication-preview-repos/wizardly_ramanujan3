import { SortOrder } from "../../util/SortOrder";

export type SimCardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phoneNumber?: SortOrder;
  modemId?: SortOrder;
};
