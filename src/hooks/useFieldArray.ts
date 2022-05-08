import { useEffect } from 'react';

interface UseFieldArrayProps<T> {
  name: keyof T;
  control: (name: keyof T, value: string) => void;
}

interface UseFieldArrayTypes {
  toggle: (value: string) => void;
}

function useFieldArray<T>({ name, control }: UseFieldArrayProps<T>): UseFieldArrayTypes {
  useEffect(() => {
    control(name, '');
  }, []);

  const toggle = (value: string) => {
    control(name, value);
  };

  return { toggle };
}

export default useFieldArray;
