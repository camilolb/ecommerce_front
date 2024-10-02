import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import cartReducer from "./reducers/cart";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import type { EnhancedStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const createStore = (isServer: boolean): EnhancedStore => {
  if (isServer) {
    return configureStore({
      reducer: rootReducer,
    });
  }
  const store = configureStore({
    reducer: persistedReducer,
  });
  (store as any).__persistor = persistStore(store);

  return store;
};

export const makeStore = ({ isServer }: { isServer: boolean }) =>
  createStore(isServer);

export const wrapper = createWrapper<EnhancedStore>(makeStore as any, {
  debug: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
