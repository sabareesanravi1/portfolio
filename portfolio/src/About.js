import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                        I'm a software developer, currently building the web and desktop applications for a experienced IAM product called ManageEngine PAM360/PMP. I gathered my first experience here as an intern and growed as a key contributor to the product today. My passion for designing and building large systems provided key features and value to the product. I am always ready to pickup new technologies easily and quickly. 
                    </p>
                    <p>
                        My key responsibilities are 
                    </p>
                    <ul>
                    <li>
                    Researching, designing, prototyping, implementing, and managing software programs.
                    </li>
                    <li>
                    Testing and evaluating new programs.
                    </li>
                    <li>
                    Identifying areas for modification in existing programs and subsequently developing these modifications.                    </li>
                    <li>
                    Writing and implementing efficient code.
                    </li>
                    <li>
                    Determining operational practicality.
                    </li>
                    <li>
                    Developing quality assurance procedures.
                    </li>
                    <li>
                    Deploying software tools, processes, and metrics.
                    </li>
                    <li>
                    Maintaining and upgrading existing systems.
                    </li>
                    <li>
                        Finding and solving root causes of bugs and issues.
                    </li>
                    <li>
                    Training and guiding junior developers.
                    </li>
                    <li>
                    Working closely with other developers, QA, UX/UI designers, customer support, business and systems analysts.
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutDivison;