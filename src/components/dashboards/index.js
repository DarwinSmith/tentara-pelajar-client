/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import MainContent from './MainContent'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'

class index extends Component {
  render() {
    return(
      <div className="dashboards-box">
        <div className="container index-dashboard">
          <CSSTransitionGroup
            transitionName="dashboards"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div className="columns">
              <LeftSidebar/>
              <MainContent/>
              <RightSidebar/>
            </div>
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default index
