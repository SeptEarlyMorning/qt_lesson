// miniprogram/pages/circle/circle.js
var starX,
    endX,
    oldLeft,
    oldDynamicX,
    // oldStrokeX,
    // oldActivityX,
    oldCurrentTab,
    proportion = 750 / wx.getSystemInfoSync().windowWidth;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
        left: 65,
        dynamicX: 0,
        strokeX: 750,
        activityX: 1500
    },

    touchStart(e) {
        starX = e.changedTouches[0].pageX;
        oldLeft = this.data.left;
        oldCurrentTab = this.data.currentTab;
        oldDynamicX = this.data.dynamicX;
        // oldStrokeX = this.data.strokeX;
        // oldActivityX = this.data.activityX;
    },

    touchMove(e) {
        endX = e.changedTouches[0].pageX;
        if (this.data.currentTab == 0 && (endX - starX) > 0) {
            return;
        } else if (this.data.currentTab == 2 && (endX - starX) < 0) {
            return;
        }
        this.setData({
            left: ((starX - endX) * proportion) / 3 + oldLeft,
            dynamicX: oldDynamicX - (starX - endX) * proportion,
            // strokeX: oldStrokeX - starX + endX,
            // activityX: oldActivityX - starX + endX
        });
    },

    touchEnd(e) {
        if ((starX - endX) * proportion > 375 && oldCurrentTab < 2) {
            oldCurrentTab++;
        } else if ((starX - endX) * proportion < 375 && oldCurrentTab > 0) {
            oldCurrentTab--;
        }
        this.setData({
            currentTab: oldCurrentTab,
            left: 750 / 3 * oldCurrentTab + 65,
            dynamicX: -750 * oldCurrentTab
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})