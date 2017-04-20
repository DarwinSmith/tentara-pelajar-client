import React from 'react'
import { connect } from 'react-redux'
import './Index.css'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class Index extends React.Component {
  render() {
    return(
      <div className="gallery-box columns">
        <CSSTransitionGroup
          transitionName="dashboards"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="gallery column is-8 is-offset-2">
            <div className="masonry">
              {this.props.gallery.map((v,i)=>(
                <div className="item">
                  <img src={v.url} alt="Masonry" />
                </div>
              ))}
            </div>
          </div>
        </CSSTransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    gallery : state.gallery
  }
}

export default connect(mapStateToProps, null)(Index);
