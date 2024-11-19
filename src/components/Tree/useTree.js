import { useCallback } from "react";
import { useEffect, useMemo, useState } from "react";
const formatItems = (items = [], selectedNode, props, parentSelected) => {
  if (!props) return;
  const { id, displayName, childs } = props;
  const outArray = [];
  if (items && items instanceof Array && items.length > 0) {
    items.forEach((item) => {
      const childTree = item["childs"] || item[childs];
      const selected =
        selectedNode?.id === item[id] ? !selectedNode?.selected : item.selected;

      // const isEveryNodeSelected =
      //   childTree &&
      //   childTree.length > 0 &&
      //   childTree?.every(
      //     (ent) => ent.selected || (ent.id === selectedNode?.id && selected)
      //   );
      // const isPartiallySelected =
      //   childTree &&
      //   childTree.length > 0 &&
      //   childTree?.some(
      //     (ent) => ent.selected || (ent.id === selectedNode?.id && selected)
      //   );

      // console.log(
      //   "Every node Selected --->",
      //   isEveryNodeSelected,
      //   "\n Partial Selected ---> ",
      //   isPartiallySelected
      // );

      outArray.push({
        ...item,
        id: item[id],
        selected,
        displayName: item[displayName],
        childs: formatItems(childTree, selectedNode, props, selected),
      });
    });
  }
  return outArray;
};
export function useTree(props) {
  const { id, displayName, childs, data, getSelectedItems } = props;

  const [selectedNode, updateSelectedNode] = useState(null);
  const [tree, updateTree] = useState(null);

  const initialTree = useMemo(() => {
    let t = data;
    if (id || displayName || childs) {
      if (data && data instanceof Array) {
        return formatItems(data, null, props);
      }
    }
    return t;
  }, [id, displayName, childs, data]);

  useEffect(() => {
    if (tree || initialTree) {
      updateTree(formatItems(tree || initialTree, selectedNode, props));
    }
  }, [initialTree, selectedNode]);

  const updateTreeNode = useCallback((node) => {
    updateSelectedNode(node);
  });

  const selectedItems = useMemo(() => {
    const getSelections = (items = [], outArray = []) => {
      items?.forEach((item) => {
        if (item.selected) {
          outArray.push(item.id);
        }
        if (item["childs"] || item[childs]) {
          const childTree = item["childs"] || item[childs];
          getSelections(childTree, outArray);
        }
      });
      return outArray;
    };
    if (tree) return getSelections(tree);
    return [];
  }, [tree]);

  useEffect(() => {
    if (getSelectedItems && typeof getSelectedItems === "function") {
      getSelectedItems(selectedItems);
    }
  }, [selectedItems, getSelectedItems]);
  return {
    ...props,
    tree,
    initialTree,
    updateTreeNode,
    selectedItems,
  };
}
