import { ServiceFormData } from "@/types/types";
import { createContext, useContext, useState } from "react";

interface FormContextType {
  data: ServiceFormData;
  setData: React.Dispatch<React.SetStateAction<ServiceFormData>>;
  resetData: () => void;
}

const initialState: ServiceFormData = {
  folio: undefined,
  clientName: undefined,
  startTime: undefined,
  endTime: undefined,
  installerName: undefined,
  installedProduct: [{}],
  recommendations: undefined,
  clientComments: undefined,
  images: [],
  clientSignature: undefined,
  isClientAbsent: undefined,
  relationshipWithClient: undefined,
  secondaryClientName: undefined,
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ServiceFormData>(initialState);

  const resetData = () => setData(initialState);

  return (
    <FormContext.Provider value={{ data, setData, resetData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData(): FormContextType {
  const formContext = useContext(FormContext);
  if (!formContext)
    throw new Error("useFormData debe usarse dentro de un FormProvider");
  return formContext;
}
