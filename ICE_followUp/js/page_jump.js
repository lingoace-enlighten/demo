window.gameAudios = [];
window.gameAudio = null;

window.LPWURL = "https://student.lingoace.com/"
window.LPWRESULTURL = 'https://student.lingoace.com/evaluate/result/index.html?studentId='
window.LPWSTUDENTID = "8421400029744412"

function playEffectEnd(_src) {
    if (window.playEnd) {
        window.playEnd(_src);
    }
}

function effectEndLister() {
    if (window.gameAudio && window.gameAudio.currentSrc) {
        playEffectEnd(window.gameAudio.currentSrc);
    }
}

window.playEffect = function (_name, _isCall, _callBack) {
    var index = window.audioFiles.indexOf(_name);
    var idx = -1;
    // console.log("------_name-"+_name);
    if (window.gameAudio) {
        var idx_gang = window.gameAudio.src.lastIndexOf("/");
        var winUrl = window.gameAudio.src.substring(idx_gang + 1, window.gameAudio.src.length);
        idx = window.audioFiles.indexOf("./sounds/" + winUrl);
    }

    if (idx >= 0) {
        window.gameAudio.pause();
    } else {
        window.stopEffect();
    }

    window.gameAudio = window.gameAudios[index];

    if (!window.gameAudio) {
        let name = _name.replace(".","");
        window.gameAudio = new Audio('https://cdn.lingo-ace.com/student/evaluate' +name);
        // window.gameAudio = new Audio("./" + _name);
    }
    window.gameAudio.load();
    window.gameAudio.addEventListener('canplaythrough', () => {
        if (_callBack && window.songLoadEnd) {
            window.gameAudio.play();
            window.songLoadEnd();
        } else {
            window.gameAudio.play();
        }
    }, false);

    if (_isCall) {
        window.gameAudio.addEventListener("ended", effectEndLister);
    }
}

window.registerEndevent = function () {
    window.gameAudio.addEventListener("ended", effectEndLister);
}

window.stopEffect = function () {
    if (window.gameAudio) {
        window.gameAudio.pause();
        window.gameAudio.removeEventListener("ended", effectEndLister);
        window.gameAudio = null;
    }
}

window.onload = function () {
   
    window.audioFiles = [
        
    ];

    function preloadAudio(url) {
        var audio = new Audio();
        audio.addEventListener('canplaythrough', loadedAudio, false);
        audio.src = './' + url;
        window.gameAudios.push(audio);
    }

    function loadedAudio() {
        // this will be called every time an audio file is loaded
        // we keep track of the loaded files vs the requested files
        console.log("loadedAudio");

    }

    //预先加载音频
    if (document.location.pathname.indexOf("Lesson_1") >= 0) {
        // for (var i in window.audioFiles) {
        //     preloadAudio(audioFiles[i]);
        // }
        for (let index = 0; index < window.audioFiles.length; index++) {
            preloadAudio(window.audioFiles[index]);
        }
    }
}
