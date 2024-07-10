import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MODEM_TITLE_FIELD } from "../modem/ModemTitle";

export const SimCardList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SimCards"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceField label="Modem" source="modem.id" reference="Modem">
          <TextField source={MODEM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
