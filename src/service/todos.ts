import { Fetch } from '../utils/fetch';

// 获取一条信息
async function handleGetOnece() {
    const result = await Fetch({
        url: '/todos/1',
        methods: 'get',
        returnType: 'string',
    });
    console.log('result:', result);
}

export { handleGetOnece };
