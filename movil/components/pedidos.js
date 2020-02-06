import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Axios from "axios";

const API_URL = "http://192.168.100.116:3000/api/procesar";

export default class Pedidos extends Component {
  state = {
    Fedex: [],
    CorreosECU: [],
    Servientrega: []
  };

  fedex = () => {
    Axios.get(API_URL).then(res => {
      const dataFedex = res.data;
      this.setState({ dataFedex });
      alert(JSON.stringify(dataFedex[0]));
    });
  };

  correosEcu = () => {
    Axios.get(API_URL).then(res => {
      const dataCorreosEcu = res.data;
      this.setState({ dataCorreosEcu });
      alert(JSON.stringify(dataCorreosEcu[1]));
    });
  };

  servientrega = () => {
    Axios.get(API_URL).then(res => {
      const dataServientrega = res.data;
      this.setState({ dataServientrega });
      this.setState({ dataServientrega });
      alert(JSON.stringify(dataServientrega[2]));
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView vertical={true}>
          <View>
            <Image source={require("../assets/silla.jpeg")} />
          </View>
          <View style={styles.separator} />
          <View>
            <Text style={{ fontSize: 30 }}>Modo de envío</Text>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.fedex}>
              <Text style={styles.button}>Fedex</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.correosEcu}>
              <Text style={styles.button}>Correos del Ecuador</Text>
            </TouchableHighlight>
            <View style={styles.separator} />
            <TouchableHighlight onPress={this.servientrega}>
              <Text style={styles.button}>Servientrega</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center"
  },
  text: {
    alignItems: "center"
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "transparent",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  image: {
    borderRadius: 10,
    width: 200,
    height: 200,
    resizeMode: "stretch"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#33A9FF",
    padding: 10
  }
});
