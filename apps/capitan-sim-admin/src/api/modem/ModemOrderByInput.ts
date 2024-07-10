import { SortOrder } from "../../util/SortOrder";

export type ModemOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  model?: SortOrder;
  status?: SortOrder;
};
