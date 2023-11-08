import { StyleSheet, Text } from 'react-native'

export default function TextComponent({ children, style }) {
  let stylingText = textStyle.text

  if (style?.fontWeight === 'bold') {
    stylingText = textStyle.textBold
  }
  return <Text style={[style, stylingText]}>{children}</Text>
}

const textStyle = StyleSheet.create({
  text: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textBold: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
})
