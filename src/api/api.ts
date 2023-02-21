import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'ba6089c3-d607-4289-9bff-c23a30735991'
    },

})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
    },

}


export const followAPI = {
    unfollow(id: string) {
        return instance.delete(`follow/${id}`).then((res) => res.data)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`, {}).then((res) => res.data)
    },
}

// export const getUsers = (currentPage: number, pageSize: number) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((res) => res.data)
// }
//
// export const unfollow = (id: string) => {
//     return instance.delete(`follow/${id}`).then((res) => res.data)
// }
//
// export const follow = (id: string) => {
//     return instance.post(`follow/${id}`, {}).then((res) => res.data)
// }