import logo from "./logo.svg";
import "./App.css";
import { Suspense, useRef } from "react";
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

function App() {
  function Model({ ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/80landscape2.glb");
    useFrame(({ clock }) => {
      group.current.position.z = clock.getElapsedTime() / 2;
      console.log(clock.elapsedTime);
    });
    return (
      <group ref={group} {...props} dispose={null}>
        <group scale={8}>
          <mesh geometry={nodes.Plane003.geometry} material={materials["Material.002"]} position={[0, -0.02, 0]} />
          <mesh geometry={nodes.Plane003_1.geometry} material={materials.neon} position={[0, -0.02, 0]} />
        </group>
      </group>
    );
  }

  return (
    <div className='App container-fluid p-0'>
      <Navbar bg='light' expand='lg' sticky='top'>
        <Container fluid>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Item className='btn btn-light'>Resume</Nav.Item>
              <Nav.Item className='btn btn-light'>Contact me</Nav.Item>
              <Nav.Item className='btn btn-light'>Blog</Nav.Item>
              <Nav.Item className='btn btn-light'>Abilities</Nav.Item>
              <Nav.Item className='btn btn-light'>About</Nav.Item>
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
      <header class='masthead bg-primary text-white text-center container-fluid w-100 d-flex align-items-center flex-column about-content p-0 '>
        <Canvas camara={{ fov: 70, position: [0, 100, 7.2], rotation: [0, 0, 0] }}>
          <Suspense fallback={null}>
            <Model />
            <OrbitControls enableZoom={false} enableDamping={false} enableRotate={true} enablePan={false} />
          </Suspense>
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={10} height={300} opacity={1} />
          </EffectComposer>
        </Canvas>
        <div className='m-auto name-section'>
          <h1 class=' mb-0'>Mateo Covacho</h1>
          <div className=''>
            <p className=' font-weight-light mb-0'>Software engineer</p>
          </div>
        </div>
      </header>
      <section className='about'>asdasADgh</section>
    </div>
  );
}

export default App;
