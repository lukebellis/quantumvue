<template>
    <div class="math-explanation bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg rounded-lg p-6 text-white">
      <h2 class="text-2xl font-bold mb-4">Mathematical Explanation</h2>
      <p class="mb-4">This section provides a mathematical explanation for the selected hydrogen atomic orbital characterized by quantum numbers n, l, and m<sub>l</sub>.</p>
      
      <!-- Quantum Numbers and Their Explanations -->
      <div class="quantum-numbers my-4">
        <div class="mb-4">
          <p><strong>Principal Quantum Number (n):</strong> {{ quantumNumbers.n }}</p>
          <p class="text-sm mt-1">Determines the size and energy level of the orbital.</p>
        </div>
  
        <div class="mb-4">
          <p><strong>Azimuthal Quantum Number (l):</strong> {{ quantumNumbers.l }}</p>
          <p class="text-sm mt-1">Determines the shape of the orbital.</p>
        </div>
  
        <div class="mb-4">
          <p><strong>Magnetic Quantum Number (m<sub>l</sub>):</strong> {{ quantumNumbers.ml }}</p>
          <p class="text-sm mt-1">Determines the orientation of the orbital in space.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch, computed } from 'vue';
  
  export default {
    name: 'MathematicalExplanation',
    props: {
      quantumNumbers: {
        type: Object,
        required: true,
        default: () => ({ n: 1, l: 0, ml: 0 })
      }
    },
    setup(props) {
      // Logic here remains unchanged as the focus is on visual enhancement
    }
  };
  </script>
  
  <style scoped>
  /* Since we're utilizing Tailwind CSS, you might only need minimal scoped CSS, if any. */
  </style>
  