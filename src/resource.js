import Vue from 'vue'
import vueResource from 'vue-resource'
import { Toast } from 'mint-ui';
Vue.use(vueResource)
export default {
    interceports() {
        Vue.http.interceptors.push((req, next) => {
            req.method = "GET"
        
            let toast = Toast({
                message: '请求中...'
            })
            next(res => {
                toast.close()
                if (!res.ok) {
                    Toast({
                        message: res.statusText,
                        duration: 2000
                    })
                    return
                }
                if (res.ok && res.body.code !== 0) {
                    Toast({
                        message: res.body.message,
                        duration: 2000
                    })
                    return
                }
            })
        })
    },
    resource(url, params) {
        let doUrl = 'http://czgy.mbjyy.net/' + url
        return Vue.http.post(doUrl, params)
    },

    getTimestamp() {
        return this.resource('utility/timestamp')
    },

    /**
     * @description 用来获取微信用户的openId
     * @param {*} params {code}
     * @return <promise>
     * @response openid
     */
    oath(params) {
        return this.resource('gateway/patient/oauth', params)
    },

    /**
     * @description 获取用来js-sdk认证的config参数信息
     * @param {*} params {code}
     * @return <promise>
     * @response code
     */
    jsApiConfig(params) {
        return this.resource('gateway/patient/jsApiConfig', params)
    },


    /**
     * @description 用户注册接口
     * @return u,t
     */
    register(params) {

        return this.resource('patient/user/register', params)
    },

    /**
     * @description 获取系统当前时间戳
     */
    getSystemTimestamp(params) {
        return this.resource('utility/timestamp', params)
    },

    /**
     * @description 发送手机验证码
     * @params {mobile: string}
     */
    smsCode(params) {
        return this.resource('utility/smsCode', params)
    },


  
    userInfo() {
        return this.resource('patient/user/userInfo')
    }

}

