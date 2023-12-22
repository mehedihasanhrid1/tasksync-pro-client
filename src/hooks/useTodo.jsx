import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useAuth from './useAuth';

const useTodo = () => {
    const { user } = useAuth();
    const {data: toDo = [], isPending: loading, refetch} = useQuery({
        queryKey: ['toDo'], 
        queryFn: async() =>{
            const res = await axios.get(`tasksync-pro-server.vercel.app/api/tasks?userEmail=${user.email}`);
            return res.data;
        }
    })

    return [toDo, loading, refetch]
};

export default useTodo;