export interface User {
    id: number
    first_name: string
    last_name: string
    email: string
    created_at: string
    updated_at: string
}

export interface Bookmark {
    id: number
    url: string
    user: User
    created_at: string
    updated_at: string
}

export interface CreateBookmark {
    url: string
}
