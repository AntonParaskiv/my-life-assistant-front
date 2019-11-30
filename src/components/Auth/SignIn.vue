<template>
  <v-container>

    <v-form>
      <v-text-field
        prepend-icon="mdi-email"
        name="email"
        label="Email"
        type="email"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-lock"
        name="password"
        label="Password"
        type="password"
      ></v-text-field>
    </v-form>

    <v-btn
      color="primary"
    >Войти</v-btn>

  </v-container>
</template>

<script>
export default {
  name: 'Sign In',
  data: () => ({
  }),
};
</script>
