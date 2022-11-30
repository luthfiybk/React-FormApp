/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from "react";
import { 
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from "react-native";

const FormApp = () => {
  const [text, onChangeText] = React.useState("")
  const [text2, onChangeText2] = React.useState("")
  const [text3, onChangeText3] = React.useState("")

  const [result1, setValue1] = useState("")
  const [result2, setValue2] = useState("")
  const [result3, setValue3] = useState("")

  const hello = () => {
    setValue1(text)
    setValue2(text2)
    setValue3(text3)
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.inputNama}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nama"
      />
      <TextInput
        style={styles.inputAsal}
        onChangeText={onChangeText2}
        value={text2}
        placeholder="Asal"
      />
      <TextInput
        style={styles.inputNim}
        onChangeText={onChangeText3}
        value={text3}
        placeholder="NIM"
      />
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={hello}
      >
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.viewResult}>
        <Text style={styles.textResult}>Nama: {result1}</Text>
        <Text style={styles.textResult}>Asal: {result2}</Text>
        <Text style={styles.textResult}>NIM: {result3}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  inputNama:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputAsal: {
    height: 40,
    marginBottom: 12,
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputNim: {
    height: 40, 
    marginBottom: 10,
    marginLeft:12,
    marginRight: 12,
    borderWidth: 1,
    padding: 10,
  },

  buttonSubmit: {
    height: 40,
    alignItems: "center",
    backgroundColor: "#0000FF",
    color: "#000000",
    marginLeft: 12,
    marginRight: 12,
    padding: 10,
  },

  textSubmit: {
    color: "#FFFFFF"
  },

  viewResult: {
    marginTop: 20,
    marginLeft: 12,
    marginRight: 12,
  },
})

export default FormApp