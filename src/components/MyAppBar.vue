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
    <v-btn v-if="currentUser" :to="{name: 'ape'}" color="primary">
      Анализ пусков
    </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn v-if="currentUser" :to="{name: 'rou'}" color="primary"> РОУ </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn v-if="currentUser" :to="{name: 'ken'}" color="primary"> KЭН </v-btn>
    <v-btn v-if="currentUser" :to="{name: 'pen'}" color="primary"> ПЭН </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn v-if="currentUser" :to="{name: 'shbm'}" color="primary"> ШБМ </v-btn>
    <!-- <v-spacer></v-spacer> -->
    <v-btn
      v-if="currentUser && currentRoleAdmin"
      :to="{name: 'upload'}"
      color="primary"
    >
      Загрузка
    </v-btn>
    <v-spacer></v-spacer>

    <VBadge v-if="currentUser" v-bind="avatarBadgeProps" class="px-6">
      <VAvatar style="cursor: pointer" color="info" variant="tonal">
        <v-icon icon="mdi-account-circle"></v-icon>
        <!-- SECTION Menu -->
        <VMenu
          activator="parent"
          width="230"
          location="bottom end"
          offset="14px"
        >
          <VList>
            <!-- 👉 User Avatar & Name -->
            <VListItem>
              <template #prepend>
                <VListItemAction start>
                  <VBadge v-bind="avatarBadgeProps">
                    <VAvatar color="info" size="40" variant="tonal">
                      <v-icon icon="mdi-account-circle"></v-icon>
                    </VAvatar>
                  </VBadge>
                </VListItemAction>
              </template>

              <VListItemTitle class="font-weight-semibold"> </VListItemTitle>
              <VListItemSubtitle class="text-disabled">
                Admin
              </VListItemSubtitle>
            </VListItem>

            <VDivider class="my-2" />

            <!-- 👉 Logout -->
            <VListItem to="/pudps/login">
              <template #prepend>
                <VIcon class="me-2" icon="mdi-logout-variant" size="22" />
              </template>

              <VListItemTitle>Logout</VListItemTitle>
            </VListItem>
          </VList>
        </VMenu>
        <!-- !SECTION -->
      </VAvatar>
    </VBadge>

    <!-- !SECTION -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'MyAppBar',
}
</script>

<script setup>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
const store = useStore()
//const currentUser = true
const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'error',
  bordered: true,
}
onMounted(() => {
  //console.log('mounted', loggedIn.value)
  loggedIn.value
    ? (avatarBadgeProps.color = 'success')
    : (avatarBadgeProps.color = 'error')
})
const loggedIn = computed(() => {
  return store.state.auth.status.loggedIn
})
const currentUser = computed(() => {
  //console.log(store.state.auth.user)
  return store.state.auth.user
})

const currentRoleAdmin = computed(() => {
  //console.log(store.state.auth.user)
  return store.state.auth.user.role == 'Admin'
})
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
