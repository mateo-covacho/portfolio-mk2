/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/react.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials.react} scale={0.05} />
      <mesh geometry={nodes['584830f5cef1014c0b5e4aa1'].geometry} material={materials['584830f5cef1014c0b5e4aa1']} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={8.65} />
      <mesh geometry={nodes.Torus002.geometry} material={materials.react} rotation={[1.03, -0.01, 0.4]} scale={0.07} />
      <mesh geometry={nodes.Torus001.geometry} material={materials.react} rotation={[-0.74, -1.02, -0.82]} scale={0.07} />
      <mesh geometry={nodes.Torus003.geometry} material={materials.react} rotation={[1.35, -1.03, -0.86]} scale={0.07} />
    </group>
  )
}

useGLTF.preload('/react.glb')
