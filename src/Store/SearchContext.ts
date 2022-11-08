import createFastContext from "./CreateFastContext";

type searchStoreType = {
  open: boolean;
  search: "Nome" | "Data" | "OS";
};

export const useSearchContext = createFastContext<searchStoreType>({
  open: false,
  search: "Nome",
});
