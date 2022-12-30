import React from "react";
import dashboard_img from "../Resources/imgs/dashboard.png";
import arcitecture_img from "../Resources/imgs/Graphapp.png";
const Networkexplorer = () => {
  return (
    <div className='container-fluid'>
      <p>
        I recently developed a lightweight tool that allows users to easily visualize network graph data in their browser. I created this tool because
        I was searching for a way to visualize the first insider trading case in crypto and struggled to find a simple solution. Many popular options,
        like Neo4j, required the creation of a complex database before visualizing data, which I found to be unnecessarily time-consuming.
      </p>
      <p>
        To build the tool, I first created the landing page using React with Bootstrap. This page included a simple explanation of the tool's
        capabilities and features. Next, I moved on to building the tool itself. I included a simple toolbar and used the react-graph-vis package
        (which is based on vis.js) to visualize the graph data. I also added tabs for various functionalities such as pathfinding algorithms and data
        scraping.
      </p>
      <img src={dashboard_img} className='w-100' />

      <p>
        On the backend, I used Amazon Web Services and a lambda function to retrieve and process blockchain data from the ether-scan API. This data
        was much larger and more complex than the sample data I provided, so I needed the additional computing power of AWS to handle it without
        slowing down the site. I chose to use AWS because it is a reliable and scalable platform that can handle complex data sets like the one I was
        working with.
      </p>
      <img src={arcitecture_img} className='w-100' />
      <p>
        Overall, my goal for this tool was to promote transparency and accountability through the visualization of network data. I wanted to create a
        simple and user-friendly solution that would allow anyone to easily visualize their own data without the need to set up a complex database. I
        believe that this tool can be a valuable resource for anyone looking to understand and analyze network data in an intuitive and visually
        appealing way.
      </p>
    </div>
  );
};

export default Networkexplorer;
