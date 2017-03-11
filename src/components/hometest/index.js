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
      <div className = "home1">
        <div>
            <Link to ='/login' className = "home1-logout1"></Link>
        </div>
        <div className = "home-time1">{this.state.time}</div>
        <div className = "home-week1">
            {this.state.week}&nbsp;&nbsp;&nbsp;&nbsp;
            {this.state.hours}</div>
        <div className = "home-user1">5700位用户
            <span className = "home-user1 change23"> +196</span></div>
        <div><hr className = "home-line1"/></div>
        <div className = "company1">
           <div className = "company-11">
                <span className = "company1-num1">1299</span><br />
                <span className = "company1-text1">公司</span>
           </div>
            <span className="company-11 change11"> +108</span>
        </div>
        <div className = "staff1">
           <div className = "company-11">
                <span className = "staff1-num1">4200</span><br />
                <span className = "staff1-text1">员工</span>
           </div>
           <span className="company-11 change21"> +108</span>
        </div>
        <div className = "tourist1">
           <div className = "company-11">
                <span className = "tourist1-num1">201</span><br />
                <span className = "tourist1-text1">普通</span>
           </div>
           <span className="company-11 change31"> -20</span>
        </div>
        <div className = "tourist21">
           <div className = "company-11">
                <span className = "tourist21-num1">882</span><br />
                <span className = "tourist21-text1">打卡企业</span>
           </div>
           <span className="company-11 change41"> +10</span>
        </div>
        <div className = "tourist31">
           <div className = "company1-11">
                <span className = "tourist31-num1">3400</span><br />
                <span className = "tourist31-text1">打卡员工</span>
           </div>
           <span className="company-11 change51"> +35</span>
        </div>
      </div>
    )
}
}
