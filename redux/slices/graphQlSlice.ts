import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateType } from './graphQlSlice.props';
import { HeaderType, SchemaType } from '@/components';

const initialState: InitialStateType = {
  endpoint: '',
  sdlEndpoint: '',
  headers: [],
  query: '',
  variables: '',
  body: {},
  schema: null,
  statusCode: null,

  errorMessage: '',
};

const GraphClientSlice = createSlice({
  name: 'graphClient',
  initialState,
  reducers: {
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
    },

    setSdlEndpoint: (state, action: PayloadAction<string>) => {
      state.sdlEndpoint = action.payload;
    },

    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    setVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },

    setBody: (state, action: PayloadAction<Record<string, string>>) => {
      state.body = action.payload;
    },

    setSchema: (state, action: PayloadAction<SchemaType | null>) => {
      state.schema = action.payload;
    },

    setStatusCode: (state, action: PayloadAction<string | null>) => {
      state.statusCode = action.payload;
    },

    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },

    addHeader: (state, action: PayloadAction<HeaderType>) => {
      state.headers.push(action.payload);
    },

    deleteHeader: (state, action: PayloadAction<string>) => {
      state.headers = state.headers.filter((header) => header.id !== action.payload);
    },

    updateHeaderKey: (state, action: PayloadAction<{ id: string; key: string }>) => {
      const { id, key } = action.payload;
      state.headers = state.headers.map((header) =>
        header.id === id ? { ...header, key } : header
      );
    },

    updateHeaderValue: (state, action: PayloadAction<{ id: string; value: string }>) => {
      const { id, value } = action.payload;
      state.headers = state.headers.map((header) =>
        header.id === id ? { ...header, value } : header
      );
    },
  },
});

export const {
  setBody,
  setEndpoint,
  setErrorMessage,
  setQuery,
  setSchema,
  setSdlEndpoint,
  setStatusCode,
  setVariables,
  addHeader,
  deleteHeader,
  updateHeaderKey,
  updateHeaderValue,
} = GraphClientSlice.actions;

export default GraphClientSlice.reducer;
