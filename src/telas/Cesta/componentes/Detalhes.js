import { Image, StyleSheet, View } from 'react-native'

import TextComponent from '../../../../src/componentes/TextComponent'

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco }) {
  return (
    <>
      <TextComponent style={detalhesStyles.nome}>{nome}</TextComponent>
      <View style={detalhesStyles.fazenda}>
        <Image source={logoFazenda} style={detalhesStyles.imagemFazenda} />
        <TextComponent style={detalhesStyles.nomeFazenda}>{nomeFazenda}</TextComponent>
      </View>
      <TextComponent style={detalhesStyles.descricao}>{descricao}</TextComponent>
      <TextComponent style={detalhesStyles.preco}>{preco}</TextComponent>
    </>
  )
}

const detalhesStyles = StyleSheet.create({
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
})
