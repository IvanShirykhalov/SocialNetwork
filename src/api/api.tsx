import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '141aa447-788e-402f-a325-e0cd7679cd7e'
    },
})

export const userAPI = {
    getUsers(currentPage: number, pageSize?: number) {
        instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const headerAPI = {
    getHeader() {
        instance.get(`auth/me`).then(response => response.data)
    }
}
