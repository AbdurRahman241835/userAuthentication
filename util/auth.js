import axios from "axios";

const API_KEY = 'AIzaSyAMhtMU6G6lte5AgzaZWSx5wXGYGO8VEAk';


export async function createUser(email, password){
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]' + API_KEY, 
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
    console.log("response"+ response)
}