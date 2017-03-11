import React from 'react'
require('./style.styl')

export default props => {
  return(
      <div className = "login">
        <div className = "login-title">「打卡咯」后台管理</div>
        <div className = "login-tip">扫码登录</div>
        <div className = "login-img">二维码</div>
      </div>
    )
}
