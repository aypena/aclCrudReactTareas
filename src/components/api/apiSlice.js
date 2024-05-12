import  {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice= createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080',
    }),
    endpoints:(builder)=> ({
        getTareas:builder.query({
            query:()=> 'tareas/all',  
            providesTags:["Tareas"],
            transformResponse: response=>response.sort((a,b) =>b.identificador- a.identificador)
        }),
        crearTarea:builder.mutation({
        query: (nuevaTarea) =>({
            url: "/tareas",
            method:"POST",
             body: nuevaTarea,
        }),
        invalidatesTags:["Tareas"],
        }),
        eliminarTarea: builder.mutation({
            query:(identificador)=>({
                url:`/tareas/${identificador}`,
                method:"DELETE",

            }),
            invalidatesTags:["Tareas"],
        }),
        actualizarTarea: builder.mutation({
            query:(tareaActualizada)=>({
                url:`/tareas/${tareaActualizada.identificador}`,
                method:"PUT",
                body:tareaActualizada,
            }),
            invalidatesTags:["Tareas"],
        }),
    }),
    
});
export const{useGetTareasQuery,useCrearTareaMutation,useEliminarTareaMutation,useActualizarTareaMutation}=apiSlice;