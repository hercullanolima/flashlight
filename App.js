import React, {userState, useEffect, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToggle] = userState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() => {
    //Liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>(
    const subscription = RNShake.removeAllListeners(()=>(
      setToggle(oldToggle => !oldToggle)
    )),
    //essa função vai ser chamada quando o componente for desmontado
    return ()=> subscription.remove();
  ),[])

  return (
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? style.lightingOn : style.lightingOff}
          source={
            toggle
              ? require('./assets/icons/eco-lightingOn.png')
              : require('./assets/icons/eco-lightingOff.png')
          }
        />
        <Image
          style={style.dioLogo}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'while',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '150',
    height: '150',
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: '150',
    height: '150',
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: '250',
    height: '250',
  },
});
