import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
  Tab,
  Tabs,
} from "../../components";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function LoadingSpinnerGuide() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      setTimeout(() => {
        setIsFullScreen(false);
      }, 5000);
    }
  }, [isFullScreen]);
  return (
    <div className="sw-loading-spinner-guide">
      <h1>Loading Spinner Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Button onClick={() => setIsLoading(!isLoading)}>
            {isLoading ? "Hide" : "Show"} Loader
          </Button>
          <Button onClick={() => setIsFullScreen(!isFullScreen)}>
            {isFullScreen ? "Container" : "Full"} Screen
          </Button>
          <LoadingSpinner isLoading={isLoading} fullscreen={isFullScreen}>
            <Card style={{ width: "400px", height: "400px" }}>
              <CardHeader>Skills</CardHeader>
              <CardMedia>
                <img src="https://picsum.photos/200/300" />
              </CardMedia>
              <CardBody>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </CardBody>
              <CardFooter>
                <Button>
                  <FontAwesomeIcon icon={faTrash}>Delete</FontAwesomeIcon>
                </Button>
              </CardFooter>
            </Card>
          </LoadingSpinner>
        </Tab>
        <Tab header="Code"></Tab>
      </Tabs>
    </div>
  );
}
