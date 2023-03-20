import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutDivison() {
  return (
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                <img
              alt=""
              src={ require("./resources/3d/bitmoji.jpeg")}
              width="100%"
              className="d-inline-block align-center"
            />
                </div>
                <div class="col-lg-8">
                    <p>
                        I'm a software developer, currently building the web and desktop applications for a 15+ years old IAM product called ManageEngine PAM360/PMP. I gathered my first experience here as an intern and growed as a key contributor to the product today. My passion for designing and building large systems provided key features and value to the product. I am always ready to pickup new technologies and provide efficient solutions for problems. 
                    </p>
                    <h3>
                        Responsibilities 
                    </h3>
                    <div className="grid-container">
                        <div className="grid-item"
                         style={{
                           backgroundColor: '#ceecff'
                        }}>
                            <figure>
                            <img  src={ require("./resources/icons/research.png")} alt="Research" width="50" height="50" />
                            <figcaption>Researching latest technologies</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#feeee0'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/design.png")} alt="Design" width="50" height="50" />
                            <figcaption>Designing Scalable Systems</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#fff3cf'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/prototype.png")} alt="Prototype" width="50" height="50" />
                            <figcaption>Prototyping Demonstrable Models</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#f5f5f5'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/coding.png")} alt="Coding" width="50" height="50"  />
                            <figcaption>Writing High-Quality Code</figcaption>
                            </figure>
                        </div>                       
                        <div className="grid-item" style={{
                           backgroundColor: '#e9f1e4'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/operation.png")} alt="Operations" width="50" height="50"  />
                            <figcaption>Assessing Operational Practicality</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#d9f1fd'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/test.png")} alt="Testing" width="50" height="50"  />
                            <figcaption>Testing Integrated Workflows</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#d9f1fd'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/process.png")} alt="process" width="50" height="50"  />
                            <figcaption>Developing QA Procedures</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#e0d5f5'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/deploy.png")} alt="Deploy" width="50" height="50"  />
                            <figcaption>Deploying Features On-Time</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#feeee0'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/update.png")} alt="Upgrade" width="50" height="50"  />
                            <figcaption>Upgrading Existing Systems</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#ffe3e1'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/bug.png")} alt="Bugs" width="50" height="50"  />
                            <figcaption>Identifying, Locating and Fixing Bugs</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#ceecff'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/help.png")} alt="Help" width="50" height="50"  />
                            <figcaption>Mentoring and Guiding peers</figcaption>
                            </figure>
                        </div>
                        <div className="grid-item" style={{
                           backgroundColor: '#f5f5f5'
                        }}>
                            <figure >
                            <img src={ require("./resources/icons/team.png")} alt="Team" width="50" height="50"  />
                            <figcaption>Working collaboratively</figcaption>
                            </figure>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutDivison;