import {instance} from '../../../SN-1-main/m3-dal/instance-api';

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{ url: string }>(`security/get-captcha-url`);
    }
};

