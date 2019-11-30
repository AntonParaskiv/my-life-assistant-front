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
      <v-text-field
        prepend-icon="mdi-lock"
        name="confirm-password"
        label="Confirm Password"
        type="password"
      ></v-text-field>
    </v-form>

    <v-btn
      color="primary"
    >Зарегистрировать</v-btn>

  </v-container>
</template>

<script>
export default {
  name: 'Sign Up',
  data: () => ({
  }),
};
</script>
