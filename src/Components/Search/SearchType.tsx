import { Text } from "../Text/Text";
import { SearchTypeContainer } from "./Search.styled";
import { useSearchContext } from "../../Store/SearchContext";

const { useStore } = useSearchContext;

export const SearchType = () => {
  const [searchType, setSearchType] = useStore((state) => state.search);

  return (
    <SearchTypeContainer>
      <Text className="text" size="s">{searchType}</Text>
    </SearchTypeContainer>
  );
};
