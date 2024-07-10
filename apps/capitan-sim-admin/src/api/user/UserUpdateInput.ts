import { InputJsonValue } from "../../types";
import { RentalUpdateManyWithoutUsersInput } from "./RentalUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  rentals?: RentalUpdateManyWithoutUsersInput;
};
