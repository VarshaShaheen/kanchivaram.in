function getCategory(name, src, url) {
    return {
        name,
        image: {
            src,
            alt: "Category Image",
        },
        url,
    };
}

export const CATEGORIES = [
    getCategory("Tissue Kanchipuram Silk", "/gallery/0Z7A6552.JPG", "/category/tissue-kanchipuram"),
    getCategory("Brocade", "/gallery/0Z7A6426.JPG", "/category/brocade"),
    getCategory("Organza Tissue", "/gallery/0Z7A6443.JPG", "/category/organza-tissue"),
    getCategory("Pure Kanchipuram Silk", "/gallery/0Z7A6100 (1).JPG", "/category/pure-kanchipuram"),
    getCategory("Madka Silk", "/gallery/0Z7A6550.JPG", "/"),
    getCategory("Pure Designer Kanchipuram Silk ", "/gallery/0Z7A6554.JPG", "/"),
]


