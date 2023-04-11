import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzFhY2U1ZGNmNmEzNzkwNmE3MjExMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk3NzM2MiwiZXhwIjoxNjgxMjM2NTYyfQ.LhSOUTKsydOYmJ-ZIjOcwc0cP6mgKdQ0g43PjBrJqo0'

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` }
});

