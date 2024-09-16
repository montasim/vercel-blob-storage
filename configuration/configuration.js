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
        url: process.env.NEXT_PUBLIC_REDIS_URL,
    },
    timeout: process.env.NEXT_PUBLIC_TIMEOUT_IN_SECONDS,
    cache: {
        timeout: process.env.NEXT_PUBLIC_CACHE_TTL_IN_SECONDS,
    },
    jsonPayloadLimit: process.env.NEXT_PUBLIC_JSON_PAYLOAD_LIMIT,
    cors: {
        origin: process.env.NEXT_PUBLIC_CORS_ORIGIN,
        methods: process.env.NEXT_PUBLIC_CORS_METHODS,
    },
    rateLimit: {
        windowMs: process.env.NEXT_PUBLIC_RATE_LIMIT_WINDOW_MS,
        max: process.env.NEXT_PUBLIC_RATE_LIMIT_MAX,
    },
    googleDrive: {
        scope: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_SCOPE,
        client: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_CLIENT_EMAIL,
        privateKey: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_PRIVATE_KEY,
        folderKey: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_KEY,
    },
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    service: {
        sendEmail: process.env.NEXT_PUBLIC_SEND_EMAIL_SERVICE,
    },
};

export default configuration;
