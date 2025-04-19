import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// API yaratish
export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
// Slice yaratish
const reduxSlice = createSlice({
    name: "whoami",
    initialState: "",
    reducers: {
        setWhoami: (state, action) => {
            return action.payload;  // `state`ni to'g'ridan-to'g'ri o'zgartirish
        }
    }
});

// Store yaratish
const store = configureStore({
    reducer: {
        whoami: reduxSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,  // API reducer'ini qo'shish
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokemonApi.middleware);  // API middleware'ini qo'shish
    }
});

export default store;
