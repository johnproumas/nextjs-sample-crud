'use client';

import { TTodo } from "@/types";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

const TodoCard = ({ id, isCompleted, title }: TTodo) => {
    const queryClient = useQueryClient();

    const { mutate: deleteTodo, isLoading: deleteLoading } = useMutation({
        mutationFn: async () => {
            await axios.post('/api/todos/delete', { id: id });
        },
        onSuccess: () => {
            toast.success(`Deleted Todo: ${title}`);
            queryClient.invalidateQueries(['userTodos']);
        },
        onError: () => toast.error('Failed to delete todo!'),
    });

    const { mutate: updateTodo, isLoading: updateLoading } = useMutation({
        mutationFn: async () => {
            await axios.post('/api/todos/status', { id: id, isCompleted: isCompleted });
        },
        onSuccess: () => {
            toast.success(`Updated Todo: ${title}`);
            queryClient.invalidateQueries(['userTodos']);
        },
        onError: () => toast.error('Failed to update todo!'),
    });

    return (
        <Card className="min-w-[240px] mb-5">
            <CardHeader>
                <CardTitle className={isCompleted ? 'line-through' : ''}>{title}</CardTitle>
            </CardHeader>
            <CardFooter className="justify-between">
                <Button
                    onClick={() => updateTodo()}
                    isLoading={updateLoading}
                    disabled={updateLoading || deleteLoading}>
                    {isCompleted ? 'Undo' : 'Complete'}
                </Button>
                <Button
                    onClick={() => deleteTodo()}
                    isLoading={deleteLoading}
                    disabled={updateLoading || deleteLoading}>Delete</Button>
            </CardFooter>
        </Card>

    );
};

export default TodoCard;