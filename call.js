var callWithALink = function(url) {
  console.log('使用 A 链接调用唤端');
  const a = document.createElement('a');
  a.setAttribute('href', url + '&t=' + +new Date());
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
}

var callWithIframe = function(url) {
  console.log('使用 Iframe 调用唤端');
  var iframe = document.createElement('iframe');
  iframe.frameborder = '0';
  iframe.style.cssText = 'display:none;border:0;width:0px;height:0px;';
  document.body.appendChild(iframe);
  iframe.src = url + '&t=' + +new Date();
}

var callWithLocation = function(url) {
  console.log('使用 Location 调用唤端');
  window.location.href = url + '&t=' + +new Date();
}

function getQueryParam(url = location.href) {
  const queryStr = url.split('?')[1] || '';

  const paramArr = queryStr.split('&');

  const result = {};
  paramArr.forEach(function(o, i) {
    const tempArr = o.split('=');
    result[tempArr[0]] = tempArr[1];
  });
  return result;  
}
var a = getQueryParam();
var url = '';
if (a.type && a.callType) {
  if (a.type === 'scheme') {
    url = 'tbopen://m.taobao.com/tbopen/index.html?h5Url=https%3A%2F%2Fmarket.m.taobao.com%2Fapp%2Fpm%2Frax-tesla%2Fpages%2Findex-tao';
  } else if (a.type ==='intent') {
    url = 'intent://m.taobao.com/tbopen/index.html?h5Url='+encodeURIComponent('https://market.m.taobao.com/app/pm/rax-tesla/pages/index-tao')+'#Intent;scheme=tbopen;package=com.taobao.taobao;end';
  }
  alert('开始执行自动唤端');
  setTimeout(function() {
    if (a.callType === 'alink') {
      callWithALink(url);
    } else if (a.callType === 'iframe') {
      callWithIframe(url);
    } else if (a.callType === 'location') {
      callWithLocation(url);
    }
  }, 0);
}
(function() {
  var ua = window.navigator.userAgent;
  var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
  const isPC = !isIOS && !isAndroid;

  if (isIOS) {
    document.getElementById('ios').className = 'show';
  } else if (isAndroid) {
    document.getElementById('android').className = 'show';
  } else {
    document.getElementById('pc').className = 'show';
  }
})();