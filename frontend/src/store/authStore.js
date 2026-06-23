import { create } from 'zustand';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '../services/auth';

export const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Initialize auth state from localStorage
  initializeAuth: async () => {
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('user');

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
        isAuthenticated: true,
      });

      // Verify token is still valid
      try {
        const currentUser = await getCurrentUser();
        set({
          user: currentUser,
          isAuthenticated: true,
        });
        localStorage.setItem('user', JSON.stringify(currentUser));
      } catch (error) {
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
      }
    }
  },

  // Register user
  register: async (email, password, firstName, lastName) => {
    set({ isLoading: true, error: null });
    try {
      const response = await registerUser({
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      });

      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('user', JSON.stringify(response.user));

      set({
        token: response.access_token,
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });

      return response;
    } catch (error) {
      const errorMessage = error.detail || 'Registration failed';
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  // Login user
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await loginUser(email, password);

      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('user', JSON.stringify(response.user));

      set({
        token: response.access_token,
        user: response.user,
        isAuthenticated: true,
        isLoading: false,
      });

      return response;
    } catch (error) {
      const errorMessage = error.detail || 'Login failed';
      set({
        error: errorMessage,
        isLoading: false,
      });
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    await logoutUser();
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
  },

  // Clear error
  clearError: () => set({ error: null }),
}));
