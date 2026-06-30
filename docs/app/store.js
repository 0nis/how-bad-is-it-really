import { LOCATION, CONDITIONS, HISTORICAL, APPSTATE } from "../types.js";
import { DEFAULT_SETTINGS } from "./settings.js";

/** @type {typeof APPSTATE} */
const state = {
  status: "idle",
  selectedLocation: null,
  analysis: null,
  error: null,
  settingsOpen: false,
};

const listeners = new Set();

/** @returns {typeof APPSTATE} Current state */
export function getState() {
  return state;
}

/**
 * Merges the given patch into the current state and notifies listeners
 *
 * @param {Partial<typeof APPSTATE>} patch
 */
export function setState(patch) {
  Object.assign(state, patch);

  listeners.forEach((fn) => fn(state));
}

/**
 * Subscribes to state changes
 *
 * @param {(state: typeof APPSTATE) => void} fn Callback
 * @returns {() => void} Function to unsubscribe
 */
export function subscribe(fn) {
  listeners.add(fn);
  fn(state);
  return () => listeners.delete(fn);
}
