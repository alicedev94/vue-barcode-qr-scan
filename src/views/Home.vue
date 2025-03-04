<template>
  <div class="home-container">
    <h1 class="home-title">Escáner de Códigos</h1>
    <div class="scanner-section">
      <div class="scanner-card">
        <StreamBarcodeReader @decode="onDecode" @error="onError" />
      </div>
      <div class="results-card" v-if="barcodeResult || error">
        <h2>Resultados</h2>
        <div class="result-item" v-if="barcodeResult">
          <span class="result-label">Código detectado:</span>
          <span class="result-value">{{ barcodeResult }}</span>
        </div>
        <div class="result-item error" v-if="error">
          <span class="result-label">Error:</span>
          <span class="result-value">{{ error }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { StreamBarcodeReader } from 'vue-barcode-reader';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const barcodeResult = ref(null);
const error = ref(null);
const router = useRouter();

const onDecode = (result) => {
  barcodeResult.value = result;
};

const onError = (err) => {
  console.error('Error al escanear:', err);
  error.value = err.message;
};

watch(barcodeResult, (newVal) => {
  if (newVal) {
    router.push({ name: 'OtherModule', params: { id: newVal } });
  }
});
</script>

<style scoped>
.home-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.home-title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.scanner-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 1rem;
}

.scanner-card, .results-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.scanner-card:hover, .results-card:hover {
  transform: translateY(-5px);
}

.results-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.result-item {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.result-item:last-child {
  border-bottom: none;
}

.result-label {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 0.5rem;
}

.result-value {
  color: #666;
}

.result-item.error .result-value {
  color: #e74c3c;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .home-title {
    font-size: 2rem;
  }

  .home-container {
    padding: 15px;
  }

  .scanner-card, .results-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .home-title {
    font-size: 1.75rem;
  }

  .scanner-section {
    grid-template-columns: 1fr;
  }

  .results-card h2 {
    font-size: 1.25rem;
  }
}
</style> 