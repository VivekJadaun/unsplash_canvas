export const debounce = ( func, delay = 200) => {
  let timer;
  clearTimeout(timer);
  return setTimeout(() => {
    func();
  }, delay);
}