import { Button } from "../../components/Button/Button";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardMedia,
} from "../../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs } from "../../components";
export default function CardGuide() {
  const cardtemplate = (
    <Card style={{ height: "300px", width: "22%" }}>
      <CardMedia>
        <img src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" />
      </CardMedia>
      <CardHeader>Jammu Kashmir Tourism</CardHeader>
      <CardBody>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </CardBody>
      <CardFooter>
        <Button>
          <FontAwesomeIcon icon={faHeart} /> Like
        </Button>
        <Button>
          <FontAwesomeIcon icon={faThumbsDown} />
          Like
        </Button>
        <Button disabled>
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </Button>
      </CardFooter>
    </Card>
  );
  return (
    <div className="sw-card-guide">
      <h1>Card guide</h1>

      <Tabs>
        <Tab header="Results">
          <Card className="flex-row">
            {Array.from(Array(5)).map((_) => {
              return cardtemplate;
            })}
          </Card>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const cardtemplate = (
                    <Card style={{ height: "300px", width: "22%" }}>
                      <CardMedia>
                        <img src="https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU" />
                      </CardMedia>
                      <CardHeader>Jammu Kashmir Tourism</CardHeader>
                      <CardBody>
                        <div>
                          Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry's standard dummy text ever
                          since the 1500s, when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has survived not only
                          five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the 1960s with
                          the release of Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                        </div>
                      </CardBody>
                      <CardFooter>
                        <Button>
                          <FontAwesomeIcon icon={faHeart} /> Like
                        </Button>
                        <Button>
                          <FontAwesomeIcon icon={faThumbsDown} />
                          Like
                        </Button>
                        <Button disabled>
                          <FontAwesomeIcon icon={faThumbsUp} /> Like
                        </Button>
                      </CardFooter>
                    </Card>
                  );

                  Array.from(Array(5)).map((_) => {
                    return cardtemplate;
                  })
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
