export const titleToSlug = (title) => title.split(" ").join("-").toLowerCase()

export const slugToTitle = (slug) => slug.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")