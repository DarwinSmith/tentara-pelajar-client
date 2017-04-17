import * as ActionTypes from '../constants'
const initState = [
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },
  { title: 'uhdon',
    url:'https://japancentre-images.global.ssl.fastly.net/page_elements/image1s/768/original/nabeyaki_udon.jpg?1469627000',
    caption: 'endes benerrrrrr'
  },
  { title:'ramenn',
    url:'https://cdn2.koreanbapsang.com/wp-content/uploads/2011/05/jajangmyeon-e1447380359794.jpg',
    caption: 'sldkhal;sdhasldfhjasl;dfjkalsdfjlsdfjlskdfjlsjflksjdflksjdflskdfjlsdfjlskdjflsdjflskdjflsfjslfkjslfksjfks'
  },
  { title:'momomilk',
    url:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/17098224_1440333082675662_1436788968081715064_n.jpg?oh=ec7e23c516008a9605c12081c03b00d9&oe=595562EF',
    caption: 'aaksjfjsklfjasdfjhsdfghsdfghjsdbfgchjsdbflksdhfagsdjkfhskajdfhalsdfjhsdklfsjhdfksjdfhslkjdfhasldfjkhalsdjkfhsdjlfksadflasdjkfhasldfjkhasldkfhskldjfhsldkjfhalsdjkfhlskdjfhalsfjkhasdjkfhlsdkjfhskljdfh'
  },

]

export default (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PHOTOS:
      return action.payload
    case ActionTypes.GET_PHOTO:
      return action.payload
    case ActionTypes.DELETE_PHOTO:
      return action.payload
    case ActionTypes.POST_PHOTO:
      return action.payload
    default:
      return state
  }
}
