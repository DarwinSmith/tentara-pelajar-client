import React from 'react'
import Navigation from '../Navigation'
import MasonryLayout from 'react-masonry-layout'
import './Index.css'

class Index extends React.Component {
  constructor(){
    super()
    this.state={
      maxCount: 5,
      perPage: 5,
      count: 0,
      isLoading: false,
      items: Array(20).fill()
    }
  }

  getItems() {
    if (this.state.count >= this.state.maxCount) return
    this.setState(Object.assign(
      {},
      this.state,
      { isLoading: true }
    ), () => {
      setTimeout(() => {
        this.setState(Object.assign(
          {},
          this.state,
          {
            isLoading: false,
            items: this.state.items.concat(
              Array(this.state.perPage).fill()
            )
          }
        ))
      })
    })
  }

  render() {
    return(
      <div>
        <div className="index is-12">
          <MasonryLayout
            id="items"
            infiniteScroll={this.getItems}
            infiniteScrollLoading={this.state.isLoading} >
            {this.state.items.map((v, i) => <div
              key={i}
              style={{
                width: '15%',
                display: 'block'
              }}
            >
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Thumbnail" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#responsive</a>
                    <br />
                    <small>11:09 PM - 1 Jan 2016</small>
                  </div>
                </div>
              </div>
            </div>)}

          </MasonryLayout>
        </div>
      </div>
    )
  }
}

export default Index;
