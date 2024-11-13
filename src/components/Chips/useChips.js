import React, { useEffect, useState } from "react";
class IChip {
  id;
  name;
  removable;
  selected;
  constructor(name = "", removable = true, selected = false) {
    this.id = Date.now();
    this.name = name;
    this.removable = removable;
    this.selected = selected;
  }
}
export default function useChips(props) {
  const [chips, updateChips] = useState([]);
  const [chipName, updateChipName] = useState("");

  const { getChips, onChipAddition, onChipRemove, removable } = props;
  const removeChip = (chip) => {
    updateChips((c) => c.filter((item) => item.id !== chip.id));
    if (onChipRemove && typeof onChipRemove === "function") {
      onChipRemove(chip);
    }
  };

  const addChip = (e) => {
    if (e.key === "Enter") {
      e?.preventDefault();
      e?.stopPropation();
      if (chips.find((item) => item.name === chipName)) return;
      const chip = new IChip(chipName, removable);
      updateChips((c) => [...c, chip]);
      updateChipName("");
      if (onChipAddition && typeof onChipAddition === "function") {
        onChipAddition(chip);
      }
    }
  };

  useEffect(() => {
    if (getChips && typeof getChips === "function") {
      getChips(chips);
    }
  }, [chips]);

  const selectChip = (chip) => {
    updateChips((c) =>
      c.map((item) => {
        if (item.id === chip.id) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      })
    );
  };

  return {
    ...props,
    chips,
    updateChips,
    removeChip,
    selectChip,
    addChip,
    updateChipName,
    chipName,
  };
}
