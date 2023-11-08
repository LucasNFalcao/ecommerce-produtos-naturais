import React from 'react'
import { StyleSheet, View } from 'react-native'

import Topo from './componentes/Topo'
import Detalhes from './componentes/Detalhes'

export default function Cesta() {
  return (
    <>
      <Topo />
      <View style={styles.cesta}>
        <Detalhes />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

// class MeuComponente extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Olá mundo!</Text>
//       </View>
//     );
//   }
// }
// export default MeuComponente;