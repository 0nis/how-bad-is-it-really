const state = {
  /** @type {string | null} */
  selectedLocation: null,

  /** @type {WeatherData | null} */ //TODO: fix type
  cachedHistoricalData: null,
};

const listeners = new Set();

/**
 * Returns the state of the given key
 *
 * @param {keyof state} key
 * @returns State of the given key
 */
export function getState(key) {
  return state[key];
}

/**
 * Merges the given patch into the current state
 *
 * @param {Partial<state>} patch
 * @returns Updated state
 */
export function setState(patch) {
  Object.assign(state, patch);

  listeners.forEach((fn) => fn(state));
}

/**
 * Subscribes to state changes
 *
 * @param {(key: keyof state) => void} fn
 * @returns Function to unsubscribe
 */
export function subscribe(fn) {
  listeners.add(fn);
  fn(state);
  return () => listeners.delete(fn);
}
