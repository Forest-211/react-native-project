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
     * TODO：处理网络问题
     *
     *
     */

    /**
     * 定义失败信息
     * - 状态码
     * - 提示信息
     * - 错误信息
     */

    return new Promise(async (resolve, reject) => {
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
                console.log('res:', res);
                result = res.toString();
                resolve(result);
            })
            .catch(err => {
                let errMsg = '';
                if (err && err.response.status) {
                    switch (err.response.status) {
                        case 401:
                            errMsg = '登录状态失效，请重新登录';
                            break;
                        case 403:
                            errMsg = '拒绝访问';
                            break;

                        case 408:
                            errMsg = '请求超时';
                            break;

                        case 500:
                            errMsg = '服务器内部错误';
                            break;

                        case 501:
                            errMsg = '服务未实现';
                            break;

                        case 502:
                            errMsg = '网关错误';
                            break;

                        case 503:
                            errMsg = '服务不可用';
                            break;

                        case 504:
                            errMsg = '网关超时';
                            break;

                        case 505:
                            errMsg = 'HTTP版本不受支持';
                            break;

                        default:
                            errMsg = err.response.data.msg;
                            break;
                    }
                } else {
                    errMsg = err;
                }
                console.log('errMsg:', errMsg);
                reject({
                    status: err.response.status,
                    msg: err.response.statusText,
                });
            });
    });
}
