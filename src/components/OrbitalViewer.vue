<template>
    <div class="orbital-viewer">
      <h3>Orbital Viewer</h3>
      <div id="orbital-visualization" ref="visualizationContainer"></div>
    </div>
  </template>
  
  <script>
  import * as THREE from 'three';
  
  export default {
    name: 'OrbitalViewer',
    props: ['n', 'l', 'ml', 'ms'],
    mounted() {
      this.createScene();
    },
    methods: {
      createScene() {
        const width = this.$refs.visualizationContainer.clientWidth;
        const height = this.$refs.visualizationContainer.clientHeight;
  
        // Scene
        const scene = new THREE.Scene();
  
        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 5;
  
        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        this.$refs.visualizationContainer.appendChild(renderer.domElement);
  
        // Add Orbital Sphere
        const geometry = new THREE.SphereGeometry(1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
  
        // Animation Loop
        const animate = function () {
          requestAnimationFrame(animate);
          sphere.rotation.x += 0.01;
          sphere.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
  
        animate();
      },
    },
  };
  </script>
  
  <style scoped>
  .orbital-viewer {
    /* Container styles to ensure the viewer is clearly visible and well-presented */
    width: 100%;
    height: 400px; /* Adjust as needed */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* Light background to help the visualization stand out */
    border: 1px solid #ddd; /* Subtle border for distinction */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Soft shadow for depth */
    border-radius: 8px; /* Slightly rounded corners for a modern look */
    overflow: hidden; /* Ensures nothing spills outside the container */
    margin: 20px 0; /* Adds some space around the viewer */
  }
  
  #orbital-visualization {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff; /* Ensures a clean background for whatever is rendered here */
  }
  
  /* Additional styles for responsiveness and enhanced visual appeal */
  @media (max-width: 768px) {
    .orbital-viewer {
      height: 300px; /* Smaller height on smaller screens */
    }
  }
  
  /* Placeholder styles for when the visualization is not yet implemented or loaded */
  #orbital-visualization::before {
    content: 'Loading visualization...';
    text-align: center;
    color: #666;
    font-style: italic;
  }
  </style>
  