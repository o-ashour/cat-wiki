class Github {
  constructor() {
    this.client_id = '7d51904523ca445ed8ea';
    this.client_secret = 'b2aad619104a0193bc5c73d7bde448fd940d5bb5';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}
