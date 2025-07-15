import {fetchMarkdownPosts, getOnePost} from "./src/lib/utils/index.js"

let allPosts = await fetchMarkdownPosts();

console.log(allPosts);