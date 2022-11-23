import axios from 'axios';
import { BACKEND_API_URL } from '../contants';

export const addArtist = async ({ data }) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'x-access-token': localStorage.getItem('accessToken'),
		},
	};

	return await axios.post(`${BACKEND_API_URL}artists`, data, config);
};

export const getArtists = async ({ query }) => {
	const config = query === '' ? {
		params: {}
	} : {
		params: { search: query }
	}
	const response = await axios.get(`${BACKEND_API_URL}artists`, config);
	return response.data;
};

export const login = async (data) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	};

	return await axios.post(`${BACKEND_API_URL}auth/login`, data, config);
};

export const getArtist = async ({ id }) => {
	const response = await axios.get(`${BACKEND_API_URL}artists/${id}`);
	return response.data;
};


export const removeArtist = async ({ id }) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'x-access-token': localStorage.getItem('accessToken'),
		},
	};
	const response = await axios.delete(`${BACKEND_API_URL}artists/${id}`, config);
	return response.data;
};

export const updateArtist = async ({ id, data }) => {
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'x-access-token': localStorage.getItem('accessToken'),
		},
	};

	const response = await axios.put(`${BACKEND_API_URL}artists/${id}`, data, config);
	return response;
};



