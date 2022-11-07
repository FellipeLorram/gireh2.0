import create from "zustand";

interface MenuContext {
  open: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useStore = create<MenuContext>((set) => ({
  open: false,
  openMenu: () => set(() => ({ open: false })),
  closeMenu: () => set(() => ({ open: true })),
}));

export const useMenu = useStore(({ open }) => open);
export const useOpenMenu = useStore(({ openMenu }) => openMenu);
export const useCloseMenu = useStore(({ closeMenu }) => closeMenu);
