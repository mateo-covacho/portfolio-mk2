import "./app.css";
import { Suspense, useEffect, useRef, useState, useCallback } from "react";
import { BsLinkedin, BsTwitter, BsStackOverflow, BsGithub } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import curriculum from "./Resources/Mateo_Covacho_resume.pdf";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
import LeakShield from "./components/LeakShield";

import me from "./Resources/imgs/me_good_times.png";
import portfolio from "./Resources/imgs/profolio.PNG";
import leak_shield_img from "./Resources/imgs/LeakShield.png";
import integrity_tracker_img from "./Resources/imgs/integritytracker.png";
import site_tech_img from "./Resources/imgs/site.png";
import server_tech_img from "./Resources/imgs/computer.png";
import dev_ops_tech_img from "./Resources/imgs/application.png";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bootstrap_logo from "./Resources/logos/front/bootstrap.svg";
import css_logo from "./Resources/logos/front/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png";
import html5_logo from "./Resources/logos/front/html5.svg";
import javascript_logo from "./Resources/logos/front/javascript.svg";
import reactjs_logo from "./Resources/logos/front/reactjs-icon.svg";
import svelte_logo from "./Resources/logos/front/svelte_logo.svg";
import threejs_logo from "./Resources/logos/front/threejs-logo.svg";
import figma_logo from "./Resources/logos/front/figma-icon.svg";
import blueprintjs_logo from "./Resources/logos/front/blueprintjs_logo.svg";

import firebase_logo from "./Resources/logos/back/firebase-icon.svg";
import supabase_logo from "./Resources/logos/back/supabase-icon.svg";
import postgres_logo from "./Resources/logos/back/postgres_logo.png";
import nodejs_logo from "./Resources/logos/back/nodejs-icon.svg";
import typescript_logo from "./Resources/logos/back/typescrip-logo.svg";
import python_logo from "./Resources/logos/back/python-icon.svg";
import java_logo from "./Resources/logos/back/java.png";
import serverless_logo from "./Resources/logos/back/serverless-icon.svg";
import docker_logo from "./Resources/logos/back/docker-icon.svg";
import netlify_logo from "./Resources/logos/back/netlify.svg";
import bash_logo from "./Resources/logos/dev/bash.svg";
import vercel_logo from "./Resources/logos/back/vercel.svg";
import ethers_logo from "./Resources/logos/back/ethersjs-icon.svg";
import next_js_logo from "./Resources/logos/back/next-js.svg";
import amazon_web_services_logo from "./Resources/logos/back/awslogo.svg";

import git_logo from "./Resources/logos/dev/git-scm-icon.svg";
import github_logo from "./Resources/logos/dev/github.png";
import npm_logo from "./Resources/logos/dev/npmjs-ar21.svg";
//import postman_logo from "./Resources/logos/dev/getpostman-icon.svg";
import webpack_logo from "./Resources/logos/dev/js_webpack-ar21.svg";
import vscode_logo from "./Resources/logos/dev/0aea25bb-27bb-427f-8d65-f999bf0cba67.svg";
import ReCAPTCHA from "react-google-recaptcha";

import network_explorer_img from "./Resources/imgs/network_explorer.PNG";

import Networkexplorer from "./components/Networkexplorer.jsx";
import Portfolio from "./components/Portfolio.jsx";
import IntegrityTracker from "./components/IntegrityTracker.jsx";

import { Divider, Space, Tag } from "antd";
import { inject } from "@vercel/analytics";

function App() {
  inject();
  const [showNetworkExplorer, setShowNetworkExplorer] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showLeakShield, setShowLeakShield] = useState(false);
  const [showIntegrityTracker, setShowIntegrityTracker] = useState(false);

  const [filter, setFilter] = useState(null);
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [recaptcha, setRecaptcha] = useState(false);
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const resume = useRef(null);
  const contact = useRef(null);
  const blog = useRef(null);
  const project = useRef(null);
  const abilities = useRef(null);
  const about = useRef(null);
  const particle_container = useRef(null);
  const [project_parent] = useAutoAnimate(/* optional config */);

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  function filter_projects_by(logo) {
    setFilter(logo);
  }
  function handleClose(name) {
    if (name == "Network explorer") {
      setShowNetworkExplorer(false);
    } else if (name == "Portfolio") {
      setShowPortfolio(false);
    } else if (name == "Leak shield") {
      setShowLeakShield(false);
    } else if (name == "Integrity Tracker") {
      setShowIntegrityTracker(false);
    }
  }
  function handleShow(name) {
    if (name == "Network explorer") {
      setShowNetworkExplorer(true);
    } else if (name == "Portfolio") {
      setShowPortfolio(true);
    } else if (name == "Leak shield") {
      setShowLeakShield(true);
    } else if (name == "Integrity Tracker") {
      setShowIntegrityTracker(true);
    }
  }
  function getShowModal(name) {
    if (name == "Network explorer") {
      return showNetworkExplorer;
    } else if (name == "Portfolio") {
      return showPortfolio;
    } else if (name == "Leak shield") {
      return showLeakShield;
    } else if (name == "Integrity Tracker") {
      return showIntegrityTracker;
    }
  }
  function handleContactMe() {
    if (recaptcha) {
      emailjs.send(
        "service_ykrrk11",
        "template_wu19pwn",
        {
          from_name: name,
          subject: "Email from " + name + "",
          message: message,
          reply_to_email: email,
        },
        "_QHH4FdyK5NUWXsNK"
      );
    } else {
      alert("Please verify that you are not a robot");
    }
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecaptcha(value);
  }

  var [projects, setProjects] = useState([
    {
      img: network_explorer_img,
      modalComponent: <Networkexplorer github='https://github.com/mateo-covacho/graph-app' />,
      tittle: "Network explorer",
      link: "https://network-graph-explorer.vercel.app/",
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
      tags: ["Graph search algorithms", "Cloud computing", "AWS Lambda", "Third party api", "Big data processing", "Data visualization", "vis.js"],
      status: "Finished & upkeeping",
    },
    {
      img: integrity_tracker_img,
      modalComponent: <IntegrityTracker github='https://github.com/mateo-covacho/integrity-tracker' />,
      tittle: "Integrity Tracker",
      link: "https://integrity-tracker.vercel.app/",
      body: "Integrity Tracker is a platform that encourages transparency and accountability among public figures. It provides real-time fact-checking and evaluation of public figures' claims. Users can participate by voting on the veracity of these claims and providing feedback. In doing so, they contribute to the 'reputation score' of public figures. This score represents the reliability of their public statements over time.",
      tech: [blueprintjs_logo, next_js_logo, reactjs_logo, supabase_logo, javascript_logo, postgres_logo, css_logo, html5_logo],
      techString: ["blueprintjs_logo", "next_js_logo", "reactjs_logo", "supabase_logo", "javascript_logo", "postgres_logo", "css_logo", "html5_logo"],
      github: "https://github.com/username/integrity-tracker",
      tags: ["Frontend design", "Backend development", "Database Management"],
      status: "In progress",
    },
    {
      img: leak_shield_img,
      modalComponent: <LeakShield github='https://github.com/mateo-covacho/leak-shield' />,
      tittle: "Leak shield",
      link: "https://leak-shield.vercel.app/",
      body: "LeakShield is a tool that helps content creators and managers protect their content and revenue from unauthorized access or distribution. By embedding each copy of content with a unique identifier. LeakShield can then trace the source of unauthorized copies and take action to protect the content. It's implemented as a software application or service and can be integrated into social media plataforms.",
      tech: [blueprintjs_logo, next_js_logo, reactjs_logo, ethers_logo, javascript_logo, bootstrap_logo, css_logo, html5_logo],
      techString: ["blueprintjs_logo", "next_js_logo", "reactjs_logo", "ethers_logo", "javascript_logo", "bootstrap_logo", "css_logo", "html5_logo"],
      github: "https://github.com/mateo-covacho/portfolio-mk2",
      tags: ["Frontend design"],
      status: "Paused",
    },

    {
      img: portfolio,
      modalComponent: <Portfolio github='https://github.com/mateo-covacho/portfolio-mk2' />,
      tittle: "Portfolio",
      link: "https://mateocovacho.com/",
      body: "My personal portfolio that you are in right now. I use this project to showcase my project and elaborate on my development process for each of them",
      tech: [reactjs_logo, javascript_logo, bootstrap_logo, html5_logo, css_logo, git_logo, github_logo],
      techString: ["reactjs_logo", "javascript_logo", "bootstrap_logo", "html5_logo", "css_logo", "git_logo", "github_logo"],
      github: "https://github.com/mateo-covacho/portfolio-mk2",
      tags: ["Frontend design"],
      status: "Finished",
    },
  ]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className='App container-fluid p-0' style={{ position: "absolute", width: "100vw" }}>
      <Navbar bg='light' expand='md' sticky='top' classname='ms-5'>
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav ps-5'>
            <Nav>
              <a href={curriculum} target='_Blank' classname='resume-link' style={{ textDecoration: "none", color: "black" }}>
                <Nav.Item className=' btn btn-light nav_button mx-auto align-middle resume_button'>Resume</Nav.Item>
              </a>
              <Nav.Item
                className=' btn btn-light nav_button mx-3 align-middle '
                onClick={() => {
                  contact.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact
              </Nav.Item>
              <a href='http://link.medium.com/KB6fzkFRTpb' target='_blank'>
                <Nav.Item className=' btn btn-light nav_button mx-3 align-middle '>Blog</Nav.Item>
              </a>
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
            <Nav pullright className='px-5 ms-auto'>
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
        className='masthead bg-primary text-white  container-fluid w-100  landing-section  row justify-content-start m-0'
        style={{ paddingLeft: "0", backgroundColor: "red" }}
      >
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          container={particle_container}
          options={{
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },

                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            fpsLimit: 60,
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 60,
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
          }}
        />

        <div className='m-auto name-section col-4 ms-5 w-75' style={{ position: "relative", right: "20px", top: "-30%" }}>
          <h1 className=' display-1 mb-2 '>Mateo Covacho</h1>
          <p className=' font-weight-light mb-2 h5'>I am a Spanish Software Engineer, tinkerer and tech enthusiast. </p>
        </div>
      </header>
      <section ref={about} className='about-section mx-5 row  text-wrap py-5'>
        <div className='col  h-75 '>
          <h2 data-aos='fade-left' className='display-3 col'>
            About me.
          </h2>
          <p data-aos='fade-left' className='lead mb-5 pe-1'>
            As a junior software engineer from Spain, I am excited to work in the industry I love. I am a natural-born problem-solver and am
            passionate about approaching challenges from different points of view to find creative solutions.
          </p>

          <h2 data-aos='fade-left' className='display-5'>
            My story
          </h2>
          <p data-aos='fade-left' className='lead mb-5 pe-1'>
            As a child, I was fortunate to attend technology summer camps which sparked my interest in technology. I enjoyed tearing apart old toys
            for spare motors and building Lego robots, and through these activities, I discovered my passion for software engineering.
          </p>
          <h2 data-aos='fade-left' className='display-3 col'>
            My skills.
          </h2>
          <p data-aos='fade-left' className='lead mb-5 pe-1'>
            I am skilled in a wide range of areas and am able to quickly learn and adapt to new tools. However, my main skills lie in frontend and
            server-side development, as I have professional experience in both. I am currently working on a personal web3 project which allows me to
            further develop my skills.
          </p>
          <h2 data-aos='fade-left' className='display-5'>
            My favorite quality
          </h2>
          <p data-aos='fade-left' className='lead mb-5 pe-1'>
            One of my favorite qualities as a software engineer is my problem-solving skills. However, I believe my most important quality is my
            initiative and passion for learning new things in tech. I am constantly seeking out opportunities to expand my knowledge and stay
            up-to-date on the latest developments in the industry.
          </p>
        </div>
        <div className='col   d-flex-inline align-self-top img-col '>
          <img src={me} className='img-fluid  me-img' alt='img-fluid' style={{}} />
        </div>
      </section>
      <section ref={abilities} className='tech-section container mx-auto p-0'>
        <h2 className='display-3 ms-3'>Tech I use</h2>
        <div className='card-group  w-75 mx-auto'>
          <div className='card py-4'>
            <img src={site_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body   '>
              <h5 className='card-title '>The tech I use while building client-side applications</h5>
              <p className='card-text '>These are some of the technologies I use to design & build responsive web applications.</p>
              <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.typescriptlang.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={typescript_logo} alt='typescript_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://www.javascript.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={javascript_logo} alt='javascript_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <img className='my-auto tech-logo' height='50vw' src={html5_logo} alt='html5_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://www.w3.org/Style/CSS/Overview.en.html'>
                    <img className='my-auto tech-logo' height='50vw' src={css_logo} alt='css_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://reactjs.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={reactjs_logo} alt='reactjs_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://getbootstrap.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={bootstrap_logo} alt='bootstrap_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://svelte.dev/'>
                    <img className='my-auto tech-logo' height='50vw' src={svelte_logo} alt='svelte_logo' />
                  </a>
                </div>

                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://blueprintjs.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={blueprintjs_logo} alt='blueprintjs_logo' />
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
                  <a target='_blank' href='https://www.java.com/en/'>
                    <img className='my-auto tech-logo' height='50vw' src={java_logo} alt='java_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://nodejs.org/en/'>
                    <img className='my-auto tech-logo' height='50vw' src={nodejs_logo} alt='nodejs_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.python.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={python_logo} alt='python_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://aws.amazon.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={amazon_web_services_logo} alt='amazon_web_services_logo' style={{}} />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.postgresql.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={postgres_logo} alt='postgres_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://nextjs.org/'>
                    <img className='my-auto tech-logo' height='50vw' src={next_js_logo} alt='next_js_logo' style={{}} />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://docs.ethers.org/v5/'>
                    <img className='my-auto tech-logo' height='50vw' src={ethers_logo} alt='ethers_logo' style={{}} />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://firebase.google.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={firebase_logo} alt='firebase_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.serverless.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={serverless_logo} alt='serverless_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.docker.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={docker_logo} alt='docker_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://vercel.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={vercel_logo} alt='vercel_logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='card py-4'>
            <img src={dev_ops_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body  '>
              <h5 className='card-title'>Tech I use to work, helping me increase productivity</h5>
              <p className='card-text'>
                These are the technologies I use to facilitate my work building CI/CD pipelines, helping me write code faster
              </p>
              <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://git-scm.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={git_logo} alt='git_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight  '>
                  <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
                    <img className='my-auto tech-logo' height='50vw' src={figma_logo} alt='figma_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.npmjs.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={npm_logo} alt='npm_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://github.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={github_logo} alt='github_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://code.visualstudio.com/'>
                    <img className='my-auto tech-logo' height='50vw' src={vscode_logo} alt='vscode_logo' />
                  </a>
                </div>
                <div className='p-2 bd-highlight'>
                  <a target='_blank' href='https://www.gnu.org/software/bash/'>
                    <img className='my-auto tech-logo' height='50vw' src={bash_logo} alt='bash_logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={project} className='projects-section container mx-auto py-5'>
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
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
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("docker_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={blueprintjs_logo}
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("blueprintjs_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={next_js_logo}
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("next_js_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={ethers_logo}
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("ethers_logo");
                      }}
                    />
                  </Nav.Item>{" "}
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={postgres_logo}
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("postgres_logo");
                      }}
                    />
                  </Nav.Item>
                  <Nav.Item className='p-2 bd-highlight'>
                    <img
                      className='my-auto tech-logo'
                      height='40vw'
                      src={supabase_logo}
                      alt='                    '
                      onClick={() => {
                        filter_projects_by("supabase_logo");
                      }}
                    />
                  </Nav.Item>
                </div>
              </Nav>
            </Navbar>
          </Dropdown.Menu>
        </Dropdown>
        <Row xs={1} md={2} className='g-4' ref={project_parent}>
          {projects.map((project, project_index) => {
            if (filter === null || project.techString.includes(filter)) {
              return (
                <Col key={project_index}>
                  <Card
                    className='project-card'
                    onClick={() => {
                      handleShow(project.tittle);
                    }}
                    style={{ minHeight: "650px" }}
                  >
                    <Card.Img variant='top' src={project.img} style={{ maxHeight: "330px" }} />
                    <Card.Body>
                      <Space size={[0, 8]} wrap>
                        {/* 
												<Tag color='magenta'>magenta</Tag>
                        <Tag color='red'>red</Tag>
                        <Tag color='volcano'>volcano</Tag>
                        <Tag color='orange'>orange</Tag>
                        <Tag color='gold'>gold</Tag>
                        <Tag color='lime'>lime</Tag>
                        <Tag color='green'>green</Tag>
                        <Tag color='cyan'>cyan</Tag>
                        <Tag color='blue'>blue</Tag>
                        <Tag color='geekblue'>geekblue</Tag>
                        <Tag color='purple'>purple</Tag> 
											*/}
                        {project.status === "Finished & upkeeping" ? <Tag color='green'>{project.status}</Tag> : null}
                        {project.status === "Paused" ? <Tag color='purple'>{project.status}</Tag> : null}
                        {project.status === "Finished" ? <Tag color='gold'>{project.status}</Tag> : null}
                        {project.status === "In progress" ? <Tag color='blue'>{project.status}</Tag> : null}
                      </Space>
                      <Card.Title>{project.tittle}</Card.Title>
                      <Card.Link>{project.link}</Card.Link>
                      <Card.Text style={{ minHeight: "100px" }}>{project.body}</Card.Text>
                    </Card.Body>
                    <Card.Body className='py-0 ' style={{ minHeight: "64px" }}>
                      <div className='d-flex flex-wrap bd-highlight m-0 align-items-end '>
                        {project.tags.map((tag) => {
                          return <span className='tag py-0 h-3'>{tag}</span>;
                        })}
                      </div>
                    </Card.Body>
                    <Card.Footer>
                      <div className='d-flex flex-wrap bd-highlight mb-0 align-items-end'>
                        {project.tech.map((technology, technology_index) => {
                          return (
                            <Nav.Item className='p-2 bd-highlight  ' key={technology_index}>
                              <img className='my-auto ' height='30vw' src={technology} alt='technology' />
                            </Nav.Item>
                          );
                        })}
                      </div>
                    </Card.Footer>
                  </Card>
                  <Modal show={getShowModal(project.tittle)} size='lg'>
                    <Modal.Header>
                      <div className='container-fluid'>
                        <div className='row'>{project.tittle}</div>
                        <br />
                        <div className='row'>
                          <a padding='p-0' style={{ paddingRight: "0px" }} target='_blank' href={project.link}>
                            {project.link}
                          </a>
                        </div>
                        <br />

                        <div className='row'>
                          <a padding='p-0' style={{ paddingRight: "0px" }} target='_blank' href={project.github}>
                            {project.github}
                          </a>
                        </div>
                      </div>
                    </Modal.Header>
                    <Modal.Body>{project.modalComponent}</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant='primary'
                        onClick={() => {
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
            }
          })}
        </Row>
      </section>
      <div>
        <footer style={{ position: "absolute" }} ref={contact} className='container-fluid w-100 p-5'>
          <div class='container py-4'>
            <div class='row'>
              <div class='col-lg-4 col-md-6'>
                <h5 class='h1 text-white'>About me</h5>
                <p class=' '>
                  Do you have any questions? Please do not hesitate to contact me directly. I will get back to you within a matter of hours to help
                  you.
                </p>
              </div>
              {/* <div class='col-lg-2 col-md-6'>
                <h5 class='text-white mb-3'>This page</h5>
                <ul class='list-unstyled '>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>Get started</a>
                  </li>
                  <li>
                    <a href='#'>FAQ</a>
                  </li>
                </ul>
              </div> */}
              <div class='col-lg-2 col-md-6'>
                <h5 class='text-white mb-3'>Quick links</h5>
                <ul class='list-unstyled '>
                  <li>
                    <a target='_blank' classname='m-auto' href='mailto: mateocovacho@gmail.com'>
                      Mail
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/in/mateo-covacho-berrocal-35a039224/'>Linkedin</a>
                  </li>
                  <li>
                    <a href='https://twitter.com/covacho_dev'>Twitter</a>
                  </li>
                  <li>
                    <a href='https://stackoverflow.com/users/18017427/mateo-covacho'>StacOoverflow</a>
                  </li>
                  <li>
                    <a href='https://github.com/mateo-covacho'>Github</a>
                  </li>
                </ul>
              </div>
              <div class='col-lg-4 col-md-6'>
                <h5 class='text-white mb-3'>Contact me </h5>
                <p class=' '>Send me an email </p>

                <div className='row'>
                  <div className='col'>
                    <input
                      class='form-control blacktext'
                      type='text'
                      placeholder='Name'
                      aria-label="Recipient's username"
                      aria-describedby='button-addon2'
                      color='black'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className='col'>
                    <input
                      class='form-control blacktext'
                      type='text'
                      placeholder='Email'
                      aria-label="Recipient's username"
                      aria-describedby='button-addon2'
                      color='black'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div class='input-group mb-3'>
                    <input
                      class='form-control blacktext'
                      type='text'
                      placeholder='Message'
                      aria-label="Recipient's username"
                      aria-describedby='button-addon2'
                      color='black'
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                    <button
                      class='btn btn-primary red'
                      id='button-addon2'
                      type='button'
                      onClick={() => {
                        handleContactMe();
                        setName("");
                        setEmail("");
                        setMessage("");
                      }}
                    >
                      <i class='fas fa-paper-plane'>
                        <RiSendPlaneFill />
                      </i>
                    </button>
                  </div>
                  <ReCAPTCHA sitekey='6LdO2hUlAAAAAOYBNZsijaYNNH-XCd-bNTe4j0Zh' onChange={onChange} />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default App;
