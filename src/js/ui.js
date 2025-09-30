export function renderProfile(userData, userRepos, container) {

  const repositoriosHTML = userRepos.length > 0 ? userRepos.map(repo =>  `
    <a href="${repo.html_url}" target="_blank">
      <div class="repository-card">
        <h3>${repo.name}</h3>
        <div class="repository-stats">
         <span>🌟 Stars: ${repo.stargazers_count}</span>
         <span>🍴 Forks: ${repo.forks_count}</span>
         <span>👀 Watchers: ${repo.watchers_count}</span>
         <span>📝 Language: ${repo.language || 'não informada'}</span>
        </div>
      </div>
    </a>
  ` ).join('') : '<p>Este usuário não possui repositórios públicos.</p>';

  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar do ${userData.name}" class="profile-avatar"/>
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'sem biografia 😓.'}</p>
      </div>
    </div>
    <p>Seguidores: ${userData.followers} | Seguindo: ${userData.following}</p>

    <div class="profile-repositories">
      <h2>Últimos Repositórios</h2>
      <div class="repositories">
      ${repositoriosHTML}
      </div>
    </div>
  `;
}

// export function renderRepos(repos, container) {
//   if (repos.length === 0) {
//     container.innerHTML += `<p>Este usuário não possui repositórios públicos.</p>`;
//     return;
//   }
//   const reposList = repos.slice(0, 10).forEach(repo => {
//     const repoItem = document.createElement("li");
   
//     reposList.appendChild(repoItem);
//   });
//   container.appendChild(reposList);
// }
