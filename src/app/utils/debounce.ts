const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: any;

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
      timer = undefined;
    }, delay);
  };
};

export default debounce;
