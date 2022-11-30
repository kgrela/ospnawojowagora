import { useSyncExternalStore } from 'react';
import produce from 'immer';

type ExternalStoreListener<T> = (state: T) => void;

type ExternalStore<T> = {
  getSnapshot(): { state: T; listeners: Set<ExternalStoreListener<T>>; dispatch: (setter: (state: T) => T | void) => void };
  subscribe: (listener: ExternalStoreListener<T>) => () => boolean;
};

function createExternalStore<T>(initialState: T): ExternalStore<T> {
  let state: T = initialState;
  const listeners = new Set<ExternalStoreListener<T>>();

  const subscribe = (listener: ExternalStoreListener<T>) => {
    return () => listeners.delete(listener);
  };

  const dispatch = (setter: (state: T) => T | void) => {
    state = produce(state, setter);
  };

  const getSnapshot = () => ({ state, listeners, dispatch });

  return {
    getSnapshot,
    subscribe,
  };
}

function useExternalStore<T>(externalStore: ExternalStore<T>) {
  return useSyncExternalStore(externalStore.subscribe, externalStore.getSnapshot);
}

export { createExternalStore, useExternalStore };
