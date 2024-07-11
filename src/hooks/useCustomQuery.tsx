import {
    useQuery,
    UseQueryResult,
    UndefinedInitialDataOptions,
    QueryKey,
    UseMutationOptions,
    useMutation,
  } from '@tanstack/react-query';
  import axios, { AxiosResponse } from 'axios';
  
  
  
  // ===================================================useQuery=================================================================
  type USE_QUERY_TYPE = {
    api: any;
    options: Partial<
      UndefinedInitialDataOptions<unknown, Error, unknown, QueryKey>
    >;
    key?: string;
    value?: any[];
    config?: {
      [key: string]: any;
    };
  };
  
  // ==================== fetch data via get method ====================
  
  export const apiFetcherGet = async (url: string, config?: any) => {
    const res = await axios.get(url, {
      ...config
    });
    return res.data;
  };
  
  export function useApi<T>({
    key,
    api,
    options,
    value,
    config
  }: USE_QUERY_TYPE) {
    const result = useQuery({
      queryKey: [key ?? api, ...(value ?? [])],
      queryFn: async () => apiFetcherGet(api, config),
      refetchOnReconnect: 'always',
      refetchOnWindowFocus: false,
      ...options
    });
    return result as UseQueryResult<T, Error>;
  }
  
  // ==================== fetch data via post method ====================
  export function useApiPost<T>({
    key,
    api,
    options,
    value,
    config
  }: USE_QUERY_TYPE) {
    const result: UseQueryResult<any, Error> = useQuery<any, Error>({
      queryKey: [key ?? api, ...(value ?? [])],
      queryFn: async () => {
        const res = await axios.post(api, {
          ...config
        });
        return res.data;
      },
      refetchOnReconnect: 'always',
      refetchOnWindowFocus: false,
      ...options
    });
    return result as UseQueryResult<T, Error>;
  }



  //==============================For Post mutation=================================

  const postApi = (api: string, data: {}) => {
    return axios.post(api, data);
  };
  
  export type USE_MUTATION_TYPE = {
    options?: UseMutationOptions<AxiosResponse<any, any>, Error, void, unknown>;
  };
  
  export const usePostMutation = ({ options }: USE_MUTATION_TYPE) => {
    return useMutation<AxiosResponse<any, any>, Error, any, unknown>({
      mutationFn: ({ api, data }: { api: string; data: {} }) => postApi(api, data),
      ...options
    });
  };


  const putApi = (api: string, data: {}) => {
    return axios.put(api, data);
  };
  export const usePUtMutation = ({ options }: USE_MUTATION_TYPE) => {
    return useMutation<AxiosResponse<any, any>, Error, any, unknown>({
      mutationFn: ({ api, data }: { api: string; data: {} }) => putApi(api, data),
      ...options
    });
  };