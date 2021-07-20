import { baseUrl } from '../config/config';
import internet from './internet';
import { StateCode } from './status-code';

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
    returnType?: 'json' | 'string';
}

/**
 * @description 封装请求api
 * @param options
 * @returns 处理后的数据
 */
export function Fetch(options: FetchOptions) {
    // 默认值
    options = {
        url: baseUrl + options.url,
        methods: options.methods ?? 'get',
        params: options.params ?? {},
        body: options.body ?? {},
        mode: options.mode ?? 'cors',
        headers: options.headers ?? {},
        type: options.type ?? 'json',
        returnType: options.returnType ?? 'json',
    };

    /**
     * 定义失败信息
     * - 状态码
     * - 提示信息
     * - 错误信息
     */

    return new Promise(async (resolve, reject) => {
        /**
         * TODO：处理网络问题
         *
         *
         */
        const { isConnected } = await internet();
        if (!isConnected) {
            reject({
                status: 10001,
                msg: '当前网络已中断，请稍后重试！',
            });
            return;
        }
        // 数据序列化
        if (
            Object.prototype.toString.call(options.body) === '[object, Object]'
        ) {
            options.body = JSON.stringify(options.body);
        }

        // 将传进来的所有请求方式转换为大写
        options.methods = options.methods.toUpperCase();

        // 设置token
        // @ts-ignore
        // options.headers.Authorization = '';

        // 处理上传文件
        if (options.type === 'file') {
            // @ts-ignore
            options.headers['Content-Type'] =
                'application/x-www-form-urlencoded';
        }
        console.log('options:', options);

        return fetch(options.url, {
            method: options.methods,
            headers: new Headers(
                options.headers || { 'Content-Type': 'application/json' },
            ),
        })
            .then(async res => {
                if (!res.ok) {
                    reject({ status: res.status, msg: res.statusText });
                }
                // 处理数据结构
                // 默认返回json数据
                let result: unknown;
                if (options.returnType === 'json') {
                    result = res.json();
                    return resolve(result);
                }
                result = res.toString();
                resolve(result);
            })
            .catch(err => {
                if (err && err.response.status) {
                    StateCode.forEach(item => {
                        if (item.code === err.response.status) {
                            reject({
                                status: err.response.status,
                                msg: item.msg,
                            });
                            return;
                        }
                        return;
                    });
                    reject({
                        status: err.response.status,
                        msg: err.response.statusText,
                    });
                }
            });
    });
}
