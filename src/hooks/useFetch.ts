import axios from 'axios';
import { useQuery, QueryFunctionContext } from 'react-query';

const fetcher = async <T>({ queryKey }: QueryFunctionContext<readonly (string | unknown)[]>): Promise<T> => {
  const [url, params] = queryKey;
  const { data } = await axios.get(url as string, { params: { ...(params as object) } });
  return data;
};

// TODO: fix any
const useFetch = <T, S = unknown, C = any>(
  url: string,
  params?: object,
  config?: object,
  converter?: (parameter: C) => S
) => {
  const context = useQuery<T>(
    [url!, converter && params ? converter(params as unknown as C) : params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    {
      suspense: true,
      ...config,
    }
  );
  return context;
};

export default useFetch;
