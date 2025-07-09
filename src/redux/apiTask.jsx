import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const config = { 
    develop: 'http://localhost:7000/'
}

const TASK = 'Task'

export const apiUrl = config.develop

export const apiTask = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
    }),
    
    endpoints: (builder) => ({
        getTask: builder.query( {
            query: ()=> '/',
            providesTags: [TASK]
        }),

        addTask: builder.mutation({query: (task) => ({
            url: '/saveTasks',
            method: 'POST',
            body: task,
        }),
            invalidatesTags: [TASK] 
        }),

        deleteTask: builder.mutation({query: (task) => ({
            url: '/deleteTask',
            method: "POST",
            body: task,
        }),
            invalidatesTags: [TASK] 
        }),

        editTask: builder.mutation({query: (task) => ({
            url:'/editTask',
            method: 'PUT',
            body: task
        }),
            invalidatesTags: [TASK] 
        })
    })
})

export const { useGetTaskQuery, useAddTaskMutation, useDeleteTaskMutation, useEditTaskMutation } = apiTask