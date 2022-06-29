import axiosInstance from './axios'

/**
 * Example API by Swagger
 * https://editor.swagger.io/
 */
export const petApi = new PetApi(undefined, undefined, axiosInstance)
return axios
    .get('https://jsonplaceholder.typicode.com/todos/' + Math.round(Math.random() * 10))
    .then(({ data }) => {
        return (this.importData = data)
    })
