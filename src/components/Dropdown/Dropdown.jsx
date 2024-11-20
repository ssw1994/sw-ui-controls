import {
  createRef,
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import DropdownStyle from "./Dropdown.module.css";
import { Input } from "../Input/Input";
import { Chip, Chips } from "../Chips/Chips";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faWindowClose } from "@fortawesome/free-solid-svg-icons";
export const Dropdown = forwardRef((props, ref) => {
  if (!ref) {
    ref = createRef();
  }

  const searchListRef = createRef();
  const id = useId();
  const { list, displayName, ...otherProps } = props;
  const [searchItem, updateSearchItem] = useState("");
  const dropList = useMemo(() => {
    if (Array.isArray(list)) {
      const options = list.map((item) => {
        if (typeof item === "string") {
          return item;
        } else if (
          typeof item === "object" &&
          item.hasOwnProperty(displayName)
        ) {
          return item[displayName];
        } else {
          return item["key"];
        }
      });
      console.log(options);
      return options;
    }
    return [];
  }, [list, displayName]);

  const [selectedItems, updateSelectedItems] = useState([]);

  const clearSearch = () => {
    updateSearchItem("");
  };

  const selectItem = (item) => {
    updateSelectedItems([...selectedItems, item]);
    clearSearch();
  };

  const removeSelectedItem = (item) => {
    updateSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const [showResult, toggleSearchResult] = useState(false);

  useEffect(() => {
    ref?.current?.addEventListener("focus", () => {
      console.log(ref, searchListRef);
      toggleSearchResult(true);
    });
    ref?.current?.addEventListener("blur", () => {
      setTimeout(() => {
        toggleSearchResult(false);
      }, 1000);
    });
  }, [ref]);

  return (
    <div className={DropdownStyle.sw_drop_down}>
      <Input
        {...otherProps}
        ref={ref}
        onChange={(e) => updateSearchItem(e.target.value)}
      />
      <div className={DropdownStyle.sw_search_list} hidden={!showResult}>
        {dropList
          .filter(
            (item) =>
              typeof item === "string" &&
              !selectedItems.includes(item) &&
              item.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((item) => {
            return (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  selectItem(item);
                }}
              >
                {item}
              </div>
            );
          })}
      </div>
      <div className={DropdownStyle.sw_selected_items}>
        {selectedItems.map((item) => {
          return (
            <div className={DropdownStyle.sw_selected_item}>
              {item}
              <Button onClick={() => removeSelectedItem(item)}>
                <FontAwesomeIcon icon={faRemove} />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
});
