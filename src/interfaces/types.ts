interface Info {
    description?: string;
    images?: string[];
    videos?: string[];
}

export interface Project {
    idName: string
    title: string;
    image: string;
    info: Info;
}