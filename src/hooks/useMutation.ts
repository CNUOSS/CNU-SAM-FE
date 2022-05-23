import axios from 'axios';
import { useMutation as useReactMutation } from 'react-query';

interface ConverterType {
  request?: (data: any) => any;
  response?: (data: any) => any;
}

interface UseMutationType {
  url: string;
  method: MethodType;
  converter?: ConverterType;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export type MethodType = 'POST' | 'UPDATE' | 'DELETE' | 'PUT';
const fetcher = (url: string, method: MethodType, converter?: ConverterType) => async (data: any) => {
  const convertedData = converter?.request ? converter?.request(data) : data;
  const { data: result } = await axios({ url: data.dynamicUrl || url, method, data: convertedData });
  return converter?.response ? converter?.response(result) : result;
};

const useMutation = <T>({ url, method, converter, onSuccess, onError }: UseMutationType) => {
  const context = useReactMutation<T, unknown, object>(fetcher(url, method, converter), {
    onError,
    onSuccess,
  });

  return context;
};

export default useMutation;
