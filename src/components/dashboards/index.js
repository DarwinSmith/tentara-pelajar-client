/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import MainContent from './MainContent'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

class index extends Component {
  render() {
    return(
      <div className="container index">
        <div className="columns">
          <LeftSidebar/>
          <MainContent/>
          <RightSidebar/>
        </div>
      </div>
    )
  }
}

export default index
