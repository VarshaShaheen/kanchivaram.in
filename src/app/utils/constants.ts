function getCategory(name, src)
{
    return {
        name,
        image: {
            src,
            alt: "Category 1"
        }
    }
}
export const CATEGORIES = [
    getCategory("Tissue Kanchipuram Silk", "/gallery/0Z7A6552.JPG"),
    getCategory("Pure Soft Silk", "/gallery/0Z7A6426.JPG"),
    getCategory("Banarasi Katan Silk", "/gallery/0Z7A6443.JPG"),
    getCategory("Pure Kanchipuram Silk", "/gallery/0Z7A6100 (1).JPG"),
    getCategory("Madka Silk", "/gallery/0Z7A6550.JPG"),
    getCategory("Pure Designer Kanchipuram Silk ", "/gallery/0Z7A6554.JPG"),
]
