import { SimCard as TSimCard } from "../api/simCard/SimCard";

export const SIMCARD_TITLE_FIELD = "phoneNumber";

export const SimCardTitle = (record: TSimCard): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
