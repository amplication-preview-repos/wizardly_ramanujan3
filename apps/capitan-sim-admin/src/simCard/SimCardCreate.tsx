import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ModemTitle } from "../modem/ModemTitle";
import { RentalTitle } from "../rental/RentalTitle";

export const SimCardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceInput source="modem.id" reference="Modem" label="Modem">
          <SelectInput optionText={ModemTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="rentals"
          reference="Rental"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
