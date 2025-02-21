const API_URL = 'http://localhost:3001/api';

const handleResponse = async (response) => {
    const data = await response.json();
    
    if (!response.ok) {
        if (response.status === 401) {
            // Clear any local user state
            window.location.href = '/sign-in';
        }
        throw new Error(data.message);
    }
    
    return data;
};

export const loginUser = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    
    const data = await handleResponse(response);
    return data.user;
};

export const registerUser = async (name, email, password) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });
    
    const data = await handleResponse(response);
    return data.user;
};

export const getCurrentUser = async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    const data = await handleResponse(response);
    return data.user;
};

export const logoutUser = async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return handleResponse(response);
};
