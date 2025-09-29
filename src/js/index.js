const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const baseUrl = "https://api.github.com";

btnSearch.addEventListener("click", async () => {
    const username = inputSearch.value;
    if (username) {
        profileResults.innerHTML = `<p class="loading">Carregando...</p>`
        try { 
        const response = await fetch(`${baseUrl}/users/${username}`);

        if (!response.ok) {
            alert("Usuário não encontrado!");
            profileResults.innerHTML = "";
            return;
        }
        const userData = await response.json();
        console.log(userData);
        profileResults.innerHTML = `<div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar do ${userData.name}" class="profile-avatar"/>
        <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'sem biografia 😓.'}</p>
        </div>
        </div>`
        


        } catch (error) {
            alert("Erro ao buscar usuário!");
            profileResults.innerHTML = "";
        }
    } else {
        alert("Por favor, insira um nome de usuário do GitHub.");
        profileResults.innerHTML = "";
    }
})