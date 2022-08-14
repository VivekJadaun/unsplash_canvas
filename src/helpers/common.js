import { DEBOUNCE_DURATION_IN_MS, IS_PRODUCTION } from "constants/app-defaults";

export const debounce = (func, delay = DEBOUNCE_DURATION_IN_MS) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(args), delay);
  }
};

export const logToConsole = (data, type = "log") => {
  if (!IS_PRODUCTION) {
    console[type](data);
  }
};