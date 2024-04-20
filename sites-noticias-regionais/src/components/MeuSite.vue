<template>
    <div class="header">
        <div class="icon">
            <span class="material-symbols-outlined">
                density_large
            </span>
        </div>
        <div class="main_title">
            <h1>PARA</h1>
        </div>
        <div class="search">
            <span class="material-symbols-outlined">
                search
            </span>
            <input type="search" class="input-search" placeholder="pesquisa">
        </div>
    </div>
    <div>
        <ul class="list">
            <HeaderMenu title="Adriano" href="#" />
            <HeaderMenu title="gustavo" href="#" />
            <HeaderMenu title="sei la" href="#" />
            <HeaderMenu title="talvez" href="#" />
        </ul>
    </div>
    <div class="main-card">
        <ImageCard src="../assets/veia.jpg"/>
        <div class="card2">
            <img class="card-img2" src="../assets/veia.jpg" alt="">
        </div>
    </div>
</template>

<script setup>
    import HeaderMenu from './HeaderMenu.vue'
import ImageCard from './ImageCard.vue';
    
</script>

<style>
    * {
    padding: 0%;
    margin: 0;
    font-family: "Poppins", sans-serif;
}

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4D9943;
    color: #FFFFFF;
    
}

h1 {
    margin: 0px;
    align-items: center;
}

.list {
    display: flex;
    justify-content: space-around;
    background-color: #4D9943;
    margin: 0px;
    transition: 0.5s;
}

li {
    list-style-type: none;
}

.list li:hover{
    scale: 1.11;
    gap: 16px;
    transition: transform 0.3s ease;
}

.list a {
    color: rgba(255, 255, 255, 0.623);
    text-decoration: none;
    transition: 0.3s ease
}

.list a:hover {
    color: #FFFFFF;
    transition:  0.3s ease
}

.input-search {
    border: none;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    outline: none;
    font-size: 14px;
    padding: 3px;
    transition: 0.5s;
    color: #FFFFFF;
    border-radius: 10px;
    margin-right: 6px;
}


.search input::placeholder{
    color: #FFFFFF;
    padding: 6px;
    transition: transform 0.3s ease;
}

.search input:focus::placeholder{
    transform: translateY(-30px);
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration{
    display: none;
}

.main-card{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.card {
    height: 200px;
    width: 200px;
    background-color: antiquewhite;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    
    
}

.card-img {
    height: inherit;
    width: auto;
    
}

.card2 {
    height: 200px;
    width: 400px;
    background-color: antiquewhite;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    cursor: pointer;
   
}

.card-img2 {
    height: auto;
    width: inherit;
}


</style>