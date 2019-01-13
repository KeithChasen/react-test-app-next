const initState = {
    posts: [
        {id:1,title:'Gereus uus turyed',body:'jsd asojd aosdjaidj asndmasndk jasdna sidn ai'},
        {id:2,title:'Puruleous shturmudio',body:'jsd asojd aosdjaidj asndmasndk jasdna sidn ai'},
        {id:3,title:'Zhbezhbezh strushio',body:'jsd asojd aosdjaidj asndmasndk jasdna sidn ai'},
    ]
}

const rootReducer = (state = initState, action) => {

    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })

        return {
            ...state,
            posts: newPosts
        }
    }

    return state
}

export default rootReducer