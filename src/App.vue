<template>
  <div>
    <StreamBarcodeReader @decode="onDecode" @error="onError" />
    <p v-if="barcodeResult">Resultado: {{ barcodeResult }}</p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script setup>
import { StreamBarcodeReader } from 'vue-barcode-reader';
import { ref } from 'vue';

const barcodeResult = ref(null);
const error = ref(null);

const onDecode = (result) => {
  console.log('Código de barras detectado:', result);
  barcodeResult.value = result;
};

const onError = (err) => {
  console.error('Error al escanear:', err);
  error.value = err.message;
};
</script>