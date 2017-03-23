import React from 'react';
import './styles/common/normalize.css';
import './styles/index.less';
import NavBar from './components/common/NavBar';

export default class App extends React.Component{
	render(){
		return(
			<div className="wrapper">
				<div className="part-01">
					<div className="content">
						<ul className="mission_tabs">
							<li className="tab-item selected">
								每日任务ssssdfsdf
							</li>
							<li className="tab-item selected">
								福利券aaaa
							</li>
							<li className="tab-item selected">
								积分兑换sdfsf
							</li>
							<li className="tab-item selected">
								活动
							</li>
						</ul>
						<div className="tab-details">
							这里是tab展示面板
						</div>	
					</div>
				</div>
				<NavBar isload={true}/>
			</div>
		)
	}
}