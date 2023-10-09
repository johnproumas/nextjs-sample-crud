'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { TTodo } from '@/types';
import TodoCard from './TodoCard';

const Todos = () => {
    const { data, isLoading, isError } = useQuery<TTodo[]>({
        queryKey: ['userTodos'],
        queryFn: async () => {
            const { data } = await axios.get("/api/todos/fetch");
            return data as TTodo[];
        }
    });

    if (isLoading) return <div className='my-5 text-center'>Loading todos...</div>;
    if (isError) return <div className='my-5'>Error!</div>;

    return (
        // <div className='max-h-[450px] md:max-h-[650px] overflow-x-auto my-4'>
        <div className='my-4'>
            {data?.map((todo, index) => (
                <TodoCard key={index} {...todo} />
            ))}
        </div>
    );
};

export default Todos;