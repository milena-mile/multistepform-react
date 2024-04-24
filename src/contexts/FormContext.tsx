import React, { createContext, ReactNode, useContext, useState } from 'react';

interface ContextForm {
    disable: string[];
    setDisable: React.Dispatch<React.SetStateAction<string[]>>;
}

const initialDisable: string[] = [];

const FormContext = createContext<ContextForm>({
    disable: initialDisable,
    setDisable: () => {}
});

const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [disable, setDisable] = useState(initialDisable);
    
    return (
        <FormContext.Provider value={{disable, setDisable}}>
            {children}
        </FormContext.Provider>
    );
};

export { useFormContext, FormProvider };
