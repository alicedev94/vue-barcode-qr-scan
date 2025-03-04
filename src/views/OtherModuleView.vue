<template>
    <div class="module-container">
        <h1 class="module-title">Other Module View</h1>
        <div class="module-content">
            <div class="card">
                <h2>Bienvenido</h2>
                <p>Este es un módulo con diseño responsivo</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.module-container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.module-title {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.module-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 1rem;
}

.card {
    background: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.card h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.card p {
    color: #666;
    line-height: 1.6;
}

/* Estilos responsivos */
@media (max-width: 768px) {
    .module-title {
        font-size: 2rem;
    }

    .module-container {
        padding: 15px;
    }

    .card {
        padding: 1rem;
    }
}

@media (max-width: 480px) {
    .module-title {
        font-size: 1.75rem;
    }

    .module-content {
        grid-template-columns: 1fr;
    }

    .card h2 {
        font-size: 1.25rem;
    }
}
</style>