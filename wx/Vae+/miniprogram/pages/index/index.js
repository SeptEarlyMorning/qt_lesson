//index.js
const app = getApp()
var starX,
    endX,
    oldLeft;

Page({
    data: {
        currentTab: 0,
        left: 65
    },

    selectNav(e) {
        console.log(e);
        this.setData({
            currentTab: e.currentTarget.dataset.current
        });
    },

    swiperChange(e) {
        // console.log(e);
        this.setData({
            currentTab: e.detail.current,
            left: 750 / 3 * e.detail.current + 65
        });
    },

    touchStart(e) {
        // console.log(e);
        starX = e.changedTouches[0].pageX;
        oldLeft = this.data.left;
    },

    touchMove(e) {
        // console.log(e);
        endX = e.changedTouches[0].pageX;
        if (this.data.currentTab == 0 && (endX - starX) > 0) {
            return;
        } else if (this.data.currentTab == 2 && (endX - starX) < 0) {
            return;
        }
        this.setData({
            left: ((starX - endX) * 2) / 3 + oldLeft,
        });
    },

    touchEnd(e) {
        // console.log(wx.getSystemInfoSync().windowWidth);
        this.setData({
            left: 750 / 3 * this.data.currentTab + 65
        });
    },

    onLoad: function() {
        if (!wx.cloud) {
            wx.redirectTo({
                url: '../chooseLib/chooseLib',
            })
            return
        }

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                userInfo: res.userInfo
                            })
                        }
                    })
                }
            }
        })
    },

    onGetUserInfo: function(e) {
        if (!this.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                userInfo: e.detail.userInfo
            })
        }
    },

    onGetOpenid: function() {
        // 调用云函数
        wx.cloud.callFunction({
            name: 'login',
            data: {},
            success: res => {
                console.log('[云函数] [login] user openid: ', res.result.openid)
                app.globalData.openid = res.result.openid
                wx.navigateTo({
                    url: '../userConsole/userConsole',
                })
            },
            fail: err => {
                console.error('[云函数] [login] 调用失败', err)
                wx.navigateTo({
                    url: '../deployFunctions/deployFunctions',
                })
            }
        })
    },

    // 上传图片
    doUpload: function() {
        // 选择图片
        wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album', 'camera'],
            success: function(res) {

                wx.showLoading({
                    title: '上传中',
                })

                const filePath = res.tempFilePaths[0]

                // 上传图片
                const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
                wx.cloud.uploadFile({
                    cloudPath,
                    filePath,
                    success: res => {
                        console.log('[上传文件] 成功：', res)

                        app.globalData.fileID = res.fileID
                        app.globalData.cloudPath = cloudPath
                        app.globalData.imagePath = filePath

                        wx.navigateTo({
                            url: '../storageConsole/storageConsole'
                        })
                    },
                    fail: e => {
                        console.error('[上传文件] 失败：', e)
                        wx.showToast({
                            icon: 'none',
                            title: '上传失败',
                        })
                    },
                    complete: () => {
                        wx.hideLoading()
                    }
                })

            },
            fail: e => {
                console.error(e)
            }
        })
    },

});