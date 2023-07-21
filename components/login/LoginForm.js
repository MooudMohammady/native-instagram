import React from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  email: Yup.string().required('Email is required'),
});

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isSubmitting,
      }) => (
        <View style={styles.wrapper}>
          <View style={[styles.inputField,errors.email && {borderColor:"red"}]}>
            <TextInput
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur("email")}
              textContentType="emailAddress"
              autoFocus={true}
              autoCapitalize="none"
              placeholder="username or email"
            />
          </View>
          {errors.email && (
            <Text style={{ fontSize: 15, color: "red" }}>{errors.email}</Text>
          )}
          <View style={[styles.inputField,errors.password && {borderColor:"red"}]}>
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              placeholder="password"
            />
          </View>
          {errors.password && (
            <Text style={{ fontSize: 15, color: "red" }}>{errors.password}</Text>
          )}
          <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#55f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    minHeight: 50,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default LoginForm;
