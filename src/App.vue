<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      flat
    >
      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-account-badge-horizontal-outline</v-icon>
        <span class="mr-2">Дневник</span>
      </v-btn>

      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-briefcase-outline</v-icon>
        <span class="mr-2">Дела</span>
      </v-btn>

      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-bullseye-arrow</v-icon>
        <span class="mr-2">Цели</span>
      </v-btn>

      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-finance</v-icon>
        <span class="mr-2">Финансы</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-account</v-icon>
        <span class="mr-2">Профиль</span>
      </v-btn>

      <v-btn
        href="/sign"
        text
      >
        <v-icon left size="23">mdi-login-variant</v-icon>
        <span class="mr-2">Вход / Регистрация</span>
      </v-btn>

      <v-btn
        href="/reg"
        text
      >
        <v-icon left size="23">mdi-logout-variant</v-icon>
        <span class="mr-2">Выход</span>
      </v-btn>

    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
