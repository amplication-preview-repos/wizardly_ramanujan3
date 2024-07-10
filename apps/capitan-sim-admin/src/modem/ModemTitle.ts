import { Modem as TModem } from "../api/modem/Modem";

export const MODEM_TITLE_FIELD = "name";

export const ModemTitle = (record: TModem): string => {
  return record.name?.toString() || String(record.id);
};
