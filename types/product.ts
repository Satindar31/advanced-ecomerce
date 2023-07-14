interface Iproduct {
    name: string,
    image: Iimage,
    slug: Islug,
    price: number,
    category: Icategory,
    description: string
}

interface Iimage {
    asset: Iasset
}

interface Iasset {
    _ref: string,
    _type: string
}
interface Icategory {
    _ref: string,
    _type: string
}

interface Islug {
    _type: string;
    current: string
}

export {
    Iproduct,
    Iimage,
    Iasset,
    Icategory,
    Islug
}