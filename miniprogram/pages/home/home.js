 // pages/home/home.js
 Page({

   /**
    * 页面的初始数据
    */
   data: {
     movieList: [],
   },

   getMovieList:function(){
     wx.showLoading({
       title: '加载中',
     })
     // 调用云函数
     wx.cloud.callFunction({
       name: 'movieList',
       data: {
         start: this.data.movieList.length,
         count: 10
       }
     }).then(res => {
       console.log('返回的数据:', res);
       this.setData({
         movieList: this.data.movieList.concat(JSON.parse(res.result).subjects)
       });
       wx.hideLoading();
     }).catch(err => {
       console.error(err);
     })
   },
   // 跳转到comment界面
   gotoComment: function(event) {
     wx.navigateTo({
       url: `../comment/comment?movieid=${event.target.dataset.movieid}`,
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
     this.getMovieList()
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
     this.getMovieList()
   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
 })