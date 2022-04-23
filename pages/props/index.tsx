import { useState } from "react";
import ButtonFromProps from "./button";
import ContainerFromProps from "./container";
import { CustomP, CustomClassP } from "../../components/props/style";

interface ItemProps {
  key: number;
  text: String;
}

const Props = () => {
  const [buttonState, setButtonState] = useState(false);
  const [listState, setListState] = useState<ItemProps[]>([]);

  const handleOnOff = () => {
    setButtonState((state) => !state);
  };

  const handleOnAddList = () => {
    setListState((state) => {
      const item = {
        key: state.length + 1,
        text: String(state.length + 1),
      };

      return [...state, item];
    });
  };

  return (
    <div className="flex min-h-screen	min-w-screen">
      <ContainerFromProps>
        <ButtonFromProps text="ON / OFF" onClick={handleOnOff} />
        <CustomP>Click button to switch</CustomP>
        <CustomClassP>state is : {buttonState ? "0" : "1"}</CustomClassP>
      </ContainerFromProps>
      <ContainerFromProps>
        <ButtonFromProps
          text="ADD"
          bottomText="to list"
          onClick={handleOnAddList}
        />
        <CustomClassP>Click button to add to the list</CustomClassP>
        {listState.length > 0 ? (
          listState.map((data: ItemProps) => {
            return (
              <div key={data.key}>
                <p>{data.text}</p>
              </div>
            );
          })
        ) : (
          <p>EMPTY AF</p>
        )}
      </ContainerFromProps>
    </div>
  );
};

export default Props;
