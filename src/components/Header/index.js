import React from 'react'
import {Image} from 'react-native'

import camera from '../../assets/camera.png'
import logo from '../../assets/instagram.png'
import direct from '../../assets/send.png'

import {Container} from './styles'

export default function Header() {
  return (
    <Container>
      <Image source={camera} />
      <Image source={logo} />
      <Image source={direct} />
    </Container>
  )
}
