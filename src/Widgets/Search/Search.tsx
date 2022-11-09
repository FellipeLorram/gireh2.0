import { Icons } from "../../Assets/Svgs/Icons/Index";
import { Input } from "../../Components/Input/Input";
import { SearchBarWrapper } from "./Search.styled";
import { SearchType } from "./SearchType";
import { useSearchContext } from "../../Store/SearchContext";
import { SearchModal } from "./SearchModal";

const { Provider } = useSearchContext;

export const Search = () => {
  return (
    <Provider>
      <SearchBarWrapper>
        <Input.Wrapper>
          <Input.Input />
          <Input.Icon>
            <Icons.Search />
          </Input.Icon>
        </Input.Wrapper>
        <SearchType />
      </SearchBarWrapper>
      <SearchModal />
    </Provider>
  );
};
