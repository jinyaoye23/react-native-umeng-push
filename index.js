
import { NativeModules } from 'react-native';
import { stat } from 'react-native-fs';

const UmengPush = NativeModules.RNUmengPush
// export default RNUmengPush;

export default class RNUmengPush {

    /**
     * 厂家通道点击事件处理
     * 
     * @static
     * @param {any} cb 
     * @memberof RNUmengPush
     */
    static ManufacturerCallback(cb) {
        UmengPush.ManufacturerCallback((param) => {
            cb(param)
        });
    }

    static openNotificationSetting() {
        UmengPush.openNotificationSetting()
    }
    static checkNotification(cb) {
        UmengPush.checkNotification((result) => {
            cb(result)
        });
    }
    /**
     *  获取SDK的Cid
     *
     *  @return Cid值
     */
    static clientId(cb) {
        UmengPush.clientId((param) => {
            cb(param)
        });
    }
    /**
     * 清除所有通知
     */
    static clearAllNotifications() {
        UmengPush.clearAllNotifications()
    }

    static initUMengSDK() {
        UmengPush.initUMengSDK()
    }

    /**
     * 初始化友盟SDK
     */
    static initSDK() {
        UmengPush.initUMengSDK()
    }

    /**
     * initPush 
     */
    static initPush() {
        UmengPush.initPush()
    }

    /**
     *  销毁SDK，并且释放资源
     */
    static destroy() {
        UmengPush.destroy();
    }

}
