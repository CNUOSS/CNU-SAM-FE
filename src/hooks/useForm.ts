import { useState } from 'react';
import { inOrOut } from '../utils/module';

type ErrorType = 'required' | 'maxLength' | 'minLength';

type StateType<T> = {
  [key in keyof T]: string;
};

type ArrayStateType<T> = {
  [key in keyof T]: string[];
};

interface ValidatorItemType {
  error: ErrorType;
  value?: boolean | number;
}

interface Error<T> {
  key: keyof T;
  type: ErrorType;
}

type Validator<T> = {
  [key in keyof T]?: ValidatorItemType[];
};

interface useFormType<T> {
  error: Error<T> | undefined;
  change: (key: keyof T) => (event: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }) => void;
  getValue: (key: keyof T) => string;
  getArrayValues: (key: keyof T) => string[];
  control: (name: keyof T, value: string) => void;
  handleSubmit: (fn: (data: T) => void) => (event?: any) => void;
}

function useForm<T>(validators?: Validator<T>): useFormType<T> {
  const [state, setState] = useState<StateType<T>>({} as StateType<T>);
  const [arrayState, setArrayState] = useState<ArrayStateType<T>>({} as ArrayStateType<T>);
  const [error, setError] = useState<Error<T>>();

  const change = (key: keyof T) => (event: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }) =>
    setState((prev) => ({ ...prev, [key]: event.target.value }));

  const checkNotValidator = ([key, val]: any, result: any): boolean => {
    return val.some((v: ValidatorItemType) => {
      if (v.error === 'required' && !result[key]) {
        setError({ key, type: 'required' });
        return true;
      }
      if (v.value && v.error === 'maxLength' && result[key].length > v.value) {
        setError({ key, type: 'maxLength' });
        return true;
      }
      if (v.value && v.error === 'minLength' && result[key].length < v.value) {
        setError({ key, type: 'minLength' });
        return true;
      }
      return false;
    });
  };

  const handleSubmit = (fn: (data: T) => void) => () => {
    const result = { ...state, ...arrayState };
    const notValidate = Object.entries(validators || {}).some((validator) => checkNotValidator(validator, result));
    if (!notValidate) fn({ ...state, ...arrayState } as unknown as T);
  };

  const getValue = (key: keyof T): string => state[key] || '';

  const getArrayValues = (key: keyof T): string[] => arrayState[key];

  const control = (name: keyof T, value: string) => {
    setArrayState((prev) => ({
      ...prev,
      [name]: value ? inOrOut(prev[name], value) : [],
    }));
  };

  return {
    error,
    change,
    getValue,
    getArrayValues,
    control,
    handleSubmit,
  };
}

export default useForm;
