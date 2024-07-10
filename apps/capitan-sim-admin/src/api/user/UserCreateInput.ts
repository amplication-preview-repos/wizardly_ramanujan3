import { InputJsonValue } from "../../types";
import { RentalCreateNestedManyWithoutUsersInput } from "./RentalCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  rentals?: RentalCreateNestedManyWithoutUsersInput;
};
