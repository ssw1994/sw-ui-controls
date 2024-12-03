import { Tab, Tabs } from "../../components";
import { FileUploader } from "../../components/FileUploader/FileUploader";

export default function FileUploaderGuide() {
  const getFiles = (files) => {
    console.log(files);
  };
  return (
    <div className="sw_file-uploader_guide">
      <h1>File Uploader Guide</h1>
      <Tabs>
        <Tab header="Results">
          <fieldset style={{ padding: "25px" }}>
            <legend>
              <strong>Drag and Drop files</strong>
            </legend>
            <FileUploader
              label="Upload profile image"
              multiple
              dragDrop={true}
              uploadedFiles={getFiles}
            />
          </fieldset>
          <fieldset style={{ padding: "25px" }}>
            <legend>
              <strong>File Uploader</strong>
            </legend>
            <FileUploader
              label="Upload profile image"
              multiple
              uploadedFiles={getFiles}
            />
          </fieldset>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const getFiles = (files) => {
                  console.log(files);
                };

                <fieldset style={{ padding: "25px" }}>
                  <legend>
                    <strong>Drag and Drop files</strong>
                  </legend>
                  <FileUploader
                    label="Upload profile image"
                    multiple
                    dragDrop={true}
                    uploadedFiles={getFiles}
                  />
                </fieldset>
                <fieldset style={{ padding: "25px" }}>
                  <legend>
                    <strong>File Uploader</strong>
                  </legend>
                  <FileUploader
                    label="Upload profile image"
                    multiple
                    uploadedFiles={getFiles}
                  />
                </fieldset>
                `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
