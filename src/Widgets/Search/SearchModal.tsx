import { memo, useCallback } from "react";
import { Icons } from "../../Assets/Svgs/Icons/Index";
import { Text } from "../../Components/Text/Text";
import { useSearchContext } from "../../Store/SearchContext";
import { SearchModalContainer, SelectOptionContainer } from "./Search.styled";

const { useStore } = useSearchContext;

interface SelectOptionProps {
  text: "Nome" | "OS" | "Data";
}

type options = "Nome" | "OS" | "Data";

const optionsArr: options[] = ["Nome", "OS", "Data"];

const SelectOption = memo(({ text }: SelectOptionProps) => {
  const [searchText, setSearchText] = useStore((state) => state.search);

  const handleSelection = useCallback(
    () => setSearchText({ search: text }),
    [text]
  );

  return (
    <SelectOptionContainer
      onClick={handleSelection}
      selected={searchText === text}
    >
      <Text className="text" size="m">
        {text}
      </Text>
    </SelectOptionContainer>
  );
});

export const SearchModal = () => {
  const [isModalOpen, setIsModalOpen] = useStore((state) => state.open);

  const handleIconClick = useCallback(
    () => setIsModalOpen({ open: false }),
    []
  );

  return (
    isModalOpen && (
      <SearchModalContainer>
        <div className="modal">
          <div className="header">
            <Icons.Close onClick={handleIconClick} />
          </div>

          <div className="body">
            {optionsArr.map((text) => (
              <SelectOption text={text} key={text} />
            ))}
          </div>
        </div>
      </SearchModalContainer>
    )
  );
};
