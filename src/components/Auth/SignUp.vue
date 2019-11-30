<template>
  <v-container>

    <v-form v-model="valid" ref="form">
      <v-text-field
        prepend-icon="mdi-email"
        name="email"
        label="Email"
        type="email"
        :rules="emailRules"
        v-model="email"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-lock"
        name="password"
        label="Password"
        type="password"
        :counter="6"
        :rules="passwordRules"
        v-model="password"
      ></v-text-field>
      <v-text-field
        prepend-icon="mdi-lock"
        name="confirm-password"
        label="Confirm Password"
        type="password"
        :rules="confirmPasswordRules"
        v-model="confirmPassword"
      ></v-text-field>
    </v-form>

    <v-btn
      color="primary"
      :disabled="!valid"
    >Зарегистрировать</v-btn>

  </v-container>
</template>

<script>
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => emailRegex.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Password is required',
        v => (v === this.password) || 'Password should match'
      ]
    }
  },
};
</script>
