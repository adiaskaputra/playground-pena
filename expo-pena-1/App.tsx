import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { StyleSheet, SafeAreaView } from "react-native";
import Toast from "react-native-root-toast";
import Pena from "@privyid/pena-react-native";
import { SITE_URL } from "@env";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: "100%",
  },
});

export default function App() {
  function showToast(message) {
    Toast.show(message, {
      duration: Toast.durations.SHORT,
    });
  }

  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.container}>
        <Pena
          url={SITE_URL}
          lang="id"
          signature={{
            x: 100,
            y: 200,
            page: 1,
            fixed: false,
          }}
          onAfterAction={(payload) => {
            // showToast(payload.action)
            console.log("Action: ", payload.action);
          }}
        />
      </SafeAreaView>
    </RootSiblingParent>
  );
}
