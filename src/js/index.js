const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

const baseUrl = "https://api.github.com";
const baseUrlRepos = "https://api.github.com";

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
        </div>
        
        <div class="profile-counters">
        <div class="followers">
         <h4>👥 Seguidores:</h4> 
        <span>${userData.followers}</span>
        </div>
        <div class="following">
        <h4>👥seguindo:</h4>
        <span> ${userData.following}</span>
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

    try {
        const response = await fetch(`${baseUrlRepos}/users/${username}/repos`);
        if (!response.ok) {
            throw new Error("Erro ao buscar repositórios!");
        }
        
        const reposData = await response.json();
        const ultimosRepos = reposData.slice(0,10);
        if (ultimosRepos.length > 0) {
            const reposList = document.createElement("ul");
            reposList.classList.add("repos-list");
            ultimosRepos.forEach(repo => {
                const repoItem = document.createElement("li");
                repoItem.innerHTML = `
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description || 'sem descrição 😓.'}</p>
                <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
                `;
                reposList.appendChild(repoItem);
            });
            profileResults.appendChild(reposList);
        } else {
            profileResults.innerHTML += `<p>Este usuário não possui repositórios públicos.</p>`;
        }
    } catch (error) {
        alert(error.message);
    }
})

