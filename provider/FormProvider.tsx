import { createContext, useContext, useState } from "react";

interface FormContextType {
  data: FormData;
  setData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FormData>(new FormData());

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormData(): FormContextType {
  const authContext = useContext(FormContext);
  if (!authContext)
    throw new Error("useFormData debe usarse dentro de un FormProvider");
  return authContext;
}
