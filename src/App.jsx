import "./App.css";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { BsLinkedin, BsTwitter, BsStackOverflow, BsGithub } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useSpring, animated, config } from "@react-spring/three";
import me from "./Resources/imgs/me.jpg";
import site_tech_img from "./Resources/imgs/site.png";
import server_tech_img from "./Resources/imgs/computer.png";
import dev_ops_tech_img from "./Resources/imgs/application.png";

import bootstrap_logo from "./Resources/logos/front/Bootstrap.svg";
import css_logo from "./Resources/logos/front/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png";
import html5_logo from "./Resources/logos/front/html5.svg";
import javascript_logo from "./Resources/logos/front/Javascript.svg";
import reactjs_logo from "./Resources/logos/front/reactjs-icon.svg";
import svelte_logo_logo from "./Resources/logos/front/Svelte_Logo.svg";
import threejs_logo from "./Resources/logos/front/Threejs-logo.svg";

import amazon_web_services_logo_logo from "./Resources/logos/back/Amazon_Web_Services_Logo.svg";
import firebase_logo from "./Resources/logos/back/firebase-icon.svg";
import nodejs_logo from "./Resources/logos/back/nodejs-icon.svg";
import python_logo from "./Resources/logos/back/python-icon.svg";
import serverless_logo from "./Resources/logos/back/serverless-icon.svg";

import git_logo from "./Resources/logos/dev/git-scm-icon.svg";
import github_logo from "./Resources/logos/dev/GitHub-Mark-64px.png";
import npm_logo from "./Resources/logos/dev/npmjs-tile.svg";
//import postman_logo from "./Resources/logos/dev/getpostman-icon.svg";
import webpack_logo from "./Resources/logos/dev/js_webpack-ar21.svg";

function App() {
  const [active, setActive] = useState(false);
  function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/80landscape2.glb");

    useFrame(({ clock }) => {
      group.current.position.z = clock.getElapsedTime() / 2;
    });
    return (
      <group
        ref={group}
        {...props}
        dispose={null}
        onClick={() => {
          setActive(!active);
        }}
      >
        <group scale={8}>
          <mesh geometry={nodes.Plane003_1.geometry} material={materials.neon} position={[0, 0, 0]} />
          <mesh geometry={nodes.Plane003.geometry} material={materials["Material.002"]} position={[0, 0, 0]} />
        </group>
      </group>
    );
  }

  const resume = useRef(null);
  const contact = useRef(null);
  const blog = useRef(null);
  const abilities = useRef(null);
  const about = useRef(null);

  return (
    <div className='App container-fluid p-0'>
      <Navbar bg='light' expand='sm' sticky='top'>
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Item className='btn btn-light nav_button mx-3 resume_button'>Resume</Nav.Item>
              <Nav.Item className='btn btn-light nav_button mx-3 '>Contact me</Nav.Item>
              <Nav.Item className='btn btn-light nav_button mx-3 '>Blog</Nav.Item>
              <Nav.Item
                className='btn btn-light nav_button mx-3 '
                onClick={() => {
                  abilities.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Abilities
              </Nav.Item>
              <Nav.Item
                className='btn btn-light nav_button mx-3  '
                onClick={() => {
                  about.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </Nav.Item>
            </Nav>
            <Nav pullRight className='px-5'>
              <Nav.Item className='p-2' eventKey={1} href='#'>
                <a target='_blank' href='https://www.linkedin.com/in/mateo-covacho-berrocal-35a039224/'>
                  <BsLinkedin size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2' eventKey={2} href='#'>
                <a target='_blank' href='https://twitter.com/covacho_dev'>
                  <BsTwitter size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2' eventKey={2} href='#'>
                <a target='_blank' href='https://stackoverflow.com/users/18017427/mateo-covacho'>
                  <BsStackOverflow size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
              <Nav.Item className='p-2' eventKey={2} href='#'>
                <a target='_blank' href='https://github.com/mateo-covacho'>
                  <BsGithub size={20} className='blacktext mosepointer' />
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className='masthead bg-primary text-white text-center container-fluid w-100 d-flex align-items-center flex-column landing-section p-0 '>
        <Canvas camera={{ fov: 70, position: [0, 1, 8], rotation: [0, 0, 0] }}>
          <Model />
          <OrbitControls enableZoom={false} enableDamping={false} enableRotate={false} enablePan={false} />

          <EffectComposer>
            <Bloom />
          </EffectComposer>
        </Canvas>
        <div className='m-auto name-section'>
          <h1 className=' mb-0'>Mateo Covacho</h1>
          <div className=''>
            <p className=' font-weight-light mb-0 h5'>Software engineer</p>
          </div>
        </div>
      </header>
      <section ref={about} className='about-section mx-5 row  text-wrap'>
        <div className='col my-auto h-75 '>
          <h2 className='display-3 col'>About me.</h2>
          <p className='lead  mb-2'>I am a Mateo Covacho, a young & talented software engineer. As a natural born problem-solver I am passionate about resolving problems by approaching them through various paths & points of view.</p>
          <div className='display-5'>A short story</div>
          <div className='lead  mb-2'>
            As a kid being taken to technology summer camps, I quickly found out my vocation was in technology, I jumped from tearing apart old toys for spare motors to building Lego robots and so on hopping between activities, each time getting closer to finding out what I wanted to be, until I
            found software engineering.
          </div>
          <div className='display-5'>My favorite quality</div>
          <div className='lead  mb-2'>Even tho my problem-solving skills are very important, my most crucial quality in my opinion is my initiative. It has been what has allowed me to learn so much by my own.</div>
        </div>
        <div className='col my-auto  d-flex-inline align-self-center img-col '>
          <img src={me} className='img-fluid m-auto me-img' alt='img-fluid' style={{}} />
        </div>
      </section>
      <section ref={abilities} className='tech-section container py-5'>
        <h2 className='display-3'>Tech I use</h2>
        <div className='card-group  mx-auto'>
          <div className='card'>
            <img src={site_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body container-fluid'>
              <h5 className='card-title '>The tech I use while building client-side applications</h5>
              <p className='card-text '>These are, but not limited to, the tech I use to edsign & build responsive web appications.</p>
              <div class='d-flex flex-wrap bd-highlight'>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={html5_logo} alt='logo' />
                </div>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={css_logo} alt='logo' />
                </div>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={reactjs_logo} alt='logo' />
                </div>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={javascript_logo} alt='logo' />
                </div>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={bootstrap_logo} alt='logo' />
                </div>

                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={svelte_logo_logo} alt='logo' />
                </div>
                <div className='p-2 bd-highlight  '>
                  <img className='my-auto' height='50px' src={threejs_logo} alt='logo' />
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Footer</small>
            </div>
          </div>
          <div className='card'>
            <img src={server_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body'>
              <h5 className='card-title'>The tech I use for building fast and scalable backend applications</h5>
              <p className='card-text'>These are, but not limited to, the tech I use for building fast, scalable and flexible backend applications</p>
              <div class='d-flex flex-wrap bd-highlight'>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={amazon_web_services_logo_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={firebase_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={nodejs_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={python_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={serverless_logo} alt='logo' />
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Footer</small>
            </div>
          </div>
          <div className='card'>
            <img src={dev_ops_tech_img} className='card-img-top w-25 m-auto' alt='card-group-image' />
            <div className='card-body'>
              <h5 className='card-title'>And the tech I use to facilitate my work and work with third party code</h5>
              <p className='card-text'>This are the technologies I use to facilitate my work building CI/CD pipelines, helping me write and test code faster</p>
              <div class='d-flex flex-wrap bd-highlight'>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={git_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={github_logo} alt='logo' />
                </div>
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={npm_logo} alt='logo' />
                </div>
                {/* <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={postman_logo} alt='logo' />
                </div> */}
                <div class='p-2 bd-highlight'>
                  <img className='my-auto' height='50px' src={webpack_logo} alt='logo' />
                </div>
              </div>
            </div>
            <div className='card-footer'>
              <small className='text-muted'>Footer</small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
