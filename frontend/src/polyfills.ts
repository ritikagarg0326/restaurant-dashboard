/*
 * Custom polyfills for RestaurantOS
 * This file is loaded before the Angular application starts.
 * It fixes missing performance APIs in some environments.
 */

const perf = window.performance;

if (perf) {
  if (typeof perf.clearMarks !== 'function') {
    (perf as any).clearMarks = () => {};
  }
  if (typeof perf.clearMeasures !== 'function') {
    (perf as any).clearMeasures = () => {};
  }
  if (typeof perf.mark !== 'function') {
    (perf as any).mark = () => {};
  }
  if (typeof perf.measure !== 'function') {
    (perf as any).measure = () => {};
  }
}
