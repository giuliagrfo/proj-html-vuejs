import { createApp } from 'vue'
import '../src/assets/scss/style.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'






library.add(faClock, faPhone, faEnvelope, faFacebook, faTwitter, faLinkedin, faUser)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')