import { useCallback, useState } from "react";
import { Icons } from "../../Assets/Svgs/Icons/Index";
import { Logo } from "../Logo/Logo";
import { DropDownBackground, TopbarContainer } from "./Topbar.styled";
import { TopbarDropdown } from "./TopbarDropdown";

export const Topbar = () => {
  const [dropDownOnScreen, setDropDownOnScreen] = useState(false);

  const HandleCirclePlusClick = useCallback(
    () => setDropDownOnScreen(true),
    []
  );
  const HandleDropDownBackgroundClick = useCallback(
    () => setDropDownOnScreen(false),
    []
  );

  return (
    <TopbarContainer>
      <Logo.Text />
      {dropDownOnScreen && (
        <DropDownBackground onClick={HandleDropDownBackgroundClick} />
      )}
      <div className="right-side">
        <Icons.CirclePlus onClick={HandleCirclePlusClick} />
        <Icons.Bell />
        {dropDownOnScreen && <TopbarDropdown />}
      </div>
    </TopbarContainer>
  );
};
