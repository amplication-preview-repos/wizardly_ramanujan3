import { SimCard } from "../simCard/SimCard";

export type Modem = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  model: string | null;
  status?: "Option1" | null;
  simCards?: Array<SimCard>;
};
