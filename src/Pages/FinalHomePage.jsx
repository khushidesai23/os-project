import React, { useRef, useState,  Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Blob from "../Blob/Blob.js";
import "../Css/FinalHomePage.css";
import NavBar from "../Css/NavBar.jsx";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Team from "./Team.jsx";


const FinalHomePage = () => {
  /* For three 3d model */ 

  const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => (ref.current.rotation.y += 0.003));
    return (
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 0.35 : scale * 0.355}
        position={position}
        onMouseOver={(e) => setHovered(true)}
        onMouseOut={(e) => setHovered(false)}
    
      />
    );
  };
  const ModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    return (
      <Suspense>
        <GLTFModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls />
      </Suspense>
    );
  };
  
  const teamRef = useRef(null);
  const handleTeamClick = () => {
    teamRef.current.scrollIntoView({ behavior: "smooth" });
  };
 
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NavBar />
      <div className="full-homepage-container">
      <div class="particles">
        <div className="final-home-page">
          <div className="canvas-container">
            <Suspense fallback={<Html>Loading...</Html>}>
              <Canvas
                camera={{ position: [0.0, 0.0, 10.0] }}
                style={{ width: "100%", height: "100vh" }}
              >
                <Blob />
              </Canvas>
            </Suspense>
          </div>
          <div className="intro-section">
            <h1>OS Project </h1>
          </div>
        </div>
        <section className="scroll-button">
          <div className="back-to-top-btn" onClick={handleClick}>
            <ArrowDropUpIcon fontSize="large" />
          </div>
        </section>
      </div>

      {/* Algorithm Section  */}
      <div className="algorithms-section">
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Priority Scheduling Algorithm</h1>
            <p>
              The Preemptive Priority CPU Scheduling Algorithm Is A Preemptive
              Method Of CPU Scheduling Algorithms That Work Based On Process
              Priority. When A Process Arrives In The Ready Queue, Its Priority
              Is Compared With The Priority Of Other Processes In The Ready
              Queue And The Priority Of Processes Being Executed By The CPU At
              That Time. The Process With The Highest Priority Among All
              Available Processes Gets The CPU Next.
            </p>
          </section>
          <section className="button">
            <a href="/scheduling">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
        <div className="algo-vector">
        <section className="3d-model-section" >
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [92, 90, 90] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />  
              <ModelViewer modelPath="./raspberry_pi.glb" />
            </Canvas>
          </div>
        </section>
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-vector">
        <section className="3d-model-section" >
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [10, 25, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />  
              <ModelViewer modelPath="./computer_components.glb" />
            </Canvas>
          </div>
        </section>
        </div>
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Peterson Algorithm</h1>
            <p>
              Peterson's algorithm is a process synchronization algorithm. It is
              a simultaneous mutual exclusion programming algorithm that allows
              two or more processes to share a single-use resource without
              conflict, using only shared memory for communication.
            </p>
          </section>
          <section className="button">
            <a href="/peterson">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>First-Come-First Serve disk scheduling algorithm</h1>
            <p>
              FCFS is the simplest disk scheduling algorithm. As the name
              suggests, this algorithm entertains requests in the order they
              arrive in the disk queue. The algorithm looks very fair and there
              is no starvation (all requests are serviced sequentially) but
              generally, it does not provide the fastest service.
            </p>
          </section>
          <section className="button">
            <a href="/fcfs">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
        <div className="algo-vector">
        <section className="3d-model-section" >
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [10, 25, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />  
              <ModelViewer modelPath="./space_station_3.glb" />
            </Canvas>
          </div>
        </section>
        </div>
      </div>

      <div className="algorithms-section">
        <div className="algo-vector">
        <section className="3d-model-section" >
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [10, 25, 10] }}>
              <OrbitControls />
              <ambientLight intensity={1.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[10, 10, 10]} />  
              <ModelViewer modelPath="./laptop.glb" />
            </Canvas>
          </div>
        </section>
        </div>
        <div className="algo-info1">
          <section className="data-section">
            {" "}
            <h1>Optimal Page replacement algorithm</h1>
            <p>
              The page replacement algorithm decides which memory page is to be
              replaced. The process of replacement is sometimes called swap out
              or write to disk. Page replacement is done when the requested page
              is not found in the main memory (page fault).
            </p>
          </section>
          <section className="button">
            <a href="/optimal">
              <button> Open Simulator</button>
            </a>
          </section>
        </div>
      </div>

      <div className="team-section" ref={teamRef}>
        <h1>Our Team</h1>
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <div className="ellipse3"></div>
      </div>
      </div>
      <Team />
    </>
  );
};

export default FinalHomePage;
