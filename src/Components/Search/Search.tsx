import { Icons } from "../../Assets/Svgs/Icons/Index";
import { Input } from "../Input/Input";
import { SearchBarWrapper } from "./Search.styled";
import { SearchType } from "./SearchType";
import { useSearchContext } from "../../Store/SearchContext";

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
    </Provider>
  );
};
