import axios from 'axios';
import { useQuery, QueryFunctionContext, UseQueryResult } from 'react-query';

const fetcher = async <T>({ queryKey }: QueryFunctionContext<readonly (string | unknown)[]>): Promise<T> => {
  const [url, params] = queryKey;
  const { data } = await axios.get(url as string, { params: { ...(params as object) } });
  return data;
};

// TODO: fix any
const useFetch = <ResponseClientType = any, ResponseServerType = any, RequestClientType = any, RequestServerType = any>(
  url: string,
  params?: object,
  config?: object,
  converter?: {
    request: (parameter: RequestClientType) => RequestServerType;
    response: (paramter: ResponseServerType) => ResponseClientType;
  }
) => {
  const context = useQuery<ResponseClientType>(
    [url!, converter && params ? converter.request(params as unknown as RequestClientType) : params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    {
      suspense: true,
      ...config,
    }
  );
  return {
    ...context,
    data: converter?.response(context.data as unknown as ResponseServerType),
  } as UseQueryResult<ResponseClientType>;
};

export default useFetch;
