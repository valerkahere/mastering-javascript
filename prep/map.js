console.log(true);
let numbers = [1, 2, 4, 5, 19];
// bring each number to power of 2;
// standard
console.log(
    numbers.map(number => 
    {
        return number*number
    }
)
);

// modern
console.log(
    numbers.map(number => (
        number*number
    ))
)

// returning OBJECT
console.log(
    numbers.map(number => ({
        sum: number+number
    }))
);

// Ex1: turn array of numbers into strings
const prices = [10, 20, 30, 40];

// standard
console.log(
    prices.map(p => {
        return p.toString();
    })
);

//modern
console.log(
    prices.map(p => (
        p.toString()
    ))
);

// MOST MODERN
console.log(
    prices.map(p => p.toString())
);


// Ex2
const projects = [
    { id: 1, title: "Dashboard", status: "Done" },
    { id: 2, title: "Landing Page", status: "In Progress" },
    { id: 3, title: "Ecommerce", status: "Done" }
];

// YOUR TASK: Map over projects to get ONLY the titles.
// Expected Output: ["Dashboard", "Landing Page", "Ecommerce"]

// using MOST MODERN
console.log(
    projects.map(p => p.title)
);

// Ex3
const slugs = ["project-1", "project-2", "project-3"];

// YOUR TASK: Transform this into an array of objects looking like: { params: { slug: "..." } }
// REMEMBER: You need the ({ }) syntax!
console.log(
    slugs.map(s => ({params: {slug: s}}))
);


// Ex4
// 1. Mock the Collection Data (What getCollection returns)
const posts = [
    { id: "intro-to-astro", data: { title: "Hello Astro" } },
    { id: "why-mapping-rocks", data: { title: "Maps are great" } }
];
// Generating static paths
console.log(
    posts.map(post => ({
        params: {slug: post.id},
        props: { title: post.data.title }
    }))
);
