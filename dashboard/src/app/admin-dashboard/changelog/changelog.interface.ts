export interface ChangelogInterface {
    updates: update[];
}

export interface update {
    name: string;
    version: string,
    date: string;
    comments: string;
}
