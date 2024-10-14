import React, { createContext, useContext, useRef } from 'react';
import { ApolloClient } from '@apollo/client';

const ApolloClientContext = createContext<ApolloClient<any> | null>(null);

export const ApolloClientProvider: React.FC<{ client: ApolloClient<any>; children: React.ReactNode }> = ({ client, children }) => {
    return (
        <ApolloClientContext.Provider value={client}>
            {children}
        </ApolloClientContext.Provider>
    );
};

export const useApolloClient = () => {
    const context = useContext(ApolloClientContext);
    if (!context) {
        throw new Error("useApolloClient must be used within an ApolloClientProvider");
    }
    return context;
};