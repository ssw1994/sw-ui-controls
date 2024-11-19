import {
  faAngleDown,
  faAngleRight,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Tab } from "../../components/Tabs/Tab";
import { Tabs } from "../../components/Tabs/Tabs";
import { Tree } from "../../components/Tree/Tree";
import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons/faBeerMugEmpty";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

export default function TreeGuide() {
  const treeData = [
    {
      id: 1,
      name: "Parent 1",
      selected: false,
      children: [
        { id: 2, name: "Child 1.1", selected: false, children: [] },
        { id: 3, name: "Child 1.2", selected: false, children: [] },
      ],
    },
    {
      id: 4,
      name: "Parent 2",
      selected: false,
      children: [
        {
          id: 5,
          name: "Child 2.1",
          selected: false,
          children: [
            {
              id: 6,
              name: "Grandchild 2.1.1",
              selected: false,
              children: [
                {
                  id: 7,
                  name: "Grandchild 2.1.1.1",
                  selected: false,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "Parent 3",
      selected: false,
      children: [],
    },
  ];

  const getSelections = (selections) => {
    console.log(selections);
  };

  const [useCheckBox, setUseCheckBox] = useState(false);

  return (
    <div className="sw_tree_guide">
      <h1>Tree Guide</h1>
      <Tabs>
        <Tab header="Results">
          <Button onClick={() => setUseCheckBox(!useCheckBox)}>
            {useCheckBox ? "Use Icon" : "Use Checkbox"}
          </Button>
          <Tree
            data={treeData}
            id="id"
            displayName="name"
            childs="children"
            checkbox={useCheckBox}
            openIcon={faAngleDown}
            closeIcon={faAngleRight}
            emptyIcon={faMinus}
            getSelectedItems={getSelections}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`const treeData = [
                  {
                    id: 1,
                    name: "Parent 1",
                    selected: false,
                    children: [
                      { id: 2, name: "Child 1.1", selected: false, children: [] },
                      { id: 3, name: "Child 1.2", selected: false, children: [] },
                    ],
                  },
                  {
                    id: 4,
                    name: "Parent 2",
                    selected: false,
                    children: [
                      {
                        id: 5,
                        name: "Child 2.1",
                        selected: false,
                        children: [
                          {
                            id: 6,
                            name: "Grandchild 2.1.1",
                            selected: false,
                            children: [
                              {
                                id: 7,
                                name: "Grandchild 2.1.1.1",
                                selected: false,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 7,
                    name: "Parent 3",
                    selected: false,
                    children: [],
                  },
                ];

                const getSelections = (selections) => {
                  console.log(selections);
                };

                const [useCheckBox, setUseCheckBox] = useState(false);

                <Button onClick={() => setUseCheckBox(!useCheckBox)}>
                  {useCheckBox ? "Use Icon" : "Use Checkbox"}
                </Button>
                <Tree
                  data={treeData}
                  id="id"
                  displayName="name"
                  childs="children"
                  checkbox={useCheckBox}
                  openIcon={faAngleDown}
                  closeIcon={faAngleRight}
                  emptyIcon={faMinus}
                  getSelectedItems={getSelections}
                />

                `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
