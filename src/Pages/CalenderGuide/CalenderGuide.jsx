import moment from "moment";
import { Tab, Tabs } from "../../components";
import { Calender } from "../../components/Calender/Calender";

export default function CalenderGuide() {
  const dateTemplate = (date) => {
    if (date && date instanceof moment) {
      const d = moment(date);
      const day = d.get("day");
      if (d.isSame(moment(), "day")) {
        return (
          <div
            className="flex-row center-items"
            style={{
              backgroundColor: "lightblue",
              width: "100%",
              height: "100%",
            }}
          >
            {d.format("D")}
          </div>
        );
      }
      if (day === 0) {
        return (
          <div
            className="flex-row center-items"
            style={{ backgroundColor: "red", width: "100%", height: "100%" }}
          >
            {d.format("D")}
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="calender-guide">
      <h1>
        <Tabs>
          <Tab header="Result">
            <Calender dateTemplate={dateTemplate} />
          </Tab>
          <Tab header="Code">
            <pre>
              <code>
                {`  const dateTemplate = (date) => {
                    if (date && date instanceof moment) {
                      const d = moment(date);
                      const day = d.get("day");
                      if (d.isSame(moment(), "day")) {
                        return (
                          <div
                            className="flex-row center-items"
                            style={{
                              backgroundColor: "lightblue",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            {d.format("D")}
                          </div>
                        );
                      }
                      if (day === 0) {
                        return (
                          <div
                            className="flex-row center-items"
                            style={{ backgroundColor: "red", width: "100%", height: "100%" }}
                          >
                            {d.format("D")}
                          </div>
                        );
                      }
                    }
                    return null;
                  };

                  <Calender dateTemplate={dateTemplate} />
                  
                  `}
              </code>
            </pre>
          </Tab>
        </Tabs>
      </h1>
    </div>
  );
}
