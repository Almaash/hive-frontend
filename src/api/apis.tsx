


export default function ProjectApiList() {
    let baseUrl = `http://localhost:3001`
    
    let apiList = {
        api_signUpApi: `${baseUrl}/api/auth/signup`,
        api_empListApi: `${baseUrl}/api/auth/getUsers`,
        api_loginApi: `${baseUrl}/api/auth/login`,
        api_userbyId: `${baseUrl}/api/auth/getUserbyid`,
        api_updateProfile: `${baseUrl}/api/auth/updateProfile`,
        api_updateUser: `${baseUrl}/api/auth/updateUsers`,
        api_getAllPost: `${baseUrl}/api/auth/getAllPost`,
        api_getAllPostById: `${baseUrl}/api/auth/getPostByUserId`,
        api_createPost: `${baseUrl}/api/auth/createPost`,
    }

    return apiList
}