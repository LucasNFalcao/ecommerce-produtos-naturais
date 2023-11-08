import { Image, StyleSheet, View } from 'react-native'

import TextComponent from '../../../../src/componentes/TextComponent'

import logo from '../../../../assets/logo.png'

export default function Detalhes() {
  return (
    <>
      <TextComponent style={detalhesStyles.nome}>Cesta de Verduras</TextComponent>
      <View style={detalhesStyles.fazenda}>
        <Image source={logo} style={detalhesStyles.imagemFazenda} />
        <TextComponent style={detalhesStyles.nomeFazenda}>Jenny Jack Farm</TextComponent>
      </View>
      <TextComponent style={detalhesStyles.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha
      </TextComponent>
      <TextComponent style={detalhesStyles.preco}>R$ 40,00</TextComponent>
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
