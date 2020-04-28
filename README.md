# react-floating-buttons

> A lightweight, customizable and cool ⚛️ react floating buttons

[![NPM](https://img.shields.io/npm/v/react-floating-buttons.svg)](https://www.npmjs.com/package/react-floating-buttons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-floating-buttons
```

## Usage

```jsx
import React, { Component } from 'react'

import FloatingButton from 'react-floating-buttons'

import icon1 from  './assets/icon1.svg'
import icon2 from  './assets/icon2.svg'

class Example extends Component {

  this.buttonsList = [
    { onClick: ()=> alert('clicked icon1'), src: icon1 },
    { onClick: ()=> alert('clicked icon2'), src: icon2 },
  ]

  render() {
    return <FloatingButtons buttonType='plus' dimension={50} buttonsList={this.buttonsList}  top={'calc(50% - 25px)'} left={'5%'} direction="right" />
  }
}
```

## License

MIT © [AM-77](https://github.com/AM-77)
