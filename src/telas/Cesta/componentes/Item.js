import { Image, StyleSheet, View } from 'react-native'

import TextComponent from '../../../componentes/TextComponent'

export default function Item({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={itensStyle.item}>
      <Image style={itensStyle.imagem} source={imagem} />
      <TextComponent style={itensStyle.nome}>{nome}</TextComponent>
    </View>
  )
}

const itensStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  imagem: {
    width: 52,
    height: 52,
  },
  nome: {
    fontSize: 20,
    lineHeight: 30,
    marginLeft: 11,
    color: '#464646',
  },
})
