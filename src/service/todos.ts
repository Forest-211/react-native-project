import { Fetch } from '../utils/fetch';
import { Todo } from '../types/service/todo';

// 获取一条信息
async function handleGetOnece() {
    // @ts-ignore
    const todo: Todo = await Fetch({
        url: '/todos/1',
        methods: 'get',
    });
    console.log('result:', todo);

    return todo;
}

export { handleGetOnece };
