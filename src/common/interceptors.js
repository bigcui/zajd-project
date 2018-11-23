/**
 * @file axios-resource interceptors.js
 * @author bigcui
 */



export default function initInterceptors(interceptors) {
    interceptors
        .request
        .use(request => request);

    interceptors
        .response
        .use(response => {
            const res = response.data;

            // 与后端商定，http成功返回（200 ok），且数据中的status值为401则未登录，需要跳转passport登陆
            if (+res.status === 401) {
                passportLogin.login();
                return Promise.reject(response.data);
            }

            if (response.status === 200) {
                return response.data;
            }
            return Promise.reject(response.data);
        });
}
