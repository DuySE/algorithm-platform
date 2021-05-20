import axios from 'axios';

export const getProblems = id =>
    axios.get(`/api/problems/${id}`).then(res => ({ res })).catch(error => ({ error }))

export const updateProblems = id =>
    axios.patch(`/api/problems/${id}`).then(res => ({ res })).catch(error => ({ error }))

export const getAllProblems = () =>
    axios.get('/api/problems').then(res => ({ res })).catch(error => ({ error }))

export const deleteProblems = id =>
    axios.delete(`/api/problems/${id}`).then(res => ({ res })).catch(error => ({ error }))

export const createProblems = () =>
    axios.get('/api/problems').then(res => ({ res })).catch(error => ({ error }))

