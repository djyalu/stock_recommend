// Vercel 서버리스 함수: 네이버 검색 API 프록시
const https = require('https');

const NAVER_CLIENT_ID = 'pGrI2i1yAxllCl1IjDl2';
const NAVER_CLIENT_SECRET = '8l0n_IdrmN';

module.exports = async (req, res) => {
    // CORS 헤더 설정
    const origin = req.headers.origin || '*';
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    // OPTIONS 요청 처리
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // GET 요청만 허용
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }
    
    const query = req.query.query;
    const display = req.query.display || '10';
    const sort = req.query.sort || 'date';
    
    if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
    }
    
    const options = {
        hostname: 'openapi.naver.com',
        path: `/v1/search/news.json?query=${encodeURIComponent(query)}&display=${display}&sort=${sort}`,
        method: 'GET',
        headers: {
            'X-Naver-Client-Id': NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
        }
    };
    
    return new Promise((resolve, reject) => {
        const apiReq = https.request(options, (apiRes) => {
            let data = '';
            
            apiRes.on('data', (chunk) => {
                data += chunk;
            });
            
            apiRes.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    res.status(apiRes.statusCode);
                    res.setHeader('Content-Type', 'application/json; charset=utf-8');
                    res.setHeader('Access-Control-Allow-Origin', origin);
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
                    res.json(jsonData);
                    resolve();
                } catch (parseError) {
                    console.error('JSON 파싱 오류:', parseError);
                    res.status(500).json({ 
                        error: 'JSON parse error', 
                        message: parseError.message 
                    });
                    resolve();
                }
            });
        });
        
        apiReq.on('error', (error) => {
            console.error('네이버 API 요청 오류:', error);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
            resolve();
        });
        
        apiReq.setTimeout(10000, () => {
            console.error('네이버 API 요청 타임아웃');
            apiReq.destroy();
            res.status(504).json({ 
                error: 'Request timeout', 
                message: '네이버 API 요청이 시간 초과되었습니다.' 
            });
            resolve();
        });
        
        apiReq.end();
    });
};

