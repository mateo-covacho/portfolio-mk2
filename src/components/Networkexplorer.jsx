import React from "react";
import dashboard_img from "../Resources/imgs/dashboard.png";
import arcitecture_img from "../Resources/imgs/Graphapp.png";
const Networkexplorer = () => {
  return (
    <div className='container-fluid'>
      <h3>About this project</h3>
      <p>
        My inspiration for this project came when looking for a tool to visualize network graph data, I specifically wanted to use it to visualize the{" "}
        <a target='_blank' href='https://www.cnbc.com/2022/06/01/former-opensea-employee-charged-in-first-ever-nft-insider-trading-case.html'>
          first insider trading case in crypto
        </a>
        . I struggled to find a lightweight tool that allowed you to visualize your own data without first having to go through the process of
        creating a complex database with their service. For example, one of the most popular tools i found was the Neo4j that had a visualization
        option, however you had to create a database and import data that you wanted to visualize only once, needless to say it is an unnecessarily
        complex option hassle
        <br />
        <br />
        So my idea for a light weight application that allowed users to visualize data easily in the browser arouse.
        <br />
      </p>
      <h3>How I built it</h3>
      <p>
        The first step was building the site itself, which was simple. I started building the landing page in which I have a simple explanation about
        these stools capabilities and features, for this simple part I simply used React with Bootstrap.
        <br />
        <br />
        After that I moved on to building the tool itself I created a simple toolbar and the graph section itself was built using a third party
        package called react-graph-vis (which is based on vis.js) to visualize the graph data.
        <br />
        <br />I also added tabs for the different types of functionalities such as one for starting pathfinding algorithms or another for data
        scraping
      </p>
      <img src={dashboard_img} className='w-100' />
      <p>
        <br />
        Another important part of for this was building the backend built with Amazon Web Services, I used a lambda function to retrieve and process
        blockchain data set. Since the data retrieved from the ether-scan API was much larger and complex than the sample data I provided, and
        therefore needed more computing power, which would slow down the site but would work well in AWS.{" "}
      </p>
      <img src={arcitecture_img} className='w-100' />
    </div>
  );
};

export default Networkexplorer;
