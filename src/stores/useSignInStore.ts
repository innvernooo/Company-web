import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UseSignInRequest {
  username: string | null;
  email: string | null;
  token: string | null;
  objectId: string | null;
  setSignIn: (
    username: string,
    email: string,
    token: string,
    objectId: string,
  ) => void;
  logout: () => void;
}
export const useSignInStore = create<UseSignInRequest>()(
  persist(
    (set) => ({
      username: null,
      email: null,
      token: null,
      objectId: null,

      setSignIn: (username, email, token, objectId) =>
        set({
          username,
          email,
          token,
          objectId,
        }),
      logout: () =>
        set({ username: null, email: null, token: null, objectId: null }),
    }),
    {
      name: 'sign-in storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
