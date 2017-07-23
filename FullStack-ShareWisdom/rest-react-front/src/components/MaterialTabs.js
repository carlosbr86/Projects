import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// import Slider from 'material-ui/Slider';
// import {Link} from 'react-router';

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const MaterialTabs = () => (
  <Tabs>
    <Tab label="Quiz" >
      {/*<div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>*/}
    </Tab>
    <Tab label="Item Two" > </Tab>
    <Tab
      label="onActive"
      data-route="/quiz"
      onActive={handleActive}
    >
      {/*<div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>*/}
    </Tab>
  </Tabs>
);

export default MaterialTabs;