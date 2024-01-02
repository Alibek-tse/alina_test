import { MoneyType } from '@/types/MoneyType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { instanceToPlain, plainToClass } from 'class-transformer';

const HOST = process.env.REACT_APP_HOST;

export const ApplicationApi = createApi({
  reducerPath: 'ApplicationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: HOST,
  }),
  tagTypes: ['TemplateTable'],
  endpoints: build => ({
    // Update the method signature to accept a parameter
    getMoney: build.query<MoneyType, string | null>({
      // Используйте параметр в вашем запросе
      query: (currency) => `/${currency || 'dollar'}`, // Если currency не предоставлен, используйте 'dollar' по умолчанию
      transformResponse: (response: MoneyType) => plainToClass(MoneyType, response),
    }),
    createTemplate: build.mutation<any, { body: FormData }>({
      query: ({ body }) => {
        return {
          url: `/save`,
          method: 'PUT',
          body, // здесь уже FormData, а не JSON
        };
      },
      // invalidatesTags: ['TemplateTable'],
    }),
  }),
});

export const { useGetMoneyQuery } = ApplicationApi;
