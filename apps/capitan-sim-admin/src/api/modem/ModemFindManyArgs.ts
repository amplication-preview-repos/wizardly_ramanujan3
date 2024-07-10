import { ModemWhereInput } from "./ModemWhereInput";
import { ModemOrderByInput } from "./ModemOrderByInput";

export type ModemFindManyArgs = {
  where?: ModemWhereInput;
  orderBy?: Array<ModemOrderByInput>;
  skip?: number;
  take?: number;
};
