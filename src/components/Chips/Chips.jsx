import React, { createContext, memo, useContext, useState } from "react";
import ChipsStyle from "./Chips.module.css";
import useChips from "./useChips";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../Input/Input";
const ChipContext = createContext();

export const Chip = (chip) => {
  const { id, name, removable, selected } = chip;
  const updatedProps = useContext(ChipContext);
  const { chipStyle, removeChip, render } = updatedProps;

  if (render && typeof render === "function") {
    return render(chip, updatedProps);
  }
  return (
    <div
      className={ChipsStyle.sw_chip + " " + "flex-row" + " "}
      style={!removable ? { padding: "5px" } : { paddingLeft: "5px" }}
    >
      <span>{name}</span>
      {removable && (
        <Button onClick={() => removeChip(chip)}>
          <FontAwesomeIcon icon={faRemove} />
        </Button>
      )}
    </div>
  );
};
export const Chips = memo((props) => {
  const updatedProps = useChips(props);
  const { chips, addChip, chipName, updateChipName, style } = updatedProps;

  return (
    <ChipContext.Provider value={updatedProps}>
      <div className={ChipsStyle.sw_chips_container} style={style}>
        <div className={ChipsStyle.sw_chips_input_container}>
          <Input
            required
            minLength={3}
            maxLength={50}
            onKeyDown={addChip}
            label="Chip name"
            placeholder="e.g React"
            value={chipName}
            onChange={(e) => updateChipName(e.target.value)}
          />
        </div>
        <div className={ChipsStyle.sw_chips + " " + "flex-row space-between"}>
          {chips.map((chip) => (
            <Chip key={chip.name} {...chip} />
          ))}
        </div>
      </div>
    </ChipContext.Provider>
  );
});
