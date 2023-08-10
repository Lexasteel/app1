<template>
  <v-app-bar density="compact" color="indigo-lighten-5">
    <template v-slot:prepend>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    </template>

    <v-app-bar-title> Система обработки данных</v-app-bar-title>

    <!-- <v-spacer></v-spacer> -->
    <!-- <router-link :to="{name: 'ape'}" class="button;">Анализ пусков</router-link> -->
    <!-- <router-link :to="{name: 'rou'}" class="button;"
      >Пережоги по РОУ</router-link
    >
    <router-link :to="{name: 'pen'}" class="button;">ПЭН</router-link>
    <router-link :to="{name: 'shbm'}" class="button;">ШБМ</router-link>
    <router-link :to="{name: 'upload'}" class="button;">Загрузить</router-link> -->
    <v-btn :to="{name: 'ape'}" color="primary"> Анализ пусков </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn :to="{name: 'rou'}" color="primary"> РОУ </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn :to="{name: 'ken'}" color="primary"> KЭН </v-btn>
    <v-btn :to="{name: 'pen'}" color="primary"> ПЭН </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn :to="{name: 'shbm'}" color="primary"> ШБМ </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn :to="{name: 'upload'}" color="primary"> Загрузка </v-btn>
    <v-spacer></v-spacer>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'MyAppBar',
}
</script>

<style>
.button {
  font: bold 22px Arial;
  text-decoration: none;
  background-color: #eeeeee;
  color: #333333;
  padding: 2px 6px 2px 6px;
  border-top: 1px solid #cccccc;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #cccccc;
}
</style>
