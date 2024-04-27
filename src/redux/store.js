import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducer/auth.reducer";
import {
  albumsReducer,
  postsReducer,
  userDataReducer,
} from "./reducer/userdata.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const authPersistConfig = {
  key: "user",
  storage: storageSession,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  userData: userDataReducer,
  posts: postsReducer,
  albums: albumsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
