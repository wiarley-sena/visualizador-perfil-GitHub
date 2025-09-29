export async function fetchUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) throw new Error("Usuário não encontrado!");
  return response.json();
}

export async function fetchRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc`);
  if (!response.ok) throw new Error("Erro ao buscar repositórios!");
  return response.json();
}
