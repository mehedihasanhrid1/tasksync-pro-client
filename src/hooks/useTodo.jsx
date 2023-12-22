import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useAuth from './useAuth';

const useTodo = () => {
    const { user } = useAuth();
    const {data: toDo = [], isPending: loading, refetch} = useQuery({
        queryKey: ['toDo'], 
        queryFn: async() =>{
            const res = await axios.get(`http://localhost:5000/api/tasks?userEmail=${user.email}&type=todo`);
            return res.data;
        }
    })

    return [toDo, loading, refetch]
};

export default useTodo;