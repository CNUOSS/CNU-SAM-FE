import axios from 'axios';
import { useQuery, QueryFunctionContext } from 'react-query';

const fetcher = async <T>({ queryKey }: QueryFunctionContext<readonly (string | unknown)[]>): Promise<T> => {
  const [url, params] = queryKey;
  const { data } = await axios.get(url as string, { params: { ...(params as object) } });
  return data;
};

const useFetch = <T>(url: string, params?: object) => {
  const context = useQuery<T>([url!, params], ({ queryKey, meta }) => fetcher({ queryKey, meta }), { suspense: true });
  return context;
};

export default useFetch;
