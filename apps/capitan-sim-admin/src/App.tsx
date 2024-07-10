import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SimCardList } from "./simCard/SimCardList";
import { SimCardCreate } from "./simCard/SimCardCreate";
import { SimCardEdit } from "./simCard/SimCardEdit";
import { SimCardShow } from "./simCard/SimCardShow";
import { ModemList } from "./modem/ModemList";
import { ModemCreate } from "./modem/ModemCreate";
import { ModemEdit } from "./modem/ModemEdit";
import { ModemShow } from "./modem/ModemShow";
import { RentalList } from "./rental/RentalList";
import { RentalCreate } from "./rental/RentalCreate";
import { RentalEdit } from "./rental/RentalEdit";
import { RentalShow } from "./rental/RentalShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CapitanSim"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SimCard"
          list={SimCardList}
          edit={SimCardEdit}
          create={SimCardCreate}
          show={SimCardShow}
        />
        <Resource
          name="Modem"
          list={ModemList}
          edit={ModemEdit}
          create={ModemCreate}
          show={ModemShow}
        />
        <Resource
          name="Rental"
          list={RentalList}
          edit={RentalEdit}
          create={RentalCreate}
          show={RentalShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
