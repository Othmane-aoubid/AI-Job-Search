import { ref } from 'vue';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../firebase/config';

export function useAuth() {
  const error = ref(null);
  const isPending = ref(false);

  async function login(email, password) {
    error.value = null;
    isPending.value = true;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isPending.value = false;
    }
  }

  async function register(email, password) {
    error.value = null;
    isPending.value = true;
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      return response;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isPending.value = false;
    }
  }

  async function logout() {
    error.value = null;
    isPending.value = true;
    try {
      await signOut(auth);
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isPending.value = false;
    }
  }

 

  return {
    error,
    isPending,
    login,
    register,
    logout,
  };
}