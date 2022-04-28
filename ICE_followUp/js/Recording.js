// import {NotificationCenter} from "./event"
// 1. websocket连接：判断浏览器是否兼容，获取websocket url并连接，这里为了方便本地生成websocket url
// 2. 获取浏览器录音权限：判断浏览器是否兼容，获取浏览器录音权限，
// 3. js获取浏览器录音数据
// 4. 将录音数据处理为文档要求的数据格式：采样率16k或8K、位长16bit、单声道；该操作属于纯数据处理，使用webWork处理
// 5. 根据要求（采用base64编码，每次发送音频间隔40ms，每次发送音频字节数1280B）将处理后的数据通过websocket传给服务器，
// 6. 实时接收websocket返回的数据并进行处理

// ps: 该示例用到了es6中的一些语法，建议在chrome下运行
//APPID，APISecret，APIKey在控制台-我的应用-语音评测（流式版）页面获取

//国内
// const APPID = '5f86fe26'
// const API_SECRET = 'bf4b51ff3dfe195c4554ec4e29ab39d5'
// const API_KEY = 'e4d2f3977c0b9b726b1c20246886ad9c'

//公司海外
const APPID = 'g98d5722'
const API_SECRET = 'b69bd8f7c7c8b04122dde1352ac4fd3e'
const API_KEY = '4d72e5f374599ab9330b1f02f3f7c16e'

/**
 * 获取websocket url
 * 该接口需要后端提供，这里为了方便前端处理
 */
function getWebSocketUrl() {
  return new Promise((resolve, reject) => {
    // 请求地址根据语种不同变化
    var url = 'wss://ise-api-sg.xf-yun.com/v2/ise'
    var host =  'ise-api-sg.xf-yun.com'
    var apiKey = API_KEY
    var apiSecret = API_SECRET
    var date = new Date().toGMTString()
    var algorithm = 'hmac-sha256'
    var headers = 'host date request-line'
    // var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/open-ise HTTP/1.1`
    var signatureOrigin = `host: ${host}\ndate: ${date}\nGET /v2/ise HTTP/1.1`

    var signatureSha = CryptoJS.HmacSHA256(signatureOrigin, apiSecret)
    var signature = CryptoJS.enc.Base64.stringify(signatureSha)
    var authorizationOrigin = `api_key="${apiKey}", algorithm="${algorithm}", headers="${headers}", signature="${signature}"`
    var authorization = btoa(authorizationOrigin)
    url = `${url}?authorization=${authorization}&date=${date}&host=${host}`
    resolve(url)
  })
}

let _instance = null;
class IseRecorder {
  static get instance () {
    if (!_instance) {
        _instance = new IseRecorder();
    }
    return _instance;
}
  constructor({ language, accent, appId } = {}) {
    let self = this
    this.status = 'null'
    this.language = language || 'en_us'
    this.accent = accent || 'mandarin'
    this.appId = appId || APPID
    // 记录音频数据
    this.audioData = []
    // 记录评测结果
    this.resultText = ''
    this.PowerStart = false    //权限是否已经获得
    // wpgs下的评测结果需要中间状态辅助记录
    this.resultTextTemp = ''
    // transWorker.onmessage = function (event) {
    //   self.audioData.push(...event.data)
    // }
  }

  // 修改录音评测状态
  setStatus(status) {
    // this.onWillStatusChange && this.status !== status && this.onWillStatusChange(this.status, status)
    this.status = status
  }
 
  // 修改评测参数
  setParams({ language, accent } = {}) {
    language && (this.language = language)
    accent && (this.accent = accent)
  }
  // 连接websocket
  connectWebSocket() {
    if (APPID === 'APPID' || !APPID) {
      alert('请填写APPID、APISecret、APIKey，可从控制台-我的应用-语音评测（流式版）页面获取。')
      return false;
    }
    return getWebSocketUrl().then(url => {
      let iseWS
      if ('WebSocket' in window) {
        iseWS = new WebSocket(url)
      } else if ('MozWebSocket' in window) {
        iseWS = new MozWebSocket(url)
      } else {
        alert('浏览器不支持WebSocket')
        return
      }
      this.webSocket = iseWS
      this.setStatus('init')
      iseWS.onopen = e => {
        this.setStatus('ing')
        console.log("Web Socket Statr OK =======  ")
        // 重新开始录音
        setTimeout(() => {
          this.webSocketSend()
        }, 500)
        
      }
      iseWS.onmessage = e => {
        this.result(e.data)
      }
      iseWS.onerror = e => {
        console.log(e,"  webScoket onerror =========  ")
        // window.webframe.Notify.trigger("onUpSound")     //取消网络等待
        this.recorderStop1()
      }
      iseWS.onclose = e => {
        // window.webframe.Notify.trigger("onUpSound")     //取消网络等待
        console.log("  webScoket onclose =========  ")
        this.recorderStop1()
      }
    })
  }

  // 初始化浏览器录音
  recorderInit(callBack) {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia
    
    // 创建音频环境
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      this.audioContext.resume()
      if (!this.audioContext) {

        alert('浏览器不支持webAudioApi相关接口')
        return
      }
    } catch (e) {
      if (!this.audioContext) {

        alert('浏览器不支持webAudioApi相关接口')
        return
      }
    }
    
    // 获取浏览器录音权限
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then(stream => {
          getMediaSuccess(stream)
        })
        .catch(e => {
          getMediaFail(e)
        })
    } else if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          audio: true,
          video: false,
        },
        stream => {
          getMediaSuccess(stream)
        },
        function(e) {
          getMediaFail(e)
        }
      )
    } else {
      if (navigator.userAgent.toLowerCase().match(/chrome/) && location.origin.indexOf('https://') < 0) {
        alert('chrome下获取浏览器录音功能，因为安全性问题，需要在localhost或127.0.0.1或https下才能获取权限')
      } else {
        alert('无法获取浏览器录音功能，请升级浏览器或使用chrome')
      }
      this.audioContext && this.audioContext.close()
      return
    }
    // 获取浏览器录音权限成功的回调
    let getMediaSuccess = stream => {
      console.log('getMediaSuccess  获取录音权限成功')
      this.PowerStart = true
      // 创建一个用于通过JavaScript直接处理音频
      this.scriptProcessor = this.audioContext.createScriptProcessor(0, 1, 1)
      this.scriptProcessor.onaudioprocess = e => {
        // 去处理音频数据
        if (this.status === 'ing') {
          // transWorker.postMessage(e.inputBuffer.getChannelData(0))
          this.transcode(e.inputBuffer.getChannelData(0))
        }
      }
      // 创建一个新的MediaStreamAudioSourceNode 对象，使来自MediaStream的音频可以被播放和操作
      this.mediaSource = this.audioContext.createMediaStreamSource(stream)
      // 连接
      // this.mediaSource.connect(this.scriptProcessor)
      // this.scriptProcessor.connect(this.audioContext.destination)
      // this.connectWebSocket()
      callBack && callBack()
    }

    let getMediaFail = (e) => {
      // alert('请求麦克风失败')
      // window.webframe.Notify.trigger("recordPower")  //上传网络等待
      console.log(e)
      this.audioContext && this.audioContext.close()
      this.audioContext = undefined

      // 关闭websocket
      if (this.webSocket && this.webSocket.readyState === 1) {
        this.webSocket.close()
      }
    }
  }

  transcode(audioData) {
    let output = this.to16kHz(audioData)
    output = this.to16BitPCM(output)
    output = Array.from(new Uint8Array(output.buffer))
    // self.postMessage(output)
    this.audioData.push(...output)
  }

  to16kHz(audioData) {
    var data = new Float32Array(audioData)
    var fitCount = Math.round(data.length * (16000 / 44100))
    var newData = new Float32Array(fitCount)
    var springFactor = (data.length - 1) / (fitCount - 1)
    newData[0] = data[0]
    for (let i = 1; i < fitCount - 1; i++) {
      var tmp = i * springFactor
      var before = Math.floor(tmp).toFixed()
      var after = Math.ceil(tmp).toFixed()
      var atPoint = tmp - before
      newData[i] = data[before] + (data[after] - data[before]) * atPoint
    }
    newData[fitCount - 1] = data[data.length - 1]
    return newData
  }

  to16BitPCM(input) {
    var dataLength = input.length * (16 / 8)
    var dataBuffer = new ArrayBuffer(dataLength)
    var dataView = new DataView(dataBuffer)
    var offset = 0
    for (var i = 0; i < input.length; i++, offset += 2) {
      var s = Math.max(-1, Math.min(1, input[i]))
      dataView.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true)
    }
    return dataView
  }

  recStart(text,textType,callBack){
      console.log(" 开始录音 讯飞 =========  ")
      if (!this.audioContext) {
        console.log(" 开始录音 讯飞 =========  111")
        this.recorderInit()
      } else {
        this.textType=textType;
        console.log(" 开始录音 讯飞 =========  textType",textType)
        this.total_score = 0
        this.is_rejected = false
        this.contentText = text
        console.log("语音是" + this.contentText)
        this.audioContext.resume()
        this.mediaSource.connect(this.scriptProcessor)
        this.scriptProcessor.connect(this.audioContext.destination)
        this.connectWebSocket()
        callBack && callBack()
      }
  }

  // 暂停录音
  recorderStop1() {
    // safari下suspend后再次resume录音内容将是空白，设置safari下不做suspend
    if (!(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgen))){
      this.audioContext && this.audioContext.suspend()
    }
    this.setStatus('end')
  }

  recorderStop(callBack) {
    // safari下suspend后再次resume录音内容将是空白，设置safari下不做suspend
    if (!(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgen))){
      this.audioContext && this.audioContext.suspend()
    }
    this.setStatus('end')
    callBack && callBack()
    // window.webframe.Notify.trigger("upSound")  //上传网络等待
  }

  // 对处理后的音频数据进行base64编码
  toBase64(buffer) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }
  // 向webSocket发送数据
  webSocketSend() {
    if (this.webSocket.readyState !== 1) {
      return
    }
    
    this.timeOut = setTimeout(()=>{
      // window.webframe.Notify.trigger("onUpSound")     //取消网络等待
      alert("网络请求超时，请重试")
      this.webSocket.close()
    },20*1000)

    let audioData = this.audioData.splice(0, 1280)
    console.log("textType",this.textType)
    var params = {
      common: {
        app_id: this.appId,
      },
      business: {
        category: this.textType, // read_syllable/单字朗读，汉语专有 read_word/词语朗读  read_sentence/句子朗读 http://test.www.xfyun.cn/doc/Ise/IseAPI.html#%E6%8E%A5%E5%8F%A3%E8%B0%83%E7%94%A8%E6%B5%81%E7%A8%8B
        rstcd: 'utf8',
        group: 'pupil',
        sub: 'ise',
        ent: 'en_vip',
        tte: 'utf-8',
        cmd: 'ssb',
        auf: 'audio/L16;rate=16000',
        aus: 1,
        aue: 'raw',
        text: '\uFEFF' + this.contentText

      },
      data: {
        status: 0,
        encoding: 'raw',
        data_type: 1,
        data: ''
      },
    }
    this.webSocket.send(JSON.stringify(params))
    this.handlerInterval = setInterval(() => {
      // websocket未连接
      if (this.webSocket.readyState !== 1) {
        this.audioData = []
        clearInterval(this.handlerInterval)
        return
      }
      // 最后一帧
      if (this.audioData.length === 0) {
        if (this.status === 'end') {
          this.webSocket.send(
            JSON.stringify({
              business: {
                cmd: 'auw',
                aus: 4,
                aue: 'raw'
              },
              data: {
                status: 2,
                encoding: 'raw',
                data_type: 1,
                data: '',
              },
            })
          )
          this.audioData = []
          clearInterval(this.handlerInterval)
        }
        return false
      }
      audioData = this.audioData.splice(0, 1280)
      // 中间帧  
      this.webSocket.send(
        JSON.stringify({
          business: {
            cmd: 'auw',
            aus: 2,
            aue: 'raw'
          },
          data: {
            status: 1,
            encoding: 'raw',
            data_type: 1,
            data: this.toBase64(audioData),
          },
        })
      )
    }, 40)
  }


  result(resultData) {
    // 识别结束
    let jsonData = JSON.parse(resultData)
    if (jsonData.data && jsonData.data.data) {
      let data = Base64.decode(jsonData.data.data)
      let grade = parser.parse(data, {
        attributeNamePrefix: '',
        ignoreAttributes: false
      })
      clearTimeout(this.timeOut);
      console.log(grade,"=========识别结果============")
      // const readSentence =  grade?.xml_result?.read_sentence?.rec_paper?.read_sentence
      
      let readSentence
      if(grade && grade.xml_result && grade.xml_result.read_sentence && grade.xml_result.read_sentence.rec_paper && grade.xml_result.read_sentence.rec_paper.read_chapter){
          readSentence =  grade.xml_result.read_sentence.rec_paper.read_chapter
      }
      
      if(readSentence && readSentence.total_score){
          this.total_score = readSentence.total_score*20
      }else{
          this.total_score = 0
      }

      let able = readSentence.is_rejected == "true" ? true:false
      this.is_rejected = able
      // window.webframe.Notify.trigger("voice_result")  //语音识别结果
      console.log("+++++++最终得分+++++++",this.total_score)
      // ListenerManager.dispatch("EVENT_FOLLOW_UP_GET_SCORE",this.total_score); 
      window.followUpGetScoreEvent.emit('notification',this.total_score)
    }
    if (jsonData.code === 0 && jsonData.data.status === 2) {
      this.webSocket.close()
      console.log("webSocket111 ===================== Close")
    }
    if (jsonData.code !== 0) {
      this.webSocket.close()
      console.log("webSocket222 ===================== Close")
      console.log(`${jsonData.code}:${jsonData.message}`)
    }
  }
}

console.log(" window LRecording Loading Done ===")
window.LRecording = IseRecorder.instance


