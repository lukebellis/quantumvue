<template>
    <div class="quantum-controls-container flex flex-col items-center justify-center py-6 w-full bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-xl">
      <h2 class="text-2xl font-bold text-white mb-6">Quantum Number Controls</h2>
      <div class="quantum-controls w-full max-w-md bg-white bg-opacity-90 rounded-lg p-6 shadow-md">
        <!-- Principal Quantum Number (n) -->
        <div class="mb-6">
          <label for="n" class="block text-lg font-medium text-gray-700 mb-2">Principal Quantum Number (n):</label>
          <select id="n" v-model="selectedN" @change="updateQuantumNumbers" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-blue-500">
            <option v-for="n in allowedN" :key="n" :value="n">{{ n }}</option>
          </select>
          <p class="mt-2 text-sm text-gray-600">Determines the size and energy level of the orbital.</p>
        </div>
  
        <!-- Azimuthal Quantum Number (l) -->
        <div class="mb-6">
          <label for="l" class="block text-lg font-medium text-gray-700 mb-2">Azimuthal Quantum Number (l):</label>
          <select id="l" v-model="selectedL" @change="updateQuantumNumbers" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-blue-500">
            <option v-for="l in allowedL" :key="l" :value="l">{{ l }}</option>
          </select>
          <p class="mt-2 text-sm text-gray-600">Determines the shape of the orbital.</p>
        </div>
  
        <!-- Magnetic Quantum Number (m_l) -->
        <div class="mb-6">
          <label for="ml" class="block text-lg font-medium text-gray-700 mb-2">Magnetic Quantum Number (m<sub>l</sub>):</label>
          <select id="ml" v-model="selectedMl" @change="updateQuantumNumbers" class="w-full border-gray-300 rounded-lg p-2 focus:border-blue-500 focus:ring-blue-500">
            <option v-for="ml in allowedMl" :key="ml" :value="ml">{{ ml }}</option>
          </select>
          <p class="mt-2 text-sm text-gray-600">Determines the orientation of the orbital in space.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, watch, computed } from 'vue';
  
  export default {
    name: 'QuantumNumberControls',
    emits: ['updateQuantumNumbers'],
    setup(props, { emit }) {
      const selectedN = ref(1);
      const selectedL = ref(0);
      const selectedMl = ref(0);
  
      const allowedN = computed(() => Array.from({ length: 7 }, (_, i) => i + 1));
      const allowedL = computed(() => Array.from({ length: selectedN.value }, (_, i) => i));
      const allowedMl = computed(() => {
        const length = 2 * selectedL.value + 1;
        return Array.from({ length }, (_, i) => i - selectedL.value);
      });
  
      const updateQuantumNumbers = () => {
  emit('updateQuantumNumbers', {
    n: selectedN.value,
    l: selectedL.value,
    ml: selectedMl.value,
  });
};

  
      watch([selectedN, selectedL, selectedMl], updateQuantumNumbers, { deep: true });
  
      return { selectedN, selectedL, selectedMl, allowedN, allowedL, allowedMl, updateQuantumNumbers };
    }
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS is utility-first, so most styling is done in the template. Scoped CSS might not be necessary. */
  </style>
  