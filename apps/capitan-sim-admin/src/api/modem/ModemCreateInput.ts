import { SimCardCreateNestedManyWithoutModemsInput } from "./SimCardCreateNestedManyWithoutModemsInput";

export type ModemCreateInput = {
  name?: string | null;
  model?: string | null;
  status?: "Option1" | null;
  simCards?: SimCardCreateNestedManyWithoutModemsInput;
};
