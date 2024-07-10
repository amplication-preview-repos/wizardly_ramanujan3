import { SimCardUpdateManyWithoutModemsInput } from "./SimCardUpdateManyWithoutModemsInput";

export type ModemUpdateInput = {
  name?: string | null;
  model?: string | null;
  status?: "Option1" | null;
  simCards?: SimCardUpdateManyWithoutModemsInput;
};
