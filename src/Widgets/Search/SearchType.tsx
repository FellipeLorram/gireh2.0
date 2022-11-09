import { Text } from "../../Components/Text/Text";
import { SearchTypeContainer } from "./Search.styled";
import { useSearchContext } from "../../Store/SearchContext";

const { useStore } = useSearchContext;

export const SearchType = () => {
  const [searchType, setOpenSearchModal] = useStore((state) => state.search);

  return (
    <SearchTypeContainer onClick={() => setOpenSearchModal({ open: true })}>
      <Text className="text" size="s">
        {searchType}
      </Text>
    </SearchTypeContainer>
  );
};
