import create from "zustand";

interface MenuContext {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useStore = create<MenuContext>((set) => ({
  open: false,
  openMenu: () => set(() => ({ open: true })),
  closeMenu: () => set(() => ({ open: false })),
}));
