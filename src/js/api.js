const baseURL = 'https://api.github.com';

export async function fetchUser(username) {
  const response = await fetch(`${baseURL}/users/${username}`);
  if (!response.ok) throw new Error("Usuário não encontrado!");
  return response.json();
}

export async function fetchRepos(username) {
  const response = await fetch(`${baseURL}/users/${username}/repos?per_page=10&sort=created`);
  if (!response.ok) throw new Error("Erro ao buscar repositórios!");
  return response.json();
}
