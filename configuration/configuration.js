const configuration = {
    env: process.env.NEXT_PUBLIC_NODE_ENV,
    github: {
        repository: process.env.NEXT_PUBLIC_GITHUB_REPOSITORY,
    },
    port: process.env.NEXT_PUBLIC_PORT,
    version: process.env.NEXT_PUBLIC_VERSION,
    mongoose: {
        url: process.env.NEXT_PUBLIC_MONGODB_URL,
    },
    redis: {
        url: process.env.NEXT_PUBLIC_REDIS_URL,
    },
    blob: {
        url: process.env.NEXT_PUBLIC_BLOB_READ_WRITE_TOKEN,
    },
    googleDrive: {
        scope: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_SCOPE,
        client: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_EMAIL,
        privateKey: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PRIVATE_KEY,
        folderKey: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_KEY,
    },
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
};

export default configuration;
