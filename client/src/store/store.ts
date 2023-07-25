import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CreateCategoryType } from "../schemas/category";

type StateType = {
  categories: CreateCategoryType[];
};

type Actions = {
  setCategories: (categories: CreateCategoryType[]) => void;
  addCategory: (category: CreateCategoryType) => void;
};

export const useStore = create<StateType & Actions>()(
  persist(
    (set) => ({
      categories: [],
      addCategory: (category: CreateCategoryType) => {
        set((state) => ({
          categories: [...state.categories, category],
        }));
      },
      setCategories: (categories: CreateCategoryType[]) => {
        set({ categories });
      },
    }),
    {
      name: "category-store",
      getStorage: () => localStorage,
    }
  )
);
