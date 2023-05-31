import {addPost, deletePost, ProfilePageType, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {PostPropsType} from "../components/Profile/MyPosts/Post/Post";

let startState: ProfilePageType

beforeEach(() => {

    startState = {
        posts: [
            {id: '1', message: `What's up dude`, likeCount: 2},
        ],
        profile: null,
        status: ''
    }

})
test('post should be added', () => {

    const endState = profileReducer(startState, addPost('2'))

    expect(endState.posts.length).toBe(2)

})

test('set user profile', () => {

    const newProfile = {
        aboutMe: 'string',
        contacts: {
            facebook: 'string',
            website: 'string',
            vk: 'string',
            twitter: 'string',
            instagram: 'string',
            youtube: 'string',
            github: 'string',
            mainLink: 'string',
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'string',
        fullName: 'string',
        userId: 1,
        photos: {
            small: 'string',
            large: 'string',
        }
    }

    const endState = profileReducer(startState, setUserProfile(newProfile))

    expect(startState.profile).toBe(null)
    expect(endState.profile).toBeDefined()
    expect(endState.profile?.userId).toBe(1)
})

test('set status', ()=>{

    const endState = profileReducer(startState, setStatus('1'))

    expect(startState.status).toBe('')
    expect(endState.status).toBe('1')
})

test('post should be deleted', ()=>{

    const endState = profileReducer(startState, deletePost('1'))

    expect(startState.posts.length).toBe(1)
    expect(endState.posts.length).toBe(0)

})