import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', () => {

    const user = reactive (
        {
            username: 'administrador',
            password: 'holaborja',
            isAuthenticated: false
        }
    )
    return { user }
})