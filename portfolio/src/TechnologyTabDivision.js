import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TechnologyTabDivision() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Web">
      <div>
            TechnologyTabDivision
        </div>
    </Tab>
      <Tab eventKey="profile" title="Desktop">
        <div>
            TechnologyTabDivision
        </div>
      </Tab>
      </Tabs>
  );
}

export default TechnologyTabDivision;