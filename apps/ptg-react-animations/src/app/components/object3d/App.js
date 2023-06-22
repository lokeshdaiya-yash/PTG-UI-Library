import './styles.css';
import { Canvas } from '@react-three/fiber';
import Scout from './Scoutgirl';
import { Suspense } from 'react';
import { OrbitControls, Stars } from '@react-three/drei';
import { useState } from 'react';

function Plane() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="green" />
    </mesh>
  );
}

function App() {
  const [action, setAction] = useState('idle');

  document.onkeydown = function (e) {
    if (e.key === ' ') {
      setAction('attack');
    } else if (e.key === 'w') {
      setAction('walk');
    } else if (e.key === 's') {
      setAction('runback');
    } else if (e.key === 'd') {
      setAction('rightwalk');
    } else if (e.key === 'a') {
      setAction('leftwalk');
    } else if (e.key === 'k') {
      setAction('kick');
    } else if (e.key === 'l') {
      setAction('turnleft');
    } else if (e.key === 'r') {
      setAction('turnright');
    } else if (e.key === 'z') {
      setAction('death');
    } else if (e.key === 'p') {
      setAction('power');
    } else if (e.key === 't') {
      setAction('turn');
    } else if (e.key === 'i') {
      setAction('idle');
    }
  };

  return (
    <Canvas>
      <Stars />
      <ambientLight />
      <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
      <pointLight intensity={2} position={[1, 1, 3]} color="red" />
      <pointLight intensity={2} position={[0, 3, -10]} color="red" />
      <Suspense fallback={null}>
        <Scout action={action}></Scout>
        <Plane />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;
