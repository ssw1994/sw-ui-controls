import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../components";
import { Chip, Chips } from "../../components/Chips/Chips";
import { Tab } from "../../components/Tabs/Tab";
import { Tabs } from "../../components/Tabs/Tabs";
import { faRemove } from "@fortawesome/free-solid-svg-icons";

export default function ChipsGuide() {
  const chipRemoved = (chip) => {
    console.log(chip);
  };
  const getChips = (chips) => {
    console.log(chips);
  };

  const onChipAdd = (chip) => {
    console.log(chip);
  };
  const renderChip = (chip, props) => {
    const { removeChip } = props;
    return (
      <div
        className="chip_style flex-row space-around"
        style={{ background: "lightgreen", padding: "5px" }}
      >
        {chip.name}
        <Button onClick={() => removeChip(chip)}>
          <FontAwesomeIcon icon={faRemove} />
        </Button>
      </div>
    );
  };
  return (
    <div className="sw_chips_guide">
      <h1>Chips Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Chips
            onRemoveChip={chipRemoved}
            getChips={getChips}
            onChipAddition={onChipAdd}
            removable={true}
            render={renderChip}
            style={{ width: "400px" }}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
              const chipRemoved = (chip) => {
                console.log(chip);
              };
                const getChips = (chips) => {
                    console.log(chips);
                };

                const onChipAdd = (chip) => {
                    console.log(chip);
                };
                const renderChip = (chip, props) => {
                    const { removeChip } = props;
                    return (
                    <div
                        className="chip_style flex-row space-around"
                        style={{ background: "lightgreen", padding: "5px" }}
                    >
                        {chip.name}
                        <Button onClick={() => removeChip(chip)}>
                        <FontAwesomeIcon icon={faRemove} />
                        </Button>
                    </div>
                    );
                };
                <Chips
                    onRemoveChip={chipRemoved}
                    getChips={getChips}
                    onChipAddition={onChipAdd}
                    removable={true}
                    render={renderChip}
                    style={{ width: "400px" }}
                />
            `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
