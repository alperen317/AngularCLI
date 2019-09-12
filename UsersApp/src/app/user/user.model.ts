    export class User {
        id: string;
        createdAt: string;
        name: string;
        avatar: string;
        email: string;
        identity: string;

        constructor(id: string, createdAt: string, name: string, avatar: string, email: string, identity: string) {
            this.id = id;
            this.createdAt = createdAt;
            this.name = name;
            this.avatar = avatar;
            this.email = email;
            this.identity = identity;
        }
    }
