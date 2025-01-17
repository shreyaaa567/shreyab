/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 among.gltf 
Author: PatelDev (https://sketchfab.com/PatelDev)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/among-us-character-f653b8ae37df4372abb2614bb27ee976
Title: Among Us Character
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/among.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} scale={1.5}/>
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} scale={1.5}/>
      <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} scale={1.5}/>
    </group>
  )
}

useGLTF.preload('/among.gltf')
