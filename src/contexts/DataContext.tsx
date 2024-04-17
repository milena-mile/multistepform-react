import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ContextData {
    formData: {[key: string]: string | string[]};
    setFormData: React.Dispatch<React.SetStateAction<object>>;
}

const DataContext = createContext<ContextData>({
    formData: {},
    setFormData: () => {
    }
});

const useDataContext = () => useContext(DataContext);

const DataProvider = ({children}: { children: ReactNode }) => {
    const [formData, setFormData] = useState({});

    return (
        <DataContext.Provider value={{formData, setFormData}}>
            {children}
        </DataContext.Provider>
    );
};

export {useDataContext, DataProvider};