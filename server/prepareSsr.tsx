import { initStore, StoreStateType } from "../src/store/store";

export const prepareSsr: (url: string) => Promise<StoreStateType> = async (
  url: string
) => {
  const state: StoreStateType = JSON.parse(
    JSON.stringify(initStore().getState())
  );

  state.counter.value = 123123;

  return state;
};
