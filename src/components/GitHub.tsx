import { useEffect, useState } from "react";
import { getGithubData, getRepositories } from "../services/github";
interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

function GitHub() {

    const [user, setUser] = useState<GithubUser | null>(null);
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    useEffect(() => {
  getGithubData().then(setUser);

  getRepositories().then((data) => {
    setRepos(data.slice(0, 6));
  });
}, []);

    if (!user) {

        return (
            <section className="py-24 text-center text-white">
                Loading GitHub...
            </section>
        );

    }

    return (

        <section
            id="github"
            className="bg-slate-950 text-white py-24 px-6"
        >

            <div className="max-w-5xl mx-auto">

                <h2 className="text-4xl font-bold mb-10 text-center">

                    GitHub Profile

                </h2>

                <div className="bg-slate-900 rounded-xl p-8">

                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-28 rounded-full mx-auto"
                    />

                    <h3 className="text-2xl mt-5 text-center">

                        {user.name}

                    </h3>

                    <p className="text-center text-slate-400">

                        @{user.login}

                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">

                        <div>

                            <h4 className="text-blue-400 text-3xl">

                                {user.public_repos}

                            </h4>

                            <p>Repositories</p>

                        </div>

                        <div>

                            <h4 className="text-blue-400 text-3xl">

                                {user.followers}

                            </h4>

                            <p>Followers</p>

                        </div>

                        <div>

                            <h4 className="text-blue-400 text-3xl">

                                {user.following}

                            </h4>

                            <p>Following</p>

                        </div>

                    </div>

                </div>

          
            <div className="mt-12">

  <h3 className="text-3xl font-bold mb-8 text-center">
    Latest Repositories
  </h3>

  <div className="grid md:grid-cols-2 gap-6">

    {repos.map((repo) => (

      <div
        key={repo.id}
        className="bg-slate-900 rounded-xl p-6 shadow-lg"
      >

        <h4 className="text-xl font-semibold text-blue-400">
          {repo.name}
        </h4>

        <p className="text-slate-400 mt-3 min-h-[50px]">
          {repo.description || "No description available."}
        </p>

        <div className="flex gap-4 mt-4 text-sm text-slate-300">

          <span>💻 {repo.language || "Unknown"}</span>

          <span>⭐ {repo.stargazers_count}</span>

          <span>🍴 {repo.forks_count}</span>

        </div>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          View Repository
        </a>

      </div>

    ))}

  </div>

</div>
</div>
        </section>

    );

}

export default GitHub;
