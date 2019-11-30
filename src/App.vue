<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      flat
    >
      <v-btn
        href="/"
        text
        disabled
      >
        <v-icon left size="23">mdi-account-badge-horizontal-outline</v-icon>
        <span class="mr-2">Дневник</span>
      </v-btn>

      <v-btn
        href="/"
        text
        disabled
      >
        <v-icon left size="23">mdi-briefcase-outline</v-icon>
        <span class="mr-2">Дела</span>
      </v-btn>

      <v-btn
        href="/"
        text
        disabled
      >
        <v-icon left size="23">mdi-bullseye-arrow</v-icon>
        <span class="mr-2">Цели</span>
      </v-btn>

      <v-btn
        href="/"
        text
        disabled
      >
        <v-icon left size="23">mdi-finance</v-icon>
        <span class="mr-2">Финансы</span>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        href="/signUp"
        text
      >
        <v-icon left size="23">mdi-account-plus</v-icon>
        <span class="mr-2">Регистрация</span>
      </v-btn>

      <v-btn
        href="/profile"
        text
      >
        <v-icon left size="23">mdi-account</v-icon>
        <span class="mr-2">Профиль</span>
      </v-btn>

      <v-btn
        href="/signIn"
        text
      >
        <v-icon left size="23">mdi-login-variant</v-icon>
        <span class="mr-2">Вход</span>
      </v-btn>

      <v-btn
        href="/signOut"
        text
      >
        <v-icon left size="23">mdi-logout-variant</v-icon>
        <span class="mr-2">Выход</span>
      </v-btn>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>myLifeAssistant</strong>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
  }),
};
</script>
