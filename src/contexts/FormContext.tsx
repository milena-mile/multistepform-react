import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ContextForm {
    disable: number;
    setDisable: React.Dispatch<React.SetStateAction<number>>;
}

const FormContext = createContext<ContextForm>({
    disable: 0,
    setDisable: () => {}
});

const useFormContext = () => useContext(FormContext);

const FormProvider = ({children}: { children: ReactNode }) => {
    const [disable, setDisable] = useState(0);

    return (
        <FormContext.Provider value={{disable, setDisable}}>
            {children}
        </FormContext.Provider>
    );
};

export {useFormContext, FormProvider};
