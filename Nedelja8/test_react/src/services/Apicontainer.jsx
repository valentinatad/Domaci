import axios from 'axios';


export const getRadnika = async () => {
    return await axios.get(`http://dummy.restapiexample.com/api/v1/employees`).then(response => {
        console.log('GET')
                return response})}
export const posaljiRadnika = async (username, message) => {
                    await axios.post(`http://dummy.restapiexample.com/api/v1/create`, { username, message });
                }