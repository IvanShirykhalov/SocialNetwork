import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '5936c173-624b-4ce0-b32b-55723c8702bd'
    },

})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
    },
    unfollow(id: string) {
        return instance.delete(`follow/${id}`).then((res) => res.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`, {}).then((res) => res.data)
    },
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status`, {status})
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {withCredentials: true})
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

}


