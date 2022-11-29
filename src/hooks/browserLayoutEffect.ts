import { useLayoutEffect, EffectCallback, DependencyList } from 'react';

function emptyFunction(effect: EffectCallback, deps?: DependencyList) {}

const useBrowserLayoutEffect = typeof window === 'undefined' ? emptyFunction : useLayoutEffect;

export { useBrowserLayoutEffect };
