import "./App.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera, Box, TorusKnot, OrthographicCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BsLinkedin, BsTwitter, BsStackOverflow, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

import useSpline from "@splinetool/r3f-spline";
import { useSpring, animated, config } from "@react-spring/three";
import me from "./Resources/imgs/me.jpg";
import portfolio from "./Resources/imgs/profolio.PNG";
import site_tech_img from "./Resources/imgs/site.png";
import server_tech_img from "./Resources/imgs/computer.png";
import dev_ops_tech_img from "./Resources/imgs/application.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import bootstrap_logo from "./Resources/logos/front/Bootstrap.svg";
import css_logo from "./Resources/logos/front/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png";
import html5_logo from "./Resources/logos/front/html5.svg";
import javascript_logo from "./Resources/logos/front/Javascript.svg";
import reactjs_logo from "./Resources/logos/front/reactjs-icon.svg";
import svelte_logo from "./Resources/logos/front/Svelte_Logo.svg";
import threejs_logo from "./Resources/logos/front/Threejs-logo.svg";
import figma_logo from "./Resources/logos/front/figma-icon.svg";

import amazon_web_services_logo from "./Resources/logos/back/Amazon_Web_Services_Logo.svg";
import firebase_logo from "./Resources/logos/back/firebase-icon.svg";
import nodejs_logo from "./Resources/logos/back/nodejs-icon.svg";
import python_logo from "./Resources/logos/back/python-icon.svg";
import serverless_logo from "./Resources/logos/back/serverless-icon.svg";
import docker_logo from "./Resources/logos/back/docker-icon.svg";

import git_logo from "./Resources/logos/dev/git-scm-icon.svg";
import github_logo from "./Resources/logos/dev/GitHub-Mark-64px.png";
import npm_logo from "./Resources/logos/dev/npmjs-ar21.svg";
//import postman_logo from "./Resources/logos/dev/getpostman-icon.svg";
import webpack_logo from "./Resources/logos/dev/js_webpack-ar21.svg";
import vscode_logo from "./Resources/logos/dev/0aea25bb-27bb-427f-8d65-f999bf0cba67.svg";

import network_explorer_img from "./Resources/imgs/network_explorer.PNG";

import Networkexplorer from "./components/Networkexplorer.jsx";
import Portfolio from "./components/Portfolio.jsx";

import emailjs from "emailjs-com";
import "./css/fcf.default.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { folder, useControls, Leva } from "leva";
import { MeshLambertMaterial } from "three";
import { Position } from "@react-three/drei/helpers/Position";

function App() {
  const [showNetworkExplorer, setShowNetworkExplorer] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [filter, setFilter] = useState(null);
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  function filter_projects_by(logo) {
    console.log("logo param", logo);
    setFilter(logo);
    console.log(filter);
  }
  function handleClose(name) {
    if (name == "Network explorer") {
      setShowNetworkExplorer(false);
    } else if (name == "Portfolio") {
      setShowPortfolio(false);
    }
  }
  function handleShow(name) {
    if (name == "Network explorer") {
      setShowNetworkExplorer(true);
    } else if (name == "Portfolio") {
      setShowPortfolio(true);
    }
  }
  function getShowModal(name) {
    if (name == "Network explorer") {
      return showNetworkExplorer;
    } else if (name == "Portfolio") {
      return showPortfolio;
    }
  }
  function handleContactMe() {
    console.log("sending email...");
    emailjs.send(
      "service_ykrrk11",
      "template_wu19pwn",
      {
        from_name: name,
        message: message,
        reply_to_email: email,
      },
      "_QHH4FdyK5NUWXsNK"
    );
  }

  var [projects, setProjects] = useState([
    {
      img: network_explorer_img,
      modalComponent: <Networkexplorer github='https://github.com/mateo-covacho/graph-app' />,
      tittle: "Network explorer",
      link: "https://network-explorer.on.fleek.co/",
      body: "An App to allow users to visualize data represented in network graph form datasets such as social media relational data (Friendships, follows, etc...) and data such as blockchain transactions for investigational and research purposes.",
      tech: [
        reactjs_logo,
        javascript_logo,
        bootstrap_logo,
        amazon_web_services_logo,
        python_logo,
        serverless_logo,
        html5_logo,
        css_logo,
        git_logo,
        github_logo,
        docker_logo,
      ],
      techString: [
        "reactjs_logo",
        "javascript_logo",
        "bootstrap_logo",
        "amazon_web_services_logo",
        "python_logo",
        "serverless_logo",
        "html5_logo",
        "css_logo",
        "git_logo",
        "github_logo",
        "docker_logo",
      ],
      github: "https://github.com/mateo-covacho/graph-app",
    },
    {
      img: portfolio,
      modalComponent: <Portfolio github='https://github.com/mateo-covacho/portfolio-mk2' />,
      tittle: "Portfolio",
      link: "https://mateo-covacho.netlify.app",
      body: "My personal porfolio that you are in right now. I use thsi project to showcase my project and alaborate on my development porcess for each of them",
      tech: [reactjs_logo, javascript_logo, bootstrap_logo, html5_logo, css_logo, git_logo, github_logo, threejs_logo],
      techString: ["reactjs_logo", "javascript_logo", "bootstrap_logo", "html5_logo", "css_logo", "git_logo", "github_logo", "threejs_logo"],
      github: "https://github.com/mateo-covacho/portfolio-mk2",
    },
  ]);

  const resume = useRef(null);
  const contact = useRef(null);
  const blog = useRef(null);
  const project = useRef(null);
  const abilities = useRef(null);
  const about = useRef(null);
  const particle_container = useRef(null);

  function Scene() {
    // const { posotion1, posotion2, posotion3 } = useControls("Box 1", (posotion1 = [0, 0, 0]));

    return (
      <Suspense>
        <Box position={[0, 0, 0]} />
        <Box position={[1, 1, 1]} />
        <Box position={[-1, -1, -1]} />
      </Suspense>
    );
  }
  return (
    <div className='App container-fluid p-0'>
      <Navbar bg='light' expand='md' sticky='top'>
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <a href=''>
                <Nav.Item className=' btn btn-light nav_button mx-3 align-middle resume_button'>Resume</Nav.Item>
              </a>
              <Nav.Item
                className=' btn btn-light nav_button mx-3 align-middle '
                onClick={() => {
                  contact.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact me
              </Nav.Item>
              <Nav.Item className=' btn btn-light nav_button mx-3 align-middle '>Blog</Nav.Item>
              <Nav.Item
                className=' btn btn-light nav_button mx-3 align-middle '
                onClick={() => {
                  project.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Project
              </Nav.Item>
              <Nav.Item
                className=' btn btn-light nav_button mx-3 align-middle '
                onClick={() => {
                  abilities.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Abilities
              </Nav.Item>
              <Nav.Item
                className=' btn btn-light nav_button mx-3 align-middle  '
                onClick={() => {
                  about.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </Nav.Item>
            </Nav>
            <Nav pullright className='px-5'>
              <Nav.Item className='p-2 d-flex justify-content-center' eventkey={2} href='#'>
                <a target='_blank' classname='m-auto' href='mailto: mateocovacho@gmail.com'>
                  <MdEmail size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2 d-flex justify-content-center' eventkey={1} href='#'>
                <a target='_blank' classname='m-auto' href='https://www.linkedin.com/in/mateo-covacho-berrocal-35a039224/'>
                  <BsLinkedin size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2 d-flex justify-content-center' eventkey={2} href='#'>
                <a target='_blank' classname='m-auto' href='https://twitter.com/covacho_dev'>
                  <BsTwitter size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2 d-flex justify-content-center' eventkey={2} href='#'>
                <a target='_blank' classname='m-auto' href='https://stackoverflow.com/users/18017427/mateo-covacho'>
                  <BsStackOverflow size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2 d-flex justify-content-center' eventkey={2} href='#'>
                <a target='_blank' classname='m-auto' href='https://github.com/mateo-covacho'>
                  <BsGithub size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header
        ref={particle_container}
        className='masthead bg-primary text-white  container-fluid w-100  landing-section  row justify-content-start '
        style={{ paddingLeft: "10vw ", backgroundColor: "red" }}
      >
        <Canvas>
          <OrbitControls autoRotate={false} enableZoom={false} />

          <Scene />
        </Canvas>
        <div className='m-auto name-section col-4 '>
          <h1 className=' display-1 mb-2 '>Mateo Covacho</h1>

          <p className=' font-weight-light mb-2 h5'>Software engineer</p>
          <p className=' font-weight-light mb-2 h5'>I am a Spanish junior Software Engineer, tinkerer and tech enthusiast. </p>
        </div>
      </header>
      <section ref={about} className='about-section mx-5 row  text-wrap py-5'>
        <div className='col  h-75 '>
          <h2 className='display-3 col'>About me.</h2>
          <p className='lead  mb-2 mb-5 pe-5'>
            I am a Mateo Covacho, a young & talented software engineer. As a natural born problem-solver I am passionate about solving challenges by
            approaching them through various paths & points of view.
          </p>
          <div className='display-5'>A short story</div>
          <div className='lead  mb-2 mb-5 pe-5'>
            As a kid being taken to technology summer camps, I quickly found out my vocation was in technology, I jumped from tearing apart old toys
            for spare motors to building Lego robots and so on hopping between activities, each time getting closer to finding out what I wanted to
            be, until I found software engineering.
          </div>
          <div className='display-5'>My favorite quality</div>
          <div className='lead  mb-2 mb-5 pe-5'>
            Even tho my problem-solving skills are very important, my most crucial quality in my opinion is my initiative. It has been what has
            allowed me to learn so much by my own.
          </div>
        </div>
        <div className='col   d-flex-inline align-self-top img-col '>
          <img src={me} className='img-fluid  me-img' alt='img-fluid' style={{}} />
        </div>
      </section>
      <section ref={abilities} className='tech-section container mx-auto p-5'>
        <h2 className='display-3'>Tech I use</h2>
        <div className='card-group  w-75 mx-auto'>
          <div className='card py-4'>
            <img src={site_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body   '>
              <h5 className='card-title '>The tech I use while building client-side applications</h5>
              <p className='card-text '>These are, but not limited to, the tech I use to edsign & build responsive web appications.</p>
              <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <img className='my-auto tech-logo' height='50vw' src={html5_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://www.w3.org/Style/CSS/Overview.en.html'>
                    <img className='my-auto tech-logo' height='50vw' src={css_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://reactjs.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={reactjs_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://www.javascript.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={javascript_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://getbootstrap.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={bootstrap_logo} alt='logo' />
                  </a>
                </div>

                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://svelte.dev/'>
                    <img className='my-auto tech-logo' height='50vw' src={svelte_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://threejs.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={threejs_logo} alt='logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card py-4'>
            <img src={server_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body  '>
              <h5 className='card-title'>Tech I use for building fast and scalable backend applications</h5>
              <p className='card-text'>These are, but not limited to, the tech I use for building fast, scalable and flexible backend applications</p>
              <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://aws.amazon.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={amazon_web_services_logo} alt='logo' style={{}} />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://firebase.google.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={firebase_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://nodejs.org/en/'>
                    <img className='my-auto tech-logo' height='50vw' src={nodejs_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.python.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={python_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.serverless.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={serverless_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.docker.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={docker_logo} alt='logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card py-4'>
            <img src={dev_ops_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body  '>
              <h5 className='card-title'>Tech I use to work, heliping me increase productivity </h5>
              <p className='card-text'>
                This are the technologies I use to facilitate my work building CI/CD pipelines, helping me write code faster
              </p>
              <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://git-scm.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={git_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <img className='my-auto tech-logo' height='50vw' src={figma_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://github.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={github_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.npmjs.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={npm_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://code.visualstudio.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={vscode_logo} alt='logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://webpack.js.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={webpack_logo} alt='logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={project} className='projects-section container mx-auto p-5'>
        <h2 className='display-3 wrap project-tittle mx-auto mb-5 '>My projects</h2>
        <Dropdown style={{ marginBottom: "20vh" }}>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            Filter
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Navbar bg='light' expand='sm' sticky='top'>
              <Nav className='me-auto'>
                <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={html5_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("html5_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={css_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("css_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={reactjs_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("reactjs_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={javascript_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("javascript_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={bootstrap_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("bootstrap_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={svelte_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("svelte_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight  '>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={threejs_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("threejs_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={amazon_web_services_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("amazon_web_services_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={firebase_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("firebase_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={nodejs_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("nodejs_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={python_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("python_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={serverless_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("serverless_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={docker_logo}
                      alt='logo'
                      onClick={() => {
                        filter_projects_by("docker_logo");
                      }}
                    />
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar>
          </Dropdown.Menu>
        </Dropdown>
        <Row xs={1} md={2} className='g-4'>
          {projects.map((project, project_index) => {
            if (filter === null || project.techString.includes(filter)) {
              return (
                <Col key={project_index}>
                  <Card
                    className='project-card'
                    onClick={() => {
                      handleShow(project.tittle);
                    }}
                    style={{ height: "555px" }}
                  >
                    <Card.Img variant='top' src={project.img} style={{ height: "330px" }} />
                    <Card.Body>
                      <Card.Title>{project.tittle}</Card.Title>
                      <Card.Link>{project.link}</Card.Link>
                      <Card.Text>{project.body}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                        {project.tech.map((technology, technology_index) => {
                          return (
                            <Nav.Item className='p-2 bd-highlight  ' key={technology_index}>
                              <img className='my-auto ' height='30vw' src={technology} alt='logo' />
                            </Nav.Item>
                          );
                        })}
                      </div>
                    </Card.Footer>
                  </Card>
                  <Modal show={getShowModal(project.tittle)} size='lg'>
                    <Modal.Header>
                      {project.tittle}
                      <br />
                      <a target='_blank' href={project.link}>
                        {project.link}
                      </a>
                      <br />
                      <a target='_blank' href={project.github}>
                        {project.github}
                      </a>
                    </Modal.Header>
                    <Modal.Body>{project.modalComponent}</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='primary'
                        onClick={() => {
                          console.log(project.tittle);
                          console.log(project_index);

                          handleClose(project.tittle);
                        }}
                      >
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              );
            } else {
              console.log(filter, " is not in ", project.techString);
            }
          })}
        </Row>
      </section>
      <footer ref={contact} className='container-fluid w-100 p-5'>
        <div className='contactform-container w-25 mx-auto'>
          <h2 className='display-3'>Contact me</h2>
          <div id='fcf-form'>
            <div className='field'>
              <label htmlFor='Name' className='label has-text-weight-normal'>
                Your name
              </label>
              <div className='control'>
                <input
                  type='text'
                  name='Name'
                  id='Name'
                  className='input is-full-width'
                  maxLength={100}
                  data-validate-field='Name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(name);
                  }}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='Email' className='label has-text-weight-normal'>
                Your email address
              </label>
              <div className='control'>
                <input
                  type='email'
                  name='Email'
                  id='Email'
                  className='input is-full-width'
                  maxLength={100}
                  data-validate-field='Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(email);
                  }}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='Message' className='label has-text-weight-normal'>
                Your message
              </label>
              <div className='control'>
                <textarea
                  name='Message'
                  id='Message'
                  className='textarea'
                  maxLength={3000}
                  rows={5}
                  data-validate-field='Message'
                  defaultValue={""}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    console.log(message);
                  }}
                />
              </div>
            </div>
            <div id='fcf-status' className='fcf-status' />
            <button
              id='fcf-button'
              className='button is-link is-medium'
              onClick={() => {
                if (name && email.match(validRegex) && message) {
                  handleContactMe();
                  setName("");
                  setEmail("");
                  setMessage("");
                } else if (name && !email.match(validRegex) && message) {
                  alert("Please inut a valid email");
                } else {
                  alert("Please fill all fields");
                }
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
