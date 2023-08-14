<script setup>
// import {useTheme} from 'vuetify'
// import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
// import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
//import * as yup from 'yup'
// import authV1Tree2 from '@/assets/images/pages/auth-v1-tree-2.png'
// import authV1Tree from '@/assets/images/pages/auth-v1-tree.png'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {ref, onMounted} from 'vue'
const store = useStore()
const router = useRouter()
const form = ref({
  email: '',
  password: '',
  user: '',
  remember: false,
})
// const vuetifyTheme = useTheme()
// const authThemeMask = computed(() => {
//   return vuetifyTheme.global.name.value === 'light'
//     ? authV1MaskLight
//     : authV1MaskDark
// })
const isPasswordVisible = ref(false)
// const rules = [
//   (value) => {
//     if (value) return true

//     return 'You must enter a first name.'
//   },
// ]
// const schema = yup.object().shape({
//   username: yup.string().required('Username is required!'),
//   password: yup.string().required('Password is required!'),
// })

// const loggedIn = computed(() => {
//   return store.state.auth.status.loggedIn
// })
onMounted(() => {
  store.dispatch('auth/logout')

  // if (this.loggedIn) {
  //   console.log('before mount /profile')
  //   //this.$router.push("/profile")
  // }
})

function handleLogin() {
  // this.loading = true;
  store.dispatch('auth/login', form.value).then(
    () => {
      router.push('/')
    },
    (error) => {
      //this.loading = false;
      console.log('Error handlelog', error)
      // this.message =
      //   (error.response &&
      //     error.response.data &&
      //     error.response.data.message) ||
      //   error.message ||
      //   error.toString();
    }
  )
}
</script>
<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7" max-width="448" width="25em">
      <!--
        <VCardItem class="justify-center">
        <template #prepend>
        <div class="d-flex">
        <div v-html="logo" />
        </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
        Materio
        </VCardTitle>
        </VCardItem> 
      -->

      <!--
        <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
        Welcome to Materio! 👋🏻
        </h5>
        <p class="mb-0">
        Please sign-in to your account and start the adventure
        </p>
        </VCardText> 
      -->

      <VCardText>
        <VForm @submit.prevent="handleLogin">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Имя пользователя"
                type="user"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Пароль"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div
                class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
              >
                <!-- <VCheckbox v-model="form.remember" label="Запомнить меня" /> -->
                <!-- 
                  <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                  >
                  Forgot Password?
                  </a> 
                -->
              </div>

              <!-- login button -->
              <VBtn block type="submit"> Вход </VBtn>
            </VCol>

            <!-- create account -->
            <!--
              <VCol
              cols="12"
              class="text-center text-base"
              >
              <span>New on our platform?</span>
              <RouterLink
              class="text-primary ms-2"
              :to="{ name: 'register' }"
              >
              Create an account
              </RouterLink>
              </VCol> 
            -->

            <!--
              <VCol
              cols="12"
              class="d-flex align-center"
              >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
              </VCol> 
            -->

            <!-- auth providers -->
            <!--
              <VCol
              cols="12"
              class="text-center"
              >
              <AuthProvider />
              </VCol> 
            -->
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <!--
      <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="authV1Tree"
      :width="250"
      /> 
    -->

    <!--
      <VImg
      :src="authV1Tree2"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
      /> 
    -->

    <!-- bg img -->
    <!-- <VImg class="auth-footer-mask d-none d-md-block" :src="authThemeMask" /> -->
  </div>
</template>

<!-- <style lang="scss">
//@use '/assets/page-auth.scss';
</style> -->

<route lang="yaml">
meta:
  layout: blank
</route>
