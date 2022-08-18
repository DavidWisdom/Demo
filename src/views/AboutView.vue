<template>
  <div class="camera_outer">
    <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
    <canvas style="display:none;" id="canvasCamera" :width="videoWidth" :height="videoHeight"></canvas>
    <div v-if="imgSrc" class="img_bg_camera">
      <p>效果预览</p>
      <img :src="imgSrc" alt class="tx_img" />
    </div>
    <div class="button" style="text-align: center">
      <el-button type="danger" @click="getCompetence() ">打开摄像头</el-button>
      <el-button type="danger" @click="stopNavigator()">关闭摄像头</el-button>
      <el-button type="danger" @click="setImage()">拍照</el-button>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
export default {
  data() {
    return {
      videoWidth: document.documentElement.clientWidth,
      videoHeight: document.documentElement.clientHeight,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo:false
    };
  },
  mounted(){
    this.getCompetence()//进入页面就调用摄像头
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence() {
      const _this = this;
      _this.thisCancas = document.getElementById("canvasCamera");
      _this.thisContext = this.thisCancas.getContext("2d");
      _this.thisVideo = document.getElementById("videoCamera");
      _this.thisVideo.style.display = 'block';
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function(constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          const getUserMedia =
              navigator.webkitGetUserMedia ||
              navigator.mozGetUserMedia ||
              navigator.getUserMedia;
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {//不存在则报错
            return Promise.reject(
                new Error("getUserMedia is not implemented in this browser")
            );
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function(resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        };
      }
      const constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)"
        }
      };
      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(stream) {
            // 旧的浏览器可能没有srcObject
            if ("srcObject" in _this.thisVideo) {
              _this.thisVideo.srcObject = stream;
            } else {
              // 避免在新的浏览器中使用它，因为它正在被弃用。
              _this.thisVideo.src = window.URL.createObjectURL(stream);
            }
            _this.thisVideo.onloadedmetadata = function() {
              _this.thisVideo.play();
            };
          })
          .catch(err => {
            console.log(err);
          });
    },
    //  绘制图片（拍照功能）
    setImage() {
      const _this = this;
      // canvas画图
      _this.thisContext.drawImage(
          _this.thisVideo,
          0,
          0,
          _this.videoWidth,
          _this.videoHeight
      );
      // 获取图片base64链接
      _this.imgSrc = this.thisCancas.toDataURL("image/png");//赋值并预览图片
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop();
    }
  }
};
</script>

