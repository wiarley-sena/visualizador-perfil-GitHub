export function renderProfile(userData, container) {
  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar do ${userData.name}" class="profile-avatar"/>
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'sem biografia 😓.'}</p>
      </div>
    </div>
    <p>Seguidores: ${userData.followers} | Seguindo: ${userData.following}</p>
  `;
}

export function renderRepos(repos, container) {
  if (repos.length === 0) {
    container.innerHTML += `<p>Este usuário não possui repositórios públicos.</p>`;
    return;
  }
  const reposList = document.createElement("ul");
  reposList.classList.add("repos-list");
  repos.slice(0, 10).forEach(repo => {
    const repoItem = document.createElement("li");
    repoItem.innerHTML = `
      <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      <p>${repo.description || 'sem descrição 😓.'}</p>
      <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
    `;
    reposList.appendChild(repoItem);
  });
  container.appendChild(reposList);
}
