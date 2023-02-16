import { Auth } from 'aws-amplify'
import { Alert } from 'react-native'

export const createUser = async (data) => {
    const { name, email, password } = data
    try {
        const result = await Auth.signUp({
            username: email,
            password,
            attributes: {
                name
            }
        })
        console.log(result)
    } catch (error) {
        console.error(error.message)
    }
}


