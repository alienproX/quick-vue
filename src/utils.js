let utils = {
  version: 0.01,
  isWeChat: () => (/micromessenger/i).test(navigator.userAgent),
  isMobile: phone => /^1[3|4|5|7|8][0-9]{9}$/.test(phone),
  isID: num => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(num),
  isBankCard: num => /^\d{16}|\d{19}$/.test(num),
  isEmail: mail => /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/.test(mail),
  fullTwo: num => num > 9
    ? num
    : '0' + num,
  ele: (ele, all) => all
    ? document.querySelectorAll(ele)
    : document.querySelector(ele),
  setDocTitle: title => {
    document.title = title
    if (utils.isWeChat()) {
      let iframe = document.createElement('iframe')
      iframe.src = '/favicon.ico'
      iframe.style.visibility = 'hidden'
      iframe.style.width = '1px'
      iframe.style.height = '1px'
      iframe.onload = () => {
        setTimeout(() => {
          document.body.removeChild(iframe)
        }, 0)
      }
      document.body.appendChild(iframe)
    }
  },
  post: (url, data) => new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      credentials: 'same-origin',
      body: JSON.stringify(Object.assign({}, data))
    }).then(res => {
      if (res.status === 200) {
        res.json().then(json => {
          if (+json.status === 100) {
            resolve && resolve(json.result)
          } else {
            reject && reject(json.result)
          }
        })
      }
    })
  })
}
export default utils
