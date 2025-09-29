import { fetchUser, fetchRepos } from './api.js';
import { renderProfile, renderRepos } from './ui.js';

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", async () => {
  const username = inputSearch.value;
  if (!username) {
    alert("Por favor, insira um nome de usuário do GitHub.");
    profileResults.innerHTML = "";
    return;
  }
  profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
  try {
    const userData = await fetchUser(username);
    renderProfile(userData, profileResults);
    const reposData = await fetchRepos(username);
    renderRepos(reposData, profileResults);
  } catch (error) {
    alert(error.message);
    profileResults.innerHTML = "";
  }
});
