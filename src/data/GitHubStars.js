import React, { useState, useEffect } from 'react';
import formatNumber from '../script/formatNuber';


async function fetchTotalStars(username) {
    const perPage = 100;
    let page = 1;
    let total = 0;
    const headers = {

        'Accept': 'application/vnd.github+json'
    };

    while (true) {
        const url = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;
        const res = await fetch(url, { headers });

        if (!res.ok) {

            throw new Error(`GitHub API Error: ${res.status} ${res.statusText}`);
        }

        const repos = await res.json();

        for (const r of repos) {
            total += (r.stargazers_count || 0);
        }


        if (repos.length < perPage) break;
        page++;
    }

    return total;
}

function GitHubStars({ username }) {
    const [totalStars, setTotalStars] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const loadStars = async () => {
            try {
                setLoading(true);
                const stars = await fetchTotalStars(username);
                setTotalStars(stars);
                setError(null);
            } catch (err) {
                console.error("Failed to fetch stars:", err);
                setError(err.message);
                setTotalStars(null);
            } finally {
                setLoading(false);
            }
        };

        loadStars();
    }, [username]);
    if (loading) {
        return <p>Loading total stars for {username}...</p>;
    }

    if (error) {
        return <span style={{ color: 'red' }}>Error: {error}</span>;
    }
    return formatNumber(totalStars || 0);
}

export default GitHubStars;