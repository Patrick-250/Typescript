//readonly
//Optional

type User = {
    readonly id: number; // readonly property means it cannot be changed after initialization
    name: string;
    email?: string; // optional property is indicated by ?
}
const User:User={
    id:1,
    name:"Alice"
};

// User.id=34; // Error: Cannot assign to 'id' because it is a read-only property. 
