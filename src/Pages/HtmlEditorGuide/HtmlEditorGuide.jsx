import { forwardRef } from "react";
import "./HtmlEditorGuide.css";
import { Tab, Tabs } from "../../components";
import { HtmlEditor } from "../../components/HtmlEditor/HtmlEditor";
export default function HtmlEditorGuide() {
  const getHtmlContent = (contents) => {
    console.log(contents);
  };
  return (
    <div className="sw_html_editor_guide">
      <h1>Html Editor Guide</h1>
      <Tabs>
        <Tab header="Results">
          <HtmlEditor
            style={{ width: "500px", height: "500px" }}
            getContents={getHtmlContent}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const getHtmlContent = (contents) => {
                  console.log(contents);
                };

                <HtmlEditor
                  style={{ width: "500px", height: "500px" }}
                  getContents={getHtmlContent}
                />
                `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
