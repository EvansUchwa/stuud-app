export function getApiUrlBase() {
    return process.env.NODE_ENV === "production" ? window.location.origin : 'http://localhost:3001'
}

export const defaultApiHeaders = {
    "api-secret": "3979af088d2327ca3e1303ed4be4c2de",
    "Name": "Stuud-api",
    "Version": "1.0"
}
