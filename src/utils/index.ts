import { useEffect, useState } from 'react';

export const cleanObject = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];

    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// how it works?
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // 每次在 value 变化以后，设置一个定时器
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // 每次在上一个 useEffect 处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  // 虽然 value 一直在变，但是 return 的 debouncedValue 只有在 setDebouncedValue 调用后才会改变
  // console.log(`value: ${JSON.stringify(value)}, debouncedValue: ${JSON.stringify(debouncedValue)}`);

  return debouncedValue;
};

export const useArray = <T>(initialValue: T[]) => {
  const [value, setValue] = useState(initialValue);

  const clear = () => {
    setValue([]);
  };

  const removeIndex = (index: number) => {
    setValue([...value].splice(index, 1));
  };

  const add = (element: T) => {
    setValue([...value, element]);
  };

  return { value, setValue, clear, removeIndex, add };
};
