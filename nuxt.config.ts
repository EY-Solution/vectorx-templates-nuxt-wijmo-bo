export default defineNuxtConfig({
  modules: ['@vectorx/nuxt'],
  ssr: false,
  app: {
    head: {
      title: 'VectorX Node Management System with Wijmo',
    },
  },
  vite: {
    // FIXME: remove property after v24.1.4
    optimizeDeps: {
      include: ['markdown-it-highlightjs/core'],
    },
  },
  devtools: {
    enabled: true,
  },
  typescript: {
    strict: false,
  },
  vx: {
    server: {
      middleware: {
        proxy: {
          proxies: {
            '/api/': { target: 'http://localhost:21002', ws: true },
          },
        },
      },
    },
    auth: {
      enabled: true,
      type: 'jwt',
      loginPath: '/',
      jwt: {
        accessTokenKey: 'mng-bo-token',
        refreshTokenKey: 'mng-bo-rtoken',
      },
      autoLogoutSeconds: 30000,
    },
    nuxt: {
      api: {
        maximumConcurrentNumber: 3,
        taskDelay: 10,
      },
      meta: {
        auth: {
          required: true,
        },
      },
      env: {
        secret: 'Z3NjLWNyeXB0by1rZXkxMQ==',
      },
      wijmo: {
        enabled: true,
        styles: {
          theme: 'light',
        },
        culture: 'ko',
      },
      vuetify: {
        enabled: true,
      },
      ckeditor5: {
        enabled: true,
      },
      management: {
        enabled: true,
        ui: {
          tabMenu: {
            enabled: true,
          },
          defaultPage: {
            login: {
              path: '/',
            },
          },
        },
      },
    },
  },
})
