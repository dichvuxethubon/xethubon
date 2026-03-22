// api/get-config.js
export default function handler(req, res) {
    // Chỉ trả về Config khi web gọi đến
    const config = JSON.parse(process.env.FIREBASE_CONFIG_JSON);
    res.status(200).json(config);
}