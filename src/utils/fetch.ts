import { baseUrl } from '../config/config';
import internet from './internet';
import { StateCode } from './status-code';

interface Options {
    url: string;
    method: 'OPTIONS' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    type: 'json' | 'file';
    returnType: 'json' | 'string';
}

/**
 * @description 封装请求api
 * @param options
 * @returns 处理后的数据
 */
export function Fetch(options: RequestInit & Options) {
    // 默认值
    options = {
        url: baseUrl + options.url,
        method: options.method ?? 'get',
        body: options.body,
        mode: options.mode ?? 'cors',
        headers: options.headers ?? {},
        type: options.type ?? 'json',
        returnType: options.returnType ?? 'json',
    };

    return new Promise(async (resolve, reject) => {
        // 处理网络
        const { isConnected } = await internet();
        if (!isConnected) {
            reject(StateCode[StateCode.length - 1]);
            return;
        }
        // 数据序列化
        if (
            Object.prototype.toString.call(options.body) === '[object, Object]'
        ) {
            options.body = JSON.stringify(options.body);
        }

        // 设置token
        // @ts-ignore
        options.headers.Authorization = '';

        // 处理上传文件
        if (options.type === 'file') {
            // @ts-ignore
            options.headers['Content-Type'] =
                'application/x-www-form-urlencoded';
        }
        console.log('options:', options);

        return fetch(options.url, {
            method: options.method,
            body: options.body,
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
