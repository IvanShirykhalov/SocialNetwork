import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    subscriptionChange,
    toggleFollowingProgress,
    toggleIsFetching,
    userReducer,
    UsersPageType
} from "./users-reducer";

let startState: UsersPageType

const usersArray = [
    {id: '1', status:'1', followed: false, name:'1', photos: {small:'1.1', large:'1.2'}},
    {id: '2', status:'2', followed: true, name:'2', photos: {small:'2.1', large:'2.2'}},
    {id: '3', status:'3', followed: false, name:'3', photos: {small:'3.1', large:'3.2'}},
]

beforeEach(() => {

    startState = {
        users: [],
        pageSize: 6,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
    }

})

test('set users', ()=>{

    const endState = userReducer(startState, setUsers(usersArray))

    expect(startState.users.length).toBe(0)
    expect(endState.users.length).toBe(3)
    expect(endState.users[0].id).toBe('1')
})

test('change subscription', ()=>{

    let startState = {
        users: usersArray,
        pageSize: 6,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [],
    }


    const endState = userReducer(startState, subscriptionChange('1'))


    expect(endState.users[0].followed).toBe(true)
})

test('set current page',()=>{

    const endState = userReducer(startState, setCurrentPage(2))

    expect(startState.currentPage).toBe(1)
    expect(endState.currentPage).toBe(2)

})

test('set users total count', ()=>{

    const endState = userReducer(startState, setTotalUsersCount(1))

    expect(startState.totalUsersCount).toBe(0)
    expect(endState.totalUsersCount).toBe(1)

})

test('toggle is fetching', ()=>{

    const endState = userReducer(startState, toggleIsFetching(false))

    expect(startState.isFetching).toBe(true)
    expect(endState.isFetching).toBe(false)
})
