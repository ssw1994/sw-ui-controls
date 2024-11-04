import { Tab, Tabs } from "../../components";
import { Caraousel } from "../../components/Caraousel/Caraousel";

export default function CaraouselGuide() {
  return (
    <div>
      <h1>Caraousel Guide</h1>
      <Tabs>
        <Tab header="Result">
          <Caraousel>
            <img src="https://picsum.photos/id/1/200/300" alt="1"></img>
            <img src="https://picsum.photos/seed/picsum/200/300" alt="2"></img>
            <img src="https://picsum.photos/200/300?grayscale" alt="3" />
            <img src="https://picsum.photos/200/300/?blur" alt="4" />
            <img src="https://picsum.photos/200/300.jpg" alt="5" />
          </Caraousel>
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                <Caraousel>
                    <img src="https://picsum.photos/id/1/200/300"></img>
                    <img src="https://picsum.photos/seed/picsum/200/300"></img>
                    <img src="https://picsum.photos/200/300?grayscale" />
                    <img src="https://picsum.photos/200/300/?blur" />
                    <img src="https://picsum.photos/200/300.jpg" />
                </Caraousel>
              `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
