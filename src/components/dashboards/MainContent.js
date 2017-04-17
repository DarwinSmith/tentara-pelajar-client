/**
 * Created by lightmitch on 4/13/17.
 */
import React, {Component} from 'react'
import Timeline from './Timeline'
import Posting from './Posting'
import './style.css'

class MainContent extends Component {
  render() {
    let dummies = []

    for(let i=0;i<100;i++) {
     dummies.push(
       {
         name: 'Danang Aji Tamtomo',
         description: 'Seorang pelajar yang namanya pasaran',
         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio.#css #responsive'
       }
     )
    }

    return (
      <div className="column is-6">
        <Posting/>
        {dummies.map((dummy, index) => {
          return <Timeline key={index} dummy={dummy}/>
        })}
      </div>
    )
  }
}

export default MainContent
