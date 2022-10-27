import { defineStore } from "pinia";

interface UserInterface {
  name: string;
  age: number;
}

const useUserStore = defineStore({
  id: "user",
  state: (): UserInterface => {
    return {
      name: "hanchao",
      age: 19,
    };
  },
  getters: {
    userInfo: (state) => {
      return state.name;
    },
  },
  actions: {
    changeName() {
      this.name = "1";
      this.age = 9;
    },
  },
});

export { useUserStore };
