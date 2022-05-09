import axios from 'axios';
import { useMutation as useReactMutation } from 'react-query';

export type MethodType = 'POST' | 'UPDATE' | 'DELETE' | 'PUT';
const fetcher = (url: string, method: MethodType) => async (data: any) => {
  const { data: result } = await axios({ url, method, data });
  return result;
};

const useMutation = <T>(
  url: string,
  method: MethodType,
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void
) => {
  const context = useReactMutation<T, unknown, object>(fetcher(url, method), {
    onError,
    onSuccess,
  });

  return context;
};

export default useMutation;
