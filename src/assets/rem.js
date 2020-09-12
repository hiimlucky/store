/*
	rem，适配文件，这是我是老尚的
*/

;
(function(win){
	var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    // 设备像素比
    var devicePixelRatio = win.devicePixelRatio;
    var tid;

    metaEl.setAttribute("content", "initial-scale=.5, maximum-scale=.5, minimum-scale=.5, user-scalable=no viewport-fit=cover")

    function refreshRem(){
    	var width = docEl.getBoundingClientRect().width;
    	var ua = navigator.userAgent.toLowerCase();
    	// 在ua里，找不到ipad的时候，执行
    	// 普通手机时，执行
    	if (!/ipad/.test(ua)) {
    		// 375 / 2，不大于750，所以不执行if里
            if (width / 2 > 750) {
                width = 750 * dpr
            }

            var rem = width / 10;
        	docEl.style.fontSize = rem + "px";
        }
    }
    refreshRem();

    win.addEventListener("resize",
    function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300)
    },
    false);

    win.addEventListener("pageshow",
    function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300)
        }
    },
    false);

})(window)