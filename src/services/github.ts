export async function getGithubData() {

    const response = await fetch(
        "https://api.github.com/users/ahmedkamal-31"
    );

    return response.json();

}
export async function getRepositories() {

    const response = await fetch(
        "https://api.github.com/users/ahmedkamal-31/repos?sort=updated"
    );

    return response.json();

}