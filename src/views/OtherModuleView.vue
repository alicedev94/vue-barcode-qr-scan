<template>
    <div class="module-container">
        <h2>Módulo {{ $route.params.id }}</h2>
        <div class="content">
            <input 
                type="text" 
                class="module-input"
                placeholder="Ingrese datos del módulo"
            />
            <button class="action-button">
                Procesar
            </button>
        </div>
    </div>
</template>

<style scoped>
.module-container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.content {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.module-input {
    padding: 0.5rem 1rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.375rem;
    font-size: 1rem;
    width: 100%;
    transition: all 0.2s;
}

.module-input:focus {
    outline: none;
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.action-button {
    padding: 0.5rem 1.5rem;
    background-color: #10b981;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;
}

.action-button:hover {
    background-color: #059669;
}

.action-button:active {
    transform: scale(0.98);
}
</style>