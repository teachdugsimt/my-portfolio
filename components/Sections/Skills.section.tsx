import { BsArrowRightShort } from "../Misc/Icons.collection";
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Skills = () => {


  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">Skills & Uses</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <Collapse>
          <Panel header="Next JS, Gatsby, React JS" key="1">
            <p>Next JS, Gatsby, React JS as my Frontend Web Framework. Also redux-sagas or mobx, mobx-state-tree was used.
              Additional components will be antd, bootstrap and atlastkit.
            </p>
          </Panel>
          <Panel header="Typescript, Javascript" key="2">
            <p>Typescript, Javascript as my main language. Use it for coding frontend and backend.</p>
          </Panel>
          <Panel header="CSS, Styled Component" key="3">
            <p>CSS, Styled Component as my CSS framework. Sometimes SASS, SCSS is used.</p>
          </Panel>
          <Panel header="React-Native" key="4">
            <p>React-Native as my Frontend Mobile Application Framework. Also redux-sagas or mobx, mobx-state-tree was used.</p>
          </Panel>
          <Panel header="Figma, Notion, Trello" key="5">
            <p>Figma as my designing tool. Notion and Trello as my management task tool.</p>
          </Panel>
          <Panel header="Node JS, Express JS, Fastify TS, Java Springboot" key="6">
            <p>Node JS, Express JS, Fastify TS, Java Springboot as my API framework. Sometimes aws-sdk is used for connect AWS service.</p>
          </Panel>
          <Panel header="AWS Console, AWS-SDK, AWS-CDK" key="7">
            <p>AWS Console, AWS-SDK, AWS-CDK as my Cloud Platform for deployment service, management service and build infrastructor.</p>
          </Panel>
          <Panel header="Postgres, Sql Server, Firebase" key="8">
            <p>Postgres, Sql Server, Firebase as my Database. Sometimes Dynamo DB is used.</p>
          </Panel>
          <Panel header="Line Developer" key="9">
            <p>Use Line Developer for build flex-message to link with responsive web and push notification.</p>
          </Panel>
          <Panel header="Pythong, C, C++, C#" key="10">
            <p>Pythong, C, C++, C# as my secondary language. I've used these languages when studying and practicing AI.</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default Skills;
