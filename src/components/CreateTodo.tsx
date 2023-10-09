'use client';

import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from 'sonner';
import { TTodo } from "@/types";

const CreateTodo = () => {
    const [input, setInput] = useState('');
    const queryClient = useQueryClient();

    const { mutate: submitTodo, isLoading } = useMutation({
        mutationFn: async () => await axios.post('/api/todos/create', { title: input }),
        onSuccess: () => {
            toast.success('Todo created!');
            setInput('');
            queryClient.invalidateQueries(['userTodos']);
            console.log(`Created new task: ${input}`);

        },
        onError: () => {
            toast.error('Something went wrong creating todo, please try again');
        }
    });

    return (
        <div className="flex gap-2 min-w-full">
            <Input
                placeholder="Add your todo.."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading} />
            <Button
                onClick={() => submitTodo()}
                isLoading={isLoading}
                disabled={isLoading}>
                Submit
            </Button>
        </div>
    );
};

export default CreateTodo;