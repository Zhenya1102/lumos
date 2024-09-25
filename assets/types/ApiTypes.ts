export type UserWrapper = {
    user: User
}

export type User = {
    gender: string
    name: Name
    location: Locations
    email: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
    registered: number
    dob: number
    phone: string
    cell: string
    SSN?: string
    picture: Picture;
}

type Name = {
    title: string
    first: string
    last: string
}

type Locations = {
    street: string
    city: string
    state: string
    zip: number
}

type Picture = {
    large: string
    medium: string
    thumbnail: string
}
