import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { SIMCARD_TITLE_FIELD } from "./SimCardTitle";
import { MODEM_TITLE_FIELD } from "../modem/ModemTitle";

export const SimCardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceField label="Modem" source="modem.id" reference="Modem">
          <TextField source={MODEM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Rental"
          target="simCardId"
          label="Rentals"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="startDate" source="startDate" />
            <TextField label="endDate" source="endDate" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SimCard"
              source="simcard.id"
              reference="SimCard"
            >
              <TextField source={SIMCARD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
