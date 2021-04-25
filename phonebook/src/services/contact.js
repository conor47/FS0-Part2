import axios from 'axios'

const baseURL = "http://localhost:3001/persons"

const create = newObject => {
    return axios.post(baseURL, newObject)
}

const deleteContact = id => {
    return axios.delete(`${baseURL}/${id}`)
}

const update = (newObject,id) => {
    return axios.put(`${baseURL}/${id}`, newObject)
}

export default {create, deleteContact, update}