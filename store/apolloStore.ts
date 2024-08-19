import {create} from 'zustand';
import { ApolloClient } from '@apollo/client';

interface ApolloStore {
  client: ApolloClient<any> | null;
  setClient: (client: ApolloClient<any> | null) => void;
}

export const useApolloStore = create<ApolloStore>((set) => ({
  client: null,
  setClient: (client) => set({ client }),
}));