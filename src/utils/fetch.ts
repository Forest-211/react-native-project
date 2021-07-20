import { baseUrl } from '../config/config';

interface FetchOptions {
    url: string; // 获取资源的 URL
    methods: string; // 请求使用的方法
    params?: { [propName: string]: any };
    body?: { [propName: string]: any } | string;
    mode?: 'no-cors' | 'cors' | '*same-origin'; // 请求的模式
    headers?: {
        [propName: string]: any;
    };
    type?: 'json' | 'file'; // 请求类型
}

/**
 * @description 封装请求api
 * @param options
 * @returns 处理后的数据
 */
export function Fetch(options: FetchOptions) {
    // 默认值
    Object.assign(options, {
        url: baseUrl,
        methods: 'get',
        params: {},
        body: '',
        mode: 'cors',
        type: 'json',
    });

    return new Promise((resolve, reject) => {
        // 对象序列化
        if (
            Object.prototype.toString.call(options.body) === '[object, Object]'
        ) {
            options.body = JSON.stringify(options.body);
        }
        // 将传进来的所有请求方式转换为大写
        options.methods = options.methods.toUpperCase();

        // 设置token
        // @ts-ignore
        options.headers.Authorization = '';

        // 处理上传文件
        if (options.type === 'file') {
            // @ts-ignore
            options.headers['Content-Type'] =
                'application/x-www-form-urlencoded';
        }

        return fetch(options.url, {
            method: options.methods,
            headers: new Headers(
                options.headers || { 'Content-Type': 'application/json' },
            ),
        })
            .then(res => {
                console.log('res', res);
                // 处理数据结构
                resolve('');
            })
            .catch(err => {
                console.log('err:', err);
                reject('');
            });
    });
}
