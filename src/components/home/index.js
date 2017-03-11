// import React from 'react'
// // import { Link } from 'react-router'
// require('./style.styl')

// export default props => {
//   return(
//       <div className = "home">
//         <div  className = "home-logout">
//                <img src = "../../images/logout.png" alt = "logout"/>
//         </div>
//         <div className = "home-time">2017年3月10日</div>
//         <div className = "home-week">
//             星期五&nbsp;&nbsp;&nbsp;&nbsp;10:30</div>
//         <div className = "home-user">5700位用户
//             <span className = "home-user change"> +196</span></div>
//         <div className = "company">
//            <div className = "company-1">
//                 <span className = "company-num">1299</span><br />
//                 <span className = "company-text">公司</span>
//            </div>
//             <span className="company-1 change1"> +108</span>
//         </div>
//         <div className = "staff">
//            <div className = "company-1">
//                 <span className = "staff-num">4200</span><br />
//                 <span className = "staff-text">员工</span>
//            </div>
//            <span className="company-1 change2"> +108</span>
//         </div>
//         <div className = "tourist">
//            <div className = "company-1">
//                 <span className = "tourist-num">201</span><br />
//                 <span className = "tourist-text">普通</span>
//            </div>
//            <span className="company-1 change3"> -20</span>
//         </div>
//         <div className = "tourist2">
//            <div className = "company-1">
//                 <span className = "tourist2-num">882</span><br />
//                 <span className = "tourist2-text">打卡企业</span>
//            </div>
//            <span className="company-1 change4"> +10</span>
//         </div>
//         <div className = "tourist3">
//            <div className = "company-1">
//                 <span className = "tourist3-num">3400</span><br />
//                 <span className = "tourist3-text">打卡员工</span>
//            </div>
//            <span className="company-1 change5"> +35</span>
//         </div>
//       </div>
//     )
// }

import React, { Component } from 'react'
import { Link } from 'react-router'
require('./style.styl')

export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: '2017年3月10日',
            hours: '10:30' ,
            week: '星期五'
        }
        this.timeChange = this.timeChange.bind(this);
    }
    componentDidMount () {
        console.log('start running timechange')
        this.timeChange()
    }
    timeChange() {
        console.log('get in timeChange funcition')
        var today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var week=(' 星期'+'日一二三四五六'.charAt(new Date().getDay()));
            if ( minutes<10 ){
                minutes ="0"+ minutes;
            }
            if ( hours<10 ){
                hours ="0"+ hours;
            }
        this.setState({
            hours: hours + ':' + minutes ,
            time: year + '年' + month +'月' +day +'日' ,
            week: week
        })
        setTimeout(this.timeChange, 1000)
   }
render() {
    return(
      <div className = "home">
        <div>
            <Link to ='/login' className = "home-logout"></Link>
        </div>
        <div className = "home-time">{this.state.time}</div>
        <div className = "home-week">
            {this.state.week}&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.hours}</div>
        <div className = "home-user">5700位用户
            <span className = "home-user change"> +196</span></div>
        <div><hr className = "home-line"/></div>
        <div className = "company">
           <div className = "company-1">
                <span className = "company-num">1299</span><br />
                <span className = "company-text">公司</span>
           </div>
            <span className="company-1 change1"> +108</span>
        </div>
        <div className = "staff">
           <div className = "company-1">
                <span className = "staff-num">4200</span><br />
                <span className = "staff-text">员工</span>
           </div>
           <span className="company-1 change2"> +108</span>
        </div>
        <div className = "tourist">
           <div className = "company-1">
                <span className = "tourist-num">201</span><br />
                <span className = "tourist-text">普通</span>
           </div>
           <span className="company-1 change3"> -20</span>
        </div>
        <div className = "tourist2">
           <div className = "company-1">
                <span className = "tourist2-num">882</span><br />
                <span className = "tourist2-text">打卡企业</span>
           </div>
           <span className="company-1 change4"> +10</span>
        </div>
        <div className = "tourist3">
           <div className = "company-1">
                <span className = "tourist3-num">3400</span><br />
                <span className = "tourist3-text">打卡员工</span>
           </div>
           <span className="company-1 change5"> +35</span>
        </div>
      </div>
    )
}
}

