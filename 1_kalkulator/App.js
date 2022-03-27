import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import Button from "./components/Button";

export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null
};

export const handleEqual = state => {
  const { currentValue, previousValue, operator } = state;

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState
    };
  }
  return state;
};

const operations_handler = (type, value, state) => {
  switch (type) {
    case "number":
      return handleNumber(value, state);
    case "operator":
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0"
      };
    case "equal":
      return handleEqual(state);
    case "clear":
      return initialState;
    case "positive_negative":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      };
    default:
      return state;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10
  }
});

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { currentValue: `${value}` };
  }

  return {
    currentValue: `${state.currentValue}${value}`
  };
};

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => operations_handler(type, value, state));
  };

  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <SafeAreaView>
            <Text style={styles.value}>
              {parseFloat(this.state.currentValue).toLocaleString()}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Button
                  text="C"
                  theme="secondary"
                  onPress={() => this.handleTap("clear")}
              />
              <Button
                  text="+/-"
                  theme="secondary"
                  onPress={() => this.handleTap("positive_negative")}
              />
              <Button
                  text="%"
                  theme="secondary"
                  onPress={() => this.handleTap("percentage")}
              />
              <Button
                  text="/"
                  theme="accent"
                  onPress={() => this.handleTap("operator", "/")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Button text="7" onPress={() => this.handleTap("number", 7)} />
              <Button text="8" onPress={() => this.handleTap("number", 8)} />
              <Button text="9" onPress={() => this.handleTap("number", 9)} />
              <Button
                  text="x"
                  theme="accent"
                  onPress={() => this.handleTap("operator", "*")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Button text="4" onPress={() => this.handleTap("number", 4)} />
              <Button text="5" onPress={() => this.handleTap("number", 5)} />
              <Button text="6" onPress={() => this.handleTap("number", 6)} />
              <Button
                  text="-"
                  theme="accent"
                  onPress={() => this.handleTap("operator", "-")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Button text="1" onPress={() => this.handleTap("number", 1)} />
              <Button text="2" onPress={() => this.handleTap("number", 2)} />
              <Button text="3" onPress={() => this.handleTap("number", 3)} />
              <Button
                  text="+"
                  theme="accent"
                  onPress={() => this.handleTap("operator", "+")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Button
                  text="0"
                  size="double"
                  onPress={() => this.handleTap("number", 0)}
              />
              <Button text="." onPress={() => this.handleTap("number", ".")} />
              <Button
                  text="="
                  theme="accent"
                  onPress={() => this.handleTap("equal")}
              />
            </View>
          </SafeAreaView>
        </View>
    );
  }
}