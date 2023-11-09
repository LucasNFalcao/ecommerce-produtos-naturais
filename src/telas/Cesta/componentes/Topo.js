import { Dimensions, Image, SafeAreaView, StyleSheet } from 'react-native'

import TextComponent from '../../../componentes/TextComponent'

import topo from '../../../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Topo({ titulo }) {
  return (
    <SafeAreaView>
      <Image source={topo} style={topoStyles.topo} />
      <TextComponent style={topoStyles.titulo}>{titulo}</TextComponent>
    </SafeAreaView>
  )
}

const topoStyles = StyleSheet.create({
  titulo: {
    width: '100%',
    position: 'absolute',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 26,
    color: '#fff',
    fontWeight: 'bold',
    padding: 16,
  },
  topo: {
    width: '100%',
    height: (578 / 768) * width,
  },
})
