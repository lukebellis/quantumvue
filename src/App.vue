<template>
  <div class="app flex items-center justify-center min-h-screen flex-col">
    <h1 class="title-gradient">QuantumVue</h1>
    <div class="content-container bg-black bg-opacity-50 rounded-lg p-8 m-4 flex flex-wrap md:flex-nowrap">
      <!-- First Column: Quantum Number Controls -->
      <div class="quantum-controls w-full md:w-1/4 p-4 flex flex-col">
        <QuantumNumberControls @updateQuantumNumbers="handleQuantumNumbersUpdate"/>
      </div>
      
      <!-- Second Column: Orbital Viewer -->
      <div class="orbital-viewer w-full md:w-2/4 p-4">
        <OrbitalViewer :n="quantumNumbers.n" :l="quantumNumbers.l" :ml="quantumNumbers.ml" />
      </div>
      
      <!-- Third Column: Mathematical Explanation -->
      <div class="math-explanation w-full md:w-1/4 p-4 flex flex-col">
        <MathematicalExplanation :quantumNumbers="quantumNumbers" />
      </div>
    </div>
    <footer class="w-full bg-gray-800 text-white text-center p-4 mt-8 fixed inset-x-0 bottom-0">
      Made by Luke Ellis - 
      <a href="https://github.com/lukebellis" target="_blank" class="inline-flex items-center justify-center">
        <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <!-- GitHub SVG icon -->
          <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.17-1.11-1.48-1.11-1.48-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.54 2.34 1.1 2.91.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.12-4.55-4.97 0-1.1.39-2 .1-2.95 0 0 .82-.26 2.7 1.01.78-.22 1.63-.33 2.47-.33s1.69.11 2.47.33c1.88-1.28 2.7-1.01 2.7-1.01.39.95.1 1.85.1 2.95 0 3.85-2.33 4.72-4.55 4.97.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A10.97 10.97 0 0 0 22 12c0-5.52-4.48-10-10-10z" clip-rule="evenodd" />
        </svg>
        GitHub
      </a>
    </footer>
  </div>
</template>

<script>
import { reactive } from 'vue';
import QuantumNumberControls from './components/QuantumNumberControls.vue';
import OrbitalViewer from './components/OrbitalViewer.vue';

export default {
  components: {
    QuantumNumberControls,
    OrbitalViewer,
  },
  setup() {
    const quantumNumbers = reactive({
      n: 1,
      l: 0,
      ml: 0,
    });

    const handleQuantumNumbersUpdate = (values) => {
      quantumNumbers.n = values.n;
      quantumNumbers.l = values.l;
      quantumNumbers.ml = values.ml;
    };

    return { quantumNumbers, handleQuantumNumbersUpdate };
  },
};
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
}

body {
  background-image: linear-gradient(to right top, #d16ba5, #ce5eab, #c952b3, #c047bd, #b33ec9, #a03dc0, #8d3bb7, #7a39ad, #64378c, #50346b, #3c2e4b, #2a282c);
  color: white;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.content-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 20px; /* Adjust the gap between columns */
}

@media (min-width: 768px) {
  .content-container {
    flex-direction: row;
  }

  .quantum-controls, .orbital-viewer, .math-explanation {
    flex: 1; /* Adjust flex basis to ensure even distribution without big gaps */
    padding: 10px; /* Adjusted padding */
  }
}

.title-gradient {
  font-size: 4rem; /* Adjust font size as needed */
  text-align: center;
  background-image: radial-gradient(circle, #ffffff, #f4f4f4, #e9e9e9, #dfdfdf, #d4d4d4, #c5c5c5, #b7b7b7, #a9a9a9, #949494, #808080, #6c6c6c, #595959);
  -webkit-background-clip: text;
  background-clip: text;
  color: #ffffff; /* Ensures text takes the background color */
  margin: 20px 0; /* Adjust margin as needed */
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5); /* Adjust for better visibility if needed */
}
</style>


