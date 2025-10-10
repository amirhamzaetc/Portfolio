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
    const [totalStars, setTotalStars] = useState(null); // ডেটা রাখার জন্য state
    const [loading, setLoading] = useState(true);     // লোডিং স্টেট
    const [error, setError] = useState(null);         // এরর মেসেজ রাখার জন্য state

    // useEffect Hook: এই হুক কম্পোনেন্টটি লোড হওয়ার পরে (mount) একবার রান করবে
    useEffect(() => {
        const loadStars = async () => {
            try {
                setLoading(true); // ডেটা ফেচ শুরু হওয়ার আগে লোডিং সেট করা
                const stars = await fetchTotalStars(username);
                setTotalStars(stars);
                setError(null); // সফল হলে এরর ক্লিয়ার করা
            } catch (err) {
                console.error("Failed to fetch stars:", err);
                setError(err.message); // এরর স্টেট সেট করা
                setTotalStars(null);
            } finally {
                setLoading(false); // ডেটা ফেচ শেষ হলে লোডিং বন্ধ করা
            }
        };

        loadStars(); // ফাংশনটি কল করা
    }, [username]); // dependency array-তে username রাখা, যাতে এটি পরিবর্তন হলে ডেটা আবার লোড হয়

    // রেন্ডারিং লজিক (Displaying Logic)
    if (loading) {
        return <p>Loading total stars for {username}...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }
    return formatNumber(totalStars || 0);
}

export default GitHubStars;