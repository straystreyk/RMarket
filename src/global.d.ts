import { StoreStateType } from "./store/store";

declare global {
  var _SSR_STORE_STATE_: StoreStateType;
  var _GLOBALS_: {
    TEST: string
  };
}
