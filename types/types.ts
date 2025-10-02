export interface Login {
  installerId: number;
  password: string;
}

export interface LoginResponse {
  error: boolean;
  message: string;
  token: string;
}

export type Status = "To Do" | "Doing" | "Done" | "Canceled";

export interface Service {
  _id: string;
  folio: number;
  client: string;
  status: Status;
  clientPhone: string;
  address: string;
  additionalComments: string | null;
  jobDetails: {
    quantity: number;
    description: string;
  }[];
  store: {
    numStore: number;
    name: string;
    phone: string;
  };
  schedule: {
    startTime: string | null;
    endTime: string | null;
  };
  totals: {
    installerPayment: number;
  };
}

export interface FormData {
  startTime?: Date;
  endTime?: Date;
  installerName?: string;
  installedProduct?: {
    installedProduct?: string;
    installedIn?: string;
    quantity?: number;
    specification?: string;
    serialNumber?: string;
  }[];
  recommendations?: string;
  clientComments?: string;
  images?: string[];
  clientSignature?: string;
  isClientAbsent?: boolean;
  relationshipWithClient?: string;
  secondaryClientName?: string;
}

export interface Profile {
  installerId: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  stores: Store[];
}

export interface Store {
  numStore: number;
  name: string;
  phone: string;
  address: string;
}

export interface Schedule {
  _id: string;
  folio?: number;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  type: "Service" | "Block";
  address?: string;
  description?: string;
  status?: Status;
  serviceId?: string;
}

export interface Section {
  title: string;
  data: Schedule[];
}

export interface BlockerForm {
  startTime: Date | null;
  endTime: Date | null;
  type: "Block";
  description?: string;
}
