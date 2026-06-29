const state = {
  /** @type {"idle" | "loading" | "success" | "error"} */
  status: "idle",

  /**
   * @type {{
   *    id: number,
   *    name: string,
   *    country: string,
   *    admin1: string|null,
   *    admin2: string|null,
   *    latitude: number,
   *    longitude: number,
   *    elevation: number|null,
   *    timezone: string
   * } | null}
   */
  selectedLocation: null,

  /**
   * Units:
   * - datetime: ISO 8601
   * - temperature: °C
   * - apparentTemperature: °C
   * - humidity: %
   * - windSpeed: km/h
   * - precipitation: mm
   * - cloud cover: %
   *
   * @type {{
   *    datetime: string,
   *    timezone: string,
   *    location: {
   *        id: number,
   *        name: string,
   *        country: string,
   *        admin1: string|null,
   *        admin2: string|null,
   *        latitude: number,
   *        longitude: number,
   *        elevation: number|null,
   *        timezone: string
   *    },
   *    sigma: number;
   *    percentile: number;
   *    label: string;
   *    severity: number;
   *    frequency: string;
   *    sampleSize: number;
   *    basedOn: "raw" | "feels";
   *    observed: {
   *        temperature: number,
   *        apparentTemperature?: number,
   *        humidity?: number,
   *        windSpeed?: number,
   *        precipitation?: number,
   *        cloudCover?: number
   *    },
   *    historical: {
   *        temperature: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        },
   *        apparentTemperature?: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        },
   *        humidity?: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        },
   *        windSpeed?: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        },
   *        precipitation?: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        },
   *        cloudCover?: {
   *            mean: number,
   *            std: number,
   *            count: number
   *        }
   *    }
   * } | null }
   */
  analysis: null,

  /** @type {string} Error message to display */
  error: null,

  /**
   * @type {{
   *    datetime: string,
   *    timezone: string,
   *    location: {
   *        id: number,
   *        name: string,
   *        country: string,
   *        admin1: string|null,
   *        admin2: string|null,
   *        latitude: number,
   *        longitude: number,
   *        elevation: number|null,
   *        timezone: string
   *    },
   *    temperature: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    },
   *    apparentTemperature?: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    },
   *    humidity?: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    },
   *    windSpeed?: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    },
   *    precipitation?: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    },
   *    cloudCover?: {
   *        mean: number,
   *        std: number,
   *        count: number
   *    }
   * } | null }
   */
  cachedHistoricalData: null,
};

const listeners = new Set();

/**
 * Returns the current state
 */
export function getState() {
  return state;
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
