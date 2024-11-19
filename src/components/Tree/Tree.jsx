import { createContext, useContext } from "react";
import TreeStyle from "./Tree.module.css";
import { useTree } from "./useTree";
import { CheckBox } from "../CheckBox/CheckBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import {
  faFolderBlank,
  faFolderClosed,
} from "@fortawesome/free-solid-svg-icons";
const TreeContext = createContext();
export const TreeNode = (props) => {
  let { render, checkbox, updateTreeNode, openIcon, closeIcon, emptyIcon } =
    useContext(TreeContext);
  const { selected, displayName, id, childs } = props;
  if (render && typeof render === "function") {
    return render(props);
  }

  if (!openIcon) {
    console.log(openIcon);
    openIcon = faFolderOpen;
  }
  if (!closeIcon) {
    closeIcon = faFolderClosed;
  }
  if (!emptyIcon) {
    emptyIcon = faFolderBlank;
  }

  const childTree = props["childs"] || props[childs];
  const disabled = !checkbox && (!childTree || childTree?.length <= 0);
  return (
    <div className={TreeStyle.sw_tree_node}>
      <CheckBox
        checked={selected}
        label={displayName}
        value={id}
        disabled={disabled}
        icon={
          checkbox
            ? null
            : disabled
            ? emptyIcon
            : selected
            ? openIcon
            : closeIcon
        }
        onChange={() => updateTreeNode(props)}
      />

      {childs?.map((item) => {
        return checkbox || (!checkbox && selected) ? (
          <TreeNode {...item} />
        ) : null;
      })}
    </div>
  );
};
export const Tree = (props) => {
  const updatedProps = useTree(props);
  const { tree } = updatedProps;
  return (
    <TreeContext.Provider value={updatedProps}>
      <div className={TreeStyle.sw_tree}>
        {tree?.map((item, index) => (
          <TreeNode {...item} key={index} />
        ))}
      </div>
    </TreeContext.Provider>
  );
};
