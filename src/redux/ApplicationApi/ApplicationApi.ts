import { ApplicationFormType } from '@/types/ApplicationFormType';
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
    getMoney: build.query<MoneyType, string | null>({
      query: currency => `/${currency || 'dollar'}`,
      transformResponse: (response: MoneyType) => plainToClass(MoneyType, response),
    }),
    createApplications: build.mutation<any, { body: ApplicationFormType }>({
      query: ({ body }) => {
        const requestBody = JSON.stringify(instanceToPlain(body));
        return {
          url: `/applications`,
          method: 'POST',
          body: requestBody,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
      // invalidatesTags: ['TemplateTable'],
    }),
    getApplication: build.query<ApplicationFormType, { id: number }>({
      query: params => {
        const url = `/applications/${params.id}`;
        return {
          url,
          method: 'GET',
        };
      },
      transformResponse: (response: ApplicationFormType) => {
        return plainToClass(ApplicationFormType, response);
      },
      // providesTags: ['AccidentItem'],
    }),
    editApplication: build.mutation<any, { id: number; body: ApplicationFormType }>({
      query: ({ id, body }) => {
        const requestBody = JSON.stringify(instanceToPlain(body));
        return {
          url: `/applications/${id}`, // добавляем id в URL
          method: 'PUT', // изменяем метод на PUT
          body: requestBody,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
      // invalidatesTags: ['TemplateTable'], если это требуется
    }),
    getApplications: build.query<ApplicationFormType[], void>({
      query: () => '/applications',
      transformResponse: (response: ApplicationFormType[]) => {
        return response.map(app => plainToClass(ApplicationFormType, app));
      },
      // providesTags: ['AccidentItem'],
    }),
  }),
});

export const {
  useGetMoneyQuery,
  useCreateApplicationsMutation,
  useGetApplicationQuery,
  useEditApplicationMutation,
  useGetApplicationsQuery
} = ApplicationApi;
