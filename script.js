document.addEventListener('DOMContentLoaded', () => {
    // --- 32 Investment Gurus Data ---
    // UI Avatars API for placeholder images
    const getAvatarUrl = (name, bg = '1a1a1a', color = '00e676') => 
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=100&background=${bg}&color=${color}&bold=true`;

    // Guru styles for filtering
    const guruStyles = {
        value: ['buffett', 'graham', 'munger', 'klarman', 'greenblatt', 'pabrai', 'li_lu', 'templeton', 'einhorn'],
        growth: ['lynch', 'wood', 'fisher', 'smith'],
        macro: ['dalio', 'soros', 'druckenmiller', 'tudor_jones', 'marks', 'bacon', 'fink', 'swensen'],
        quant: ['simons', 'griffin'],
        activist: ['icahn', 'ackman', 'loeb', 'burry', 'miller', 'robertson', 'steinhardt', 'jones', 'bogle']
    };

    const investors = [
        {
            id: 'buffett',
            image: 'assets/Disney_Style_Guru_2_Buffett.webp',
            name: { en: 'Warren Buffett', ko: '워렌 버핏', ja: 'ウォーレン・バフェット', zh: '沃伦·巴菲特', es: 'Warren Buffett' },
            title: { en: 'The Oracle of Omaha', ko: '오마하의 현인', ja: 'オマハの賢人', zh: '奥马哈先知', es: 'El Oráculo de Omaha' },
            philosophy: { en: 'Value investing, long-term horizon, moat, margin of safety.', ko: '가치 투자, 장기적 관점, 경제적 해자, 안전 마진.', ja: 'バリュー投資、長期的視野、堀、安全域。', zh: '价值投资，长期持有，护城河，安全边际。', es: 'Inversión de valor, horizonte a largo plazo, foso económico.' },
            achievement: { en: 'Built Berkshire Hathaway into $900B+ empire. Average 20% annual returns over 60 years.', ko: '버크셔 해서웨이를 9000억 달러 이상의 제국으로 성장. 60년간 연평균 20% 수익률.', ja: 'バークシャー・ハサウェイを9000億ドル以上の帝国に成長。60年間平均年率20%のリターン。', zh: '将伯克希尔哈撒韦打造成9000亿美元帝国。60年平均年化20%回报。', es: 'Construyó Berkshire Hathaway en un imperio de $900B+. 20% de retorno anual durante 60 años.' }
        },
        {
            id: 'lynch',
            image: 'assets/Disney_Style_Guru_3_Lynch.webp',
            name: { en: 'Peter Lynch', ko: '피터 린치', ja: 'ピーター・リンチ', zh: '彼得·林奇', es: 'Peter Lynch' },
            title: { en: 'The Chameleon', ko: '카멜레온', ja: 'カメレオン', zh: '变色龙', es: 'El Camaleón' },
            philosophy: { en: 'Invest in what you know, growth at a reasonable price (GARP).', ko: '아는 것에 투자하라, 합리적인 가격의 성장주(GARP).', ja: '知っているものに投資せよ、妥当な価格での成長。', zh: '投资你所了解的，合理价格的增长。', es: 'Invierte en lo que conoces, crecimiento a precio razonable.' },
            achievement: { en: 'Magellan Fund averaged 29.2% annual returns (1977-1990), beating S&P 500.', ko: '마젤란 펀드 연평균 29.2% 수익률(1977-1990), S&P 500 초과 달성.', ja: 'マゼランファンドで年率29.2%のリターンを達成(1977-1990)、S&P500を上回る。', zh: '麦哲伦基金年均29.2%回报(1977-1990)，超越标普500。', es: 'Fondo Magellan promedió 29.2% de retorno anual (1977-1990).' }
        },
        {
            id: 'dalio',
            image: 'assets/Disney_Style_Guru_4_Dalio.webp',
            name: { en: 'Ray Dalio', ko: '레이 달리오', ja: 'レイ・ダリオ', zh: '雷·达里奥', es: 'Ray Dalio' },
            title: { en: 'The Macro Master', ko: '매크로 마스터', ja: 'マクロの達人', zh: '宏观大师', es: 'El Maestro Macro' },
            philosophy: { en: 'Radical transparency, economic machine, diversification, risk parity.', ko: '극단적 투명성, 경제 기계, 분산 투자, 리스크 패리티.', ja: '徹底的な透明性、経済マシン、分散投資。', zh: '极度透明，经济机器，多元化。', es: 'Transparencia radical, máquina económica, diversificación.' },
            achievement: { en: 'Founded Bridgewater Associates, worlds largest hedge fund ($150B+ AUM).', ko: '세계 최대 헤지펀드 브릿지워터 어소시에이츠 설립 (AUM 1500억 달러 이상).', ja: '世界最大のヘッジファンド、ブリッジウォーター・アソシエイツを設立(運用資産1500億ドル以上)。', zh: '创立桥水基金，全球最大对冲基金(管理资产1500亿美元以上)。', es: 'Fundó Bridgewater Associates, el fondo de cobertura más grande del mundo.' }
        },
        {
            id: 'soros',
            image: 'assets/Disney_Style_Guru_28_Soros.webp',
            name: { en: 'George Soros', ko: '조지 소로스', ja: 'ジョージ・ソロス', zh: '乔治·索罗斯', es: 'George Soros' },
            title: { en: 'The Man Who Broke the Bank of England', ko: '영란은행을 무너뜨린 사나이', ja: 'イングランド銀行を潰した男', zh: '打垮英格兰银行的人', es: 'El hombre que quebró el Banco de Inglaterra' },
            philosophy: { en: 'Reflexivity theory, boom-bust cycles, macro speculation.', ko: '재귀성 이론, 붐-버스트 사이클, 거시 투기.', ja: '再帰性理論、ブーム・バスト・サイクル、マクロ投機。', zh: '反身性理论，繁荣-萧条周期，宏观投机。', es: 'Teoría de la reflexividad, ciclos de auge y caída.' },
            achievement: { en: 'Made $1 billion shorting British Pound in 1992 (Black Wednesday).', ko: '1992년 영국 파운드 공매도로 10억 달러 수익 (검은 수요일).', ja: '1992年、英ポンドの空売りで10億ドルの利益を得る(ブラック・ウェンズデー)。', zh: '1992年做空英镑获利10亿美元(黑色星期三)。', es: 'Ganó $1 billón vendiendo en corto la libra esterlina en 1992.' }
        },
        {
            id: 'munger',
            image: 'assets/Disney_Style_Guru_27_Munger.webp',
            name: { en: 'Charlie Munger', ko: '찰리 멍거', ja: 'チャーリー・マンガー', zh: '查理·芒格', es: 'Charlie Munger' },
            title: { en: 'The Architect', ko: '설계자', ja: '設計者', zh: '架构师', es: 'El Arquitecto' },
            philosophy: { en: 'Mental models, inversion thinking, multidisciplinary approach.', ko: '정신 모델, 역발상 사고, 다학제적 접근.', ja: 'メンタルモデル、逆転の発想、多分野アプローチ。', zh: '思维模型，逆向思维，多学科方法。', es: 'Modelos mentales, pensamiento inverso, enfoque multidisciplinario.' },
            achievement: { en: 'Vice Chairman of Berkshire. Buffetts partner in building $900B empire.', ko: '버크셔 부회장. 버핏과 함께 9000억 달러 제국 건설.', ja: 'バークシャー副会長。バフェットとともに9000億ドル帝国を構築。', zh: '伯克希尔副董事长。与巴菲特共同建立9000亿帝国。', es: 'Vicepresidente de Berkshire. Socio de Buffett en construir imperio de $900B.' }
        },
        {
            id: 'graham',
            image: 'assets/Disney_Style_Guru_29_Graham.webp',
            name: { en: 'Benjamin Graham', ko: '벤자민 그레이엄', ja: 'ベンジャミン・グレアム', zh: '本杰明·格雷厄姆', es: 'Benjamin Graham' },
            title: { en: 'The Father of Value Investing', ko: '가치 투자의 아버지', ja: 'バリュー投資の父', zh: '价值投资之父', es: 'El Padre de la Inversión de Valor' },
            philosophy: { en: 'Net-net strategy, intrinsic value, Mr. Market concept, margin of safety.', ko: '넷넷 전략, 내재 가치, 미스터 마켓 개념, 안전 마진.', ja: 'ネットネット戦略、本質的価値、ミスター・マーケット概念、安全域。', zh: '净净策略，内在价值，市场先生概念，安全边际。', es: 'Estrategia net-net, valor intrínseco, concepto de Sr. Mercado.' },
            achievement: { en: 'Wrote "The Intelligent Investor" - the bible of investing. Taught Warren Buffett.', ko: '"현명한 투자자" 저술 - 투자의 바이블. 워렌 버핏의 스승.', ja: '「賢明なる投資家」を執筆 - 投資のバイブル。ウォーレン・バフェットの師匠。', zh: '撰写《聪明的投资者》- 投资圣经。巴菲特的老师。', es: 'Escribió "El Inversor Inteligente" - la biblia de inversión. Enseñó a Buffett.' }
        },
        {
            id: 'wood',
            image: 'assets/Disney_Style_Guru_12_Wood.webp',
            name: { en: 'Cathie Wood', ko: '캐시 우드', ja: 'キャシー・ウッド', zh: '凯西·伍德', es: 'Cathie Wood' },
            title: { en: 'The Innovation Evangelist', ko: '혁신 전도사', ja: 'イノベーションの伝道師', zh: '创新布道者', es: 'La Evangelista de la Innovación' },
            philosophy: { en: 'Disruptive innovation, exponential growth, 5-year time horizon.', ko: '파괴적 혁신, 기하급수적 성장, 5년 투자 시계.', ja: '破壊的イノベーション、指数関数的成長、5年の時間軸。', zh: '颠覆性创新，指数级增长，5年投资期限。', es: 'Innovación disruptiva, crecimiento exponencial, horizonte de 5 años.' },
            achievement: { en: 'ARK Invest returned 150%+ in 2020. Pioneer in actively managed tech ETFs.', ko: 'ARK 인베스트 2020년 150% 이상 수익률. 액티브 운용 테크 ETF의 선구자.', ja: 'ARKインベストが2020年に150%以上のリターン。アクティブ運用テックETFのパイオニア。', zh: 'ARK投资2020年回报超150%。主动管理科技ETF先驱。', es: 'ARK Invest retornó 150%+ en 2020. Pionera en ETFs tecnológicos gestionados activamente.' }
        },
        {
            id: 'icahn',
            image: 'assets/Disney_Style_Guru_5_Icahn.webp',
            name: { en: 'Carl Icahn', ko: '칼 아이칸', ja: 'カール・アイカーン', zh: '卡尔·伊坎', es: 'Carl Icahn' },
            title: { en: 'The Corporate Raider', ko: '기업 사냥꾼', ja: '企業乗っ取り屋', zh: '企业掠夺者', es: 'El Asaltante Corporativo' },
            philosophy: { en: 'Shareholder activism, unlock hidden value, target underperforming management.', ko: '주주 행동주의, 숨겨진 가치 발굴, 저성과 경영진 타깃.', ja: '株主アクティビズム、隠れた価値の解放、低業績経営陣をターゲット。', zh: '股东激进主义，释放隐藏价值，针对表现不佳的管理层。', es: 'Activismo accionarial, desbloquear valor oculto.' },
            achievement: { en: 'Legendary activist investor. Forced changes at Apple, eBay, Yahoo, TWA.', ko: '전설적인 행동주의 투자자. 애플, 이베이, 야후, TWA에서 변화 주도.', ja: '伝説的なアクティビスト投資家。Apple、eBay、Yahoo、TWAで変革を強制。', zh: '传奇激进投资者。在苹果、eBay、雅虎、TWA推动变革。', es: 'Legendario inversor activista. Forzó cambios en Apple, eBay, Yahoo.' }
        },
        {
            id: 'ackman',
            image: 'assets/Disney_Style_Guru_6_Ackman.webp',
            name: { en: 'Bill Ackman', ko: '빌 애크먼', ja: 'ビル・アックマン', zh: '比尔·阿克曼', es: 'Bill Ackman' },
            title: { en: 'The Activist', ko: '행동주의자', ja: 'アクティビスト', zh: '激进投资者', es: 'El Activista' },
            philosophy: { en: 'Concentrated portfolio, simple predictable businesses, activist approach.', ko: '집중 포트폴리오, 단순 예측 가능 비즈니스, 행동주의적 접근.', ja: '集中ポートフォリオ、シンプルで予測可能なビジネス、アクティビストアプローチ。', zh: '集中投资组合，简单可预测业务，激进方法。', es: 'Cartera concentrada, negocios simples y predecibles.' },
            achievement: { en: 'Made $2.6B betting against market in COVID crash. Pershing Square founder.', ko: '코로나 폭락장에서 26억 달러 수익. 퍼싱 스퀘어 창립자.', ja: 'COVIDクラッシュで市場に逆張りし26億ドルの利益。パーシング・スクエア創設者。', zh: '在新冠崩盘中做空获利26亿美元。潘兴广场创始人。', es: 'Ganó $2.6B apostando contra el mercado en COVID. Fundador de Pershing Square.' }
        },
        {
            id: 'simons',
            image: 'assets/Disney_Style_Guru_7_Simons.webp',
            name: { en: 'Jim Simons', ko: '짐 사이먼스', ja: 'ジム・シモンズ', zh: '吉姆·西蒙斯', es: 'Jim Simons' },
            title: { en: 'The Quant King', ko: '퀀트의 제왕', ja: 'クオンツの王', zh: '量化之王', es: 'El Rey Cuantitativo' },
            philosophy: { en: 'Quantitative analysis, algorithmic trading, pattern recognition, data-driven.', ko: '정량적 분석, 알고리즘 트레이딩, 패턴 인식, 데이터 기반.', ja: '定量分析、アルゴリズム取引、パターン認識、データ駆動。', zh: '定量分析，算法交易，模式识别，数据驱动。', es: 'Análisis cuantitativo, trading algorítmico, reconocimiento de patrones.' },
            achievement: { en: 'Medallion Fund: 66% avg annual return (before fees). Best track record ever.', ko: '메달리온 펀드: 연평균 66% 수익률(수수료 전). 역사상 최고 실적.', ja: 'メダリオンファンド：年率平均66%のリターン(手数料前)。史上最高の実績。', zh: '大奖章基金：年均66%回报(费用前)。史上最佳业绩。', es: 'Fondo Medallion: 66% retorno anual promedio. Mejor historial de la historia.' }
        },
        {
            id: 'druckenmiller',
            image: 'assets/Disney_Style_Guru_1_Druckenmiller.webp',
            name: { en: 'Stanley Druckenmiller', ko: '스탠리 드러켄밀러', ja: 'スタンレー・ドラッケンミラー', zh: '斯坦利·德鲁肯米勒', es: 'Stanley Druckenmiller' },
            title: { en: 'The Chameleon', ko: '카멜레온', ja: 'カメレオン', zh: '变色龙', es: 'El Camaleón' },
            philosophy: { en: 'Macro trading, trend following, flexible allocation, capital preservation.', ko: '거시 트레이딩, 추세 추종, 유연한 배분, 자본 보존.', ja: 'マクロ取引、トレンドフォロー、柔軟な配分、資本保全。', zh: '宏观交易，趋势跟踪，灵活配置，资本保全。', es: 'Trading macro, seguimiento de tendencias, asignación flexible.' },
            achievement: { en: 'Never had a losing year in 30 years. Partnered with Soros to break Bank of England.', ko: '30년간 단 한 해도 손실 없음. 소로스와 함께 영란은행 공략.', ja: '30年間一度も損失年なし。ソロスとイングランド銀行攻略で協力。', zh: '30年从未亏损。与索罗斯合作做空英镑。', es: 'Nunca tuvo un año con pérdidas en 30 años. Socio de Soros.' }
        },
        {
            id: 'tudor_jones',
            image: 'assets/Disney_Style_Guru_8_Jones.webp',
            name: { en: 'Paul Tudor Jones', ko: '폴 튜더 존스', ja: 'ポール・チューダー・ジョーンズ', zh: '保罗·都铎·琼斯', es: 'Paul Tudor Jones' },
            title: { en: 'The Macro Trader', ko: '거시 트레이더', ja: 'マクロトレーダー', zh: '宏观交易员', es: 'El Trader Macro' },
            philosophy: { en: 'Global macro, technical analysis, risk management, contrarian timing.', ko: '글로벌 매크로, 기술적 분석, 리스크 관리, 역발상 타이밍.', ja: 'グローバルマクロ、テクニカル分析、リスク管理、逆張りタイミング。', zh: '全球宏观，技术分析，风险管理，逆向时机。', es: 'Macro global, análisis técnico, gestión de riesgos.' },
            achievement: { en: 'Predicted 1987 Black Monday crash. Tudor Investment Corp manages $11B+.', ko: '1987년 블랙 먼데이 폭락 예측. 튜더 인베스트먼트 110억 달러 이상 운용.', ja: '1987年のブラックマンデー暴落を予測。チューダー・インベストメントは110億ドル以上を運用。', zh: '预测1987年黑色星期一。都铎投资管理110亿美元以上。', es: 'Predijo el crash del Lunes Negro de 1987. Tudor gestiona $11B+.' }
        },
        {
            id: 'li_lu',
            image: 'assets/Disney_Style_Guru_9_Li_Lu.webp',
            name: { en: 'Li Lu', ko: '리 루', ja: 'リー・ルー', zh: '李录', es: 'Li Lu' },
            title: { en: 'The Chinese Buffett', ko: '중국의 버핏', ja: '中国のバフェット', zh: '中国巴菲特', es: 'El Buffett Chino' },
            philosophy: { en: 'Value investing in Asia, long-term holding, deep research on Chinese markets.', ko: '아시아 가치 투자, 장기 보유, 중국 시장 심층 연구.', ja: 'アジアでのバリュー投資、長期保有、中国市場の深い研究。', zh: '亚洲价值投资，长期持有，中国市场深度研究。', es: 'Inversión de valor en Asia, tenencia a largo plazo.' },
            achievement: { en: 'Introduced BYD to Buffett. Mungers chosen successor for Asian investments.', ko: '버핏에게 BYD 소개. 멍거가 선택한 아시아 투자 후계자.', ja: 'バフェットにBYDを紹介。マンガーが選んだアジア投資の後継者。', zh: '向巴菲特介绍比亚迪。芒格选定的亚洲投资继承人。', es: 'Presentó BYD a Buffett. Sucesor elegido por Munger para Asia.' }
        },
        {
            id: 'marks',
            image: 'assets/Disney_Style_Guru_10_Marks.webp',
            name: { en: 'Howard Marks', ko: '하워드 막스', ja: 'ハワード・マークス', zh: '霍华德·马克斯', es: 'Howard Marks' },
            title: { en: 'The Distressed Debt King', ko: '부실채권의 제왕', ja: '不良債権の王', zh: '困境债务之王', es: 'El Rey de la Deuda Distressed' },
            philosophy: { en: 'Second-level thinking, market cycles, distressed debt, risk awareness.', ko: '2차적 사고, 시장 사이클, 부실 채권, 리스크 인식.', ja: '二次的思考、市場サイクル、不良債権、リスク認識。', zh: '二级思维，市场周期，困境债务，风险意识。', es: 'Pensamiento de segundo nivel, ciclos de mercado, deuda distressed.' },
            achievement: { en: 'Co-founded Oaktree Capital ($170B AUM). Famous for his investor memos.', ko: '오크트리 캐피탈 공동 설립 (AUM 1700억 달러). 투자자 메모로 유명.', ja: 'オークツリー・キャピタル共同設立(運用資産1700億ドル)。投資家向けメモで有名。', zh: '联合创立橡树资本(管理资产1700亿美元)。以投资者备忘录闻名。', es: 'Co-fundó Oaktree Capital ($170B AUM). Famoso por sus memos.' }
        },
        {
            id: 'templeton',
            image: 'assets/Disney_Style_Guru_11_Templeton.webp',
            name: { en: 'John Templeton', ko: '존 템플턴', ja: 'ジョン・テンプルトン', zh: '约翰·邓普顿', es: 'John Templeton' },
            title: { en: 'The Global Pioneer', ko: '글로벌 투자의 선구자', ja: 'グローバル投資のパイオニア', zh: '全球投资先驱', es: 'El Pionero Global' },
            philosophy: { en: 'Global diversification, contrarian investing, buy at maximum pessimism.', ko: '글로벌 분산, 역발상 투자, 최대 비관론에서 매수.', ja: 'グローバル分散、逆張り投資、最大悲観時に購入。', zh: '全球分散，逆向投资，在最悲观时买入。', es: 'Diversificación global, inversión contraria.' },
            achievement: { en: 'Pioneer of global investing. Templeton Growth Fund beat market for 50+ years.', ko: '글로벌 투자의 선구자. 템플턴 성장 펀드 50년 이상 시장 초과 수익.', ja: 'グローバル投資のパイオニア。テンプルトン・グロース・ファンドは50年以上市場を上回る。', zh: '全球投资先驱。邓普顿成长基金50多年跑赢市场。', es: 'Pionero de la inversión global. Superó al mercado por 50+ años.' }
        },
        {
            id: 'klarman',
            image: 'assets/Disney_Style_Guru_13_Klarman.webp',
            name: { en: 'Seth Klarman', ko: '세스 클라만', ja: 'セス・クラーマン', zh: '塞斯·卡拉曼', es: 'Seth Klarman' },
            title: { en: 'The Deep Value Hunter', ko: '심층 가치 투자자', ja: 'ディープバリュー・ハンター', zh: '深度价值猎手', es: 'El Cazador de Valor Profundo' },
            philosophy: { en: 'Margin of safety, patient capital, absolute returns, risk-averse value.', ko: '안전 마진, 인내심 있는 자본, 절대 수익, 리스크 회피형 가치.', ja: '安全域、忍耐強い資本、絶対リターン、リスク回避型バリュー。', zh: '安全边际，耐心资本，绝对回报，风险规避价值。', es: 'Margen de seguridad, capital paciente, retornos absolutos.' },
            achievement: { en: 'Wrote "Margin of Safety" (sells for $1000+). Baupost Group manages $27B.', ko: '"안전 마진" 저술 (1000달러 이상에 거래). 바우포스트 그룹 270억 달러 운용.', ja: '「安全域」を執筆(1000ドル以上で取引)。バウポスト・グループは270億ドルを運用。', zh: '撰写《安全边际》(售价超1000美元)。鲍勃斯特集团管理270亿美元。', es: 'Escribió "Margen de Seguridad" (se vende por $1000+). Baupost gestiona $27B.' }
        },
        {
            id: 'miller',
            image: 'assets/Disney_Style_Guru_14_Miller.webp',
            name: { en: 'Bill Miller', ko: '빌 밀러', ja: 'ビル・ミラー', zh: '比尔·米勒', es: 'Bill Miller' },
            title: { en: 'The Contrarian Legend', ko: '역발상의 전설', ja: '逆張りの伝説', zh: '逆向传奇', es: 'La Leyenda Contraria' },
            philosophy: { en: 'Contrarian value, buy during fear, concentrated positions, long-term view.', ko: '역발상 가치, 공포에 매수, 집중 포지션, 장기적 관점.', ja: '逆張りバリュー、恐怖時に購入、集中ポジション、長期的視点。', zh: '逆向价值，恐慌时买入，集中持仓，长期观点。', es: 'Valor contrario, comprar durante el miedo, posiciones concentradas.' },
            achievement: { en: 'Beat S&P 500 for 15 consecutive years (1991-2005). Record streak.', ko: '15년 연속 S&P 500 초과 수익 (1991-2005). 기록적인 연속 기록.', ja: '15年連続でS&P500を上回る(1991-2005)。記録的な連勝。', zh: '连续15年跑赢标普500(1991-2005)。创纪录连胜。', es: 'Superó al S&P 500 por 15 años consecutivos (1991-2005).' }
        },
        {
            id: 'smith',
            image: 'assets/Disney_Style_Guru_15_Smith.webp',
            name: { en: 'Terry Smith', ko: '테리 스미스', ja: 'テリー・スミス', zh: '特里·史密斯', es: 'Terry Smith' },
            title: { en: 'The Quality Investor', ko: '퀄리티 투자자', ja: 'クオリティ投資家', zh: '品质投资者', es: 'El Inversor de Calidad' },
            philosophy: { en: 'Buy quality, dont overpay, do nothing. Simple, repeatable strategy.', ko: '좋은 기업을 사라, 비싸게 사지 마라, 아무것도 하지 마라.', ja: '質の高い企業を買い、高く払わず、何もしない。シンプルで再現可能な戦略。', zh: '买优质，不多付，什么都不做。简单可重复策略。', es: 'Compra calidad, no pagues de más, no hagas nada.' },
            achievement: { en: 'Fundsmith Equity Fund: 15%+ annualized returns since 2010.', ko: '펀드스미스 주식 펀드: 2010년 이후 연평균 15% 이상 수익률.', ja: 'ファンドスミス・エクイティ・ファンド：2010年以来年率15%以上のリターン。', zh: 'Fundsmith股票基金：2010年以来年化回报超15%。', es: 'Fundsmith Equity Fund: 15%+ retornos anualizados desde 2010.' }
        },
        {
            id: 'einhorn',
            image: 'assets/Disney_Style_Guru_16_Einhorn.webp',
            name: { en: 'David Einhorn', ko: '데이비드 아인혼', ja: 'デイビッド・アインホーン', zh: '大卫·艾因霍恩', es: 'David Einhorn' },
            title: { en: 'The Short Selling Legend', ko: '공매도의 전설', ja: '空売りの伝説', zh: '做空传奇', es: 'La Leyenda del Short Selling' },
            philosophy: { en: 'Value with catalyst, forensic accounting, short selling frauds.', ko: '촉매가 있는 가치, 법의학적 회계 분석, 사기 기업 공매도.', ja: 'カタリストのあるバリュー、フォレンジック会計、詐欺企業の空売り。', zh: '有催化剂的价值，法务会计，做空欺诈公司。', es: 'Valor con catalizador, contabilidad forense, venta corta de fraudes.' },
            achievement: { en: 'Famous for exposing Lehman Brothers fraud before 2008 crash. Greenlight Capital founder.', ko: '2008년 붕괴 전 리먼 브라더스 사기 폭로로 유명. 그린라이트 캐피탈 설립자.', ja: '2008年の暴落前にリーマン・ブラザーズの不正を暴露したことで有名。グリーンライト・キャピタル創設者。', zh: '因在2008年崩盘前揭露雷曼兄弟欺诈而闻名。绿光资本创始人。', es: 'Famoso por exponer el fraude de Lehman Brothers. Fundador de Greenlight.' }
        },
        {
            id: 'loeb',
            image: 'assets/Disney_Style_Guru_17_Loeb.webp',
            name: { en: 'Daniel Loeb', ko: '다니엘 롭', ja: 'ダニエル・ローブ', zh: '丹尼尔·勒布', es: 'Daniel Loeb' },
            title: { en: 'The Event-Driven Activist', ko: '이벤트 드리븐 행동주의자', ja: 'イベント・ドリブン・アクティビスト', zh: '事件驱动激进者', es: 'El Activista Event-Driven' },
            philosophy: { en: 'Event-driven investing, shareholder activism, catalyst identification.', ko: '이벤트 드리븐 투자, 주주 행동주의, 촉매 식별.', ja: 'イベント・ドリブン投資、株主アクティビズム、カタリスト特定。', zh: '事件驱动投资，股东激进主义，催化剂识别。', es: 'Inversión event-driven, activismo accionarial.' },
            achievement: { en: 'Third Point LLC manages $15B+. Known for aggressive activist letters.', ko: '서드 포인트 150억 달러 이상 운용. 공격적인 주주 서한으로 유명.', ja: 'サード・ポイントは150億ドル以上を運用。攻撃的なアクティビスト書簡で知られる。', zh: '第三点管理150亿美元以上。以激进的股东信函闻名。', es: 'Third Point gestiona $15B+. Conocido por cartas activistas agresivas.' }
        },
        {
            id: 'griffin',
            image: 'assets/Disney_Style_Guru_18_Griffin.webp',
            name: { en: 'Ken Griffin', ko: '켄 그리핀', ja: 'ケン・グリフィン', zh: '肯·格里芬', es: 'Ken Griffin' },
            title: { en: 'The Market Maker King', ko: '마켓 메이커의 왕', ja: 'マーケットメーカーの王', zh: '做市商之王', es: 'El Rey de los Market Makers' },
            philosophy: { en: 'Multi-strategy approach, market making, quantitative strategies, speed.', ko: '멀티 전략 접근, 마켓 메이킹, 퀀트 전략, 속도.', ja: 'マルチ戦略アプローチ、マーケットメイキング、定量戦略、スピード。', zh: '多策略方法，做市，量化策略，速度。', es: 'Enfoque multi-estrategia, market making, estrategias cuantitativas.' },
            achievement: { en: 'Founded Citadel ($50B+ AUM) and Citadel Securities (largest market maker).', ko: '시타델(AUM 500억 달러 이상)과 시타델 시큐리티즈(최대 마켓 메이커) 설립.', ja: 'シタデル(運用資産500億ドル以上)とシタデル・セキュリティーズ(最大のマーケットメーカー)を設立。', zh: '创立城堡投资(500亿美元以上)和城堡证券(最大做市商)。', es: 'Fundó Citadel ($50B+ AUM) y Citadel Securities.' }
        },
        {
            id: 'robertson',
            image: 'assets/Disney_Style_Guru_19_Robertson.webp',
            name: { en: 'Julian Robertson', ko: '줄리안 로버트슨', ja: 'ジュリアン・ロバートソン', zh: '朱利安·罗伯逊', es: 'Julian Robertson' },
            title: { en: 'The Tiger Cub Father', ko: '타이거 컵스의 아버지', ja: 'タイガー・カブの父', zh: '小虎之父', es: 'El Padre de los Tiger Cubs' },
            philosophy: { en: 'Long/short equity, fundamental analysis, mentor culture, talent development.', ko: '롱/숏 주식, 펀더멘털 분석, 멘토 문화, 인재 육성.', ja: 'ロング/ショート株式、ファンダメンタル分析、メンター文化、人材育成。', zh: '多空股票，基本面分析，导师文化，人才培养。', es: 'Equity long/short, análisis fundamental, cultura de mentoría.' },
            achievement: { en: 'Tiger Management spawned 100+ "Tiger Cubs" hedge funds. Legendary mentor.', ko: '타이거 매니지먼트에서 100개 이상의 "타이거 컵스" 헤지펀드 배출. 전설적인 멘토.', ja: 'タイガー・マネジメントから100以上の「タイガー・カブ」ヘッジファンドを輩出。伝説的なメンター。', zh: '老虎基金培养出100多只"小虎"对冲基金。传奇导师。', es: 'Tiger Management generó 100+ fondos "Tiger Cubs". Mentor legendario.' }
        },
        {
            id: 'pabrai',
            image: 'assets/Disney_Style_Guru_20_Pabrai.webp',
            name: { en: 'Mohnish Pabrai', ko: '모니쉬 파브라이', ja: 'モニッシュ・パブライ', zh: '莫尼什·帕布莱', es: 'Mohnish Pabrai' },
            title: { en: 'The Cloner', ko: '클로너', ja: 'クローナー', zh: '克隆者', es: 'El Clonador' },
            philosophy: { en: 'Clone successful investors, concentrated bets, low risk high uncertainty.', ko: '성공한 투자자 복제, 집중 베팅, 낮은 리스크 높은 불확실성.', ja: '成功した投資家を複製、集中投資、低リスク高不確実性。', zh: '克隆成功投资者，集中下注，低风险高不确定性。', es: 'Clonar inversores exitosos, apuestas concentradas.' },
            achievement: { en: 'Pabrai Investment Funds: 25%+ CAGR. Famous for "Dhandho Investor" book.', ko: '파브라이 투자 펀드: 연평균 25% 이상 성장. "단도 투자자" 책으로 유명.', ja: 'パブライ・インベストメント・ファンド：年率25%以上の成長。「ダンドー投資家」の本で有名。', zh: '帕布莱投资基金：年复合增长率超25%。以《Dhandho投资者》一书闻名。', es: 'Pabrai Investment Funds: 25%+ CAGR. Famoso por "Dhandho Investor".' }
        },
        {
            id: 'fink',
            image: 'assets/Disney_Style_Guru_21_Fink.webp',
            name: { en: 'Larry Fink', ko: '래리 핑크', ja: 'ラリー・フィンク', zh: '拉里·芬克', es: 'Larry Fink' },
            title: { en: 'The Asset Management Titan', ko: '자산운용의 거인', ja: '資産運用の巨人', zh: '资产管理巨头', es: 'El Titán de la Gestión de Activos' },
            philosophy: { en: 'Long-term thinking, ESG investing, passive index funds, risk management.', ko: '장기적 사고, ESG 투자, 패시브 인덱스 펀드, 리스크 관리.', ja: '長期的思考、ESG投資、パッシブインデックスファンド、リスク管理。', zh: '长期思维，ESG投资，被动指数基金，风险管理。', es: 'Pensamiento a largo plazo, inversión ESG, fondos indexados pasivos.' },
            achievement: { en: 'CEO of BlackRock, worlds largest asset manager ($10 trillion+ AUM).', ko: '블랙록 CEO, 세계 최대 자산운용사 (AUM 10조 달러 이상).', ja: 'ブラックロックCEO、世界最大の資産運用会社(運用資産10兆ドル以上)。', zh: '贝莱德CEO，全球最大资产管理公司(管理资产超10万亿美元)。', es: 'CEO de BlackRock, el mayor gestor de activos del mundo ($10T+ AUM).' }
        },
        {
            id: 'jones',
            image: 'assets/Disney_Style_Guru_22_Jones.webp',
            name: { en: 'Alfred Winslow Jones', ko: '알프레드 윈슬로우 존스', ja: 'アルフレッド・ウィンスロー・ジョーンズ', zh: '阿尔弗雷德·温斯洛·琼斯', es: 'Alfred Winslow Jones' },
            title: { en: 'The Hedge Fund Pioneer', ko: '헤지펀드의 선구자', ja: 'ヘッジファンドのパイオニア', zh: '对冲基金先驱', es: 'El Pionero del Hedge Fund' },
            philosophy: { en: 'Long/short equity, leverage, hedging market risk, performance fees.', ko: '롱/숏 주식, 레버리지, 시장 리스크 헤지, 성과 보수.', ja: 'ロング/ショート株式、レバレッジ、市場リスクのヘッジ、成功報酬。', zh: '多空股票，杠杆，对冲市场风险，业绩报酬。', es: 'Equity long/short, apalancamiento, cobertura de riesgo de mercado.' },
            achievement: { en: 'Created the first hedge fund in 1949. Invented the hedge fund structure.', ko: '1949년 최초의 헤지펀드 창설. 헤지펀드 구조 발명.', ja: '1949年に最初のヘッジファンドを創設。ヘッジファンド構造を発明。', zh: '1949年创建首只对冲基金。发明对冲基金结构。', es: 'Creó el primer hedge fund en 1949. Inventó la estructura del hedge fund.' }
        },
        {
            id: 'steinhardt',
            image: 'assets/Disney_Style_Guru_23_Steinhardt.webp',
            name: { en: 'Michael Steinhardt', ko: '마이클 스타인하트', ja: 'マイケル・スタインハート', zh: '迈克尔·斯坦哈特', es: 'Michael Steinhardt' },
            title: { en: 'The Trading Prodigy', ko: '트레이딩 신동', ja: 'トレーディングの神童', zh: '交易神童', es: 'El Prodigio del Trading' },
            philosophy: { en: 'Short-term trading, variant perception, contrarian timing, aggressive style.', ko: '단기 트레이딩, 변별적 인식, 역발상 타이밍, 공격적 스타일.', ja: '短期トレーディング、変異認識、逆張りタイミング、攻撃的スタイル。', zh: '短期交易，变异认知，逆向时机，激进风格。', es: 'Trading a corto plazo, percepción variante, timing contrario.' },
            achievement: { en: 'Steinhardt Partners: 24% annual return over 28 years (1967-1995).', ko: '스타인하트 파트너스: 28년간 연평균 24% 수익률 (1967-1995).', ja: 'スタインハート・パートナーズ：28年間で年率24%のリターン(1967-1995)。', zh: '斯坦哈特合伙人：28年年均回报24%(1967-1995)。', es: 'Steinhardt Partners: 24% retorno anual en 28 años (1967-1995).' }
        },
        {
            id: 'bacon',
            image: 'assets/Disney_Style_Guru_24_Bacon.webp',
            name: { en: 'Louis Bacon', ko: '루이스 베이컨', ja: 'ルイス・ベーコン', zh: '路易斯·培根', es: 'Louis Bacon' },
            title: { en: 'The Global Macro Master', ko: '글로벌 매크로 마스터', ja: 'グローバルマクロの達人', zh: '全球宏观大师', es: 'El Maestro del Macro Global' },
            philosophy: { en: 'Global macro trading, risk management, capital preservation, discretionary.', ko: '글로벌 매크로 트레이딩, 리스크 관리, 자본 보존, 재량적 운용.', ja: 'グローバルマクロ取引、リスク管理、資本保全、裁量運用。', zh: '全球宏观交易，风险管理，资本保全，自主决策。', es: 'Trading macro global, gestión de riesgos, preservación de capital.' },
            achievement: { en: 'Moore Capital: 20%+ annual returns over 30 years. Never had a losing year.', ko: '무어 캐피탈: 30년간 연평균 20% 이상 수익률. 한 번도 손실 없음.', ja: 'ムーア・キャピタル：30年間で年率20%以上のリターン。損失年なし。', zh: '摩尔资本：30年年均回报超20%。从未亏损。', es: 'Moore Capital: 20%+ retornos anuales en 30 años. Sin años perdedores.' }
        },
        {
            id: 'burry',
            image: 'assets/Disney_Style_Guru_25_Burry.webp',
            name: { en: 'Michael Burry', ko: '마이클 버리', ja: 'マイケル・バーリー', zh: '迈克尔·伯里', es: 'Michael Burry' },
            title: { en: 'The Big Short', ko: '빅 숏', ja: 'ビッグ・ショート', zh: '大空头', es: 'El Gran Corto' },
            philosophy: { en: 'Deep value analysis, contrarian bets, forensic research, patience.', ko: '심층 가치 분석, 역발상 베팅, 법의학적 연구, 인내.', ja: 'ディープバリュー分析、逆張り投資、フォレンジック研究、忍耐。', zh: '深度价值分析，逆向下注，法务研究，耐心。', es: 'Análisis de valor profundo, apuestas contrarias, investigación forense.' },
            achievement: { en: 'Predicted 2008 housing crash. Made $100M+ shorting subprime. "The Big Short" movie.', ko: '2008년 주택 시장 붕괴 예측. 서브프라임 공매도로 1억 달러 이상 수익. 영화 "빅 숏"의 실제 인물.', ja: '2008年の住宅崩壊を予測。サブプライムの空売りで1億ドル以上の利益。映画「マネー・ショート」の実在人物。', zh: '预测2008年房地产崩盘。做空次贷获利超1亿美元。电影《大空头》原型。', es: 'Predijo el crash inmobiliario de 2008. Ganó $100M+ en cortos. Película "The Big Short".' }
        },
        {
            id: 'greenblatt',
            image: 'assets/Disney_Style_Guru_26_Greenblatt.webp',
            name: { en: 'Joel Greenblatt', ko: '조엘 그린블랫', ja: 'ジョエル・グリーンブラット', zh: '乔尔·格林布拉特', es: 'Joel Greenblatt' },
            title: { en: 'The Magic Formula Inventor', ko: '마법 공식의 발명가', ja: 'マジックフォーミュラの発明者', zh: '神奇公式发明者', es: 'El Inventor de la Fórmula Mágica' },
            philosophy: { en: 'Magic formula (high ROIC + low P/E), special situations, systematic value.', ko: '마법 공식 (높은 ROIC + 낮은 P/E), 특수 상황, 체계적 가치.', ja: 'マジックフォーミュラ(高ROIC+低P/E)、特殊状況、体系的バリュー。', zh: '神奇公式(高ROIC+低市盈率)，特殊情况，系统性价值。', es: 'Fórmula mágica (alto ROIC + bajo P/E), situaciones especiales.' },
            achievement: { en: 'Gotham Capital: 50% annual returns (1985-1994). Wrote "The Little Book That Beats the Market".', ko: '고담 캐피탈: 연평균 50% 수익률 (1985-1994). "시장을 이기는 작은 책" 저술.', ja: 'ゴッサム・キャピタル：年率50%のリターン(1985-1994)。「市場を打ち負かす小さな本」を執筆。', zh: '哥谭资本：年均回报50%(1985-1994)。著有《战胜市场的小书》。', es: 'Gotham Capital: 50% retornos anuales (1985-1994). Escribió "El Pequeño Libro".' }
        },
        {
            id: 'fisher',
            image: 'assets/Disney_Style_Guru_30_Jones_2.webp',
            name: { en: 'Philip Fisher', ko: '필립 피셔', ja: 'フィリップ・フィッシャー', zh: '菲利普·费雪', es: 'Philip Fisher' },
            title: { en: 'The Growth Investing Father', ko: '성장 투자의 아버지', ja: '成長投資の父', zh: '成长投资之父', es: 'El Padre de la Inversión en Crecimiento' },
            philosophy: { en: 'Scuttlebutt method, quality growth, long-term holding, management quality.', ko: '스커틀버트 방법론, 양질의 성장, 장기 보유, 경영진 품질.', ja: 'スカットルバット方式、質の高い成長、長期保有、経営陣の質。', zh: '闲聊法，优质成长，长期持有，管理层质量。', es: 'Método scuttlebutt, crecimiento de calidad, tenencia a largo plazo.' },
            achievement: { en: 'Wrote "Common Stocks and Uncommon Profits". Held Motorola 21 years (75x gain).', ko: '"위대한 기업에 투자하라" 저술. 모토로라 21년 보유 (75배 수익).', ja: '「フィッシャーの株式投資」を執筆。モトローラを21年保有(75倍の利益)。', zh: '撰写《怎样选择成长股》。持有摩托罗拉21年(75倍收益)。', es: 'Escribió "Acciones Ordinarias y Beneficios Extraordinarios". Mantuvo Motorola 21 años.' }
        },
        {
            id: 'swensen',
            image: 'assets/Disney_Style_Guru_31_Druckenmiller_2.webp',
            name: { en: 'David Swensen', ko: '데이비드 스웬슨', ja: 'デイビッド・スウェンセン', zh: '大卫·斯文森', es: 'David Swensen' },
            title: { en: 'The Yale Model Creator', ko: '예일 모델의 창시자', ja: 'イェールモデルの創設者', zh: '耶鲁模式创始人', es: 'El Creador del Modelo Yale' },
            philosophy: { en: 'Endowment model, alternative assets, long-term horizon, diversification.', ko: '기부금 모델, 대안 자산, 장기 투자, 분산.', ja: '大学基金モデル、オルタナティブ資産、長期的視野、分散。', zh: '捐赠基金模式，另类资产，长期视野，分散化。', es: 'Modelo de dotación, activos alternativos, horizonte a largo plazo.' },
            achievement: { en: 'Grew Yale endowment from $1B to $31B (1985-2021). 13.7% annual returns.', ko: '예일대 기부금을 10억 달러에서 310억 달러로 성장 (1985-2021). 연평균 13.7% 수익률.', ja: 'イェール大学の基金を10億ドルから310億ドルに成長(1985-2021)。年率13.7%のリターン。', zh: '将耶鲁捐赠基金从10亿增至310亿美元(1985-2021)。年均回报13.7%。', es: 'Creció la dotación de Yale de $1B a $31B (1985-2021). 13.7% retornos anuales.' }
        },
        {
            id: 'bogle',
            image: 'assets/Disney_Style_Guru_32_Klarman_2.webp',
            name: { en: 'John Bogle', ko: '존 보글', ja: 'ジョン・ボーグル', zh: '约翰·博格尔', es: 'John Bogle' },
            title: { en: 'The Index Fund Pioneer', ko: '인덱스 펀드의 아버지', ja: 'インデックスファンドのパイオニア', zh: '指数基金之父', es: 'El Pionero del Fondo Indexado' },
            philosophy: { en: 'Low-cost index investing, buy and hold, minimize fees, long-term focus.', ko: '저비용 인덱스 투자, 매수 후 보유, 수수료 최소화, 장기 집중.', ja: '低コストインデックス投資、バイ・アンド・ホールド、手数料最小化、長期志向。', zh: '低成本指数投资，买入持有，最小化费用，长期专注。', es: 'Inversión indexada de bajo costo, comprar y mantener, minimizar comisiones.' },
            achievement: { en: 'Founded Vanguard. Created first index fund (1976). Saved investors $1 trillion+ in fees.', ko: '뱅가드 설립. 최초의 인덱스 펀드 창설 (1976). 투자자들에게 1조 달러 이상의 수수료 절감.', ja: 'バンガードを設立。最初のインデックスファンドを創設(1976)。投資家に1兆ドル以上の手数料を節約。', zh: '创立先锋基金。创建首只指数基金(1976)。为投资者节省超1万亿美元费用。', es: 'Fundó Vanguard. Creó el primer fondo indexado (1976). Ahorró $1T+ en comisiones.' }
        }
    ];

    const translations = {
        title: {
            en: 'Stock Guru', ko: '주식의 신', ja: '株の達人', zh: '股票大师', es: 'Stock Guru'
        },
        subtitle: {
            en: "Get investment wisdom from the world's greatest masters.",
            ko: "세계 최고의 대가들로부터 투자 지혜를 얻으세요.",
            ja: "世界最高の達人たちから投資の知恵を得よう。",
            zh: "从世界最伟大的大师那里获取投资智慧。",
            es: "Obtén sabiduría de inversión de los mejores maestros del mundo."
        },
        placeholder: {
            en: "Enter stock ticker in English (e.g., TSLA, AAPL, MSFT)...",
            ko: "영어로 종목 티커를 입력하세요 (예: TSLA, AAPL, MSFT)...",
            ja: "英語で銘柄コードを入力（例：TSLA, AAPL, MSFT）...",
            zh: "请用英文输入股票代码（例如：TSLA, AAPL, MSFT）...",
            es: "Ingresa el símbolo en inglés (ej. TSLA, AAPL, MSFT)..."
        },
        analyzeBtn: {
            en: "Get Advice", ko: "조언 얻기", ja: "アドバイスをもらう", zh: "获取建议", es: "Obtener Consejo"
        },
        selectTitle: {
            en: "Select Your Gurus", ko: "고수를 선택하세요", ja: "達人を選択", zh: "选择你的大师", es: "Selecciona tus Gurús"
        },
        resultsTitle: {
            en: "The Verdict", ko: "판결", ja: "評決", zh: "结论", es: "El Veredicto"
        },
        disclaimer: {
            en: "⚠️ (Notice) The investment experts on this site are AI-generated virtual characters, and information provided through advice may not reflect reality. Use of AI-generated results is at the user's own responsibility.",
            ko: "⚠️ (주의사항) 본 사이트의 고수(인물)는 AI로 생성한 가상의 인물이며 조언 얻기를 통해 제공되는 정보는 사실과 다를 수 있음을 알려 드립니다. AI가 제공하는 결과의 활용여부는 사용자의 책임임을 주의하여 주시기 바랍니다.",
            ja: "⚠️ (注意) 当サイトに登場する投資家はAIにより生成された架空の人物であり、アドバイスで提供される情報は事実と異なる場合があります。AI生成結果の利用はユーザーの責任となりますのでご注意ください。",
            zh: "⚠️ (注意) 本网站的投资专家是AI生成的虚拟人物，通过建议提供的信息可能与事实不符。使用AI生成结果的责任由用户自负，请注意。",
            es: "⚠️ (Aviso) Los expertos de inversión en este sitio son personajes virtuales generados por IA, y la información proporcionada puede no reflejar la realidad. El uso de resultados de IA es responsabilidad del usuario."
        },
        alertStock: {
            en: "Please enter a stock name.", ko: "종목명을 입력해주세요.", ja: "銘柄名を入力してください。", zh: "请输入股票名称。", es: "Por favor, introduce un nombre de acción."
        },
        alertInvestor: {
            en: "Please select at least one investor.", ko: "최소 한 명의 고수를 선택해주세요.", ja: "少なくとも1人の達人を選択してください。", zh: "请至少选择一位大师。", es: "Por favor, selecciona al menos un inversor."
        },
        newsSummaryTitle: {
            en: "AI News Briefing", ko: "AI 뉴스 브리핑", ja: "AIニュースブリーフィング", zh: "AI新闻简报", es: "Resumen de Noticias AI"
        },
        newsPositive: {
            en: "Positive sentiment dominates recent news.", ko: "최근 뉴스에서 긍정적인 분위기가 감지됩니다.", ja: "最近のニュースでは肯定的な雰囲気が優勢です。", zh: "近期新闻以正面情绪为主。", es: "El sentimiento positivo domina las noticias recientes."
        },
        newsNegative: {
            en: "Negative sentiment dominates recent news.", ko: "최근 뉴스에서 부정적인 분위기가 감지됩니다.", ja: "最近のニュースでは否定的な雰囲気が優勢です。", zh: "近期新闻以负面情绪为主。", es: "El sentimiento negativo domina las noticias recientes."
        },
        newsNeutral: {
            en: "Recent news shows mixed or neutral sentiment.", ko: "최근 뉴스는 중립적이거나 엇갈린 반응을 보입니다.", ja: "最近のニュースは中立的またはまちまちです。", zh: "近期新闻显示混合或中立情绪。", es: "Las noticias recientes muestran un sentimiento mixto o neutral."
        },
        selectAll: {
            en: "Select All", ko: "전체 선택", ja: "全選択", zh: "全选", es: "Seleccionar Todo"
        },
        deselectAll: {
            en: "Deselect All", ko: "전체 해제", ja: "全解除", zh: "取消全选", es: "Deseleccionar Todo"
        },
        footerTagline: {
            en: "Investment wisdom from the masters", ko: "투자 대가들의 지혜를 당신에게", ja: "投資の達人たちの知恵をあなたに", zh: "大师们的投资智慧", es: "Sabiduría de inversión de los maestros"
        },
        footerDisclaimer: {
            en: "⚠️ This service is for educational and entertainment purposes only. Investment decisions are your responsibility.", 
            ko: "⚠️ 본 서비스는 교육 및 엔터테인먼트 목적으로만 제공됩니다. 투자 결정은 본인의 책임입니다.", 
            ja: "⚠️ 本サービスは教育・娯楽目的のみで提供されます。投資判断はご自身の責任です。", 
            zh: "⚠️ 本服务仅供教育和娱乐目的。投资决策由您自己负责。", 
            es: "⚠️ Este servicio es solo para fines educativos y de entretenimiento. Las decisiones de inversión son su responsabilidad."
        },
        settingsTitle: {
            en: "⚙️ Settings", ko: "⚙️ 설정", ja: "⚙️ 設定", zh: "⚙️ 设置", es: "⚙️ Configuración"
        },
        apiKeyLabel: {
            en: "Financial Modeling Prep API Key", ko: "Financial Modeling Prep API 키", ja: "Financial Modeling Prep APIキー", zh: "Financial Modeling Prep API密钥", es: "Clave API de Financial Modeling Prep"
        },
        apiKeyDesc: {
            en: "To get real financial data (P/E, ROE, etc.), you need a free API key.", 
            ko: "실제 재무 데이터(PER, ROE 등)를 가져오려면 무료 API 키가 필요합니다.", 
            ja: "実際の財務データ（PER、ROEなど）を取得するには、無料のAPIキーが必要です。", 
            zh: "要获取真实的财务数据（市盈率、ROE等），您需要一个免费的API密钥。", 
            es: "Para obtener datos financieros reales (PER, ROE, etc.), necesita una clave API gratuita."
        },
        getApiKey: {
            en: "🔑 Get free API key", ko: "🔑 무료 API 키 발급받기", ja: "🔑 無料APIキーを取得", zh: "🔑 获取免费API密钥", es: "🔑 Obtener clave API gratis"
        },
        dataStatusLabel: {
            en: "Data Status:", ko: "데이터 상태:", ja: "データ状態:", zh: "数据状态:", es: "Estado de datos:"
        },
        simulation: {
            en: "📊 Simulation", ko: "📊 시뮬레이션", ja: "📊 シミュレーション", zh: "📊 模拟", es: "📊 Simulación"
        },
        realData: {
            en: "✅ Real Data", ko: "✅ 실제 데이터", ja: "✅ 実データ", zh: "✅ 真实数据", es: "✅ Datos Reales"
        },
        save: {
            en: "Save", ko: "저장", ja: "保存", zh: "保存", es: "Guardar"
        },
        apiKeySaved: {
            en: "API key saved! Real financial data will be used.", 
            ko: "API 키가 저장되었습니다! 실제 재무 데이터가 사용됩니다.", 
            ja: "APIキーが保存されました！実際の財務データが使用されます。", 
            zh: "API密钥已保存！将使用真实的财务数据。", 
            es: "¡Clave API guardada! Se usarán datos financieros reales."
        },
        apiKeyCleared: {
            en: "API key cleared. Simulation data will be used.", 
            ko: "API 키가 삭제되었습니다. 시뮬레이션 데이터가 사용됩니다.", 
            ja: "APIキーがクリアされました。シミュレーションデータが使用されます。", 
            zh: "API密钥已清除。将使用模拟数据。", 
            es: "Clave API eliminada. Se usarán datos de simulación."
        }
    };


    // DOM 요소 가져오기 (존재하지 않을 수 있는 요소는 optional)
    const investorGrid = document.getElementById('investorGrid');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const searchStockBtn = document.getElementById('searchStockBtn');
    const stockSearchInput = document.getElementById('stockSearchInput');
    const stockInput = document.getElementById('stockInput');
    const autocompleteList = document.getElementById('autocompleteList');
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');
    const stockSummary = document.getElementById('stockSummary');
    const newsSection = document.getElementById('newsSection');
    const newsGrid = document.getElementById('newsGrid');
    const historySection = document.getElementById('historySection');
    const historyList = document.getElementById('historyList');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const selectedInvestors = new Set();

    // analyzeBtn이 없으면 에러 로그
    if (!analyzeBtn) {
        console.error('analyzeBtn을 찾을 수 없습니다!');
    } else {
        console.log('analyzeBtn 찾음:', analyzeBtn);
    }

    let currentLang = 'ko';
    let currentFocus = -1;
    let debounceTimer;
    let isRealData = false;
    let currentFilter = 'all';
    
    // 배지 텍스트 업데이트 함수
    function updateBadgeTexts() {
        const recommendCountSelect = document.getElementById('recommendCount');
        const usBadgeText = document.getElementById('usBadgeText');
        const krBadgeText = document.getElementById('krBadgeText');
        
        if (!recommendCountSelect || !usBadgeText || !krBadgeText) {
            console.warn('배지 업데이트: DOM 요소를 찾을 수 없습니다');
            return;
        }
        
        const recommendCount = parseInt(recommendCountSelect.value) || 10;
        // 선택한 추천 종목 수를 미국과 한국에 각각 표시
        usBadgeText.textContent = `미국 ${recommendCount}개`;
        krBadgeText.textContent = `한국 ${recommendCount}개`;
        
        console.log(`배지 업데이트: 미국 ${recommendCount}개, 한국 ${recommendCount}개`);
    }
    
    // recommendCount 변경 시 배지 업데이트 (DOM이 준비된 후 실행)
    let badgeUpdaterInitialized = false;
    function initBadgeUpdater() {
        const recommendCountSelect = document.getElementById('recommendCount');
        if (recommendCountSelect) {
            // 중복 초기화 방지
            if (!badgeUpdaterInitialized) {
                // change 이벤트 리스너 추가
                recommendCountSelect.addEventListener('change', function(e) {
                    console.log('recommendCount 변경됨:', e.target.value);
                    updateBadgeTexts();
                });
                // input 이벤트도 추가 (일부 브라우저에서 필요)
                recommendCountSelect.addEventListener('input', function(e) {
                    console.log('recommendCount input:', e.target.value);
                    updateBadgeTexts();
                });
                badgeUpdaterInitialized = true;
                console.log('배지 업데이터 초기화 완료');
            }
            // 초기 로드 시에도 업데이트
            updateBadgeTexts();
        } else {
            // DOM이 아직 준비되지 않았으면 재시도
            setTimeout(initBadgeUpdater, 100);
        }
    }
    
    // 초기화 실행
    initBadgeUpdater();
    
    // ========== History Functions ==========
    const HISTORY_KEY = 'stock_guru_history';
    const MAX_HISTORY = 5;

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveToHistory(item) {
        let history = getHistory();
        // Remove if already exists
        history = history.filter(h => h.ticker !== item.ticker);
        // Add to front
        history.unshift(item);
        // Keep only last MAX_HISTORY
        history = history.slice(0, MAX_HISTORY);
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
        renderHistory();
    }

    function renderHistory() {
        const history = getHistory();
        if (history.length === 0) {
            historySection.classList.add('hidden');
            return;
        }

        historySection.classList.remove('hidden');
        historyList.innerHTML = '';

        const labels = {
            en: 'Recent:', ko: '최근 분석:', ja: '最近:', zh: '最近:', es: 'Reciente:'
        };
        document.getElementById('historyLabel').textContent = labels[currentLang] || labels.en;

        history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <span class="ticker">${item.ticker}</span>
                <span class="name">${item.name.substring(0, 10)}${item.name.length > 10 ? '...' : ''}</span>
                <span class="sentiment ${item.sentiment}">${item.sentimentIcon}</span>
            `;
            div.addEventListener('click', () => {
                stockInput.value = item.name;
                analyzeBtn.click();
            });
            historyList.appendChild(div);
        });
    }

    // ========== Filter Functions ==========
    function getGuruStyle(id) {
        for (const [style, gurus] of Object.entries(guruStyles)) {
            if (gurus.includes(id)) return style;
        }
        return 'other';
    }

    function applyFilter(style) {
        currentFilter = style;
        filterButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.style === style);
        });
        renderInvestors();
    }

    // Filter button labels
    const filterLabels = {
        en: { label: 'Style Filter:', all: 'All', value: '💎 Value', growth: '🚀 Growth', macro: '🌍 Macro', quant: '🤖 Quant', activist: '⚔️ Activist' },
        ko: { label: '스타일 필터:', all: '전체', value: '💎 가치투자', growth: '🚀 성장투자', macro: '🌍 매크로', quant: '🤖 퀀트', activist: '⚔️ 행동주의' },
        ja: { label: 'スタイル:', all: '全て', value: '💎 バリュー', growth: '🚀 成長', macro: '🌍 マクロ', quant: '🤖 クオンツ', activist: '⚔️ アクティビスト' },
        zh: { label: '风格筛选:', all: '全部', value: '💎 价值', growth: '🚀 成长', macro: '🌍 宏观', quant: '🤖 量化', activist: '⚔️ 激进' },
        es: { label: 'Filtro:', all: 'Todos', value: '💎 Valor', growth: '🚀 Crecimiento', macro: '🌍 Macro', quant: '🤖 Quant', activist: '⚔️ Activista' }
    };

    function updateFilterLabels() {
        const labels = filterLabels[currentLang] || filterLabels.en;
        document.getElementById('filterLabel').textContent = labels.label;
        document.getElementById('filterAll').textContent = labels.all;
        document.getElementById('filterValue').textContent = labels.value;
        document.getElementById('filterGrowth').textContent = labels.growth;
        document.getElementById('filterMacro').textContent = labels.macro;
        document.getElementById('filterQuant').textContent = labels.quant;
        document.getElementById('filterActivist').textContent = labels.activist;
    }

    // Filter button event listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => applyFilter(btn.dataset.style));
    });

    // ========== Financial Modeling Prep API ==========
    const FMP_BASE_URL = 'https://financialmodelingprep.com/api/v3';

    function getFmpApiKey() {
        return localStorage.getItem('fmp_api_key') || '';
    }

    function setFmpApiKey(key) {
        if (key) {
            localStorage.setItem('fmp_api_key', key);
        } else {
            localStorage.removeItem('fmp_api_key');
        }
        updateDataStatus();
    }

    function updateDataStatus() {
        const hasKey = !!getFmpApiKey();
        isRealData = hasKey;

        const statusValue = document.getElementById('dataStatusValue');
        const dataBadge = document.getElementById('dataSourceBadge');

        if (statusValue) {
            statusValue.textContent = hasKey ? translations.realData[currentLang] : translations.simulation[currentLang];
            statusValue.className = `status-badge ${hasKey ? 'real' : 'simulation'}`;
        }

        if (dataBadge) {
            dataBadge.textContent = hasKey ? translations.realData[currentLang] : translations.simulation[currentLang];
            dataBadge.className = `data-badge ${hasKey ? 'real' : 'simulation'}`;
        }
    }

    // Yahoo Finance에서 실제 재무 데이터 가져오기
    async function fetchYahooFinancialData(ticker) {
        try {
            // Yahoo Finance quoteSummary API 사용
            const modules = ['summaryDetail', 'defaultKeyStatistics', 'financialData', 'incomeStatementHistoryQuarterly'];
            const targetUrl = `${BASE_URL}/v10/finance/quoteSummary/${ticker}?modules=${modules.join(',')}`;
            const data = await fetchWithProxy(targetUrl);

            if (data.quoteSummary && data.quoteSummary.result && data.quoteSummary.result.length > 0) {
                const result = data.quoteSummary.result[0];
                const summaryDetail = result.summaryDetail || {};
                const defaultKeyStatistics = result.defaultKeyStatistics || {};
                const financialData = result.financialData || {};
                const incomeStatement = result.incomeStatementHistoryQuarterly?.incomeStatementHistory || [];

                // PER 계산 (Price / EPS)
                const trailingPE = defaultKeyStatistics.trailingPE || summaryDetail.trailingPE || null;
                const forwardPE = defaultKeyStatistics.forwardPE || summaryDetail.forwardPE || null;
                const per = trailingPE || forwardPE || null;

                // PBR 계산 (Price / Book Value)
                const priceToBook = defaultKeyStatistics.priceToBook || null;

                // ROE 계산 (Return on Equity)
                const returnOnEquity = defaultKeyStatistics.returnOnEquity || financialData.returnOnEquity || null;
                const roe = returnOnEquity ? returnOnEquity * 100 : null;

                // 부채비율 (Debt to Equity)
                const debtToEquity = defaultKeyStatistics.debtToEquity || null;

                // 매출 성장률 계산 (Revenue Growth)
                let revenueGrowth = null;
                if (incomeStatement.length >= 2) {
                    const currentRevenue = incomeStatement[0].totalRevenue?.raw || 0;
                    const previousRevenue = incomeStatement[1].totalRevenue?.raw || 0;
                    if (previousRevenue > 0) {
                        revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue) * 100;
                    }
                }

                // 배당 수익률
                const dividendYield = summaryDetail.dividendYield ? summaryDetail.dividendYield * 100 : null;

                // EPS
                const trailingEps = defaultKeyStatistics.trailingEps || summaryDetail.trailingEps || null;
                const forwardEps = defaultKeyStatistics.forwardEps || summaryDetail.forwardEps || null;
                const eps = trailingEps || forwardEps || null;

                // 시가총액
                const marketCap = defaultKeyStatistics.marketCap?.raw || summaryDetail.marketCap?.raw || null;

                // 실제 데이터가 하나라도 있으면 반환
                if (per !== null || priceToBook !== null || roe !== null || revenueGrowth !== null) {
                    return {
                        per: per,
                        pbr: priceToBook,
                        roe: roe,
                        debtToEquity: debtToEquity ? debtToEquity * 100 : null,
                        revenueGrowth: revenueGrowth,
                        dividendYield: dividendYield,
                        eps: eps,
                        marketCap: marketCap
                    };
                }
            }
            return null;
        } catch (error) {
            console.warn('Yahoo Finance financial data fetch failed:', error);
            return null;
        }
    }

    async function fetchFmpData(symbol) {
        const apiKey = getFmpApiKey();
        if (!apiKey) return null;

        try {
            // FMP API는 한국 주식의 경우 .KS 접미사를 제거해야 할 수 있음
            // 하지만 일단 원본 티커로 시도하고, 실패하면 .KS 제거 후 재시도
            let cleanSymbol = symbol;
            if (symbol.includes('.KS')) {
                // 한국 주식은 FMP에서 다른 형식일 수 있음
                // 일단 원본으로 시도
            }
            
            // Fetch key metrics (ratios)
            const ratiosUrl = `${FMP_BASE_URL}/ratios-ttm/${cleanSymbol}?apikey=${apiKey}`;
            const quoteUrl = `${FMP_BASE_URL}/quote/${cleanSymbol}?apikey=${apiKey}`;

            const [ratiosRes, quoteRes] = await Promise.all([
                fetch(ratiosUrl),
                fetch(quoteUrl)
            ]);

            if (!ratiosRes.ok || !quoteRes.ok) {
                console.warn('FMP API request failed');
                return null;
            }

            const ratiosData = await ratiosRes.json();
            const quoteData = await quoteRes.json();

            if (!ratiosData || ratiosData.length === 0 || !quoteData || quoteData.length === 0) {
                return null;
            }

            const ratios = ratiosData[0];
            const quote = quoteData[0];

            return {
                per: ratios.peRatioTTM || 0,
                pbr: ratios.priceToBookRatioTTM || 0,
                roe: (ratios.returnOnEquityTTM || 0) * 100,
                debtToEquity: (ratios.debtEquityRatioTTM || 0) * 100,
                revenueGrowth: (ratios.revenueGrowth || quote.eps / (quote.priceAvg50 || 1)) * 100,
                dividendYield: (ratios.dividendYieldTTM || 0) * 100,
                currentRatio: ratios.currentRatioTTM || 0,
                eps: quote.eps || 0,
                marketCap: quote.marketCap || 0
            };
        } catch (error) {
            console.error('FMP API error:', error);
            return null;
        }
    }

    // ========== Settings Modal ==========
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeModalBtn = document.getElementById('closeModal');
    const saveApiKeyBtn = document.getElementById('saveApiKey');
    const apiKeyInput = document.getElementById('apiKeyInput');
    const toggleApiKeyBtn = document.getElementById('toggleApiKey');

    if (settingsBtn && settingsModal) {
        settingsBtn.addEventListener('click', () => {
            settingsModal.classList.remove('hidden');
            apiKeyInput.value = getFmpApiKey();
            updateSettingsTranslations();
        });

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                settingsModal.classList.add('hidden');
            });
        }

        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });

        if (saveApiKeyBtn) {
            saveApiKeyBtn.addEventListener('click', () => {
                const key = apiKeyInput?.value.trim() || '';
                setFmpApiKey(key);
                if (settingsModal) {
                    settingsModal.classList.add('hidden');
                }

                const message = key ? translations.apiKeySaved[currentLang] : translations.apiKeyCleared[currentLang];
                alert(message);
            });
        }

        if (toggleApiKeyBtn) {
            toggleApiKeyBtn.addEventListener('click', () => {
                if (apiKeyInput) {
                    apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
                }
            });
        }
    }

    function updateSettingsTranslations() {
        const settingsTitle = document.getElementById('settingsTitle');
        const apiKeyLabel = document.getElementById('apiKeyLabel');
        const apiKeyDesc = document.getElementById('apiKeyDesc');
        const getApiKeyLink = document.getElementById('getApiKeyLink');
        const dataStatusLabel = document.getElementById('dataStatusLabel');

        if (settingsTitle) settingsTitle.textContent = translations.settingsTitle[currentLang];
        if (apiKeyLabel) apiKeyLabel.textContent = translations.apiKeyLabel[currentLang];
        if (apiKeyDesc) apiKeyDesc.textContent = translations.apiKeyDesc[currentLang];
        if (getApiKeyLink) getApiKeyLink.textContent = translations.getApiKey[currentLang];
        if (dataStatusLabel) dataStatusLabel.textContent = translations.dataStatusLabel[currentLang];
        if (saveApiKeyBtn) saveApiKeyBtn.textContent = translations.save[currentLang];

        updateDataStatus();
    }

    // UI Elements for Translation
    const uiElements = {
        mainTitle: document.getElementById('mainTitle'),
        subTitle: document.getElementById('subTitle'),
        stockInput: document.getElementById('stockInput'),
        analyzeBtn: document.getElementById('analyzeBtn'),
        selectTitle: document.getElementById('selectTitle'),
        resultsTitle: document.getElementById('resultsTitle'),
        disclaimer: document.getElementById('disclaimer'),
        selectAllText: document.getElementById('selectAllText'),
        deselectAllText: document.getElementById('deselectAllText'),
        footerTagline: document.getElementById('footerTagline'),
        footerDisclaimer: document.getElementById('footerDisclaimer')
    };

    // Select All / Deselect All Buttons
    const selectAllBtn = document.getElementById('selectAllBtn');
    const deselectAllBtn = document.getElementById('deselectAllBtn');

    if (selectAllBtn) {
        selectAllBtn.addEventListener('click', () => {
            investors.forEach(investor => selectedInvestors.add(investor.id));
            document.querySelectorAll('.investor-card').forEach(card => {
                card.classList.add('selected');
            });
        });
    }

    if (deselectAllBtn) {
        deselectAllBtn.addEventListener('click', () => {
            selectedInvestors.clear();
            document.querySelectorAll('.investor-card').forEach(card => {
                card.classList.remove('selected');
            });
        });
    }

    // Language Toggle
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                currentLang = lang;
                updateLanguage();
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });

    function updateLanguage() {
        uiElements.mainTitle.textContent = translations.title[currentLang];
        uiElements.subTitle.textContent = translations.subtitle[currentLang];
        uiElements.stockInput.placeholder = translations.placeholder[currentLang];
        uiElements.analyzeBtn.textContent = translations.analyzeBtn[currentLang];
        uiElements.selectTitle.textContent = translations.selectTitle[currentLang];
        uiElements.resultsTitle.textContent = translations.resultsTitle[currentLang];
        if (uiElements.disclaimer) {
            uiElements.disclaimer.textContent = translations.disclaimer[currentLang];
        }
        if (uiElements.selectAllText) {
            uiElements.selectAllText.textContent = translations.selectAll[currentLang];
        }
        if (uiElements.deselectAllText) {
            uiElements.deselectAllText.textContent = translations.deselectAll[currentLang];
        }
        if (uiElements.footerTagline) {
            uiElements.footerTagline.textContent = translations.footerTagline[currentLang];
        }
        if (uiElements.footerDisclaimer) {
            uiElements.footerDisclaimer.textContent = translations.footerDisclaimer[currentLang];
        }

        // Update settings modal translations
        updateSettingsTranslations();

        // Update filter and history labels
        updateFilterLabels();
        renderHistory();

        renderInvestors();

        // If results are visible, re-run analysis to update language
        if (resultsSection.style.display === 'block' && stockInput.value.trim()) {
            // We need to re-use the existing mock data if possible, but for simplicity, we might re-generate
            // Ideally, we should store the current analysis state.
            // For now, let's just re-trigger the click logic if we had data
            // But to avoid re-generating random numbers, we should separate data generation from rendering.
            // For this version, we will just re-render the advice using the *last generated data* if we had a way to store it.
            // Let's keep it simple: just re-click analyze (which regenerates data - acceptable for prototype)
            analyzeBtn.click();
        }
    }

    // Tooltip labels for different languages
    const tooltipLabels = {
        philosophy: { en: 'Philosophy', ko: '투자 철학', ja: '投資哲学', zh: '投资哲学', es: 'Filosofía' },
        achievement: { en: 'Achievement', ko: '주요 성과', ja: '主な実績', zh: '主要成就', es: 'Logro' }
    };

    function renderInvestors() {
        investorGrid.innerHTML = '';
        
        // Filter investors based on current filter
        const filteredInvestors = currentFilter === 'all' 
            ? investors 
            : investors.filter(inv => guruStyles[currentFilter]?.includes(inv.id));
        
        filteredInvestors.forEach(investor => {
            const card = document.createElement('div');
            card.className = 'investor-card';
            if (selectedInvestors.has(investor.id)) {
                card.classList.add('selected');
            }
            card.dataset.id = investor.id;

            const name = investor.name[currentLang] || investor.name['en'];
            const title = investor.title[currentLang] || investor.title['en'];
            const philosophy = investor.philosophy[currentLang] || investor.philosophy['en'];
            const achievement = investor.achievement[currentLang] || investor.achievement['en'];
            const philosophyLabel = tooltipLabels.philosophy[currentLang] || tooltipLabels.philosophy['en'];
            const achievementLabel = tooltipLabels.achievement[currentLang] || tooltipLabels.achievement['en'];

            card.innerHTML = `
                <img src="${investor.image}" alt="${name}" loading="lazy" onerror="this.src='https://via.placeholder.com/100/333/fff?text=${name.charAt(0)}'">
                <h3>${name}</h3>
                <p>${title}</p>
                <div class="investor-tooltip">
                    <div class="tooltip-header">
                        <img src="${investor.image}" alt="${name}" onerror="this.src='https://via.placeholder.com/40/333/fff?text=${name.charAt(0)}'">
                        <div>
                            <h4>${name}</h4>
                            <div class="tooltip-title">${title}</div>
                        </div>
                    </div>
                    <div class="tooltip-section">
                        <div class="tooltip-label">💡 ${philosophyLabel}</div>
                        <div class="tooltip-content">${philosophy}</div>
                    </div>
                    <div class="tooltip-section">
                        <div class="tooltip-achievement">🏆 ${achievement}</div>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                card.classList.toggle('selected');
                if (selectedInvestors.has(investor.id)) {
                    selectedInvestors.delete(investor.id);
                } else {
                    selectedInvestors.add(investor.id);
                }
            });

            investorGrid.appendChild(card);
        });
    }

    // --- Autocomplete Functionality ---

    function closeAllLists() {
        if (autocompleteList) {
            autocompleteList.innerHTML = '';
        }
        currentFocus = -1;
    }

    async function showAutocomplete(query) {
        closeAllLists();

        if (!query || query.length < 1 || !autocompleteList) {
            return;
        }

        try {
            const targetUrl = `${BASE_URL}/v1/finance/search?q=${encodeURIComponent(query)}&quotesCount=10&newsCount=0`;
            const data = await fetchWithProxy(targetUrl);

            if (data.quotes && data.quotes.length > 0) {
                data.quotes.forEach((item, index) => {
                    const div = document.createElement('div');
                    div.className = 'autocomplete-item';
                    div.innerHTML = `
                        <span class="item-symbol">${item.symbol}</span>
                        <span class="item-name">${item.shortname || item.longname || ''}</span>
                        <span class="item-exch">${item.exchDisp || item.exchange || ''}</span>
                    `;

                    div.addEventListener('click', () => {
                        if (stockInput) {
                            stockInput.value = item.symbol;
                        }
                        closeAllLists();
                    });

                    if (autocompleteList) {
                        autocompleteList.appendChild(div);
                    }
                });
            }
        } catch (error) {
            console.error('Autocomplete error:', error);
        }
    }

    // Input event with debouncing (stockInput이 있을 때만)
    if (stockInput) {
        stockInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                showAutocomplete(e.target.value);
            }, 300);
        });
    }

    // Keyboard navigation (stockInput이 있을 때만)
    if (stockInput) {
        stockInput.addEventListener('keydown', (e) => {
            const items = autocompleteList?.getElementsByClassName('autocomplete-item') || [];

            if (e.keyCode === 40) { // Down arrow
                currentFocus++;
                addActive(items);
                e.preventDefault();
            } else if (e.keyCode === 38) { // Up arrow
                currentFocus--;
                addActive(items);
                e.preventDefault();
            } else if (e.keyCode === 13) { // Enter
                e.preventDefault();
                if (currentFocus > -1 && items[currentFocus]) {
                    items[currentFocus].click();
                } else if (analyzeBtn) {
                    analyzeBtn.click();
                }
            } else if (e.keyCode === 27) { // Escape
                closeAllLists();
            }
        });
    }

    function addActive(items) {
        if (!items || items.length === 0) return;
        removeActive(items);

        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;

        items[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('autocomplete-active');
        }
    }

    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== stockInput) {
            closeAllLists();
        }
    });

    // --- Yahoo Finance API Integration ---

    // Using a CORS proxy to allow requests from file:// or local environment
    // Using multiple CORS proxies for reliability
    const PROXIES = [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/get?url=',
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url=',
        'https://cors-anywhere.herokuapp.com/',
        'https://api.codetabs.com/v1/proxy?quest='
    ];
    const BASE_URL = 'https://query1.finance.yahoo.com';

    async function fetchWithProxy(targetUrl) {
        for (let i = 0; i < PROXIES.length; i++) {
            const proxy = PROXIES[i];
            try {
                let url = `${proxy}${encodeURIComponent(targetUrl)}`;
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 8000); // 8초 타임아웃
                
                const response = await fetch(url, {
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                
                // allorigins.win은 {contents: "..."} 형식으로 래핑됨
                if (proxy.includes('allorigins.win')) {
                    const data = await response.json();
                    if (data.contents) {
                        return JSON.parse(data.contents);
                    }
                    return data;
                }
                
                return await response.json();
            } catch (e) {
                // 타임아웃이나 네트워크 에러는 다음 프록시로 빠르게 전환
                if (e.name === 'AbortError') {
                    console.warn(`⚠️ Proxy ${proxy} timeout (8s), trying next proxy...`);
                } else if (e.message && (e.message.includes('401') || e.message.includes('403') || e.message.includes('520') || e.message.includes('CORS'))) {
                    console.warn(`⚠️ Proxy ${proxy} error (${e.message}), trying next proxy...`);
                } else {
                    console.warn(`⚠️ Proxy ${proxy} failed:`, e.message || e.name || e);
                }
                // 마지막 프록시가 아니면 다음으로 계속
                if (i < PROXIES.length - 1) {
                    continue;
                }
            }
        }
        throw new Error("All proxies failed");
    }

    async function searchSymbol(query) {
        try {
            const targetUrl = `${BASE_URL}/v1/finance/search?q=${query}&quotesCount=1&newsCount=0`;
            const data = await fetchWithProxy(targetUrl);

            if (data.quotes && data.quotes.length > 0) {
                return data.quotes[0]; // Return the best match
            }
            return null;
        } catch (error) {
            console.error("Search Error:", error);
            return null;
        }
    }

    async function fetchStockData(ticker) {
        try {
            const targetUrl = `${BASE_URL}/v8/finance/chart/${ticker}?interval=1d&range=1d`;
            const data = await fetchWithProxy(targetUrl);

            if (data.chart && data.chart.result && data.chart.result.length > 0) {
                const result = data.chart.result[0];
                const meta = result.meta;
                const quote = result.indicators.quote[0];

                // Calculate basic stats
                const currentPrice = meta.regularMarketPrice;
                const previousClose = meta.chartPreviousClose;
                const change = currentPrice - previousClose;
                const changePercent = (change / previousClose) * 100;
                const volume = quote.volume[quote.volume.length - 1] || 0;

                // Try to get real financial data (FMP API 우선, 없으면 Yahoo Finance)
                let financialData = null;
                let dataSource = 'simulation';
                
                // 1. FMP API 시도 (더 정확한 데이터)
                const fmpData = await fetchFmpData(ticker);
                if (fmpData) {
                    financialData = {
                        per: fmpData.per || null,
                        pbr: fmpData.pbr || null,
                        roe: fmpData.roe || null,
                        debtToEquity: fmpData.debtToEquity || null,
                        revenueGrowth: fmpData.revenueGrowth || null,
                        dividendYield: fmpData.dividendYield || 0,
                        eps: fmpData.eps || null,
                        marketCap: fmpData.marketCap || null
                    };
                    dataSource = 'fmp';
                    console.log('✅ Using REAL financial data from FMP API');
                } else {
                    // 2. Yahoo Finance API 시도 (타임아웃 5초)
                    let yahooFinancialData = null;
                    try {
                        yahooFinancialData = await Promise.race([
                            fetchYahooFinancialData(ticker),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('Yahoo Finance timeout')), 5000)
                            )
                        ]);
                    } catch (err) {
                        console.warn(`⚠️ Yahoo Finance API 실패 (${ticker}):`, err.message);
                        yahooFinancialData = null;
                    }
                    
                    if (yahooFinancialData) {
                        financialData = {
                            per: yahooFinancialData.per || null,
                            pbr: yahooFinancialData.pbr || null,
                            roe: yahooFinancialData.roe || null,
                            debtToEquity: yahooFinancialData.debtToEquity || null,
                            revenueGrowth: yahooFinancialData.revenueGrowth || null,
                            dividendYield: yahooFinancialData.dividendYield || 0,
                            eps: yahooFinancialData.eps || null,
                            marketCap: yahooFinancialData.marketCap || null
                        };
                        dataSource = 'yahoo';
                        console.log('✅ Using REAL financial data from Yahoo Finance API');
                    }
                }
                
                isRealData = !!financialData;

                // Use real data if available, otherwise use simulation
                if (!financialData) {
                    // Simulation data (fallback) - Use seeded random for consistency
                    // Create a simple seeded random generator based on ticker
                    function seededRandom(seed) {
                        let value = seed;
                        return function() {
                            value = (value * 9301 + 49297) % 233280;
                            return value / 233280;
                        };
                    }
                    
                    // Generate seed from ticker string (consistent for same ticker)
                    let seed = 0;
                    for (let i = 0; i < ticker.length; i++) {
                        seed = ((seed << 5) - seed) + ticker.charCodeAt(i);
                        seed = seed & seed; // Convert to 32bit integer
                    }
                    seed = Math.abs(seed);
                    
                    const random = seededRandom(seed);
                    
                    // Use fixed base price for simulation (not currentPrice which changes)
                    // This ensures PER and EPS are consistent
                    const basePrice = 100 + (random() * 200); // Fixed for this ticker
                    
                    financialData = {
                        per: Math.abs(basePrice / (random() * 10 + 1)),
                        pbr: random() * 5 + 1,
                        roe: random() * 20 + 5,
                        debtToEquity: random() * 100,
                        revenueGrowth: random() * 20,
                        dividendYield: random() * 3,
                        eps: basePrice / (random() * 20 + 5),
                        marketCap: 0
                    };
                    
                    // Use seeded random for sentiment (fixed for this ticker)
                    const sentimentRandom = random();
                    // Use fixed sentiment based on seed, not actual price change
                    financialData.sentiment = sentimentRandom * 0.4 + 0.5; // 0.5 to 0.9 range
                    
                    // Also fix changePercent for simulation consistency
                    // This ensures guru advice is consistent
                    const changePercentRandom = random();
                    financialData.simulatedChangePercent = (changePercentRandom - 0.5) * 6; // -3% to +3% range
                    
                    console.log('Using SIMULATION financial data (seeded for consistency)');
                }

                // Update data source badge
                updateDataStatus();

                return {
                    ticker: meta.symbol,
                    price: currentPrice,
                    change: change,
                    // Use simulated changePercent if available, otherwise use real one
                    changePercent: financialData.simulatedChangePercent !== undefined 
                        ? financialData.simulatedChangePercent 
                        : changePercent,
                    volume: volume,
                    ...financialData,
                    isRealData: isRealData
                };
            }
            return null;
        } catch (error) {
            console.error("Fetch Data Error:", error);
            return null;
        }
    }

    // ========== News-Based Stock Recommendation System ==========
    
    // 주식 관련 뉴스 가져오기
    async function fetchStockNews() {
        try {
            // 최신 주식 뉴스 가져오기 (여러 검색어로)
            const searchTerms = ['stock market', '주식', 'investment', '투자', 'earnings', '실적'];
            const allNews = [];
            
            for (const term of searchTerms.slice(0, 3)) { // 처음 3개만 사용
                try {
                    const targetUrl = `${BASE_URL}/v1/finance/search?q=${encodeURIComponent(term)}&quotesCount=0&newsCount=10`;
                    const data = await fetchWithProxy(targetUrl);
                    
                    if (data.news && data.news.length > 0) {
                        data.news.forEach(item => {
                            // 중복 제거
                            if (!allNews.find(n => n.headline === item.title)) {
                                allNews.push({
                                    headline: item.title,
                                    summary: item.type || '',
                                    source: item.publisher || item.provider_name || 'Yahoo Finance',
                                    url: item.link,
                                    publishTime: item.provider_publish_time || Date.now() / 1000
                                });
                            }
                        });
                    }
                } catch (err) {
                    console.warn(`Failed to fetch news for ${term}:`, err);
                }
                
                // API 제한 방지
                await new Promise(resolve => setTimeout(resolve, 300));
            }
            
            // 최신순 정렬
            allNews.sort((a, b) => b.publishTime - a.publishTime);
            
            return allNews.slice(0, 20); // 상위 20개만
        } catch (error) {
            console.error('News fetch error:', error);
            return [];
        }
    }

    // 뉴스 기사에서 종목 추출
    async function extractStocksFromNews(newsArticles) {
        const extractedStocks = new Set();
        
        newsArticles.forEach(article => {
            const title = article.headline || '';
            const summary = article.summary || '';
            const text = (title + ' ' + summary).toLowerCase();
            
            // 키워드 매핑을 통해 종목 찾기
            Object.entries(stockKeywords).forEach(([symbol, keywords]) => {
                keywords.forEach(keyword => {
                    if (text.includes(keyword.toLowerCase())) {
                        extractedStocks.add(symbol);
                    }
                });
            });
        });
        
        return Array.from(extractedStocks);
    }

    // 뉴스에서 종목명 추출을 위한 키워드 매핑
    const stockKeywords = {
        // 미국 주식
        'AAPL': ['Apple', '아이폰', 'iPhone', '애플'],
        'MSFT': ['Microsoft', '마이크로소프트', '윈도우', 'Windows', 'Azure'],
        'GOOGL': ['Google', '구글', 'Alphabet', '알파벳'],
        'AMZN': ['Amazon', '아마존', 'AWS'],
        'TSLA': ['Tesla', '테슬라', '전기차'],
        'META': ['Meta', 'Facebook', '페이스북', '인스타그램'],
        'NVDA': ['NVIDIA', '엔비디아', 'GPU', 'AI'],
        'JPM': ['JPMorgan', 'JP모건', '모건'],
        'V': ['Visa', '비자'],
        'JNJ': ['Johnson', '존슨앤존슨'],
        'WMT': ['Walmart', '월마트'],
        'PG': ['Procter', 'P&G', '프록터앤갬블'],
        'MA': ['Mastercard', '마스터카드'],
        'DIS': ['Disney', '디즈니'],
        'NFLX': ['Netflix', '넷플릭스'],
        // 한국 주식
        '005930.KS': ['삼성전자', 'Samsung', '갤럭시', 'Galaxy'],
        '000660.KS': ['SK하이닉스', 'SK Hynix', '하이닉스'],
        '035420.KS': ['NAVER', '네이버'],
        '035720.KS': ['카카오', 'Kakao'],
        '051910.KS': ['LG화학', 'LG Chem'],
        '006400.KS': ['삼성SDI', 'Samsung SDI'],
        '028260.KS': ['삼성물산', 'Samsung C&T'],
        '207940.KS': ['삼성바이오로직스', 'Samsung Bio'],
        '005380.KS': ['현대차', 'Hyundai', '현대'],
        '096770.KS': ['SK이노베이션', 'SK Innovation'],
        '003670.KS': ['포스코', 'POSCO'],
        '017670.KS': ['SK텔레콤', 'SK Telecom'],
        '105560.KS': ['KB금융', 'KB Financial'],
        '055550.KS': ['신한지주', 'Shinhan'],
        '032830.KS': ['삼성생명', 'Samsung Life']
    };

    // 주식 목록 정의 (미국 + 한국) - 백업용
    const stockList = [
        // 미국 주식
        { symbol: 'AAPL', name: 'Apple Inc.', market: 'US' },
        { symbol: 'MSFT', name: 'Microsoft Corporation', market: 'US' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', market: 'US' },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', market: 'US' },
        { symbol: 'TSLA', name: 'Tesla Inc.', market: 'US' },
        { symbol: 'META', name: 'Meta Platforms Inc.', market: 'US' },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', market: 'US' },
        { symbol: 'JPM', name: 'JPMorgan Chase & Co.', market: 'US' },
        { symbol: 'V', name: 'Visa Inc.', market: 'US' },
        { symbol: 'JNJ', name: 'Johnson & Johnson', market: 'US' },
        { symbol: 'WMT', name: 'Walmart Inc.', market: 'US' },
        { symbol: 'PG', name: 'Procter & Gamble Co.', market: 'US' },
        { symbol: 'MA', name: 'Mastercard Inc.', market: 'US' },
        { symbol: 'DIS', name: 'The Walt Disney Company', market: 'US' },
        { symbol: 'NFLX', name: 'Netflix Inc.', market: 'US' },
        // 한국 주식 (Yahoo Finance 티커 형식)
        { symbol: '005930.KS', name: '삼성전자', market: 'KR' },
        { symbol: '000660.KS', name: 'SK하이닉스', market: 'KR' },
        { symbol: '035420.KS', name: 'NAVER', market: 'KR' },
        { symbol: '035720.KS', name: '카카오', market: 'KR' },
        { symbol: '051910.KS', name: 'LG화학', market: 'KR' },
        { symbol: '006400.KS', name: '삼성SDI', market: 'KR' },
        { symbol: '028260.KS', name: '삼성물산', market: 'KR' },
        { symbol: '207940.KS', name: '삼성바이오로직스', market: 'KR' },
        { symbol: '005380.KS', name: '현대차', market: 'KR' },
        { symbol: '096770.KS', name: 'SK이노베이션', market: 'KR' },
        { symbol: '003670.KS', name: '포스코홀딩스', market: 'KR' },
        { symbol: '017670.KS', name: 'SK텔레콤', market: 'KR' },
        { symbol: '105560.KS', name: 'KB금융', market: 'KR' },
        { symbol: '055550.KS', name: '신한지주', market: 'KR' },
        { symbol: '032830.KS', name: '삼성생명', market: 'KR' }
    ];

    // 추천 점수 계산 함수 (개선된 버전)
    function calculateRecommendationScore(stockData) {
        let score = 50; // 기본 점수 50점에서 시작 (더 관대한 평가)
        const reasons = [];
        const explanations = []; // 해설 배열

        // PER 점수 (낮을수록 좋음, 10-20이 이상적)
        if (stockData.per && stockData.per > 0) {
            if (stockData.per < 15) {
                score += 25;
                reasons.push({ type: 'positive', text: `PER ${stockData.per.toFixed(1)} - 저평가` });
                explanations.push({
                    type: 'positive',
                    title: 'PER (주가수익비율) 분석',
                    content: `현재 PER이 ${stockData.per.toFixed(1)}로 15 미만의 저평가 상태입니다. 이는 시장이 이 종목의 수익 대비 주가를 낮게 평가하고 있음을 의미하며, 투자 가치가 있는 것으로 판단됩니다. 일반적으로 PER 15 미만은 저평가 구간으로 분류됩니다.`
                });
            } else if (stockData.per < 25) {
                score += 10;
                reasons.push({ type: 'neutral', text: `PER ${stockData.per.toFixed(1)} - 적정가` });
                explanations.push({
                    type: 'neutral',
                    title: 'PER (주가수익비율) 분석',
                    content: `PER이 ${stockData.per.toFixed(1)}로 적정 수준입니다. 시장 평균(15-25) 범위 내에 있어 공정한 평가를 받고 있다고 볼 수 있습니다. 과도한 저평가나 고평가 상태는 아닙니다.`
                });
            } else if (stockData.per < 40) {
                score -= 5;
                reasons.push({ type: 'negative', text: `PER ${stockData.per.toFixed(1)} - 다소 고평가` });
                explanations.push({
                    type: 'negative',
                    title: 'PER (주가수익비율) 분석',
                    content: `PER이 ${stockData.per.toFixed(1)}로 다소 높은 편입니다. 이는 시장이 이 종목에 대해 높은 기대를 하고 있거나, 성장 가능성을 반영한 것으로 해석될 수 있습니다. 투자 시 주의가 필요합니다.`
                });
            } else {
                score -= 15;
                reasons.push({ type: 'negative', text: `PER ${stockData.per.toFixed(1)} - 고평가` });
                explanations.push({
                    type: 'negative',
                    title: 'PER (주가수익비율) 분석',
                    content: `PER이 ${stockData.per.toFixed(1)}로 매우 높은 수준입니다. 이는 주가가 수익 대비 과도하게 높게 형성되어 있음을 의미합니다. 투자 시 리스크가 높을 수 있으니 신중한 판단이 필요합니다.`
                });
            }
        }

        // ROE 점수 (높을수록 좋음, 15% 이상이 우수)
        if (stockData.roe && stockData.roe > 0) {
            if (stockData.roe > 20) {
                score += 20;
                reasons.push({ type: 'positive', text: `ROE ${stockData.roe.toFixed(1)}% - 우수한 수익성` });
                explanations.push({
                    type: 'positive',
                    title: 'ROE (자기자본이익률) 분석',
                    content: `ROE가 ${stockData.roe.toFixed(1)}%로 매우 우수한 수준입니다. 이는 회사가 투자한 자기자본을 효율적으로 활용하여 높은 수익을 창출하고 있음을 의미합니다. 일반적으로 ROE 20% 이상은 우수한 수익성으로 평가됩니다.`
                });
            } else if (stockData.roe > 15) {
                score += 12;
                reasons.push({ type: 'positive', text: `ROE ${stockData.roe.toFixed(1)}% - 양호한 수익성` });
                explanations.push({
                    type: 'positive',
                    title: 'ROE (자기자본이익률) 분석',
                    content: `ROE가 ${stockData.roe.toFixed(1)}%로 양호한 수준입니다. 자기자본 대비 수익 창출 능력이 좋은 편이며, 경영 효율성이 우수하다고 평가할 수 있습니다.`
                });
            } else if (stockData.roe > 10) {
                score += 5;
                reasons.push({ type: 'neutral', text: `ROE ${stockData.roe.toFixed(1)}% - 보통 수익성` });
                explanations.push({
                    type: 'neutral',
                    title: 'ROE (자기자본이익률) 분석',
                    content: `ROE가 ${stockData.roe.toFixed(1)}%로 보통 수준입니다. 자기자본 활용 효율이 평균적인 수준이며, 추가적인 성장 여지가 있을 수 있습니다.`
                });
            } else {
                score -= 8;
                reasons.push({ type: 'negative', text: `ROE ${stockData.roe.toFixed(1)}% - 낮은 수익성` });
                explanations.push({
                    type: 'negative',
                    title: 'ROE (자기자본이익률) 분석',
                    content: `ROE가 ${stockData.roe.toFixed(1)}%로 다소 낮은 편입니다. 자기자본 대비 수익 창출 능력이 제한적일 수 있으며, 경영 효율성 개선이 필요한 상황입니다.`
                });
            }
        }

        // PBR 점수 (낮을수록 좋음, 1-2가 이상적)
        if (stockData.pbr && stockData.pbr > 0) {
            if (stockData.pbr < 1.5) {
                score += 18;
                reasons.push({ type: 'positive', text: `PBR ${stockData.pbr.toFixed(2)} - 저평가` });
                explanations.push({
                    type: 'positive',
                    title: 'PBR (주가순자산비율) 분석',
                    content: `PBR이 ${stockData.pbr.toFixed(2)}로 저평가 상태입니다. 이는 주가가 순자산 대비 낮게 형성되어 있어, 자산 가치 대비 투자 가치가 있는 것으로 판단됩니다. 일반적으로 PBR 1.5 미만은 저평가 구간으로 분류됩니다.`
                });
            } else if (stockData.pbr < 3) {
                score += 8;
                reasons.push({ type: 'neutral', text: `PBR ${stockData.pbr.toFixed(2)} - 적정가` });
                explanations.push({
                    type: 'neutral',
                    title: 'PBR (주가순자산비율) 분석',
                    content: `PBR이 ${stockData.pbr.toFixed(2)}로 적정 수준입니다. 주가가 순자산 대비 합리적인 수준으로 평가되고 있으며, 시장 평균 범위 내에 있습니다.`
                });
            } else {
                score -= 8;
                reasons.push({ type: 'negative', text: `PBR ${stockData.pbr.toFixed(2)} - 고평가` });
                explanations.push({
                    type: 'negative',
                    title: 'PBR (주가순자산비율) 분석',
                    content: `PBR이 ${stockData.pbr.toFixed(2)}로 다소 높은 편입니다. 주가가 순자산 대비 높게 형성되어 있어, 자산 가치 대비 주가가 비싼 상태입니다.`
                });
            }
        }

        // 매출 성장률 (높을수록 좋음)
        if (stockData.revenueGrowth !== null && stockData.revenueGrowth !== undefined) {
            if (stockData.revenueGrowth > 15) {
                score += 15;
                reasons.push({ type: 'positive', text: `매출 성장률 ${stockData.revenueGrowth.toFixed(1)}% - 높은 성장` });
                explanations.push({
                    type: 'positive',
                    title: '매출 성장률 분석',
                    content: `매출 성장률이 ${stockData.revenueGrowth.toFixed(1)}%로 매우 높은 수준입니다. 이는 회사의 사업이 활발하게 성장하고 있음을 의미하며, 향후 수익성 개선 가능성이 높습니다. 성장주로서의 가치가 있다고 평가됩니다.`
                });
            } else if (stockData.revenueGrowth > 5) {
                score += 8;
                reasons.push({ type: 'positive', text: `매출 성장률 ${stockData.revenueGrowth.toFixed(1)}% - 안정적 성장` });
                explanations.push({
                    type: 'positive',
                    title: '매출 성장률 분석',
                    content: `매출 성장률이 ${stockData.revenueGrowth.toFixed(1)}%로 안정적인 성장세를 보이고 있습니다. 지속적인 성장 동력을 가지고 있으며, 안정적인 투자 대상으로 평가할 수 있습니다.`
                });
            } else if (stockData.revenueGrowth > 0) {
                score += 3;
                reasons.push({ type: 'neutral', text: `매출 성장률 ${stockData.revenueGrowth.toFixed(1)}% - 소폭 성장` });
                explanations.push({
                    type: 'neutral',
                    title: '매출 성장률 분석',
                    content: `매출 성장률이 ${stockData.revenueGrowth.toFixed(1)}%로 소폭 성장하고 있습니다. 성장 속도는 완만하지만, 매출이 증가하고 있어 긍정적인 신호로 볼 수 있습니다.`
                });
            } else {
                score -= 12;
                reasons.push({ type: 'negative', text: `매출 성장률 ${stockData.revenueGrowth.toFixed(1)}% - 매출 감소` });
                explanations.push({
                    type: 'negative',
                    title: '매출 성장률 분석',
                    content: `매출 성장률이 ${stockData.revenueGrowth.toFixed(1)}%로 마이너스입니다. 이는 매출이 감소하고 있음을 의미하며, 사업 전망에 대한 우려가 있을 수 있습니다. 추가적인 분석이 필요합니다.`
                });
            }
        }

        // 부채비율 (낮을수록 좋음)
        if (stockData.debtToEquity !== null && stockData.debtToEquity !== undefined) {
            if (stockData.debtToEquity < 50) {
                score += 10;
                reasons.push({ type: 'positive', text: `부채비율 ${stockData.debtToEquity.toFixed(1)}% - 안정적 재무` });
                explanations.push({
                    type: 'positive',
                    title: '부채비율 분석',
                    content: `부채비율이 ${stockData.debtToEquity.toFixed(1)}%로 매우 안정적인 수준입니다. 이는 회사의 재무 구조가 건전하며, 부채 부담이 낮아 재무 안정성이 우수함을 의미합니다.`
                });
            } else if (stockData.debtToEquity < 100) {
                score += 3;
                reasons.push({ type: 'neutral', text: `부채비율 ${stockData.debtToEquity.toFixed(1)}% - 보통` });
                explanations.push({
                    type: 'neutral',
                    title: '부채비율 분석',
                    content: `부채비율이 ${stockData.debtToEquity.toFixed(1)}%로 보통 수준입니다. 재무 구조가 안정적인 범위 내에 있으며, 특별한 우려사항은 없습니다.`
                });
            } else {
                score -= 12;
                reasons.push({ type: 'negative', text: `부채비율 ${stockData.debtToEquity.toFixed(1)}% - 높은 부채` });
                explanations.push({
                    type: 'negative',
                    title: '부채비율 분석',
                    content: `부채비율이 ${stockData.debtToEquity.toFixed(1)}%로 높은 편입니다. 이는 회사의 부채 부담이 크며, 재무 리스크가 있을 수 있음을 의미합니다. 투자 시 신중한 판단이 필요합니다.`
                });
            }
        }

        // 가격 변동률 (최근 상승세는 긍정적)
        if (stockData.changePercent !== null && stockData.changePercent !== undefined) {
            if (stockData.changePercent > 3) {
                score += 8;
                reasons.push({ type: 'positive', text: `최근 ${stockData.changePercent.toFixed(2)}% 상승 - 강한 상승세` });
                explanations.push({
                    type: 'positive',
                    title: '최근 주가 변동 분석',
                    content: `최근 주가가 ${stockData.changePercent.toFixed(2)}% 상승했습니다. 이는 시장의 긍정적인 반응과 함께 강한 상승 모멘텀을 보이고 있음을 의미합니다.`
                });
            } else if (stockData.changePercent > 1) {
                score += 5;
                reasons.push({ type: 'positive', text: `최근 ${stockData.changePercent.toFixed(2)}% 상승 - 상승세` });
                explanations.push({
                    type: 'positive',
                    title: '최근 주가 변동 분석',
                    content: `최근 주가가 ${stockData.changePercent.toFixed(2)}% 상승했습니다. 시장의 긍정적인 반응이 있으며, 상승 추세를 보이고 있습니다.`
                });
            } else if (stockData.changePercent < -3) {
                score -= 8;
                reasons.push({ type: 'negative', text: `최근 ${stockData.changePercent.toFixed(2)}% 하락 - 큰 하락세` });
                explanations.push({
                    type: 'negative',
                    title: '최근 주가 변동 분석',
                    content: `최근 주가가 ${stockData.changePercent.toFixed(2)}% 하락했습니다. 시장의 부정적인 반응이 있으며, 하락 압력이 있는 것으로 보입니다.`
                });
            } else if (stockData.changePercent < -1) {
                score -= 3;
                reasons.push({ type: 'negative', text: `최근 ${stockData.changePercent.toFixed(2)}% 하락 - 하락세` });
                explanations.push({
                    type: 'negative',
                    title: '최근 주가 변동 분석',
                    content: `최근 주가가 ${stockData.changePercent.toFixed(2)}% 하락했습니다. 단기적인 조정이 있을 수 있으며, 추가적인 모니터링이 필요합니다.`
                });
            }
        }

        // 점수 범위 제한 (0-100)
        score = Math.max(0, Math.min(100, score));

        // 종합 평가 해설 추가
        let overallExplanation = '';
        if (score >= 70) {
            overallExplanation = '이 종목은 종합적으로 매우 우수한 투자 가치를 가지고 있습니다. 재무 지표가 전반적으로 양호하며, 성장 가능성과 수익성이 모두 우수한 편입니다. 투자 검토 대상으로 적합합니다.';
        } else if (score >= 55) {
            overallExplanation = '이 종목은 전반적으로 양호한 투자 가치를 가지고 있습니다. 일부 지표에서 개선 여지가 있지만, 전반적인 재무 건전성과 성장 가능성이 우수합니다. 투자 시 참고할 만한 종목입니다.';
        } else if (score >= 40) {
            overallExplanation = '이 종목은 보통 수준의 투자 가치를 가지고 있습니다. 일부 지표가 우수하지만, 일부 지표에서 개선이 필요합니다. 신중한 분석과 추가 검토가 필요합니다.';
        } else {
            overallExplanation = '이 종목은 투자 시 신중한 판단이 필요합니다. 재무 지표나 성장성 측면에서 개선이 필요한 부분이 있으며, 투자 결정 전 충분한 분석과 검토가 필요합니다.';
        }

        explanations.push({
            type: 'overall',
            title: '종합 평가',
            content: overallExplanation
        });

        return { score, reasons, explanations };
    }

    // 뉴스 기반 주식 추천 시스템
    async function collectAndRecommendStocks() {
        console.log('🚀 뉴스 기반 종목 추천 시작');
        
        if (!analyzeBtn) {
            console.error('❌ analyzeBtn이 없습니다!');
            alert('오류: 버튼을 찾을 수 없습니다.');
            return;
        }
        
        console.log('✅ analyzeBtn 찾음, 함수 실행 시작');
        
        const originalBtnText = analyzeBtn.querySelector('.btn-text')?.textContent || analyzeBtn.textContent;
        const progressSection = document.getElementById('progressSection');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const progressPercent = document.getElementById('progressPercent');
        const emptyState = document.getElementById('emptyState');
        const resultsSection = document.getElementById('resultsSection');
        
        // UI 상태 변경
        analyzeBtn.disabled = true;
        if (analyzeBtn.querySelector('.btn-text')) {
            analyzeBtn.querySelector('.btn-text').textContent = '뉴스 분석 중...';
        } else {
            analyzeBtn.textContent = '뉴스 분석 중...';
        }
        
        if (progressSection) {
            progressSection.classList.remove('hidden');
        }
        if (emptyState) {
            emptyState.classList.add('hidden');
        }
        if (resultsSection) {
            resultsSection.classList.add('hidden');
        }

        try {
            // 1단계: 뉴스 기사 수집
            if (progressText) {
                progressText.textContent = '뉴스 기사 수집 중...';
            }
            if (progressBar) {
                progressBar.style.width = '10%';
            }
            
            const newsArticles = await fetchStockNews();
            console.log(`수집된 뉴스: ${newsArticles.length}개`);
            
            // 2단계: 뉴스에서 종목 추출
            if (progressText) {
                progressText.textContent = '종목 추출 중...';
            }
            if (progressBar) {
                progressBar.style.width = '20%';
            }
            
            const extractedSymbols = await extractStocksFromNews(newsArticles);
            console.log(`추출된 종목: ${extractedSymbols.length}개`, extractedSymbols);
            
            // 추출된 종목이 없거나 너무 적으면 기본 종목 사용
            // 추천 수량 가져오기 (함수 시작 부분에서 한 번만 선언)
            let recommendCountSelect = document.getElementById('recommendCount');
            let recommendCount = recommendCountSelect ? parseInt(recommendCountSelect.value) : 10;
            const minStocksToAnalyze = Math.max(recommendCount, 15); // 최소 추천 수량만큼은 분석
            
            // 선택된 시장 타입 확인
            const recommendMarketTypeInput = document.querySelector('input[name="recommendMarketType"]:checked');
            const selectedMarket = recommendMarketTypeInput ? recommendMarketTypeInput.value : 'US';
            console.log(`📊 선택된 시장 타입: ${selectedMarket}`);
            
            // 추출된 종목이 없거나 너무 적으면 기본 종목 사용 (선택된 시장 타입에 따라)
            let symbolsToAnalyze = [];
            if (extractedSymbols.length >= 3) {
                // 추출된 종목 중 선택된 시장 타입만 필터링
                symbolsToAnalyze = extractedSymbols.filter(symbol => {
                    const isKR = symbol.includes('.KS');
                    return selectedMarket === 'KR' ? isKR : !isKR;
                });
                console.log(`📊 뉴스에서 추출된 종목 (${selectedMarket} 필터링): ${symbolsToAnalyze.length}개`);
            }
            
            // 추출된 종목이 부족하면 기본 종목 사용
            if (symbolsToAnalyze.length < recommendCount) {
                // 선택된 시장 타입에 맞는 주식만 선택
                const filteredStocks = stockList.filter(s => s.market === selectedMarket);
                const neededCount = Math.max(recommendCount, minStocksToAnalyze);
                const selectedStocks = filteredStocks.slice(0, Math.min(neededCount, filteredStocks.length));
                
                symbolsToAnalyze = selectedStocks.map(s => s.symbol);
                console.log(`📊 기본 종목 사용 (${selectedMarket}): ${selectedStocks.length}개`);
            }
            
            console.log(`📊 분석할 종목 수: ${symbolsToAnalyze.length}개`);
            console.log(`📋 분석 종목 목록:`, symbolsToAnalyze);
            
            // 미국/한국 종목 분류
            const usCount = symbolsToAnalyze.filter(s => !s.includes('.KS')).length;
            const krCount = symbolsToAnalyze.filter(s => s.includes('.KS')).length;
            console.log(`🇺🇸 미국: ${usCount}개, 🇰🇷 한국: ${krCount}개`);
            
            // 3단계: 추출된 종목 분석
            const recommendations = [];
            const totalStocks = symbolsToAnalyze.length;
            let completedCount = 0;

            // 병렬 처리로 여러 종목을 동시에 분석 (최대 8개 동시)
            const batchSize = 8;
            for (let i = 0; i < totalStocks; i += batchSize) {
                const batch = symbolsToAnalyze.slice(i, i + batchSize);
                
                // 배치 병렬 처리
                const batchPromises = batch.map(async (symbol) => {
                    try {
                        // 종목 정보 찾기
                        const stockInfo = stockList.find(s => s.symbol === symbol) || 
                                        { symbol: symbol, name: symbol, market: symbol.includes('.KS') ? 'KR' : 'US' };
                        
                        // 타임아웃 설정 (10초)
                        const stockData = await Promise.race([
                            fetchStockData(symbol),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('Timeout')), 10000)
                            )
                        ]).catch(err => {
                            console.warn(`⚠️ ${symbol} 데이터 가져오기 실패:`, err.message);
                            return null;
                        });
                        
                        if (stockData) {
                            const { score, reasons, explanations } = calculateRecommendationScore(stockData);
                            
                            // 20일선 계산 (최소한의 데이터만 가져와서 빠르게 계산)
                            let ma20 = null;
                            try {
                                const historicalData = await fetchHistoricalData(symbol, '1mo', '1d').catch(() => null);
                                if (historicalData && historicalData.length >= 20) {
                                    const closes = historicalData.map(d => d.close);
                                    const ma20Array = calculateMA(closes, 20);
                                    // 마지막 유효한 20일선 값 사용
                                    for (let i = ma20Array.length - 1; i >= 0; i--) {
                                        if (ma20Array[i] !== null && ma20Array[i] !== undefined) {
                                            ma20 = ma20Array[i];
                                            break;
                                        }
                                    }
                                }
                            } catch (err) {
                                console.warn(`⚠️ ${symbol} 20일선 계산 실패:`, err.message);
                            }
                            
                            completedCount++;
                            
                            // 진행 상황 업데이트
                            const progress = 20 + Math.round((completedCount / totalStocks) * 70);
                            if (progressBar) {
                                progressBar.style.width = `${progress}%`;
                            }
                            if (progressText) {
                                progressText.textContent = `${stockInfo.name} 분석 중... (${completedCount}/${totalStocks})`;
                            }
                            if (progressPercent) {
                                progressPercent.textContent = `${progress}%`;
                            }
                            
                            // 관련 뉴스 찾기
                            const relatedNews = newsArticles.filter(news => {
                                const text = (news.headline + ' ' + news.summary).toLowerCase();
                                const keywords = stockKeywords[symbol] || [];
                                return keywords.some(kw => text.includes(kw.toLowerCase()));
                            }).slice(0, 3); // 최대 3개
                            
                            return {
                                symbol: symbol,
                                name: stockInfo.name,
                                market: stockInfo.market,
                                price: stockData.price,
                                change: stockData.change,
                                changePercent: stockData.changePercent,
                                volume: stockData.volume,
                                score: score,
                                reasons: reasons,
                                explanations: explanations || [],
                                per: stockData.per,
                                pbr: stockData.pbr,
                                roe: stockData.roe,
                                revenueGrowth: stockData.revenueGrowth,
                                debtToEquity: stockData.debtToEquity,
                                isRealData: stockData.isRealData || false,
                                relatedNews: relatedNews,
                                ma20: ma20
                            };
                        } else {
                            console.warn(`⚠️ ${symbol} (${stockInfo.name}): stockData가 null입니다.`);
                        }
                    } catch (err) {
                        console.warn(`⚠️ ${symbol} 분석 실패:`, err.message || err);
                        completedCount++;
                        // 실패해도 진행 상황 업데이트
                        const progress = 20 + Math.round((completedCount / totalStocks) * 70);
                        if (progressBar) {
                            progressBar.style.width = `${progress}%`;
                        }
                        if (progressText) {
                            progressText.textContent = `${symbol} 분석 실패... (${completedCount}/${totalStocks})`;
                        }
                        if (progressPercent) {
                            progressPercent.textContent = `${progress}%`;
                        }
                    }
                    return null;
                });

                // 배치 결과 대기
                const batchResults = await Promise.all(batchPromises);
                batchResults.forEach(result => {
                    if (result) {
                        recommendations.push(result);
                        console.log(`✅ 분석 완료: ${result.name} (${result.symbol}) - 점수: ${result.score.toFixed(1)}`);
                    }
                });
                
                console.log(`현재까지 수집된 추천 종목: ${recommendations.length}개`);

                // 배치 간 딜레이 (API 제한 방지)
                if (i + batchSize < totalStocks) {
                    await new Promise(resolve => setTimeout(resolve, 50));
                }
            }

            // 선택된 시장 타입에 맞게 필터링
            const filteredRecommendations = recommendations.filter(rec => rec.market === selectedMarket);
            console.log(`📊 시장 타입 필터링 (${selectedMarket}): ${recommendations.length}개 → ${filteredRecommendations.length}개`);
            
            // 점수 기준으로 정렬
            filteredRecommendations.sort((a, b) => b.score - a.score);
            
            // 정렬 후 디버깅 로그
            console.log(`📊 정렬 후 추천 종목 (${selectedMarket}, 총 ${filteredRecommendations.length}개):`);
            filteredRecommendations.forEach((rec, idx) => {
                console.log(`  ${idx + 1}. ${rec.name} (${rec.symbol}): ${rec.score.toFixed(1)}점`);
            });

            // 진행 완료
            if (progressBar) {
                progressBar.style.width = '100%';
            }
            if (progressText) {
                progressText.textContent = '분석 완료!';
            }
            if (progressPercent) {
                progressPercent.textContent = '100%';
            }

            // 추천 수량은 이미 위에서 가져왔으므로 재사용
            // 결과 렌더링 (뉴스 + 추천 종목)
            const finalRecommendations = filteredRecommendations.slice(0, recommendCount);
            console.log(`📊 최종 분석 결과: ${filteredRecommendations.length}개 종목 분석 완료 (${selectedMarket})`);
            console.log(`🎯 최종 추천: ${finalRecommendations.length}개 종목 표시 (요청: ${recommendCount}개)`);
            
            // 최종 추천 종목 로그
            console.log(`🏆 최종 추천 종목 목록 (${selectedMarket}):`);
            finalRecommendations.forEach((rec, idx) => {
                console.log(`  ${idx + 1}. ${rec.name} (${rec.symbol}): ${rec.score.toFixed(1)}점`);
            });
            
            // 제외된 고점수 종목 확인 (디버깅용)
            const excludedHighScore = filteredRecommendations.slice(recommendCount).filter(r => r.score >= 70);
            if (excludedHighScore.length > 0) {
                console.warn(`⚠️ 고점수 종목이 추천 수량 제한으로 제외되었습니다:`);
                excludedHighScore.forEach(rec => {
                    console.warn(`  - ${rec.name} (${rec.symbol}): ${rec.score.toFixed(1)}점`);
                });
            }
            renderNewsBasedRecommendations(newsArticles.slice(0, 10), finalRecommendations);

            // UI 상태 복원
            if (analyzeBtn.querySelector('.btn-text')) {
                analyzeBtn.querySelector('.btn-text').textContent = originalBtnText;
            } else {
                analyzeBtn.textContent = originalBtnText;
            }
            analyzeBtn.disabled = false;
            
            if (progressSection) {
                setTimeout(() => {
                    progressSection.classList.add('hidden');
                }, 1000);
            }
            if (resultsSection) {
                resultsSection.classList.remove('hidden');
            }

        } catch (err) {
            console.error("❌ Error collecting stocks:", err);
            console.error("에러 상세:", err.stack);
            alert(`오류가 발생했습니다: ${err.message || "알 수 없는 오류"}\n\n콘솔(F12)에서 자세한 내용을 확인하세요.`);
            
            // UI 상태 복원
            if (analyzeBtn) {
                if (analyzeBtn.querySelector('.btn-text')) {
                    analyzeBtn.querySelector('.btn-text').textContent = originalBtnText;
                } else {
                    analyzeBtn.textContent = originalBtnText;
                }
                analyzeBtn.disabled = false;
            }
            if (progressSection) {
                progressSection.classList.add('hidden');
            }
        }
    }

    // 뉴스 기반 추천 종목 렌더링 (뉴스 + 상세 정보)
    function renderNewsBasedRecommendations(newsArticles, recommendations) {
        const resultsSection = document.getElementById('resultsSection');
        if (!resultsSection) return;

        // 상단: 뉴스 섹션
        let newsHTML = `
            <div class="news-section">
                <div class="section-header-modern">
                    <h2 class="section-title">📰 주요 뉴스 기사</h2>
                    <p class="section-description">최근 주식 시장 관련 뉴스입니다</p>
                </div>
                <div class="news-grid">
        `;

        newsArticles.forEach((news, index) => {
            const date = news.publishTime ? new Date(news.publishTime * 1000).toLocaleDateString('ko-KR') : '최근';
            newsHTML += `
                <div class="news-card">
                    <div class="news-header">
                        <span class="news-source">${news.source}</span>
                        <span class="news-date">${date}</span>
                    </div>
                    <h3 class="news-title">${news.headline}</h3>
                    ${news.summary ? `<p class="news-summary">${news.summary.substring(0, 150)}...</p>` : ''}
                    ${news.url ? `<a href="${news.url}" target="_blank" rel="noopener" class="news-link">기사 보기 →</a>` : ''}
                </div>
            `;
        });

        newsHTML += `
                </div>
            </div>
        `;

        // 중간: 추천 종목 요약
        let summaryHTML = `
            <div class="recommendations-summary">
                <div class="section-header-modern">
                    <h2 class="section-title">🎯 추천 종목 TOP ${recommendations.length}</h2>
                    <p class="section-description">뉴스 기반 분석으로 선정된 추천 종목입니다 (총 ${recommendations.length}개 분석됨)</p>
                </div>
                <div class="summary-grid">
        `;

        recommendations.forEach((rec, index) => {
            const marketFlag = rec.market === 'KR' ? '🇰🇷' : '🇺🇸';
            const marketText = rec.market === 'KR' ? '한국' : '미국';
            const changeClass = rec.changePercent >= 0 ? 'positive' : 'negative';
            const changeSign = rec.changePercent >= 0 ? '+' : '';
            
            // 가격 포맷팅 (한국: 원, 미국: 달러)
            const formatPrice = (price) => {
                if (typeof price !== 'number') return price;
                if (rec.market === 'KR') {
                    // 한국 주식: 원화, 소수점 없이, 천단위 구분
                    return '₩' + Math.round(price).toLocaleString('ko-KR');
                } else {
                    // 미국 주식: 달러, 소수점 2자리, 천단위 구분
                    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            };
            
            const formatMA20 = (ma20) => {
                if (ma20 === null || ma20 === undefined) return '';
                if (rec.market === 'KR') {
                    return '₩' + Math.round(ma20).toLocaleString('ko-KR');
                } else {
                    return '$' + ma20.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            };
            
            summaryHTML += `
                <div class="summary-card ${rec.score >= 60 ? 'high' : rec.score >= 30 ? 'medium' : 'low'}">
                    <div class="summary-rank">#${index + 1}</div>
                    <div class="summary-info">
                        <div class="summary-header">
                            <span class="summary-flag">${marketFlag}</span>
                            <span class="summary-market-badge ${rec.market === 'KR' ? 'market-kr' : 'market-us'}">${marketText}</span>
                            <span class="summary-name">${rec.name}</span>
                            <span class="summary-symbol">${rec.symbol}</span>
                        </div>
                        <div class="summary-score">추천 점수: <strong>${rec.score.toFixed(1)}</strong></div>
                        <div class="summary-price">
                            <span class="price-value">${formatPrice(rec.price)}</span>
                            <span class="price-change ${changeClass}">${changeSign}${rec.changePercent.toFixed(2)}%</span>
                        </div>
                        ${rec.ma20 !== null && rec.ma20 !== undefined ? `
                        <div class="summary-ma20">
                            <span class="ma20-label">20일선:</span>
                            <span class="ma20-value">${formatMA20(rec.ma20)}</span>
                            <span class="trading-signal ${rec.price < rec.ma20 ? 'buy-signal' : 'wait-signal'}" style="font-weight: 600; margin-left: 0.5rem;">
                                ${rec.price < rec.ma20 ? 'BUY' : 'WAIT'}
                            </span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });

        summaryHTML += `
                </div>
            </div>
        `;

        // 하단: 상세 정보
        let detailsHTML = `
            <div class="details-section">
                <div class="section-header-modern">
                    <h2 class="section-title">📊 종목별 상세 분석</h2>
                    <p class="section-description">재무 지표, 주가 정보 및 추천 근거를 확인하세요</p>
                </div>
                <div class="details-grid">
        `;

        recommendations.forEach((rec, index) => {
            const marketFlag = rec.market === 'KR' ? '🇰🇷' : '🇺🇸';
            const marketText = rec.market === 'KR' ? '한국' : '미국';
            
            // 가격 포맷팅 (한국: 원, 미국: 달러)
            const formatPrice = (price) => {
                if (typeof price !== 'number') return price;
                if (rec.market === 'KR') {
                    // 한국 주식: 원화, 소수점 없이, 천단위 구분
                    return '₩' + Math.round(price).toLocaleString('ko-KR');
                } else {
                    // 미국 주식: 달러, 소수점 2자리, 천단위 구분
                    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            };
            
            const formatMA20 = (ma20) => {
                if (ma20 === null || ma20 === undefined) return '';
                if (rec.market === 'KR') {
                    return '₩' + Math.round(ma20).toLocaleString('ko-KR');
                } else {
                    return '$' + ma20.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            };
            
            const changeClass = rec.changePercent >= 0 ? 'positive' : 'negative';
            const changeSign = rec.changePercent >= 0 ? '+' : '';

            detailsHTML += `
                <div class="detail-card ${rec.score >= 60 ? 'high-score' : rec.score >= 30 ? 'medium-score' : 'low-score'}">
                    <div class="detail-header">
                        <div class="detail-title-section">
                            <span class="detail-rank">#${index + 1}</span>
                            <span class="detail-flag">${marketFlag}</span>
                            <span class="detail-market-badge ${rec.market === 'KR' ? 'market-kr' : 'market-us'}">${marketText}</span>
                            <div class="detail-name-group">
                                <h3 class="detail-name">${rec.name}</h3>
                                <span class="detail-symbol">${rec.symbol}</span>
                            </div>
                        </div>
                        <div class="detail-score-badge score-${rec.score >= 60 ? 'high' : rec.score >= 30 ? 'medium' : 'low'}">
                            ${rec.score.toFixed(1)}점
                        </div>
                    </div>

                    <div class="detail-content">
                        <!-- 주가 정보 -->
                        <div class="detail-section">
                            <h4 class="detail-section-title">💰 주가 정보</h4>
                            <div class="detail-metrics-grid">
                                <div class="detail-metric">
                                    <span class="metric-label">현재가</span>
                                    <span class="metric-value">${formatPrice(rec.price)}</span>
                                </div>
                                <div class="detail-metric">
                                    <span class="metric-label">변동률</span>
                                    <span class="metric-value ${changeClass}">${changeSign}${rec.changePercent.toFixed(2)}%</span>
                                </div>
                                ${rec.volume ? `
                                <div class="detail-metric">
                                    <span class="metric-label">거래량</span>
                                    <span class="metric-value">${rec.volume.toLocaleString()}</span>
                                </div>
                                ` : ''}
                                ${rec.ma20 !== null && rec.ma20 !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">20일선</span>
                                    <span class="metric-value">${formatMA20(rec.ma20)}</span>
                                </div>
                                <div class="detail-metric">
                                    <span class="metric-label">매매 신호</span>
                                    <span class="metric-value ${rec.price < rec.ma20 ? 'buy-signal' : 'wait-signal'}" style="font-weight: 600;">
                                        ${rec.price < rec.ma20 ? 'BUY' : 'WAIT'}
                                    </span>
                                </div>
                                ` : ''}
                            </div>
                        </div>

                        <!-- 재무 지표 -->
                        <div class="detail-section">
                            <h4 class="detail-section-title">📈 재무 지표</h4>
                            <div class="detail-metrics-grid">
                                ${rec.per !== null && rec.per !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">PER</span>
                                    <span class="metric-value">${rec.per.toFixed(2)}</span>
                                </div>
                                ` : ''}
                                ${rec.pbr !== null && rec.pbr !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">PBR</span>
                                    <span class="metric-value">${rec.pbr.toFixed(2)}</span>
                                </div>
                                ` : ''}
                                ${rec.roe !== null && rec.roe !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">ROE</span>
                                    <span class="metric-value">${rec.roe.toFixed(2)}%</span>
                                </div>
                                ` : ''}
                                ${rec.revenueGrowth !== null && rec.revenueGrowth !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">매출 성장률</span>
                                    <span class="metric-value">${rec.revenueGrowth.toFixed(2)}%</span>
                                </div>
                                ` : ''}
                                ${rec.debtToEquity !== null && rec.debtToEquity !== undefined ? `
                                <div class="detail-metric">
                                    <span class="metric-label">부채비율</span>
                                    <span class="metric-value">${rec.debtToEquity.toFixed(2)}%</span>
                                </div>
                                ` : ''}
                            </div>
                        </div>

                        <!-- 추천 근거 -->
                        <div class="detail-section">
                            <h4 class="detail-section-title">🎯 추천 근거</h4>
                            <div class="reasons-list">
                                ${rec.reasons.map(reason => `
                                    <div class="reason-item reason-${reason.type}">
                                        <span class="reason-icon">${reason.type === 'positive' ? '✅' : reason.type === 'negative' ? '⚠️' : 'ℹ️'}</span>
                                        <span class="reason-text">${reason.text}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 상세 해설 -->
                        ${rec.explanations && rec.explanations.length > 0 ? `
                        <div class="detail-section">
                            <h4 class="detail-section-title">📖 상세 해설</h4>
                            <div class="explanations-list">
                                ${rec.explanations.map(exp => `
                                    <div class="explanation-item explanation-${exp.type}">
                                        <div class="explanation-header">
                                            <span class="explanation-icon">${exp.type === 'positive' ? '✅' : exp.type === 'negative' ? '⚠️' : exp.type === 'overall' ? '📊' : 'ℹ️'}</span>
                                            <h5 class="explanation-title">${exp.title}</h5>
                                        </div>
                                        <p class="explanation-content">${exp.content}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}

                        <!-- 관련 뉴스 -->
                        ${rec.relatedNews && rec.relatedNews.length > 0 ? `
                        <div class="detail-section">
                            <h4 class="detail-section-title">📰 관련 뉴스</h4>
                            <div class="related-news-list">
                                ${rec.relatedNews.map(news => `
                                    <div class="related-news-item">
                                        <a href="${news.url || '#'}" target="_blank" rel="noopener" class="related-news-link">
                                            <span class="related-news-title">${news.headline}</span>
                                            <span class="related-news-source">${news.source}</span>
                                        </a>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}

                        <!-- 데이터 소스 및 차트 버튼 -->
                        <div class="detail-footer">
                            <span class="data-badge ${rec.isRealData ? 'data-badge-real' : 'data-badge-sim'}">
                                ${rec.isRealData ? '✅ 실제 데이터' : '🔮 시뮬레이션'}
                            </span>
                            <button class="chart-btn" data-symbol="${rec.symbol}" data-name="${rec.name}">
                                📈 차트 분석
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        detailsHTML += `
                </div>
            </div>
        `;

        // 전체 HTML 조합
        resultsSection.innerHTML = newsHTML + summaryHTML + detailsHTML;
        
        // 동적으로 생성된 차트 버튼에 이벤트 리스너 추가
        const chartButtons = resultsSection.querySelectorAll('.chart-btn');
        console.log(`📊 생성된 차트 버튼 수: ${chartButtons.length}`);
        chartButtons.forEach(btn => {
            // 기존 이벤트 리스너 제거 (중복 방지)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            // 새 이벤트 리스너 추가
            newBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const symbol = newBtn.dataset.symbol;
                const name = newBtn.dataset.name || symbol;
                
                console.log('🎯 차트 버튼 직접 클릭:', { symbol, name });
                
                if (symbol) {
                    try {
                        console.log('🚀 renderChart 호출 시작 (직접 바인딩)...');
                        await renderChart(symbol, name);
                        console.log('✅ renderChart 완료 (직접 바인딩)');
                    } catch (error) {
                        console.error('❌ 차트 렌더링 오류:', error);
                        console.error('❌ 에러 스택:', error.stack);
                        alert(`차트를 불러오는 중 오류가 발생했습니다: ${error.message}`);
                    }
                } else {
                    console.error('❌ 차트 버튼에 symbol이 없습니다', newBtn);
                }
            }, true); // capture phase에서 처리
        });
        console.log('✅ 차트 버튼 이벤트 리스너 직접 바인딩 완료');
    }

    // 추천 종목 렌더링 (기존 함수 - 호환성 유지)
    function renderRecommendations(recommendations) {
        const resultsGrid = document.getElementById('resultsGrid');
        if (!resultsGrid) return;

        resultsGrid.innerHTML = '';

        recommendations.forEach((rec, index) => {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            
            // 점수에 따라 카드 스타일 결정
            if (rec.score >= 60) {
                card.classList.add('high-score');
            } else if (rec.score >= 30) {
                card.classList.add('medium-score');
            } else {
                card.classList.add('low-score');
            }

            const marketFlag = rec.market === 'KR' ? '🇰🇷' : '🇺🇸';
            const rankNumber = index + 1;
            const rankIcon = index < 3 ? '🏆' : '';

            const priceValue = typeof rec.price === 'number' 
                ? rec.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : rec.price;
            
            const changeClass = rec.changePercent >= 0 ? 'positive' : 'negative';
            const changeSign = rec.changePercent >= 0 ? '+' : '';

            card.innerHTML = `
                <div class="card-header">
                    <div class="card-title-section">
                        <div class="card-rank">${rankIcon || `#${rankNumber}`}</div>
                        <div class="card-name">${rec.name}</div>
                        <div class="card-symbol">
                            <span class="card-market">${marketFlag}</span>
                            <span>${rec.symbol}</span>
                            ${rec.isRealData ? '<span class="data-badge-real" title="실제 재무 데이터">📊 실제</span>' : '<span class="data-badge-sim" title="시뮬레이션 데이터">📈 시뮬</span>'}
                        </div>
                    </div>
                    <div class="card-score-section">
                        <div class="card-score">${rec.score}</div>
                        <div class="card-score-label">추천 점수</div>
                        <div class="card-price-section">
                            <span class="card-price">$${priceValue}</span>
                            <span class="card-change ${changeClass}">
                                ${changeSign}${rec.changePercent.toFixed(2)}%
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="card-reasons">
                    <div class="reasons-title">추천 이유</div>
                    <div class="reasons-list">
                        ${rec.reasons.map(reason => {
                            const icon = reason.type === 'positive' ? '✅' : 
                                        reason.type === 'negative' ? '⚠️' : 'ℹ️';
                            return `
                                <div class="reason-item ${reason.type}">
                                    <span class="reason-icon">${icon}</span>
                                    <span class="reason-text">${reason.text}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="card-metrics">
                    ${rec.per ? `
                        <div class="metric-item">
                            <div class="metric-label">PER</div>
                            <div class="metric-value">${rec.per.toFixed(1)}</div>
                        </div>
                    ` : ''}
                    ${rec.pbr ? `
                        <div class="metric-item">
                            <div class="metric-label">PBR</div>
                            <div class="metric-value">${rec.pbr.toFixed(2)}</div>
                        </div>
                    ` : ''}
                    ${rec.roe ? `
                        <div class="metric-item">
                            <div class="metric-label">ROE</div>
                            <div class="metric-value">${rec.roe.toFixed(1)}%</div>
                        </div>
                    ` : ''}
                    ${rec.revenueGrowth ? `
                        <div class="metric-item">
                            <div class="metric-label">매출 성장</div>
                            <div class="metric-value">${rec.revenueGrowth.toFixed(1)}%</div>
                        </div>
                    ` : ''}
                </div>
            `;

            resultsGrid.appendChild(card);
        });

        // 결과 섹션으로 스크롤
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection) {
            setTimeout(() => {
                resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }

    // 개별 종목 검색/분석 함수
    async function searchAndAnalyzeStock(symbol) {
        if (!symbol || !symbol.trim()) {
            alert('종목 코드를 입력해주세요.');
            return;
        }
        
        symbol = symbol.trim().toUpperCase();
        
        // 선택된 시장 타입 확인
        const marketTypeInput = document.querySelector('input[name="marketType"]:checked');
        const marketType = marketTypeInput ? marketTypeInput.value : 'US';
        
        // 한국 주식인 경우 .KS 추가
        if (marketType === 'KR') {
            // .KS가 없으면 추가
            if (!symbol.includes('.KS')) {
                symbol = symbol + '.KS';
            }
        } else {
            // 미국 주식인 경우 .KS 제거
            symbol = symbol.replace('.KS', '');
        }
        
        console.log(`🔍 개별 종목 분석 시작: ${symbol} (시장: ${marketType})`);
        
        const progressSection = document.getElementById('progressSection');
        const progressBar = document.getElementById('progressBar');
        const progressText = document.getElementById('progressText');
        const progressPercent = document.getElementById('progressPercent');
        const emptyState = document.getElementById('emptyState');
        const resultsSection = document.getElementById('resultsSection');
        
        // UI 상태 변경
        if (searchStockBtn) {
            searchStockBtn.disabled = true;
            if (searchStockBtn.querySelector('.btn-text')) {
                searchStockBtn.querySelector('.btn-text').textContent = '분석 중...';
            }
        }
        
        if (progressSection) {
            progressSection.classList.remove('hidden');
        }
        if (emptyState) {
            emptyState.classList.add('hidden');
        }
        if (resultsSection) {
            resultsSection.classList.add('hidden');
        }
        
        try {
            // 진행률 업데이트
            if (progressText) {
                progressText.textContent = `${symbol} 데이터 수집 중...`;
            }
            if (progressBar) {
                progressBar.style.width = '30%';
            }
            if (progressPercent) {
                progressPercent.textContent = '30%';
            }
            
            // 종목 정보 찾기
            const marketType = symbol.includes('.KS') ? 'KR' : 'US';
            const stockInfo = stockList.find(s => s.symbol === symbol) || 
                            { symbol: symbol, name: symbol, market: marketType };
            
            // 주식 데이터 가져오기
            if (progressText) {
                progressText.textContent = `${symbol} 주가 데이터 가져오는 중...`;
            }
            if (progressBar) {
                progressBar.style.width = '50%';
            }
            if (progressPercent) {
                progressPercent.textContent = '50%';
            }
            
            const stockData = await Promise.race([
                fetchStockData(symbol),
                new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Timeout')), 15000)
                )
            ]).catch(err => {
                console.error(`❌ ${symbol} 데이터 가져오기 실패:`, err.message);
                throw new Error(`종목 데이터를 가져올 수 없습니다: ${err.message}`);
            });
            
            if (!stockData) {
                throw new Error('종목 데이터를 가져올 수 없습니다.');
            }
            
            // 점수 계산
            if (progressText) {
                progressText.textContent = `${symbol} 분석 중...`;
            }
            if (progressBar) {
                progressBar.style.width = '70%';
            }
            if (progressPercent) {
                progressPercent.textContent = '70%';
            }
            
            const { score, reasons, explanations } = calculateRecommendationScore(stockData);
            
            // 20일선 계산
            if (progressText) {
                progressText.textContent = `${symbol} 20일선 계산 중...`;
            }
            if (progressBar) {
                progressBar.style.width = '85%';
            }
            if (progressPercent) {
                progressPercent.textContent = '85%';
            }
            
            let ma20 = null;
            try {
                const historicalData = await fetchHistoricalData(symbol, '1mo', '1d').catch(() => null);
                if (historicalData && historicalData.length >= 20) {
                    const closes = historicalData.map(d => d.close);
                    const ma20Array = calculateMA(closes, 20);
                    for (let i = ma20Array.length - 1; i >= 0; i--) {
                        if (ma20Array[i] !== null && ma20Array[i] !== undefined) {
                            ma20 = ma20Array[i];
                            break;
                        }
                    }
                }
            } catch (maError) {
                console.warn(`⚠️ ${symbol} 20일선 계산 실패:`, maError.message);
            }
            
            // 추천 객체 생성
            const recommendation = {
                symbol: symbol,
                name: stockInfo.name,
                market: stockInfo.market,
                price: stockData.price,
                change: stockData.change,
                changePercent: stockData.changePercent,
                volume: stockData.volume,
                score: score,
                reasons: reasons,
                explanations: explanations || [],
                per: stockData.per,
                pbr: stockData.pbr,
                roe: stockData.roe,
                revenueGrowth: stockData.revenueGrowth,
                debtToEquity: stockData.debtToEquity,
                isRealData: stockData.isRealData || false,
                relatedNews: [],
                ma20: ma20
            };
            
            // 진행률 완료
            if (progressBar) {
                progressBar.style.width = '100%';
            }
            if (progressPercent) {
                progressPercent.textContent = '100%';
            }
            
            // 결과 렌더링 (개별 종목용)
            renderSingleStockAnalysis(recommendation);
            
            // 결과 섹션 표시
            if (resultsSection) {
                resultsSection.classList.remove('hidden');
            }
            if (progressSection) {
                progressSection.classList.add('hidden');
            }
            
        } catch (error) {
            console.error('❌ 개별 종목 분석 오류:', error);
            alert(`종목 분석 중 오류가 발생했습니다:\n${error.message}`);
            
            // UI 복원
            if (searchStockBtn) {
                searchStockBtn.disabled = false;
                if (searchStockBtn.querySelector('.btn-text')) {
                    searchStockBtn.querySelector('.btn-text').textContent = '종목 분석';
                }
            }
            if (progressSection) {
                progressSection.classList.add('hidden');
            }
        } finally {
            // UI 복원
            if (searchStockBtn) {
                searchStockBtn.disabled = false;
                if (searchStockBtn.querySelector('.btn-text')) {
                    searchStockBtn.querySelector('.btn-text').textContent = '종목 분석';
                }
            }
        }
    }
    
    // 개별 종목 분석 결과 렌더링
    function renderSingleStockAnalysis(recommendation) {
        const resultsSection = document.getElementById('resultsSection');
        if (!resultsSection) return;
        
        const marketFlag = recommendation.market === 'KR' ? '🇰🇷' : '🇺🇸';
        const marketText = recommendation.market === 'KR' ? '한국' : '미국';
        
        // 가격 포맷팅
        const formatPrice = (price) => {
            if (typeof price !== 'number') return price;
            if (recommendation.market === 'KR') {
                return '₩' + Math.round(price).toLocaleString('ko-KR');
            } else {
                return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
        };
        
        const formatMA20 = (ma20) => {
            if (ma20 === null || ma20 === undefined) return '';
            if (recommendation.market === 'KR') {
                return '₩' + Math.round(ma20).toLocaleString('ko-KR');
            } else {
                return '$' + ma20.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
        };
        
        const changeClass = recommendation.changePercent >= 0 ? 'positive' : 'negative';
        const changeSign = recommendation.changePercent >= 0 ? '+' : '';
        
        // 기존 renderNewsBasedRecommendations와 유사한 구조로 렌더링
        let html = `
            <div class="single-stock-section">
                <div class="section-header-modern">
                    <h2 class="section-title">📊 종목 분석 결과</h2>
                    <p class="section-description">${recommendation.name} (${recommendation.symbol}) 상세 분석</p>
                </div>
                
                <div class="details-grid">
                    <div class="detail-card ${recommendation.score >= 60 ? 'high-score' : recommendation.score >= 30 ? 'medium-score' : 'low-score'}">
                        <div class="detail-header">
                            <div class="detail-title-section">
                                <span class="detail-flag">${marketFlag}</span>
                                <span class="detail-market-badge ${recommendation.market === 'KR' ? 'market-kr' : 'market-us'}">${marketText}</span>
                                <div class="detail-name-group">
                                    <h3 class="detail-name">${recommendation.name}</h3>
                                    <span class="detail-symbol">${recommendation.symbol}</span>
                                </div>
                            </div>
                            <div class="detail-score-badge score-${recommendation.score >= 60 ? 'high' : recommendation.score >= 30 ? 'medium' : 'low'}">
                                ${recommendation.score.toFixed(1)}점
                            </div>
                        </div>

                        <div class="detail-content">
                            <!-- 주가 정보 -->
                            <div class="detail-section">
                                <h4 class="detail-section-title">💰 주가 정보</h4>
                                <div class="detail-metrics-grid">
                                    <div class="detail-metric">
                                        <span class="metric-label">현재가</span>
                                        <span class="metric-value">${formatPrice(recommendation.price)}</span>
                                    </div>
                                    <div class="detail-metric">
                                        <span class="metric-label">변동률</span>
                                        <span class="metric-value ${changeClass}">${changeSign}${recommendation.changePercent.toFixed(2)}%</span>
                                    </div>
                                    ${recommendation.volume ? `
                                    <div class="detail-metric">
                                        <span class="metric-label">거래량</span>
                                        <span class="metric-value">${recommendation.volume.toLocaleString()}</span>
                                    </div>
                                    ` : ''}
                                    ${recommendation.ma20 !== null && recommendation.ma20 !== undefined ? `
                                    <div class="detail-metric">
                                        <span class="metric-label">20일선</span>
                                        <span class="metric-value">${formatMA20(recommendation.ma20)}</span>
                                    </div>
                                    <div class="detail-metric">
                                        <span class="metric-label">매매 신호</span>
                                        <span class="metric-value ${recommendation.price < recommendation.ma20 ? 'buy-signal' : 'wait-signal'}" style="font-weight: 600;">
                                            ${recommendation.price < recommendation.ma20 ? 'BUY' : 'WAIT'}
                                        </span>
                                    </div>
                                    ` : ''}
                                </div>
                            </div>
        `;
        
        // 재무 지표 섹션 (기존 코드와 동일)
        html += `
                            <!-- 재무 지표 -->
                            <div class="detail-section">
                                <h4 class="detail-section-title">📈 재무 지표</h4>
                                <div class="detail-metrics-grid">
        `;
        
        if (recommendation.per !== null && recommendation.per !== undefined) {
            html += `
                                    <div class="detail-metric">
                                        <span class="metric-label">PER</span>
                                        <span class="metric-value">${recommendation.per.toFixed(2)}</span>
                                    </div>
            `;
        }
        
        if (recommendation.pbr !== null && recommendation.pbr !== undefined) {
            html += `
                                    <div class="detail-metric">
                                        <span class="metric-label">PBR</span>
                                        <span class="metric-value">${recommendation.pbr.toFixed(2)}</span>
                                    </div>
            `;
        }
        
        if (recommendation.roe !== null && recommendation.roe !== undefined) {
            html += `
                                    <div class="detail-metric">
                                        <span class="metric-label">ROE</span>
                                        <span class="metric-value">${recommendation.roe.toFixed(2)}%</span>
                                    </div>
            `;
        }
        
        if (recommendation.revenueGrowth !== null && recommendation.revenueGrowth !== undefined) {
            html += `
                                    <div class="detail-metric">
                                        <span class="metric-label">매출 성장률</span>
                                        <span class="metric-value ${recommendation.revenueGrowth >= 0 ? 'positive' : 'negative'}">${recommendation.revenueGrowth >= 0 ? '+' : ''}${recommendation.revenueGrowth.toFixed(2)}%</span>
                                    </div>
            `;
        }
        
        if (recommendation.debtToEquity !== null && recommendation.debtToEquity !== undefined) {
            html += `
                                    <div class="detail-metric">
                                        <span class="metric-label">부채비율</span>
                                        <span class="metric-value">${recommendation.debtToEquity.toFixed(2)}%</span>
                                    </div>
            `;
        }
        
        html += `
                                </div>
                            </div>
        `;
        
        // 추천 근거 섹션
        if (recommendation.reasons && recommendation.reasons.length > 0) {
            html += `
                            <!-- 추천 근거 -->
                            <div class="detail-section">
                                <h4 class="detail-section-title">💡 추천 근거</h4>
                                <div class="reasons-list">
            `;
            
            recommendation.reasons.forEach(reason => {
                html += `
                                    <div class="reason-item ${reason.type}">
                                        <span class="reason-icon">${reason.type === 'positive' ? '✅' : reason.type === 'negative' ? '⚠️' : 'ℹ️'}</span>
                                        <span class="reason-text">${reason.text}</span>
                                    </div>
                `;
            });
            
            html += `
                                </div>
                            </div>
            `;
        }
        
        // 차트 분석 버튼
        html += `
                            <div class="detail-footer">
                                <button class="chart-btn" data-symbol="${recommendation.symbol}" data-name="${recommendation.name}">
                                    📈 차트 분석
                                </button>
                                <span class="data-badge ${recommendation.isRealData ? 'data-badge-real' : 'data-badge-sim'}">
                                    ${recommendation.isRealData ? '✅ 실제 데이터' : '🔮 시뮬레이션'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        resultsSection.innerHTML = html;
        
        // 차트 버튼 이벤트 리스너 재등록
        initChartButtonHandler();
    }
    
    // 테마 토글 함수 정의 (먼저 정의)
    function updateThemeButton(theme) {
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
            themeBtn.setAttribute('aria-label', theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
            themeBtn.title = theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환';
            console.log('🎨 테마 버튼 업데이트:', theme, '아이콘:', themeBtn.textContent);
        } else {
            console.error('❌ 테마 버튼을 찾을 수 없습니다');
        }
    }

    // 테마 토글 버튼 이벤트 (즉시 등록)
    function setupThemeToggle() {
        const themeToggleBtn = document.getElementById('themeToggle');
        if (!themeToggleBtn) {
            console.error('❌ 테마 토글 버튼을 찾을 수 없습니다');
            return;
        }
        
        // 초기 테마 설정
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeButton(savedTheme);
        
        // 기존 이벤트 리스너 제거 (중복 방지)
        const newThemeBtn = themeToggleBtn.cloneNode(true);
        themeToggleBtn.parentNode.replaceChild(newThemeBtn, themeToggleBtn);
        
        newThemeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            try {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                console.log('🎨 테마 전환:', currentTheme, '→', newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                updateThemeButton(newTheme);
                console.log('✅ 테마 전환 완료:', newTheme);
            } catch (error) {
                console.error('❌ 테마 전환 오류:', error);
            }
        });
        console.log('✅ 테마 토글 버튼 이벤트 리스너 등록 완료');
    }
    
    // 테마 토글 설정 실행
    setupThemeToggle();

    // 개별 종목 검색 버튼 이벤트
    if (searchStockBtn && stockSearchInput) {
        // 검색 버튼 클릭
        searchStockBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const symbol = stockSearchInput.value.trim();
            if (!symbol) {
                alert('종목 코드를 입력해주세요.');
                stockSearchInput.focus();
                return;
            }
            await searchAndAnalyzeStock(symbol);
        });
        
        // Enter 키 입력
        stockSearchInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const symbol = stockSearchInput.value.trim();
                if (!symbol) {
                    alert('종목 코드를 입력해주세요.');
                    return;
                }
                await searchAndAnalyzeStock(symbol);
            }
        });
    }

    // 버튼 클릭 이벤트 변경
    // 버튼 클릭 이벤트 등록
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔘 버튼 클릭됨! collectAndRecommendStocks 실행');
            
            // 즉시 UI 피드백
            analyzeBtn.style.opacity = '0.7';
            analyzeBtn.style.cursor = 'wait';
            
            try {
                await collectAndRecommendStocks();
            } catch (error) {
                console.error('❌ collectAndRecommendStocks 실행 중 에러:', error);
                alert(`오류 발생: ${error.message || '알 수 없는 오류'}\n콘솔(F12)을 확인하세요.`);
            } finally {
                // UI 복원
                if (analyzeBtn) {
                    analyzeBtn.style.opacity = '1';
                    analyzeBtn.style.cursor = 'pointer';
                }
            }
        });
        console.log('✅ analyzeBtn 이벤트 리스너 등록 완료');
    } else {
        console.error('❌ analyzeBtn을 찾을 수 없습니다! HTML에 버튼이 있는지 확인하세요.');
    }

    async function fetchRealNews(ticker) {
        try {
            // Use the search API to get news for the ticker
            const targetUrl = `${BASE_URL}/v1/finance/search?q=${ticker}&quotesCount=0&newsCount=5`;
            const data = await fetchWithProxy(targetUrl);

            if (data.news && data.news.length > 0) {
                return data.news.map(item => {
                    // Parse date safely - try multiple formats
                    let dateStr = '';
                    try {
                        // Try provider_publish_time (Unix timestamp)
                        if (item.provider_publish_time && typeof item.provider_publish_time === 'number') {
                            const date = new Date(item.provider_publish_time * 1000);
                            if (date instanceof Date && !isNaN(date)) {
                                dateStr = formatNewsDate(date);
                            }
                        }
                        // Try providerPublishTime (string or number)
                        if (!dateStr && item.providerPublishTime) {
                            const timestamp = typeof item.providerPublishTime === 'string' 
                                ? parseInt(item.providerPublishTime) 
                                : item.providerPublishTime;
                            const date = new Date(timestamp * 1000);
                            if (date instanceof Date && !isNaN(date)) {
                                dateStr = formatNewsDate(date);
                            }
                        }
                        // Try publish_time
                        if (!dateStr && item.publish_time) {
                            const date = new Date(item.publish_time);
                            if (date instanceof Date && !isNaN(date)) {
                                dateStr = formatNewsDate(date);
                            }
                        }
                    } catch (e) {
                        console.warn('Date parsing error:', e);
                    }
                    
                    // Fallback to relative time or today
                    if (!dateStr || dateStr === 'Invalid Date') {
                        dateStr = getRelativeTime();
                    }

                    return {
                        source: item.publisher || item.provider_name || 'Yahoo Finance',
                        headline: item.title,
                        headlineOriginal: item.title,
                        summary: item.type || 'News',
                        date: dateStr,
                        url: item.link
                    };
                });
            }
            return generateMockNews(ticker);
        } catch (e) {
            console.warn("News fetch failed, using mock:", e);
            return generateMockNews(ticker);
        }
    }

    // Generate Korean summary for news headlines
    function summarizeHeadline(headline, lang) {
        if (lang === 'en') return headline;
        
        const lowerHeadline = headline.toLowerCase();
        
        // Pattern-based summary generation
        const patterns = [
            // Price movements
            { pattern: /(?:stock|shares?)\s+(?:rises?|jumps?|surges?|gains?|soars?)/i, 
              summary: { ko: '📈 주가 상승 소식', ja: '📈 株価上昇', zh: '📈 股价上涨', es: '📈 Acción sube' }},
            { pattern: /(?:stock|shares?)\s+(?:falls?|drops?|plunges?|declines?|tumbles?)/i, 
              summary: { ko: '📉 주가 하락 소식', ja: '📉 株価下落', zh: '📉 股价下跌', es: '📉 Acción cae' }},
            { pattern: /hits?\s+(?:record|all-time)\s+high/i, 
              summary: { ko: '🎯 사상 최고가 달성', ja: '🎯 過去最高値更新', zh: '🎯 创历史新高', es: '🎯 Récord histórico' }},
            
            // Earnings & Revenue
            { pattern: /(?:beats?|exceeds?|tops?)\s+(?:earnings?|estimates?|expectations?)/i, 
              summary: { ko: '✅ 실적 예상치 상회', ja: '✅ 予想を上回る', zh: '✅ 超预期', es: '✅ Supera expectativas' }},
            { pattern: /(?:misses?|falls?\s+short)\s+(?:earnings?|estimates?|expectations?)/i, 
              summary: { ko: '❌ 실적 예상치 하회', ja: '❌ 予想を下回る', zh: '❌ 低于预期', es: '❌ Por debajo de expectativas' }},
            { pattern: /earnings|quarterly\s+results?|financial\s+results?/i, 
              summary: { ko: '📊 실적 발표 관련', ja: '📊 決算発表', zh: '📊 业绩公告', es: '📊 Resultados financieros' }},
            { pattern: /revenue\s+(?:grows?|increases?|rises?)/i, 
              summary: { ko: '💰 매출 성장 발표', ja: '💰 売上増加', zh: '💰 营收增长', es: '💰 Ingresos crecen' }},
            
            // Analyst ratings
            { pattern: /upgrade[sd]?|raises?\s+(?:target|rating|price)/i, 
              summary: { ko: '⬆️ 애널리스트 목표가 상향', ja: '⬆️ 目標株価引き上げ', zh: '⬆️ 上调目标价', es: '⬆️ Mejora calificación' }},
            { pattern: /downgrade[sd]?|lowers?\s+(?:target|rating|price)|cuts?\s+(?:target|rating)/i, 
              summary: { ko: '⬇️ 애널리스트 목표가 하향', ja: '⬇️ 目標株価引き下げ', zh: '⬇️ 下调目标价', es: '⬇️ Rebaja calificación' }},
            { pattern: /(?:buy|strong\s+buy)\s+rating/i, 
              summary: { ko: '🟢 매수 추천 등급', ja: '🟢 買い推奨', zh: '🟢 买入评级', es: '🟢 Calificación compra' }},
            { pattern: /(?:sell|underperform)\s+rating/i, 
              summary: { ko: '🔴 매도 추천 등급', ja: '🔴 売り推奨', zh: '🔴 卖出评级', es: '🔴 Calificación venta' }},
            
            // M&A & Business
            { pattern: /(?:acquires?|acquisition|to\s+buy|buying)/i, 
              summary: { ko: '🤝 인수합병(M&A) 소식', ja: '🤝 M&A関連', zh: '🤝 收购消息', es: '🤝 Adquisición' }},
            { pattern: /(?:merger|merging|to\s+merge)/i, 
              summary: { ko: '🔄 합병 관련 소식', ja: '🔄 合併関連', zh: '🔄 合并消息', es: '🔄 Fusión' }},
            { pattern: /(?:partnership|partners?\s+with|deal\s+with)/i, 
              summary: { ko: '🤝 파트너십 체결', ja: '🤝 提携発表', zh: '🤝 合作协议', es: '🤝 Asociación' }},
            { pattern: /(?:layoffs?|job\s+cuts?|workforce\s+reduction)/i, 
              summary: { ko: '⚠️ 구조조정/감원 발표', ja: '⚠️ 人員削減', zh: '⚠️ 裁员消息', es: '⚠️ Recortes de empleo' }},
            
            // Market & Trading
            { pattern: /insider\s+(?:sold|selling|buys?|buying)/i, 
              summary: { ko: '👔 내부자 거래 공시', ja: '👔 インサイダー取引', zh: '👔 内部交易', es: '👔 Operación insider' }},
            { pattern: /sec\s+filing|regulatory\s+filing/i, 
              summary: { ko: '📋 SEC 공시 제출', ja: '📋 SEC届出', zh: '📋 SEC申报', es: '📋 Presentación SEC' }},
            { pattern: /dividend/i, 
              summary: { ko: '💵 배당 관련 소식', ja: '💵 配当関連', zh: '💵 股息消息', es: '💵 Dividendo' }},
            { pattern: /stock\s+split|share\s+split/i, 
              summary: { ko: '✂️ 주식 분할 발표', ja: '✂️ 株式分割', zh: '✂️ 股票拆分', es: '✂️ División de acciones' }},
            { pattern: /buyback|repurchase/i, 
              summary: { ko: '🔄 자사주 매입 발표', ja: '🔄 自社株買い', zh: '🔄 回购股票', es: '🔄 Recompra de acciones' }},
            
            // General news
            { pattern: /most\s+active|top\s+(?:gainers?|losers?)/i, 
              summary: { ko: '📊 시장 동향/거래량 상위', ja: '📊 売買代金上位', zh: '📊 成交活跃', es: '📊 Más activas' }},
            { pattern: /stocks?\s+to\s+(?:watch|buy)/i, 
              summary: { ko: '👀 주목할 종목 추천', ja: '👀 注目銘柄', zh: '👀 值得关注', es: '👀 Acciones a observar' }}
        ];

        // Find matching pattern
        for (const { pattern, summary } of patterns) {
            if (pattern.test(headline)) {
                const localSummary = summary[lang] || summary.ko;
                return `<div class="news-summary-ko">${localSummary}</div><div class="news-headline-original">${headline}</div>`;
            }
        }

        // Fallback: keyword extraction
        const keywords = {
            'rises': '상승', 'falls': '하락', 'drops': '하락', 'gains': '상승',
            'jumps': '급등', 'surges': '급등', 'plunges': '급락', 'stock': '주식',
            'earnings': '실적', 'revenue': '매출', 'profit': '수익', 'loss': '손실',
            'buy': '매수', 'sell': '매도', 'upgrade': '상향', 'downgrade': '하향',
            'target': '목표가', 'analyst': '애널리스트', 'market': '시장'
        };

        let foundKeywords = [];
        for (const [eng, kor] of Object.entries(keywords)) {
            if (lowerHeadline.includes(eng)) {
                foundKeywords.push(kor);
            }
        }

        if (foundKeywords.length > 0 && lang !== 'en') {
            return `<div class="news-summary-ko">📰 ${foundKeywords.slice(0, 3).join(' · ')} 관련</div><div class="news-headline-original">${headline}</div>`;
        }

        return `<div class="news-headline-original">${headline}</div>`;
    }

    function formatNewsDate(date) {
        const locale = currentLang === 'ko' ? 'ko-KR' : 
                      currentLang === 'ja' ? 'ja-JP' : 
                      currentLang === 'zh' ? 'zh-CN' : 
                      currentLang === 'es' ? 'es-ES' : 'en-US';
        try {
            return date.toLocaleDateString(locale, { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        } catch {
            return date.toLocaleDateString();
        }
    }

    function getRelativeTime() {
        const labels = {
            en: 'Recently',
            ko: '최근',
            ja: '最近',
            zh: '最近',
            es: 'Reciente'
        };
        return labels[currentLang] || labels.en;
    }

    function generateMockNews(stockName) {
        const sources = ['Wall Street Journal', 'Bloomberg', 'CNBC', 'Reuters', 'Financial Times'];
        const newsItems = [];
        for (let i = 0; i < 3; i++) {
            const source = sources[Math.floor(Math.random() * sources.length)];
            newsItems.push({
                source: source,
                headline: `${stockName} Market Update`,
                summary: `Latest market updates for ${stockName}. Investors are watching key levels and market conditions.`,
                date: new Date().toLocaleDateString(),
                url: `https://finance.yahoo.com/quote/${stockName}`
            });
        }
        return newsItems;
    }

    function formatVolume(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1) + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // --- Rendering Functions ---

    function renderStockSummary(data) {
        document.getElementById('stockNameDisplay').textContent = data.name;
        document.getElementById('stockTicker').textContent = data.ticker;
        document.getElementById('stockPrice').textContent = `$${data.price}`;

        const changeEl = document.getElementById('stockChange');
        const changePercentEl = document.getElementById('stockChangePercent');

        changeEl.textContent = data.change > 0 ? `+${data.change}` : data.change;
        changePercentEl.textContent = `(${data.changePercent}%)`;

        const priceContainer = document.querySelector('.price-change');
        priceContainer.className = `price-change ${data.changePercent >= 0 ? 'up' : 'down'}`;

        document.getElementById('stockVolume').textContent = data.volume;

        // Sentiment Meter
        const sentimentFill = document.getElementById('sentimentFill');
        const sentimentText = document.getElementById('sentimentText');

        sentimentFill.style.width = `${data.sentiment * 100}%`;

        let sentimentLabel = 'Neutral';
        if (data.sentiment > 0.7) sentimentLabel = 'Very Bullish';
        else if (data.sentiment > 0.55) sentimentLabel = 'Bullish';
        else if (data.sentiment < 0.3) sentimentLabel = 'Very Bearish';
        else if (data.sentiment < 0.45) sentimentLabel = 'Bearish';

        sentimentText.textContent = sentimentLabel;
    }

    function analyzeNewsSentiment(newsItems) {
        let score = 0;
        const positiveKeywords = ['rise', 'jump', 'gain', 'bull', 'high', 'record', 'profit', 'beat', 'growth', 'surge', 'up'];
        const negativeKeywords = ['fall', 'drop', 'loss', 'bear', 'low', 'miss', 'crash', 'risk', 'down', 'decline', 'weak'];

        let foundKeywords = new Set();

        newsItems.forEach(item => {
            const text = (item.headline + " " + item.summary).toLowerCase();

            positiveKeywords.forEach(word => {
                if (text.includes(word)) {
                    score++;
                    foundKeywords.add(word);
                }
            });

            negativeKeywords.forEach(word => {
                if (text.includes(word)) {
                    score--;
                    foundKeywords.add(word);
                }
            });
        });

        let sentimentKey = 'newsNeutral';
        if (score > 1) sentimentKey = 'newsPositive';
        if (score < -1) sentimentKey = 'newsNegative';

        return {
            key: sentimentKey,
            keywords: Array.from(foundKeywords).slice(0, 3).join(', ')
        };
    }

    function renderNews(newsItems) {
        newsGrid.innerHTML = '';

        // Add AI News Briefing
        if (newsItems.length > 0) {
            const analysis = analyzeNewsSentiment(newsItems);
            const summaryBox = document.createElement('div');
            summaryBox.className = 'news-summary-box';

            const title = translations.newsSummaryTitle[currentLang];
            const sentimentText = translations[analysis.key][currentLang];

            summaryBox.innerHTML = `
                <div class="summary-title">🤖 ${title}</div>
                <div class="summary-content">
                    ${sentimentText}
                    ${analysis.keywords ? `<br><span class="summary-keywords">Keywords: ${analysis.keywords}</span>` : ''}
                </div>
            `;
            newsGrid.appendChild(summaryBox);
        }

        newsItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'news-card';

            // Make the card clickable if URL exists
            if (item.url) {
                card.style.cursor = 'pointer';
                card.addEventListener('click', () => {
                    window.open(item.url, '_blank', 'noopener,noreferrer');
                });
            }

            const summarizedHeadline = summarizeHeadline(item.headline, currentLang);
            
            card.innerHTML = `
                <span class="news-source">${item.source}${item.url ? ' <span style="font-size:0.8em">🔗</span>' : ''}</span>
                <div class="news-headline">${summarizedHeadline}</div>
                <div class="news-date">${item.date}</div>
            `;
            newsGrid.appendChild(card);
        });
    }

    function generateAdvice(stock, data) {
        resultsGrid.innerHTML = '';
        
        // Track sentiment counts for summary
        let positiveCount = 0;
        let negativeCount = 0;
        let neutralCount = 0;

        selectedInvestors.forEach(id => {
            const investor = investors.find(inv => inv.id === id);
            if (investor) {
                const name = investor.name[currentLang] || investor.name['en'];
                const philosophy = investor.philosophy[currentLang] || investor.philosophy['en'];

                // Dynamic Advice Logic
                let adviceText = "";
                let adviceSentiment = "neutral"; // positive, negative, neutral

                // Custom logic per investor based on mock data
                if (id === 'buffett') {
                    if (data.roe > 15 && data.debtToEquity < 50 && data.per < 20) {
                        adviceText = getLocalizedMessage('buffett_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.per > 50) {
                        adviceText = getLocalizedMessage('buffett_expensive', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('buffett_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'wood') {
                    if (data.revenueGrowth > 20) {
                        adviceText = getLocalizedMessage('wood_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.revenueGrowth > 10) {
                        adviceText = getLocalizedMessage('wood_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('wood_sell', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'lynch') {
                    if (data.per < 25 && data.revenueGrowth > 10) {
                        adviceText = getLocalizedMessage('lynch_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.per < 35 || data.revenueGrowth > 5) {
                        adviceText = getLocalizedMessage('lynch_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('lynch_avoid', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'graham') {
                    if (data.pbr < 1.5 && data.per < 15) {
                        adviceText = getLocalizedMessage('graham_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.pbr < 2.5 || data.per < 25) {
                        adviceText = getLocalizedMessage('graham_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('graham_expensive', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'dalio') {
                    // Dalio: Focus on diversification and sentiment (as a proxy for macro/market mood)
                    if (data.sentiment < 0.4) {
                        adviceText = getLocalizedMessage('dalio_bear', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('dalio_neutral', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'soros') {
                    // Soros: Momentum (Reflexivity) - if change is high, bet on it continuing
                    if (Math.abs(data.changePercent) > 3) {
                        adviceText = getLocalizedMessage('soros_momentum', stock);
                        adviceSentiment = data.changePercent > 0 ? "positive" : "negative";
                    } else {
                        adviceText = getLocalizedMessage('soros_flat', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'munger') {
                    // Munger: Quality (High ROE, Low Debt) - stricter than Buffett
                    if (data.roe > 20 && data.debtToEquity < 30) {
                        adviceText = getLocalizedMessage('munger_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.roe > 12 && data.debtToEquity < 80) {
                        adviceText = getLocalizedMessage('munger_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('munger_pass', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'icahn') {
                    // Icahn: Activist - Look for underperforming companies (Low ROE) to fix
                    if (data.roe < 5) {
                        adviceText = getLocalizedMessage('icahn_activist', stock);
                        adviceSentiment = "positive"; // Opportunity for activism
                    } else {
                        adviceText = getLocalizedMessage('icahn_watch', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'ackman') {
                    // Ackman: Predictable cash flow (Good Revenue Growth + Reasonable PE)
                    if (data.revenueGrowth > 10 && data.per < 30) {
                        adviceText = getLocalizedMessage('ackman_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.revenueGrowth > 5 || data.per < 40) {
                        adviceText = getLocalizedMessage('ackman_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('ackman_pass', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'simons') {
                    // Simons: Quant/Patterns - High volume + volatility
                    if (parseInt(data.volume.replace(/,/g, '')) > 5000000 && Math.abs(data.changePercent) > 2) {
                        adviceText = getLocalizedMessage('simons_algo', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('simons_noise', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'druckenmiller') {
                    // Druckenmiller: Macro trends + momentum
                    if (data.changePercent > 2 && data.sentiment > 0.6) {
                        adviceText = getLocalizedMessage('druckenmiller_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.changePercent < -2) {
                        adviceText = getLocalizedMessage('druckenmiller_caution', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('druckenmiller_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'tudor_jones') {
                    // Tudor Jones: Technical analysis + risk management
                    if (Math.abs(data.changePercent) > 3) {
                        adviceText = getLocalizedMessage('tudor_momentum', stock);
                        adviceSentiment = data.changePercent > 0 ? "positive" : "negative";
                    } else {
                        adviceText = getLocalizedMessage('tudor_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'marks') {
                    // Howard Marks: Market cycles + second-level thinking
                    if (data.sentiment < 0.3 && data.pbr < 1.5) {
                        adviceText = getLocalizedMessage('marks_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.sentiment > 0.8) {
                        adviceText = getLocalizedMessage('marks_caution', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('marks_cycle', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'templeton') {
                    // Templeton: Buy at maximum pessimism
                    if (data.sentiment < 0.25 && data.per < 15) {
                        adviceText = getLocalizedMessage('templeton_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('templeton_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'klarman') {
                    // Klarman: Deep value + margin of safety
                    if (data.pbr < 1.0 && data.per < 12) {
                        adviceText = getLocalizedMessage('klarman_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.pbr < 2.0 && data.per < 20) {
                        adviceText = getLocalizedMessage('klarman_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('klarman_pass', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'burry') {
                    // Burry: Contrarian deep value
                    if (data.pbr < 0.8 && data.sentiment < 0.4) {
                        adviceText = getLocalizedMessage('burry_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.per > 40) {
                        adviceText = getLocalizedMessage('burry_short', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('burry_research', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'greenblatt') {
                    // Greenblatt: Magic formula (High ROIC + Low PE)
                    if (data.roe > 15 && data.per < 15) {
                        adviceText = getLocalizedMessage('greenblatt_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('greenblatt_pass', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'bogle') {
                    // Bogle: Index investing, low cost
                    adviceText = getLocalizedMessage('bogle_index', stock);
                    adviceSentiment = "neutral";
                } else if (id === 'fisher') {
                    // Philip Fisher: Quality growth
                    if (data.revenueGrowth > 15 && data.roe > 15) {
                        adviceText = getLocalizedMessage('fisher_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('fisher_research', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'einhorn') {
                    // Einhorn: Value with catalyst, short frauds
                    if (data.roe < 3 && data.debtToEquity > 100) {
                        adviceText = getLocalizedMessage('einhorn_short', stock);
                        adviceSentiment = "negative";
                    } else if (data.per < 15 && data.roe > 10) {
                        adviceText = getLocalizedMessage('einhorn_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('einhorn_watch', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'loeb') {
                    // Loeb: Event-driven activist
                    if (data.roe < 8 && data.pbr < 2) {
                        adviceText = getLocalizedMessage('loeb_activist', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('loeb_watch', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'smith') {
                    // Terry Smith: Quality, don't overpay, do nothing
                    if (data.roe > 20 && data.per < 25) {
                        adviceText = getLocalizedMessage('smith_buy', stock);
                        adviceSentiment = "positive";
                    } else if (data.roe > 12 && data.per < 35) {
                        adviceText = getLocalizedMessage('smith_watch', stock);
                        adviceSentiment = "neutral";
                    } else {
                        adviceText = getLocalizedMessage('smith_pass', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'miller') {
                    // Bill Miller: Contrarian, buy fear
                    if (data.sentiment < 0.35 && data.changePercent < -3) {
                        adviceText = getLocalizedMessage('miller_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('miller_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'pabrai') {
                    // Pabrai: Clone Buffett, concentrated bets
                    if (data.roe > 15 && data.per < 20 && data.debtToEquity < 50) {
                        adviceText = getLocalizedMessage('pabrai_clone', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('pabrai_pass', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'li_lu') {
                    // Li Lu: Asian value investing
                    if (data.roe > 12 && data.per < 18) {
                        adviceText = getLocalizedMessage('lilu_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('lilu_research', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'griffin') {
                    // Ken Griffin: Multi-strategy, speed
                    if (Math.abs(data.changePercent) > 2) {
                        adviceText = getLocalizedMessage('griffin_trade', stock);
                        adviceSentiment = data.changePercent > 0 ? "positive" : "negative";
                    } else {
                        adviceText = getLocalizedMessage('griffin_algo', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'robertson') {
                    // Julian Robertson: Long/short fundamental
                    if (data.roe > 18 && data.per < 20) {
                        adviceText = getLocalizedMessage('robertson_long', stock);
                        adviceSentiment = "positive";
                    } else if (data.roe < 5 && data.per > 40) {
                        adviceText = getLocalizedMessage('robertson_short', stock);
                        adviceSentiment = "negative";
                    } else {
                        adviceText = getLocalizedMessage('robertson_neutral', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'fink') {
                    // Larry Fink: Long-term, ESG
                    adviceText = getLocalizedMessage('fink_longterm', stock);
                    adviceSentiment = "neutral";
                } else if (id === 'jones') {
                    // Alfred Jones: Hedge fund pioneer
                    adviceText = getLocalizedMessage('jones_hedge', stock);
                    adviceSentiment = "neutral";
                } else if (id === 'steinhardt') {
                    // Steinhardt: Short-term trading
                    if (Math.abs(data.changePercent) > 2.5) {
                        adviceText = getLocalizedMessage('steinhardt_trade', stock);
                        adviceSentiment = data.changePercent > 0 ? "positive" : "negative";
                    } else {
                        adviceText = getLocalizedMessage('steinhardt_wait', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'bacon') {
                    // Louis Bacon: Global macro
                    if (data.sentiment > 0.6 && data.changePercent > 1) {
                        adviceText = getLocalizedMessage('bacon_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('bacon_preserve', stock);
                        adviceSentiment = "neutral";
                    }
                } else if (id === 'swensen') {
                    // Swensen: Endowment model, alternatives
                    adviceText = getLocalizedMessage('swensen_diversify', stock);
                    adviceSentiment = "neutral";
                } else {
                    // Fallback to generic template if no specific logic defined yet
                    const adviceFunc = investor.adviceTemplate ? (investor.adviceTemplate[currentLang] || investor.adviceTemplate['en']) : null;
                    adviceText = adviceFunc ? adviceFunc(stock) : `Analyzing ${stock}...`;
                    adviceSentiment = "neutral";
                }

                // Generate rationale based on investor's focus with metric tooltips
                let rationale = '';
                const metrics = {
                    per: { value: data.per.toFixed(1), name: 'P/E (주가수익비율)', desc: '주가를 주당순이익(EPS)으로 나눈 값. 낮을수록 저평가, 높을수록 고평가. 일반적으로 15 이하면 저평가로 봄.' },
                    pbr: { value: data.pbr.toFixed(2), name: 'P/B (주가순자산비율)', desc: '주가를 주당순자산으로 나눈 값. 1 미만이면 자산가치보다 저평가, 1.5 이하면 가치투자 대상.' },
                    roe: { value: data.roe.toFixed(1) + '%', name: 'ROE (자기자본이익률)', desc: '자기자본 대비 순이익 비율. 높을수록 수익성 좋음. 15% 이상이면 우량기업.' },
                    debtToEquity: { value: data.debtToEquity.toFixed(1), name: 'D/E (부채비율)', desc: '자기자본 대비 부채 비율. 낮을수록 재무건전성 양호. 50 이하면 안정적.' },
                    revenueGrowth: { value: data.revenueGrowth.toFixed(1) + '%', name: '매출성장률', desc: '전년 대비 매출 증가율. 높을수록 성장성 좋음. 10% 이상이면 성장주.' },
                    sentiment: { value: (data.sentiment * 100).toFixed(0) + '%', name: '시장심리', desc: '뉴스/소셜 미디어 기반 시장 분위기. 높을수록 낙관적, 낮을수록 비관적.' },
                    changePercent: { value: data.changePercent + '%', name: '가격변동률', desc: '최근 가격 변동 비율. 큰 변동은 모멘텀 또는 변동성을 나타냄.' },
                    volume: { value: data.volume, name: '거래량', desc: '일일 거래량. 높을수록 유동성과 투자자 관심이 높음.' }
                };

                const createMetric = (key) => {
                    const m = metrics[key];
                    return `<span class="metric-item">${key.toUpperCase()}: <span class="metric-value">${m.value}</span><span class="metric-tooltip"><span class="metric-name">${m.name}</span>${m.desc}</span></span>`;
                };

                if (id === 'buffett') {
                    rationale = `${createMetric('roe')} ${createMetric('per')} ${createMetric('debtToEquity')}`;
                } else if (id === 'wood') {
                    rationale = `${createMetric('revenueGrowth')}`;
                } else if (id === 'lynch') {
                    rationale = `${createMetric('per')} ${createMetric('revenueGrowth')}`;
                } else if (id === 'graham') {
                    rationale = `${createMetric('pbr')} ${createMetric('per')}`;
                } else if (id === 'dalio') {
                    rationale = `${createMetric('sentiment')}`;
                } else if (id === 'soros') {
                    rationale = `${createMetric('changePercent')}`;
                } else if (id === 'munger') {
                    rationale = `${createMetric('roe')} ${createMetric('debtToEquity')}`;
                } else if (id === 'icahn') {
                    rationale = `${createMetric('roe')}`;
                } else if (id === 'ackman') {
                    rationale = `${createMetric('revenueGrowth')} ${createMetric('per')}`;
                } else if (id === 'simons') {
                    rationale = `${createMetric('volume')} ${createMetric('changePercent')}`;
                } else if (id === 'druckenmiller') {
                    rationale = `${createMetric('changePercent')} ${createMetric('sentiment')}`;
                } else if (id === 'tudor_jones') {
                    rationale = `${createMetric('changePercent')}`;
                } else if (id === 'marks') {
                    rationale = `${createMetric('sentiment')} ${createMetric('pbr')}`;
                } else if (id === 'templeton') {
                    rationale = `${createMetric('sentiment')} ${createMetric('per')}`;
                } else if (id === 'klarman') {
                    rationale = `${createMetric('pbr')} ${createMetric('per')}`;
                } else if (id === 'burry') {
                    rationale = `${createMetric('pbr')} ${createMetric('sentiment')} ${createMetric('per')}`;
                } else if (id === 'greenblatt') {
                    rationale = `${createMetric('roe')} ${createMetric('per')}`;
                } else if (id === 'bogle') {
                    const bogleMsg = {
                        en: 'Index Investing - Individual stock analysis not applicable',
                        ko: '인덱스 투자 - 개별 종목 분석 불필요',
                        ja: 'インデックス投資 - 個別銘柄分析は不要',
                        zh: '指数投资 - 不需要个股分析',
                        es: 'Inversión en índices - Análisis individual no aplicable'
                    }[currentLang] || 'Index Investing - Individual stock analysis not applicable';
                    rationale = bogleMsg;
                } else if (id === 'fisher') {
                    rationale = `${createMetric('revenueGrowth')} ${createMetric('roe')}`;
                } else if (id === 'einhorn') {
                    rationale = `${createMetric('roe')} ${createMetric('debtToEquity')} ${createMetric('per')}`;
                } else if (id === 'loeb') {
                    rationale = `${createMetric('roe')} ${createMetric('pbr')}`;
                } else if (id === 'smith') {
                    rationale = `${createMetric('roe')} ${createMetric('per')}`;
                } else if (id === 'miller') {
                    rationale = `${createMetric('sentiment')} ${createMetric('changePercent')}`;
                } else if (id === 'pabrai') {
                    rationale = `${createMetric('roe')} ${createMetric('per')} ${createMetric('debtToEquity')}`;
                } else if (id === 'li_lu') {
                    rationale = `${createMetric('roe')} ${createMetric('per')}`;
                } else if (id === 'griffin') {
                    rationale = `${createMetric('changePercent')} ${createMetric('volume')}`;
                } else if (id === 'robertson') {
                    rationale = `${createMetric('roe')} ${createMetric('per')}`;
                } else if (id === 'fink') {
                    const finkLabel = {
                        en: 'Long-term ESG Focus',
                        ko: '장기 ESG 중심',
                        ja: '長期ESG重視',
                        zh: '长期ESG聚焦',
                        es: 'Enfoque ESG a largo plazo'
                    }[currentLang] || 'Long-term ESG Focus';
                    rationale = `${finkLabel} - ${createMetric('roe')}`;
                } else if (id === 'jones') {
                    const jonesLabel = {
                        en: 'Hedge Strategy',
                        ko: '헤지 전략',
                        ja: 'ヘッジ戦略',
                        zh: '对冲策略',
                        es: 'Estrategia de cobertura'
                    }[currentLang] || 'Hedge Strategy';
                    rationale = `${jonesLabel} - ${createMetric('changePercent')}`;
                } else if (id === 'steinhardt') {
                    rationale = `${createMetric('changePercent')}`;
                } else if (id === 'bacon') {
                    rationale = `${createMetric('sentiment')} ${createMetric('changePercent')}`;
                } else if (id === 'swensen') {
                    const swensenMsg = {
                        en: 'Diversification Focus - Asset allocation strategy',
                        ko: '분산투자 중심 - 자산배분 전략',
                        ja: '分散投資重視 - 資産配分戦略',
                        zh: '分散投资重点 - 资产配置策略',
                        es: 'Enfoque de diversificación - Estrategia de asignación de activos'
                    }[currentLang] || 'Diversification Focus - Asset allocation strategy';
                    rationale = swensenMsg;
                }

                const rationaleLabel = {
                    en: 'Analysis Basis',
                    ko: '분석 근거',
                    ja: '分析根拠',
                    zh: '分析依据',
                    es: 'Base de análisis'
                }[currentLang];

                // Count sentiments
                if (adviceSentiment === 'positive') positiveCount++;
                else if (adviceSentiment === 'negative') negativeCount++;
                else neutralCount++;

                const adviceCard = document.createElement('div');
                adviceCard.className = `advice-card ${adviceSentiment}`;
                adviceCard.innerHTML = `
                    <div class="advice-header">
                        <img src="${investor.image}" alt="${name}" onerror="this.src='https://via.placeholder.com/50/333/fff?text=${name.charAt(0)}'">
                        <div>
                            <h3>${name}</h3>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">${philosophy}</p>
                        </div>
                    </div>
                    <div class="advice-content">
                        "${adviceText}"
                    </div>
                    ${rationale ? `<div class="advice-rationale"><strong>${rationaleLabel}:</strong> ${rationale}</div>` : ''}
                `;
                resultsGrid.appendChild(adviceCard);
            }
        });

        // Update verdict summary
        updateVerdictSummary(positiveCount, negativeCount, neutralCount, stock, data);

        // Store result for comparison
        if (typeof storeAnalysisResult === 'function') {
            storeAnalysisResult({
                symbol: stock,
                name: stock,
                ...data
            });
        }

        // Return dominant sentiment for history
        let dominant = 'neutral';
        if (positiveCount > negativeCount && positiveCount > neutralCount) dominant = 'positive';
        else if (negativeCount > positiveCount && negativeCount > neutralCount) dominant = 'negative';
        
        return { dominant, positiveCount, negativeCount, neutralCount };
    }

    function updateVerdictSummary(positive, negative, neutral, stock, data) {
        const verdictSummary = document.getElementById('verdictSummary');
        const total = positive + negative + neutral;
        
        if (total === 0) {
            verdictSummary.classList.add('hidden');
            return;
        }

        verdictSummary.classList.remove('hidden');

        const positivePercent = ((positive / total) * 100).toFixed(0);
        const negativePercent = ((negative / total) * 100).toFixed(0);
        const neutralPercent = ((neutral / total) * 100).toFixed(0);

        // Update bars and percentages
        document.getElementById('positiveBar').style.width = positivePercent + '%';
        document.getElementById('negativeBar').style.width = negativePercent + '%';
        document.getElementById('neutralBar').style.width = neutralPercent + '%';

        document.getElementById('positivePercent').textContent = positivePercent + '%';
        document.getElementById('negativePercent').textContent = negativePercent + '%';
        document.getElementById('neutralPercent').textContent = neutralPercent + '%';

        // Update counts
        const countLabels = {
            en: ['gurus', 'gurus', 'gurus'],
            ko: ['명', '명', '명'],
            ja: ['人', '人', '人'],
            zh: ['位', '位', '位'],
            es: ['gurús', 'gurús', 'gurús']
        };
        const countLabel = countLabels[currentLang] || countLabels['en'];
        
        document.getElementById('positiveCount').textContent = `${positive}${countLabel[0]}`;
        document.getElementById('negativeCount').textContent = `${negative}${countLabel[1]}`;
        document.getElementById('neutralCount').textContent = `${neutral}${countLabel[2]}`;

        // Update labels
        const labels = {
            en: { title: '📊 Guru Verdict Summary', positive: 'Bullish', negative: 'Bearish', neutral: 'Hold' },
            ko: { title: '📊 구루 의견 종합', positive: '긍정', negative: '부정', neutral: '보류' },
            ja: { title: '📊 グル意見まとめ', positive: '強気', negative: '弱気', neutral: '保留' },
            zh: { title: '📊 大师意见汇总', positive: '看涨', negative: '看跌', neutral: '观望' },
            es: { title: '📊 Resumen de Gurús', positive: 'Alcista', negative: 'Bajista', neutral: 'Mantener' }
        };
        const label = labels[currentLang] || labels['en'];

        document.getElementById('verdictSummaryTitle').textContent = label.title;
        document.getElementById('positiveLabel').textContent = label.positive;
        document.getElementById('negativeLabel').textContent = label.negative;
        document.getElementById('neutralLabel').textContent = label.neutral;

        // Overall verdict
        const overallVerdict = document.getElementById('overallVerdict');
        let verdictText = '';
        let verdictClass = '';

        if (positive > negative && positive > neutral) {
            verdictClass = 'positive';
            verdictText = {
                en: `🎯 Overall: ${positive} out of ${total} gurus are BULLISH on ${stock}!`,
                ko: `🎯 종합: ${total}명 중 ${positive}명의 구루가 ${stock}에 대해 긍정적입니다!`,
                ja: `🎯 総合: ${total}人中${positive}人のグルが${stock}に強気です！`,
                zh: `🎯 综合: ${total}位大师中有${positive}位看涨${stock}！`,
                es: `🎯 General: ${positive} de ${total} gurús son ALCISTAS en ${stock}!`
            }[currentLang] || `🎯 Overall: ${positive} out of ${total} gurus are BULLISH on ${stock}!`;
        } else if (negative > positive && negative > neutral) {
            verdictClass = 'negative';
            verdictText = {
                en: `⚠️ Caution: ${negative} out of ${total} gurus are BEARISH on ${stock}`,
                ko: `⚠️ 주의: ${total}명 중 ${negative}명의 구루가 ${stock}에 대해 부정적입니다`,
                ja: `⚠️ 注意: ${total}人中${negative}人のグルが${stock}に弱気です`,
                zh: `⚠️ 警告: ${total}位大师中有${negative}位看跌${stock}`,
                es: `⚠️ Precaución: ${negative} de ${total} gurús son BAJISTAS en ${stock}`
            }[currentLang] || `⚠️ Caution: ${negative} out of ${total} gurus are BEARISH on ${stock}`;
        } else {
            verdictClass = 'neutral';
            verdictText = {
                en: `🤔 Mixed signals: Gurus have divided opinions on ${stock}`,
                ko: `🤔 혼합 신호: ${stock}에 대해 구루들의 의견이 나뉩니다`,
                ja: `🤔 混合シグナル: ${stock}についてグルの意見が分かれています`,
                zh: `🤔 信号混合: 大师们对${stock}意见不一`,
                es: `🤔 Señales mixtas: Los gurús tienen opiniones divididas sobre ${stock}`
            }[currentLang] || `🤔 Mixed signals: Gurus have divided opinions on ${stock}`;
        }

        overallVerdict.className = 'overall-verdict ' + verdictClass;
        overallVerdict.textContent = verdictText;

        // Generate AI Summary
        generateAISummary(positive, negative, neutral, stock, data);
    }

    function generateAISummary(positive, negative, neutral, stock, data) {
        const aiSummary = document.getElementById('aiSummary');
        const aiContent = document.getElementById('aiSummaryContent');
        const aiTitle = document.getElementById('aiSummaryTitle');
        
        const total = positive + negative + neutral;
        if (total === 0 || !data) {
            aiSummary.classList.add('hidden');
            return;
        }

        aiSummary.classList.remove('hidden');

        // Titles
        const titles = {
            en: 'AI Analysis Summary',
            ko: 'AI 종합 분석',
            ja: 'AI総合分析',
            zh: 'AI综合分析',
            es: 'Resumen de Análisis AI'
        };
        aiTitle.textContent = titles[currentLang] || titles.en;

        // Analyze by investment style
        const styleAnalysis = analyzeByStyle(data);
        
        // Generate summary text
        const summaryParts = [];
        const positivePercent = Math.round((positive / total) * 100);
        const negativePercent = Math.round((negative / total) * 100);

        // Main verdict
        if (currentLang === 'ko') {
            if (positivePercent >= 60) {
                summaryParts.push(`<p>📈 <span class="ai-highlight">${stock}</span>에 대해 <span class="ai-highlight">${positivePercent}%의 구루가 긍정적</span>인 견해를 보였습니다.</p>`);
            } else if (negativePercent >= 60) {
                summaryParts.push(`<p>📉 <span class="ai-warning">${stock}</span>에 대해 <span class="ai-warning">${negativePercent}%의 구루가 부정적</span>인 견해를 보였습니다.</p>`);
            } else {
                summaryParts.push(`<p>⚖️ <span class="ai-neutral-text">${stock}</span>에 대해 구루들의 의견이 <span class="ai-neutral-text">나뉘고 있습니다</span> (긍정 ${positivePercent}%, 부정 ${negativePercent}%).</p>`);
            }

            // Key metrics analysis
            const metricsAnalysis = [];
            if (data.per < 15) metricsAnalysis.push(`PER ${data.per.toFixed(1)}로 저평가 구간`);
            else if (data.per > 30) metricsAnalysis.push(`PER ${data.per.toFixed(1)}로 고평가 주의`);
            
            if (data.roe > 15) metricsAnalysis.push(`ROE ${data.roe.toFixed(1)}%로 수익성 양호`);
            else if (data.roe < 8) metricsAnalysis.push(`ROE ${data.roe.toFixed(1)}%로 수익성 개선 필요`);
            
            if (data.pbr < 1.5) metricsAnalysis.push(`PBR ${data.pbr.toFixed(2)}로 자산가치 대비 저평가`);
            
            if (data.revenueGrowth > 15) metricsAnalysis.push(`매출성장률 ${data.revenueGrowth.toFixed(1)}%로 성장세 긍정적`);
            else if (data.revenueGrowth < 5) metricsAnalysis.push(`매출성장률 ${data.revenueGrowth.toFixed(1)}%로 성장 둔화`);

            if (metricsAnalysis.length > 0) {
                summaryParts.push(`<p>📊 <strong>핵심 지표:</strong> ${metricsAnalysis.join(', ')}.</p>`);
            }

            // Style-based insights
            summaryParts.push(`<p>💡 <strong>투자 스타일별 분석:</strong></p>`);
            summaryParts.push('<div class="style-breakdown">');
            
            if (styleAnalysis.value.total > 0) {
                const valueVerdict = styleAnalysis.value.positive > styleAnalysis.value.negative ? 'positive' : styleAnalysis.value.positive < styleAnalysis.value.negative ? 'negative' : 'neutral';
                summaryParts.push(`<span class="style-tag ${valueVerdict}">💎 가치투자: ${styleAnalysis.value.positive}/${styleAnalysis.value.total} 긍정</span>`);
            }
            if (styleAnalysis.growth.total > 0) {
                const growthVerdict = styleAnalysis.growth.positive > styleAnalysis.growth.negative ? 'positive' : styleAnalysis.growth.positive < styleAnalysis.growth.negative ? 'negative' : 'neutral';
                summaryParts.push(`<span class="style-tag ${growthVerdict}">🚀 성장투자: ${styleAnalysis.growth.positive}/${styleAnalysis.growth.total} 긍정</span>`);
            }
            if (styleAnalysis.macro.total > 0) {
                const macroVerdict = styleAnalysis.macro.positive > styleAnalysis.macro.negative ? 'positive' : styleAnalysis.macro.positive < styleAnalysis.macro.negative ? 'negative' : 'neutral';
                summaryParts.push(`<span class="style-tag ${macroVerdict}">🌍 매크로: ${styleAnalysis.macro.positive}/${styleAnalysis.macro.total} 긍정</span>`);
            }
            if (styleAnalysis.quant.total > 0) {
                const quantVerdict = styleAnalysis.quant.positive > styleAnalysis.quant.negative ? 'positive' : styleAnalysis.quant.positive < styleAnalysis.quant.negative ? 'negative' : 'neutral';
                summaryParts.push(`<span class="style-tag ${quantVerdict}">🤖 퀀트: ${styleAnalysis.quant.positive}/${styleAnalysis.quant.total} 긍정</span>`);
            }
            if (styleAnalysis.activist.total > 0) {
                const activistVerdict = styleAnalysis.activist.positive > styleAnalysis.activist.negative ? 'positive' : styleAnalysis.activist.positive < styleAnalysis.activist.negative ? 'negative' : 'neutral';
                summaryParts.push(`<span class="style-tag ${activistVerdict}">⚔️ 행동주의: ${styleAnalysis.activist.positive}/${styleAnalysis.activist.total} 긍정</span>`);
            }
            summaryParts.push('</div>');

            // Final recommendation
            if (positivePercent >= 70) {
                summaryParts.push(`<p>✅ <strong>결론:</strong> 대다수 구루가 긍정적으로 평가하고 있어 <span class="ai-highlight">투자 고려 가치가 있습니다</span>. 단, 본인의 투자 성향과 리스크 허용도를 고려하세요.</p>`);
            } else if (negativePercent >= 70) {
                summaryParts.push(`<p>⚠️ <strong>결론:</strong> 대다수 구루가 부정적으로 평가하고 있어 <span class="ai-warning">신중한 접근이 필요합니다</span>. 추가 리서치를 권장합니다.</p>`);
            } else {
                summaryParts.push(`<p>🔍 <strong>결론:</strong> 의견이 분분하므로 <span class="ai-neutral-text">추가적인 분석과 모니터링</span>을 권장합니다. 본인의 투자 철학에 맞는 구루의 의견을 참고하세요.</p>`);
            }
        } else {
            // English version
            if (positivePercent >= 60) {
                summaryParts.push(`<p>📈 <span class="ai-highlight">${positivePercent}% of gurus are bullish</span> on <span class="ai-highlight">${stock}</span>.</p>`);
            } else if (negativePercent >= 60) {
                summaryParts.push(`<p>📉 <span class="ai-warning">${negativePercent}% of gurus are bearish</span> on <span class="ai-warning">${stock}</span>.</p>`);
            } else {
                summaryParts.push(`<p>⚖️ Gurus have <span class="ai-neutral-text">mixed opinions</span> on ${stock} (${positivePercent}% bullish, ${negativePercent}% bearish).</p>`);
            }

            // Key metrics
            const metricsAnalysis = [];
            if (data.per < 15) metricsAnalysis.push(`P/E ${data.per.toFixed(1)} (undervalued)`);
            else if (data.per > 30) metricsAnalysis.push(`P/E ${data.per.toFixed(1)} (expensive)`);
            if (data.roe > 15) metricsAnalysis.push(`ROE ${data.roe.toFixed(1)}% (strong)`);
            if (data.revenueGrowth > 15) metricsAnalysis.push(`Revenue Growth ${data.revenueGrowth.toFixed(1)}% (growing)`);

            if (metricsAnalysis.length > 0) {
                summaryParts.push(`<p>📊 <strong>Key Metrics:</strong> ${metricsAnalysis.join(', ')}.</p>`);
            }

            // Style breakdown
            summaryParts.push('<div class="style-breakdown">');
            if (styleAnalysis.value.total > 0) summaryParts.push(`<span class="style-tag ${styleAnalysis.value.positive > styleAnalysis.value.negative ? 'positive' : 'neutral'}">💎 Value: ${styleAnalysis.value.positive}/${styleAnalysis.value.total}</span>`);
            if (styleAnalysis.growth.total > 0) summaryParts.push(`<span class="style-tag ${styleAnalysis.growth.positive > styleAnalysis.growth.negative ? 'positive' : 'neutral'}">🚀 Growth: ${styleAnalysis.growth.positive}/${styleAnalysis.growth.total}</span>`);
            if (styleAnalysis.macro.total > 0) summaryParts.push(`<span class="style-tag ${styleAnalysis.macro.positive > styleAnalysis.macro.negative ? 'positive' : 'neutral'}">🌍 Macro: ${styleAnalysis.macro.positive}/${styleAnalysis.macro.total}</span>`);
            summaryParts.push('</div>');
        }

        aiContent.innerHTML = summaryParts.join('');
    }

    function analyzeByStyle(data) {
        const result = {
            value: { positive: 0, negative: 0, neutral: 0, total: 0 },
            growth: { positive: 0, negative: 0, neutral: 0, total: 0 },
            macro: { positive: 0, negative: 0, neutral: 0, total: 0 },
            quant: { positive: 0, negative: 0, neutral: 0, total: 0 },
            activist: { positive: 0, negative: 0, neutral: 0, total: 0 }
        };

        selectedInvestors.forEach(id => {
            let style = 'other';
            for (const [s, gurus] of Object.entries(guruStyles)) {
                if (gurus.includes(id)) {
                    style = s;
                    break;
                }
            }

            if (!result[style]) return;
            result[style].total++;

            // Determine sentiment based on data and guru style
            if (style === 'value') {
                if (data.per < 20 && data.roe > 12) result[style].positive++;
                else if (data.per > 35) result[style].negative++;
                else result[style].neutral++;
            } else if (style === 'growth') {
                if (data.revenueGrowth > 15) result[style].positive++;
                else if (data.revenueGrowth < 5) result[style].negative++;
                else result[style].neutral++;
            } else if (style === 'macro') {
                if (data.sentiment > 0.55) result[style].positive++;
                else if (data.sentiment < 0.4) result[style].negative++;
                else result[style].neutral++;
            } else if (style === 'quant') {
                if (Math.abs(data.changePercent) > 2) result[style].positive++;
                else result[style].neutral++;
            } else if (style === 'activist') {
                if (data.roe < 10 && data.pbr < 2) result[style].positive++;
                else result[style].neutral++;
            }
        });

        return result;
    }

    // Helper for localized dynamic messages
    function getLocalizedMessage(key, stock) {
        const messages = {
            buffett_buy: {
                en: `${stock} has a strong moat and good numbers. It's a wonderful company at a fair price.`,
                ko: `${stock}은(는) 강력한 해자와 좋은 실적을 가지고 있군. 적정한 가격의 훌륭한 기업이야.`,
                ja: `${stock}は強力な堀と良い数字を持っている。適正価格の素晴らしい企業だ。`,
                zh: `${stock}拥有强大的护城河和良好的数据。这是一家价格公道的优秀公司。`,
                es: `${stock} tiene un fuerte foso y buenos números. Es una empresa maravillosa a un precio justo.`
            },
            buffett_expensive: {
                en: `Price is what you pay, value is what you get. ${stock} seems too expensive right now.`,
                ko: `가격은 자네가 지불하는 것이고, 가치는 자네가 얻는 것이지. ${stock}은(는) 지금 너무 비싸 보여.`,
                ja: `価格とはあなたが払うもの、価値とはあなたが得るものだ。${stock}は今、高すぎるようだ。`,
                zh: `价格是你付出的，价值是你得到的。${stock}现在看起来太贵了。`,
                es: `El precio es lo que pagas, el valor es lo que obtienes. ${stock} parece demasiado caro ahora mismo.`
            },
            buffett_wait: {
                en: `I'm not sure about ${stock}'s long term advantage. I'll sit on my hands for now.`,
                ko: `${stock}의 장기적인 경쟁 우위에 대해 확신이 서지 않아. 지금은 관망하겠네.`,
                ja: `${stock}の長期的な優位性については確信が持てない。今は何もしないでおこう。`,
                zh: `我不确定${stock}的长期优势。我现在会按兵不动。`,
                es: `No estoy seguro de la ventaja a largo plazo de ${stock}. Me quedaré quieto por ahora.`
            },
            wood_buy: {
                en: `${stock} is showing exponential growth! This is exactly the kind of disruption we love.`,
                ko: `${stock}은(는) 기하급수적인 성장을 보여주고 있어요! 이것이 바로 우리가 사랑하는 파괴적 혁신이죠.`,
                ja: `${stock}は指数関数的な成長を見せています！これこそ私たちが愛する破壊的イノベーションです。`,
                zh: `${stock}正显示出指数级增长！这正是我们喜欢的颠覆性创新。`,
                es: `¡${stock} está mostrando un crecimiento exponencial! Este es exactamente el tipo de disrupción que amamos.`
            },
            wood_sell: {
                en: `${stock} lacks the innovation velocity we look for. It's part of the old world.`,
                ko: `${stock}은(는) 우리가 찾는 혁신 속도가 부족해요. 구시대의 유물일 뿐이죠.`,
                ja: `${stock}には私たちが求めるイノベーションの速度が欠けています。それは旧世界の一部です。`,
                zh: `${stock}缺乏我们寻找的创新速度。它是旧世界的一部分。`,
                es: `${stock} carece de la velocidad de innovación que buscamos. Es parte del viejo mundo.`
            },
            wood_watch: {
                en: `${stock} shows moderate growth. Keep it on your radar - could become interesting with more innovation.`,
                ko: `${stock}은(는) 적당한 성장세를 보이네요. 관심 목록에 넣어두세요 - 혁신이 더해지면 흥미로워질 수 있어요.`,
                ja: `${stock}は中程度の成長を示しています。注目リストに入れておいてください - より革新的になれば面白くなるかも。`,
                zh: `${stock}显示出适度增长。保持关注 - 如果更具创新性可能会变得有趣。`,
                es: `${stock} muestra un crecimiento moderado. Mantenlo en tu radar - podría volverse interesante con más innovación.`
            },
            lynch_buy: {
                en: `I see ${stock} everywhere, and the numbers look good. A classic GARP play.`,
                ko: `어딜 가나 ${stock}이(가) 보이는구만. 숫자도 좋아 보여. 전형적인 GARP(합리적 가격의 성장주) 투자 기회야.`,
                ja: `どこに行っても${stock}を見かけるし、数字も良さそうだ。典型的なGARP（妥当な価格での成長）だね。`,
                zh: `我到处都能看到${stock}，数据看起来也不错。这是一个经典的GARP投资。`,
                es: `Veo ${stock} en todas partes, y los números se ven bien. Una jugada clásica de GARP.`
            },
            lynch_avoid: {
                en: `I don't understand how ${stock} makes money, or it's too expensive. I'll pass.`,
                ko: `${stock}이(가) 어떻게 돈을 버는지 이해할 수 없거나, 너무 비싸네. 난 패스하겠어.`,
                ja: `${stock}がどうやって利益を出しているのか理解できないか、高すぎる。パスするよ。`,
                zh: `我不明白${stock}怎么赚钱，或者它太贵了。我跳过。`,
                es: `No entiendo cómo ${stock} gana dinero, o es demasiado caro. Paso.`
            },
            lynch_watch: {
                en: `${stock} has some potential. The valuation is reasonable - worth monitoring for a better entry point.`,
                ko: `${stock}은(는) 잠재력이 있어. 밸류에이션도 괜찮아 - 더 좋은 진입점을 위해 지켜볼 가치가 있네.`,
                ja: `${stock}には可能性がある。バリュエーションも妥当だ - より良いエントリーポイントを待つ価値がある。`,
                zh: `${stock}有一些潜力。估值合理 - 值得观察以寻找更好的入场点。`,
                es: `${stock} tiene potencial. La valoración es razonable - vale la pena monitorear para un mejor punto de entrada.`
            },
            graham_buy: {
                en: `${stock} is trading below its intrinsic value. A safe margin of safety here.`,
                ko: `${stock}은(는) 내재 가치 아래에서 거래되고 있소. 안전 마진이 충분해 보이는군.`,
                ja: `${stock}は本質的価値以下で取引されている。十分な安全域があるね。`,
                zh: `${stock}的交易价格低于其内在价值。这里有安全的边际。`,
                es: `${stock} cotiza por debajo de su valor intrínseco. Un margen de seguridad seguro aquí.`
            },
            graham_expensive: {
                en: `Mr. Market is too optimistic about ${stock}. No margin of safety at this price.`,
                ko: `미스터 마켓이 ${stock}에 대해 너무 낙관적이군. 이 가격엔 안전 마진이 없어.`,
                ja: `ミスター・マーケットは${stock}について楽観的すぎる。この価格では安全域がない。`,
                zh: `市场先生对${stock}太乐观了。在这个价格下没有安全边际。`,
                es: `El Sr. Mercado es demasiado optimista sobre ${stock}. No hay margen de seguridad a este precio.`
            },
            graham_watch: {
                en: `${stock}'s valuation is not extreme. Wait for Mr. Market to become more pessimistic for a safer entry.`,
                ko: `${stock}의 밸류에이션이 극단적이진 않네. 미스터 마켓이 더 비관적이 될 때까지 기다려보게.`,
                ja: `${stock}のバリュエーションは極端ではない。より安全なエントリーのため、ミスター・マーケットがもっと悲観的になるのを待とう。`,
                zh: `${stock}的估值不算极端。等待市场先生更加悲观时再入场会更安全。`,
                es: `La valoración de ${stock} no es extrema. Espera a que el Sr. Mercado sea más pesimista para una entrada más segura.`
            },
            // --- New Gurus ---
            dalio_bear: {
                en: `The indicators for ${stock} look bearish. In this cycle, I'd prioritize protecting capital.`,
                ko: `${stock}의 지표가 약세로 보이는군. 이번 사이클에서는 자본 보호를 우선시하겠네.`,
                ja: `${stock}の指標は弱気に見える。このサイクルでは、資本の保護を優先する。`,
                zh: `${stock}的指标看起来看跌。在这个周期中，我会优先考虑保护资本。`,
                es: `Los indicadores para ${stock} parecen bajistas. En este ciclo, priorizaría la protección del capital.`
            },
            dalio_neutral: {
                en: `${stock} might have a place, but only as part of a balanced, diversified portfolio.`,
                ko: `${stock}도 자리가 있을 수 있지만, 균형 잡힌 분산 포트폴리오의 일부로서만 의미가 있네.`,
                ja: `${stock}にも場所があるかもしれないが、バランスの取れた分散ポートフォリオの一部としてのみだ。`,
                zh: `${stock}可能有一席之地，但只能作为平衡、多元化投资组合的一部分。`,
                es: `${stock} podría tener un lugar, pero solo como parte de una cartera equilibrada y diversificada.`
            },
            soros_momentum: {
                en: `The trend in ${stock} is strong. I'm buying into the reflexivity, but I'll watch the exit door.`,
                ko: `${stock}의 추세가 강력해. 재귀성에 베팅하겠지만, 언제든 빠져나갈 준비를 하겠어.`,
                ja: `${stock}のトレンドは強力だ。再帰性に賭けるが、出口は常に見張っておく。`,
                zh: `${stock}的趋势很强。我买入反身性，但我会盯着出口。`,
                es: `La tendencia en ${stock} es fuerte. Apuesto por la reflexividad, pero vigilaré la puerta de salida.`
            },
            soros_flat: {
                en: `${stock} lacks a clear trend. Without a misconception to exploit, I'm not interested.`,
                ko: `${stock}은(는) 뚜렷한 추세가 없어. 이용할 만한 오해가 없다면 관심 없네.`,
                ja: `${stock}には明確なトレンドがない。利用できる誤解がなければ、興味はない。`,
                zh: `${stock}缺乏明显的趋势。如果没有可以利用的误解，我不感兴趣。`,
                es: `${stock} carece de una tendencia clara. Sin una idea errónea que explotar, no me interesa.`
            },
            munger_buy: {
                en: `${stock} is a high-quality business with a strong balance sheet. A 'no-brainer' decision.`,
                ko: `${stock}은(는) 탄탄한 대차대조표를 가진 고품질 비즈니스야. '고민할 필요 없는' 결정이지.`,
                ja: `${stock}は強力なバランスシートを持つ高品質なビジネスだ。「考えるまでもない」決定だね。`,
                zh: `${stock}是一家拥有强大资产负债表的高质量企业。这是一个“无需用脑”的决定。`,
                es: `${stock} es un negocio de alta calidad con un balance sólido. Una decisión 'obvia'.`
            },
            munger_pass: {
                en: `${stock} doesn't meet my quality standards. I'd rather do nothing than buy mediocrity.`,
                ko: `${stock}은(는) 내 품질 기준을 충족하지 못해. 평범한 것을 사느니 차라리 아무것도 안 하겠네.`,
                ja: `${stock}は私の品質基準を満たしていない。平凡なものを買うくらいなら、何もしない方がましだ。`,
                zh: `${stock}不符合我的质量标准。与其买平庸的东西，我宁愿什么都不做。`,
                es: `${stock} no cumple con mis estándares de calidad. Prefiero no hacer nada que comprar mediocridad.`
            },
            munger_watch: {
                en: `${stock} has decent fundamentals, but not outstanding. Keep studying it - great businesses are rare.`,
                ko: `${stock}의 펀더멘털은 괜찮지만 뛰어나진 않아. 계속 공부해봐 - 훌륭한 기업은 드물거든.`,
                ja: `${stock}のファンダメンタルズは悪くないが、傑出していない。勉強を続けなさい - 素晴らしいビジネスは稀だ。`,
                zh: `${stock}的基本面不错，但不够出色。继续研究 - 优秀的企业很罕见。`,
                es: `${stock} tiene fundamentos decentes, pero no sobresalientes. Sigue estudiándola - los grandes negocios son raros.`
            },
            icahn_activist: {
                en: `${stock} is underperforming. The management needs to go. I smell an opportunity to unlock value.`,
                ko: `${stock}은(는) 성과가 저조해. 경영진은 물러나야 해. 가치를 실현할 기회의 냄새가 나는군.`,
                ja: `${stock}は業績不振だ。経営陣は去るべきだ。価値を解放するチャンスの匂いがする。`,
                zh: `${stock}表现不佳。管理层需要走人。我闻到了释放价值的机会。`,
                es: `${stock} está teniendo un rendimiento inferior. La dirección tiene que irse. Huelo una oportunidad para desbloquear valor.`
            },
            icahn_watch: {
                en: `${stock} seems fairly run for now. I'll wait for them to slip up before I pounce.`,
                ko: `${stock}은(는) 지금은 꽤 잘 운영되는 것 같군. 그들이 실수할 때까지 기다렸다가 덮치겠어.`,
                ja: `${stock}は今のところ公正に運営されているようだ。彼らが失敗するのを待ってから襲いかかるよ。`,
                zh: `${stock}目前看起来运营得还算公平。我会等他们失误后再猛扑过去。`,
                es: `${stock} parece estar bastante bien gestionado por ahora. Esperaré a que cometan un error antes de lanzarme.`
            },
            ackman_buy: {
                en: `${stock} is a simple, predictable cash cow. Exactly the kind of business I want to own forever.`,
                ko: `${stock}은(는) 단순하고 예측 가능한 현금 창출원이야. 내가 영원히 소유하고 싶은 바로 그런 비즈니스지.`,
                ja: `${stock}は単純で予測可能なドル箱だ。私が永遠に所有したいビジネスそのものだ。`,
                zh: `${stock}是一棵简单、可预测的摇钱树。正是我想要永远拥有的那种生意。`,
                es: `${stock} es una fuente de ingresos simple y predecible. Exactamente el tipo de negocio que quiero poseer para siempre.`
            },
            ackman_pass: {
                en: `${stock} is too complex or unpredictable. I like bets I can't lose.`,
                ko: `${stock}은(는) 너무 복잡하거나 예측 불가능해. 난 질 수 없는 베팅을 좋아해.`,
                ja: `${stock}は複雑すぎるか、予測不可能だ。私は負けない賭けが好きなんだ。`,
                zh: `${stock}太复杂或不可预测。我喜欢不会输的赌注。`,
                es: `${stock} es demasiado complejo o impredecible. Me gustan las apuestas que no puedo perder.`
            },
            ackman_watch: {
                en: `${stock} shows some promise. Let's monitor for clearer cash flow visibility before taking a position.`,
                ko: `${stock}은(는) 가능성이 보여. 포지션을 취하기 전에 현금흐름이 더 명확해질 때까지 지켜보자.`,
                ja: `${stock}には可能性がある。ポジションを取る前に、キャッシュフローがより明確になるまで見守ろう。`,
                zh: `${stock}显示出一些前景。在建仓之前，让我们等待现金流更加清晰。`,
                es: `${stock} muestra algo de promesa. Monitoreemos para mayor claridad en el flujo de caja antes de tomar posición.`
            },
            simons_algo: {
                en: `My models detect a statistically significant pattern in ${stock}'s volume and price action. Executing trade.`,
                ko: `내 모델이 ${stock}의 거래량과 가격 움직임에서 통계적으로 유의미한 패턴을 감지했어. 거래 실행.`,
                ja: `私のモデルは${stock}の出来高と価格変動に統計的に有意なパターンを検出した。取引を実行する。`,
                zh: `我的模型在${stock}的成交量和价格走势中检测到了统计上显著的模式。执行交易。`,
                es: `Mis modelos detectan un patrón estadísticamente significativo en la acción del precio y el volumen de ${stock}. Ejecutando operación.`
            },
            simons_noise: {
                en: `${stock}'s movement looks like random noise today. No clear signal to trade.`,
                ko: `오늘 ${stock}의 움직임은 무작위 소음처럼 보이는군. 거래할 명확한 신호가 없어.`,
                ja: `${stock}の今日の動きはランダムなノイズのように見える。取引すべき明確なシグナルはない。`,
                zh: `${stock}今天的走势看起来像随机噪音。没有明确的交易信号。`,
                es: `El movimiento de ${stock} hoy parece ruido aleatorio. No hay una señal clara para operar.`
            },
            // Druckenmiller
            druckenmiller_buy: {
                en: `The macro winds favor ${stock}. I'm seeing strong momentum - time to build a position.`,
                ko: `거시적 바람이 ${stock}에 유리해. 강한 모멘텀이 보여 - 포지션을 구축할 때야.`,
                ja: `マクロの風が${stock}に有利だ。強いモメンタムが見える - ポジションを構築する時だ。`,
                zh: `宏观形势有利于${stock}。我看到了强劲的势头 - 是时候建仓了。`,
                es: `Los vientos macro favorecen a ${stock}. Veo un fuerte impulso - hora de construir posición.`
            },
            druckenmiller_caution: {
                en: `${stock} is showing weakness. I'd reduce exposure and preserve capital here.`,
                ko: `${stock}이(가) 약세를 보이고 있어. 노출을 줄이고 자본을 보존하겠어.`,
                ja: `${stock}は弱さを見せている。エクスポージャーを減らし、資本を保全する。`,
                zh: `${stock}显示出疲软。我会减少敞口，保护资本。`,
                es: `${stock} muestra debilidad. Reduciría la exposición y preservaría capital.`
            },
            druckenmiller_wait: {
                en: `No clear macro thesis on ${stock} right now. Staying flexible and watching.`,
                ko: `지금은 ${stock}에 대한 명확한 거시적 논제가 없어. 유연하게 관망 중이야.`,
                ja: `今${stock}について明確なマクロテーゼがない。柔軟に様子を見ている。`,
                zh: `目前对${stock}没有明确的宏观论点。保持灵活，继续观察。`,
                es: `No hay tesis macro clara sobre ${stock} ahora. Me mantengo flexible y observando.`
            },
            // Tudor Jones
            tudor_momentum: {
                en: `The charts are speaking loudly on ${stock}. This momentum could continue.`,
                ko: `${stock}의 차트가 크게 말하고 있어. 이 모멘텀은 계속될 수 있어.`,
                ja: `${stock}のチャートが大きく語っている。このモメンタムは続く可能性がある。`,
                zh: `${stock}的图表在大声说话。这种势头可能会持续。`,
                es: `Los gráficos hablan fuerte sobre ${stock}. Este impulso podría continuar.`
            },
            tudor_wait: {
                en: `${stock} isn't showing the kind of technical setup I look for. Waiting for clarity.`,
                ko: `${stock}은(는) 내가 찾는 기술적 셋업을 보여주지 않아. 명확해질 때까지 기다리겠어.`,
                ja: `${stock}は私が探しているようなテクニカルセットアップを見せていない。明確になるまで待つ。`,
                zh: `${stock}没有显示我寻找的那种技术形态。等待更明确的信号。`,
                es: `${stock} no muestra el setup técnico que busco. Esperando claridad.`
            },
            // Howard Marks
            marks_buy: {
                en: `Fear is high and ${stock} is cheap. Second-level thinking says buy when others are fearful.`,
                ko: `공포가 높고 ${stock}이(가) 싸. 2차적 사고로 볼 때, 다른 사람들이 두려워할 때 사야 해.`,
                ja: `恐怖が高く、${stock}は安い。二次的思考では、他者が恐れている時に買うべきだ。`,
                zh: `恐慌情绪高涨，${stock}很便宜。二级思维告诉我们：当别人恐惧时买入。`,
                es: `El miedo es alto y ${stock} está barato. El pensamiento de segundo nivel dice comprar cuando otros tienen miedo.`
            },
            marks_caution: {
                en: `Everyone loves ${stock} - that's when I get worried. Market cycles turn.`,
                ko: `모두가 ${stock}을(를) 좋아해 - 그때가 내가 걱정되는 때야. 시장 사이클은 돌아가지.`,
                ja: `みんなが${stock}を好んでいる - それが私が心配になる時だ。市場サイクルは変わる。`,
                zh: `每个人都喜欢${stock} - 这时候我开始担心了。市场周期会转变。`,
                es: `Todos aman ${stock} - es cuando me preocupo. Los ciclos de mercado cambian.`
            },
            marks_cycle: {
                en: `${stock} is somewhere in the cycle. Neither extreme fear nor greed - tread carefully.`,
                ko: `${stock}은(는) 사이클 어딘가에 있어. 극단적인 공포도 탐욕도 아니야 - 조심스럽게 접근해.`,
                ja: `${stock}はサイクルのどこかにある。極端な恐怖も貪欲もない - 慎重に。`,
                zh: `${stock}处于周期的某个位置。既非极度恐慌也非贪婪 - 小心行事。`,
                es: `${stock} está en algún punto del ciclo. Ni miedo ni codicia extremos - procede con cuidado.`
            },
            // Templeton
            templeton_buy: {
                en: `Maximum pessimism on ${stock}. This is exactly when I want to be buying.`,
                ko: `${stock}에 대한 최대 비관론. 바로 이때가 내가 사고 싶을 때야.`,
                ja: `${stock}への最大の悲観論。まさにこれが私が買いたい時だ。`,
                zh: `对${stock}的极度悲观。这正是我想买入的时候。`,
                es: `Máximo pesimismo sobre ${stock}. Este es exactamente cuando quiero comprar.`
            },
            templeton_wait: {
                en: `${stock} isn't at the point of maximum pessimism yet. Patience is a virtue.`,
                ko: `${stock}은(는) 아직 최대 비관론 지점에 있지 않아. 인내가 미덕이야.`,
                ja: `${stock}はまだ最大悲観点にない。忍耐は美徳だ。`,
                zh: `${stock}还没有达到最悲观的时刻。耐心是美德。`,
                es: `${stock} aún no está en el punto de máximo pesimismo. La paciencia es una virtud.`
            },
            // Klarman
            klarman_buy: {
                en: `${stock} offers a substantial margin of safety. Patient capital will be rewarded.`,
                ko: `${stock}은(는) 상당한 안전 마진을 제공해. 인내심 있는 자본은 보상받을 거야.`,
                ja: `${stock}は十分な安全域を提供している。忍耐強い資本は報われるだろう。`,
                zh: `${stock}提供了充足的安全边际。有耐心的资本将获得回报。`,
                es: `${stock} ofrece un margen de seguridad sustancial. El capital paciente será recompensado.`
            },
            klarman_pass: {
                en: `No margin of safety in ${stock} at these levels. I'll wait for a better pitch.`,
                ko: `이 가격대에서 ${stock}에는 안전 마진이 없어. 더 좋은 기회를 기다리겠어.`,
                ja: `このレベルでは${stock}に安全域がない。より良い機会を待つ。`,
                zh: `在这个水平上${stock}没有安全边际。我会等待更好的机会。`,
                es: `No hay margen de seguridad en ${stock} a estos niveles. Esperaré una mejor oportunidad.`
            },
            klarman_watch: {
                en: `${stock}'s valuation is approaching reasonable levels. Stay patient - true bargains take time.`,
                ko: `${stock}의 밸류에이션이 합리적인 수준에 가까워지고 있어. 인내심을 가져 - 진정한 저가 매수 기회는 시간이 걸려.`,
                ja: `${stock}のバリュエーションが妥当なレベルに近づいている。辛抱強く - 本当のバーゲンには時間がかかる。`,
                zh: `${stock}的估值正在接近合理水平。保持耐心 - 真正的便宜货需要时间。`,
                es: `La valoración de ${stock} se acerca a niveles razonables. Ten paciencia - las verdaderas gangas toman tiempo.`
            },
            // Burry
            burry_buy: {
                en: `${stock} is deeply mispriced. The crowd is wrong - I've done the research.`,
                ko: `${stock}은(는) 심각하게 잘못 가격이 매겨져 있어. 군중이 틀렸어 - 난 조사를 했어.`,
                ja: `${stock}は深刻にミスプライスされている。群衆は間違っている - 私は調査した。`,
                zh: `${stock}被严重错误定价。大众是错的 - 我做过研究了。`,
                es: `${stock} está profundamente mal valorado. La multitud está equivocada - he hecho la investigación.`
            },
            burry_short: {
                en: `${stock} is overvalued nonsense. I'm looking for the short opportunity here.`,
                ko: `${stock}은(는) 고평가된 헛소리야. 여기서 공매도 기회를 찾고 있어.`,
                ja: `${stock}は過大評価されたナンセンスだ。ここでショートの機会を探している。`,
                zh: `${stock}是被高估的胡说八道。我在这里寻找做空机会。`,
                es: `${stock} es una tontería sobrevalorada. Busco la oportunidad de vender en corto.`
            },
            burry_research: {
                en: `${stock} needs deeper analysis. I'll dig into the details before making a call.`,
                ko: `${stock}은(는) 더 깊은 분석이 필요해. 결정하기 전에 세부 사항을 파헤치겠어.`,
                ja: `${stock}はより深い分析が必要だ。判断する前に詳細を掘り下げる。`,
                zh: `${stock}需要更深入的分析。在做决定前我会深入研究细节。`,
                es: `${stock} necesita análisis más profundo. Investigaré los detalles antes de decidir.`
            },
            // Greenblatt
            greenblatt_buy: {
                en: `${stock} scores well on my magic formula - high returns on capital at a low price.`,
                ko: `${stock}은(는) 내 마법 공식에서 좋은 점수를 받아 - 낮은 가격에 높은 자본 수익률.`,
                ja: `${stock}は私のマジックフォーミュラで良いスコアだ - 低価格で高い資本利益率。`,
                zh: `${stock}在我的神奇公式中得分很高 - 低价格高资本回报。`,
                es: `${stock} puntúa bien en mi fórmula mágica - altos rendimientos sobre capital a bajo precio.`
            },
            greenblatt_pass: {
                en: `${stock} doesn't meet my magic formula criteria. Looking elsewhere.`,
                ko: `${stock}은(는) 내 마법 공식 기준을 충족하지 않아. 다른 곳을 찾고 있어.`,
                ja: `${stock}は私のマジックフォーミュラの基準を満たしていない。他を探している。`,
                zh: `${stock}不符合我的神奇公式标准。我在找其他的。`,
                es: `${stock} no cumple mis criterios de fórmula mágica. Buscando en otro lugar.`
            },
            // Bogle
            bogle_index: {
                en: `Why pick ${stock} individually? Buy the whole market through a low-cost index fund.`,
                ko: `왜 ${stock}을(를) 개별적으로 고르나? 저비용 인덱스 펀드를 통해 전체 시장을 사라.`,
                ja: `なぜ${stock}を個別に選ぶ？低コストのインデックスファンドで市場全体を買え。`,
                zh: `为什么单独挑选${stock}？通过低成本指数基金购买整个市场。`,
                es: `¿Por qué elegir ${stock} individualmente? Compra todo el mercado con un fondo indexado de bajo costo.`
            },
            // Fisher
            fisher_buy: {
                en: `${stock} has the quality growth characteristics I seek. This is a long-term hold.`,
                ko: `${stock}은(는) 내가 찾는 양질의 성장 특성을 가지고 있어. 장기 보유 종목이야.`,
                ja: `${stock}は私が求める質の高い成長特性を持っている。長期保有だ。`,
                zh: `${stock}具有我寻找的优质成长特征。这是长期持有。`,
                es: `${stock} tiene las características de crecimiento de calidad que busco. Es para mantener a largo plazo.`
            },
            fisher_research: {
                en: `${stock} needs more scuttlebutt research. I'll talk to customers and competitors.`,
                ko: `${stock}은(는) 더 많은 스커틀버트 조사가 필요해. 고객과 경쟁사와 이야기해볼게.`,
                ja: `${stock}にはもっとスカットルバットの調査が必要だ。顧客や競合他社と話してみる。`,
                zh: `${stock}需要更多的闲聊调查。我会和客户和竞争对手交流。`,
                es: `${stock} necesita más investigación scuttlebutt. Hablaré con clientes y competidores.`
            },
            // Einhorn
            einhorn_short: {
                en: `${stock} has the hallmarks of a troubled company. Time to dig for the short thesis.`,
                ko: `${stock}은(는) 문제 있는 기업의 특징을 가지고 있어. 공매도 논제를 파볼 시간이야.`,
                ja: `${stock}は問題企業の特徴を持っている。ショートテーゼを掘り下げる時だ。`,
                zh: `${stock}具有问题公司的特征。是时候挖掘做空论点了。`,
                es: `${stock} tiene las características de una empresa con problemas. Hora de buscar la tesis corta.`
            },
            einhorn_buy: {
                en: `${stock} is undervalued with a clear catalyst on the horizon. I'm interested.`,
                ko: `${stock}은(는) 저평가되어 있고 명확한 촉매가 보여. 관심이 가.`,
                ja: `${stock}は過小評価されており、明確なカタリストが見える。興味がある。`,
                zh: `${stock}被低估，且有明确的催化剂即将出现。我很感兴趣。`,
                es: `${stock} está infravalorado con un catalizador claro en el horizonte. Me interesa.`
            },
            einhorn_watch: {
                en: `${stock} is on my watchlist. Waiting for a catalyst or a better entry point.`,
                ko: `${stock}은(는) 내 관심 목록에 있어. 촉매나 더 좋은 진입점을 기다리는 중이야.`,
                ja: `${stock}はウォッチリストにある。カタリストやより良いエントリーポイントを待っている。`,
                zh: `${stock}在我的观察名单上。等待催化剂或更好的入场点。`,
                es: `${stock} está en mi lista de seguimiento. Esperando un catalizador o mejor punto de entrada.`
            },
            // Loeb
            loeb_activist: {
                en: `${stock} is ripe for activist intervention. Management needs a wake-up call.`,
                ko: `${stock}은(는) 행동주의 개입의 적기야. 경영진에게 경종이 필요해.`,
                ja: `${stock}はアクティビスト介入の好機だ。経営陣は目を覚ます必要がある。`,
                zh: `${stock}适合激进投资者介入。管理层需要被敲响警钟。`,
                es: `${stock} está maduro para intervención activista. La dirección necesita un llamado de atención.`
            },
            loeb_watch: {
                en: `${stock} isn't screaming for activism yet. Watching for the right catalyst.`,
                ko: `${stock}은(는) 아직 행동주의를 외치지 않아. 적절한 촉매를 지켜보고 있어.`,
                ja: `${stock}はまだアクティビズムを叫んでいない。適切なカタリストを見守っている。`,
                zh: `${stock}还没有到需要激进投资的地步。在等待合适的催化剂。`,
                es: `${stock} aún no grita por activismo. Observando el catalizador adecuado.`
            },
            // Smith
            smith_buy: {
                en: `${stock} is quality at a fair price. Buy, don't overpay, and do nothing.`,
                ko: `${stock}은(는) 적정 가격의 우량주야. 사고, 비싸게 사지 말고, 아무것도 하지 마.`,
                ja: `${stock}は適正価格の優良銘柄だ。買って、高く払わず、何もするな。`,
                zh: `${stock}是价格公道的优质股。买入，不多付，什么都不做。`,
                es: `${stock} es calidad a precio justo. Compra, no pagues de más, y no hagas nada.`
            },
            smith_pass: {
                en: `${stock} doesn't meet my quality standards or is overpriced. I'll pass.`,
                ko: `${stock}은(는) 내 품질 기준을 충족하지 않거나 과대평가되어 있어. 패스할게.`,
                ja: `${stock}は私の品質基準を満たしていないか、高すぎる。パスする。`,
                zh: `${stock}不符合我的质量标准或价格过高。我跳过。`,
                es: `${stock} no cumple mis estándares de calidad o está sobrevalorado. Paso.`
            },
            smith_watch: {
                en: `${stock} has decent quality but valuation needs monitoring. Good businesses deserve fair prices.`,
                ko: `${stock}은(는) 품질은 괜찮지만 밸류에이션 모니터링이 필요해. 좋은 기업은 공정한 가격을 받을 자격이 있어.`,
                ja: `${stock}は品質は良いが、バリュエーションの監視が必要だ。良いビジネスには適正な価格がふさわしい。`,
                zh: `${stock}质量不错，但估值需要关注。好企业值得公平的价格。`,
                es: `${stock} tiene calidad decente pero la valoración necesita monitoreo. Los buenos negocios merecen precios justos.`
            },
            // Miller
            miller_buy: {
                en: `Blood in the streets with ${stock}. This fear is exactly when I'm buying.`,
                ko: `${stock}에서 피가 낭자해. 이 공포야말로 내가 사는 때야.`,
                ja: `${stock}で血が流れている。この恐怖こそ私が買う時だ。`,
                zh: `${stock}遍地是血。这种恐慌正是我买入的时候。`,
                es: `Sangre en las calles con ${stock}. Este miedo es exactamente cuando compro.`
            },
            miller_wait: {
                en: `${stock} isn't showing the fear or opportunity I look for. Patience.`,
                ko: `${stock}은(는) 내가 찾는 공포나 기회를 보여주지 않아. 인내심을 가져야 해.`,
                ja: `${stock}は私が探している恐怖や機会を見せていない。忍耐。`,
                zh: `${stock}没有显示我寻找的恐慌或机会。耐心等待。`,
                es: `${stock} no muestra el miedo u oportunidad que busco. Paciencia.`
            },
            // Pabrai
            pabrai_clone: {
                en: `${stock} fits the Buffett mold - strong moat, good numbers. Cloning this idea.`,
                ko: `${stock}은(는) 버핏 스타일에 맞아 - 강한 해자, 좋은 숫자. 이 아이디어를 복제하겠어.`,
                ja: `${stock}はバフェットのスタイルに合う - 強い堀、良い数字。このアイデアを複製する。`,
                zh: `${stock}符合巴菲特模式 - 强大护城河，良好数据。克隆这个想法。`,
                es: `${stock} encaja en el molde de Buffett - foso fuerte, buenos números. Clonando esta idea.`
            },
            pabrai_pass: {
                en: `${stock} doesn't fit my checklist. Looking for better dhandho opportunities.`,
                ko: `${stock}은(는) 내 체크리스트에 맞지 않아. 더 좋은 단도 기회를 찾고 있어.`,
                ja: `${stock}は私のチェックリストに合わない。より良いダンドーの機会を探している。`,
                zh: `${stock}不符合我的清单。在寻找更好的dhandho机会。`,
                es: `${stock} no encaja en mi lista. Buscando mejores oportunidades dhandho.`
            },
            // Li Lu
            lilu_buy: {
                en: `${stock} shows value characteristics I learned from Munger. A potential long-term winner.`,
                ko: `${stock}은(는) 멍거에게 배운 가치 특성을 보여줘. 잠재적인 장기 승자야.`,
                ja: `${stock}はマンガーから学んだバリュー特性を示している。潜在的な長期の勝者だ。`,
                zh: `${stock}显示出我从芒格那里学到的价值特征。潜在的长期赢家。`,
                es: `${stock} muestra características de valor que aprendí de Munger. Un potencial ganador a largo plazo.`
            },
            lilu_research: {
                en: `${stock} needs deeper research into the business fundamentals. More homework needed.`,
                ko: `${stock}은(는) 비즈니스 펀더멘털에 대한 더 깊은 연구가 필요해. 숙제가 더 필요해.`,
                ja: `${stock}はビジネスファンダメンタルズについてより深い研究が必要だ。もっと宿題が必要。`,
                zh: `${stock}需要对业务基本面进行更深入的研究。需要更多功课。`,
                es: `${stock} necesita investigación más profunda de los fundamentos del negocio. Más tarea necesaria.`
            },
            // Griffin
            griffin_trade: {
                en: `My algorithms are detecting opportunities in ${stock}'s price action.`,
                ko: `내 알고리즘이 ${stock}의 가격 움직임에서 기회를 감지하고 있어.`,
                ja: `私のアルゴリズムが${stock}の価格変動に機会を検出している。`,
                zh: `我的算法在${stock}的价格走势中检测到机会。`,
                es: `Mis algoritmos detectan oportunidades en la acción del precio de ${stock}.`
            },
            griffin_algo: {
                en: `${stock} requires more data before my models can make a confident call.`,
                ko: `내 모델이 확신 있는 판단을 내리기 전에 ${stock}에 대해 더 많은 데이터가 필요해.`,
                ja: `私のモデルが自信を持って判断する前に、${stock}についてもっとデータが必要だ。`,
                zh: `在我的模型能够做出自信判断之前，${stock}需要更多数据。`,
                es: `${stock} requiere más datos antes de que mis modelos puedan hacer una llamada confiada.`
            },
            // Robertson
            robertson_long: {
                en: `${stock} is a quality company worthy of a long position. Adding to the book.`,
                ko: `${stock}은(는) 롱 포지션을 가질 가치가 있는 우량 기업이야. 장부에 추가해.`,
                ja: `${stock}はロングポジションに値する優良企業だ。ブックに追加する。`,
                zh: `${stock}是一家值得做多的优质公司。加入组合。`,
                es: `${stock} es una empresa de calidad digna de una posición larga. Añadiendo al libro.`
            },
            robertson_short: {
                en: `${stock} is fundamentally weak. This could be a short candidate.`,
                ko: `${stock}은(는) 펀더멘털이 약해. 이건 공매도 후보가 될 수 있어.`,
                ja: `${stock}はファンダメンタル的に弱い。ショート候補になり得る。`,
                zh: `${stock}基本面疲软。这可能是做空候选。`,
                es: `${stock} es fundamentalmente débil. Podría ser un candidato para corto.`
            },
            robertson_neutral: {
                en: `${stock} doesn't fit either my long or short book right now. Watching.`,
                ko: `${stock}은(는) 현재 내 롱이나 숏 북에 맞지 않아. 지켜보는 중이야.`,
                ja: `${stock}は今のところ私のロングにもショートにも合わない。様子見。`,
                zh: `${stock}目前不适合我的多头或空头组合。继续观察。`,
                es: `${stock} no encaja en mi libro largo ni corto ahora. Observando.`
            },
            // Fink
            fink_longterm: {
                en: `Consider ${stock} in the context of long-term trends and ESG factors. Think decades, not quarters.`,
                ko: `장기 트렌드와 ESG 요소의 맥락에서 ${stock}을(를) 고려해. 분기가 아니라 수십 년을 생각해.`,
                ja: `長期トレンドとESG要素の文脈で${stock}を考えよ。四半期ではなく数十年で考えよ。`,
                zh: `在长期趋势和ESG因素的背景下考虑${stock}。考虑几十年，而不是季度。`,
                es: `Considera ${stock} en el contexto de tendencias a largo plazo y factores ESG. Piensa en décadas, no trimestres.`
            },
            // Jones (Alfred Winslow)
            jones_hedge: {
                en: `A balanced long/short approach to ${stock} can reduce market risk while capturing alpha.`,
                ko: `${stock}에 대한 균형 잡힌 롱/숏 접근은 알파를 포착하면서 시장 리스크를 줄일 수 있어.`,
                ja: `${stock}への均衡の取れたロング/ショートアプローチは、アルファを獲得しながら市場リスクを減らせる。`,
                zh: `对${stock}采取平衡的多空方法可以在捕获阿尔法的同时降低市场风险。`,
                es: `Un enfoque equilibrado largo/corto en ${stock} puede reducir el riesgo de mercado capturando alfa.`
            },
            // Steinhardt
            steinhardt_trade: {
                en: `${stock} is showing a variant perception opportunity. Time to act decisively.`,
                ko: `${stock}은(는) 변별적 인식 기회를 보여주고 있어. 과감하게 행동할 때야.`,
                ja: `${stock}は変異認識の機会を見せている。決断的に行動する時だ。`,
                zh: `${stock}显示出变异认知机会。是时候果断行动了。`,
                es: `${stock} muestra una oportunidad de percepción variante. Hora de actuar con decisión.`
            },
            steinhardt_wait: {
                en: `${stock} lacks the short-term catalyst I need. Waiting for the right moment.`,
                ko: `${stock}은(는) 내가 필요로 하는 단기 촉매가 부족해. 적절한 순간을 기다리는 중이야.`,
                ja: `${stock}には私が必要とする短期カタリストがない。適切なタイミングを待っている。`,
                zh: `${stock}缺乏我需要的短期催化剂。等待合适的时机。`,
                es: `${stock} carece del catalizador a corto plazo que necesito. Esperando el momento adecuado.`
            },
            // Bacon
            bacon_buy: {
                en: `Macro conditions favor ${stock}. I'm positioning for the trend.`,
                ko: `거시 조건이 ${stock}에 유리해. 트렌드에 맞게 포지셔닝하고 있어.`,
                ja: `マクロ条件が${stock}に有利だ。トレンドに向けてポジショニング中。`,
                zh: `宏观条件有利于${stock}。我正在为趋势建仓。`,
                es: `Las condiciones macro favorecen a ${stock}. Me posiciono para la tendencia.`
            },
            bacon_preserve: {
                en: `Capital preservation is paramount. ${stock} doesn't offer a clear risk/reward now.`,
                ko: `자본 보존이 최우선이야. ${stock}은(는) 지금 명확한 리스크/보상을 제공하지 않아.`,
                ja: `資本保全が最優先だ。${stock}は今、明確なリスク/リワードを提供していない。`,
                zh: `资本保全是最重要的。${stock}目前没有提供明确的风险/回报。`,
                es: `La preservación del capital es primordial. ${stock} no ofrece un riesgo/recompensa claro ahora.`
            },
            // Swensen
            swensen_diversify: {
                en: `${stock} should be viewed as part of a diversified endowment-style portfolio, not in isolation.`,
                ko: `${stock}은(는) 단독이 아니라 분산된 기부금 스타일 포트폴리오의 일부로 봐야 해.`,
                ja: `${stock}は単独ではなく、分散されたエンダウメントスタイルのポートフォリオの一部として見るべきだ。`,
                zh: `${stock}应该被视为多元化捐赠基金风格投资组合的一部分，而不是单独看待。`,
                es: `${stock} debe verse como parte de una cartera diversificada estilo dotación, no aisladamente.`
            }
        };

        const msgObj = messages[key];
        return msgObj ? (msgObj[currentLang] || msgObj['en']) : `Advice for ${stock}`;
    }
    // Expose for debugging/testing
    window.stockGuru = {
        updateLanguage,
        renderInvestors,
        investors
    };

    console.log('Stock Recommend: Initializing...');
    // Initialize
    updateLanguage();
    updateDataStatus();
    renderHistory();
    updateFilterLabels();
    initThemeToggle();
    initShareFeature();
    
    // API 키가 없으면 기본 키 설정 (사용자가 제공한 키)
    if (!getFmpApiKey()) {
        // 기본 API 키 설정 (사용자가 제공한 키)
        const defaultApiKey = 'ww44zq8zoTn1OQK67C5cJ9bQ9NshFBOK';
        setFmpApiKey(defaultApiKey);
        console.log('✅ FMP API 키가 자동으로 설정되었습니다.');
    }
    
    console.log('Stock Recommend: Initialization complete.');

    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered:', reg.scope))
            .catch(err => console.log('Service Worker registration failed:', err));
    }

    // Theme Toggle - initThemeToggle은 이미 위에서 처리됨
    function initThemeToggle() {
        // 이미 DOMContentLoaded에서 처리되므로 여기서는 아무것도 하지 않음
        console.log('🎨 initThemeToggle 호출됨 (이미 초기화 완료)');
    }

    // Share Feature
    function initShareFeature() {
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', shareResults);
        }
    }

    async function shareResults() {
        const resultSection = document.getElementById('resultSection');
        if (!resultSection || resultSection.classList.contains('hidden')) {
            showToast(currentLang === 'ko' ? '먼저 주식을 분석하세요!' : 'Analyze a stock first!');
            return;
        }

        const stockName = document.getElementById('companyName').textContent;
        const verdict = document.getElementById('overallVerdict').textContent;
        
        const shareData = {
            title: 'Stock Guru Analysis',
            text: `📊 ${stockName} 분석 결과\n${verdict}\n\n`,
            url: window.location.href
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    copyToClipboard(shareData);
                }
            }
        } else {
            copyToClipboard(shareData);
        }
    }

    function copyToClipboard(data) {
        const text = `${data.text}${data.url}`;
        navigator.clipboard.writeText(text).then(() => {
            showToast(currentLang === 'ko' ? '📋 클립보드에 복사되었습니다!' : '📋 Copied to clipboard!');
        }).catch(() => {
            showToast(currentLang === 'ko' ? '복사 실패' : 'Copy failed');
        });
    }

    // ========== Hot Stocks ==========
    function initHotStocks() {
        const hotStockBtns = document.querySelectorAll('.hot-stock-btn');
        hotStockBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const symbol = btn.dataset.symbol;
                stockInput.value = symbol;
                analyzeBtn.click();
            });
        });
    }
    initHotStocks();

    // ========== Favorites ==========
    let favorites = JSON.parse(localStorage.getItem('stockFavorites') || '[]');
    
    function initFavorites() {
        renderFavorites();
        updateFavoriteButton();
        
        const favoriteBtn = document.getElementById('favoriteBtn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', toggleFavorite);
        }
    }
    
    function toggleFavorite() {
        const currentStock = stockInput.value.trim().toUpperCase();
        if (!currentStock) {
            showToast(currentLang === 'ko' ? '종목을 입력하세요' : 'Enter a stock symbol');
            return;
        }
        
        const index = favorites.indexOf(currentStock);
        if (index > -1) {
            favorites.splice(index, 1);
            showToast(currentLang === 'ko' ? `⭐ ${currentStock} 즐겨찾기 제거` : `⭐ ${currentStock} removed from favorites`);
        } else {
            favorites.unshift(currentStock);
            if (favorites.length > 10) favorites.pop();
            showToast(currentLang === 'ko' ? `⭐ ${currentStock} 즐겨찾기 추가` : `⭐ ${currentStock} added to favorites`);
        }
        
        localStorage.setItem('stockFavorites', JSON.stringify(favorites));
        renderFavorites();
        updateFavoriteButton();
    }
    
    function updateFavoriteButton() {
        const favoriteBtn = document.getElementById('favoriteBtn');
        const favoriteIcon = document.getElementById('favoriteIcon');
        const currentStock = stockInput.value.trim().toUpperCase();
        
        if (favoriteBtn && favoriteIcon) {
            const isFav = favorites.includes(currentStock);
            favoriteBtn.classList.toggle('active', isFav);
            favoriteIcon.textContent = isFav ? '★' : '☆';
        }
    }
    
    function renderFavorites() {
        const favoritesSection = document.getElementById('favoritesSection');
        const favoritesList = document.getElementById('favoritesList');
        
        if (!favoritesSection || !favoritesList) return;
        
        if (favorites.length === 0) {
            favoritesSection.classList.add('hidden');
            return;
        }
        
        favoritesSection.classList.remove('hidden');
        favoritesList.innerHTML = favorites.map(stock => `
            <div class="favorite-item" data-symbol="${stock}">
                <span class="fav-symbol">${stock}</span>
                <span class="remove-fav" data-symbol="${stock}">✕</span>
            </div>
        `).join('');
        
        // Click to analyze
        favoritesList.querySelectorAll('.fav-symbol').forEach(el => {
            el.addEventListener('click', () => {
                stockInput.value = el.textContent;
                analyzeBtn.click();
            });
        });
        
        // Remove from favorites
        favoritesList.querySelectorAll('.remove-fav').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                const symbol = el.dataset.symbol;
                favorites = favorites.filter(f => f !== symbol);
                localStorage.setItem('stockFavorites', JSON.stringify(favorites));
                renderFavorites();
                updateFavoriteButton();
            });
        });
    }
    initFavorites();

    // Update favorite button when input changes
    stockInput.addEventListener('input', updateFavoriteButton);

    // ========== Keyboard Shortcuts ==========
    function initKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+K: Focus search
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                stockInput.focus();
                stockInput.select();
            }
            
            // Ctrl+D: Toggle favorite
            if (e.ctrlKey && e.key === 'd') {
                e.preventDefault();
                toggleFavorite();
            }
            
            // ?: Show shortcuts modal
            if (e.key === '?' && !e.ctrlKey && !e.altKey) {
                const activeElement = document.activeElement;
                if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                    e.preventDefault();
                    document.getElementById('shortcutsModal').classList.remove('hidden');
                }
            }
            
            // Esc: Close modals
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.classList.add('hidden');
                });
            }
        });
    }
    initKeyboardShortcuts();

    // ========== Analysis History for Compare ==========
    let analysisResults = [];
    
    function storeAnalysisResult(data) {
        const result = {
            symbol: data.symbol || stockInput.value.toUpperCase(),
            name: data.name || stockInput.value,
            price: data.price,
            change: data.change,
            changePercent: data.changePercent,
            per: data.per,
            pbr: data.pbr,
            roe: data.roe,
            revenueGrowth: data.revenueGrowth,
            dividendYield: data.dividendYield,
            timestamp: Date.now()
        };
        
        // Remove existing entry for same symbol
        analysisResults = analysisResults.filter(r => r.symbol !== result.symbol);
        analysisResults.unshift(result);
        
        // Keep only last 5
        if (analysisResults.length > 5) {
            analysisResults = analysisResults.slice(0, 5);
        }
    }

    // ========== Compare Feature ==========
    function showCompareModal() {
        if (analysisResults.length < 2) {
            showToast(currentLang === 'ko' ? '비교하려면 2개 이상의 종목을 분석하세요' : 'Analyze at least 2 stocks to compare');
            return;
        }
        
        const compareContent = document.getElementById('compareContent');
        if (!compareContent) return;
        
        const metrics = [
            { key: 'price', label: currentLang === 'ko' ? '현재가' : 'Price' },
            { key: 'changePercent', label: currentLang === 'ko' ? '등락률' : 'Change %' },
            { key: 'per', label: 'PER' },
            { key: 'pbr', label: 'PBR' },
            { key: 'roe', label: 'ROE' },
            { key: 'revenueGrowth', label: currentLang === 'ko' ? '매출성장률' : 'Revenue Growth' },
            { key: 'dividendYield', label: currentLang === 'ko' ? '배당률' : 'Dividend Yield' }
        ];
        
        let tableHTML = '<table class="compare-table">';
        tableHTML += '<thead><tr><th>' + (currentLang === 'ko' ? '지표' : 'Metric') + '</th>';
        analysisResults.forEach(r => {
            tableHTML += `<th>${r.symbol}</th>`;
        });
        tableHTML += '</tr></thead><tbody>';
        
        metrics.forEach(metric => {
            tableHTML += `<tr><td class="metric-name">${metric.label}</td>`;
            analysisResults.forEach(r => {
                let value = r[metric.key];
                let className = '';
                
                if (typeof value === 'number') {
                    if (metric.key === 'changePercent' || metric.key === 'roe' || metric.key === 'revenueGrowth') {
                        className = value > 0 ? 'positive' : value < 0 ? 'negative' : '';
                        value = value.toFixed(2) + '%';
                    } else if (metric.key === 'dividendYield') {
                        value = value.toFixed(2) + '%';
                    } else if (metric.key === 'price') {
                        value = '$' + value.toFixed(2);
                    } else {
                        value = value.toFixed(2);
                    }
                } else {
                    value = '-';
                }
                
                tableHTML += `<td class="${className}">${value}</td>`;
            });
            tableHTML += '</tr>';
        });
        
        tableHTML += '</tbody></table>';
        compareContent.innerHTML = tableHTML;
        
        document.getElementById('compareModal').classList.remove('hidden');
    }

    // Store result after each analysis
    const originalShowResults = window.stockGuru?.showResults;
    
    // Expose compare feature
    window.stockGuru = {
        ...window.stockGuru,
        showCompare: showCompareModal,
        analysisResults
    };

    // ========== Chart Analysis Feature ==========
    // 전역 차트 인스턴스 변수
    window.chartInstance = null;
    window.currentChartSymbol = null;

    // 과거 주가 데이터 가져오기
    async function fetchHistoricalData(ticker, range = '3mo', interval = '1d') {
        try {
            console.log(`📊 차트 데이터 요청: ${ticker}, 기간: ${range}`);
            const targetUrl = `${BASE_URL}/v8/finance/chart/${ticker}?interval=${interval}&range=${range}`;
            const data = await fetchWithProxy(targetUrl);

            if (data.chart?.result?.[0]) {
                const result = data.chart.result[0];
                const timestamps = result.timestamp || [];
                const quote = result.indicators.quote[0];
                
                if (!quote || !timestamps.length) {
                    console.warn('차트 데이터가 비어있습니다');
                    return null;
                }
                
                // 유효한 데이터만 필터링
                const validData = [];
                for (let i = 0; i < timestamps.length; i++) {
                    if (quote.close && quote.close[i] !== null && quote.close[i] !== undefined) {
                        validData.push({
                            date: new Date(timestamps[i] * 1000),
                            timestamp: timestamps[i],
                            close: quote.close[i],
                            high: quote.high && quote.high[i] !== null ? quote.high[i] : quote.close[i],
                            low: quote.low && quote.low[i] !== null ? quote.low[i] : quote.close[i],
                            open: quote.open && quote.open[i] !== null ? quote.open[i] : quote.close[i],
                            volume: quote.volume && quote.volume[i] ? quote.volume[i] : 0
                        });
                    }
                }
                
                console.log(`✅ 차트 데이터 수신 완료: ${validData.length}개 데이터 포인트`);
                return validData.length > 0 ? validData : null;
            }
            console.warn('차트 데이터 형식이 올바르지 않습니다');
            return null;
        } catch (error) {
            console.error('❌ 과거 데이터 가져오기 실패:', error);
            throw error; // 에러를 다시 throw하여 상위에서 처리할 수 있도록
        }
    }

    // 이동평균선 계산
    function calculateMA(prices, period) {
        const ma = [];
        for (let i = 0; i < prices.length; i++) {
            if (i < period - 1) {
                ma.push(null);
            } else {
                const sum = prices.slice(i - period + 1, i + 1).reduce((a, b) => a + (b || 0), 0);
                ma.push(sum / period);
            }
        }
        return ma;
    }

    // RSI 계산
    function calculateRSI(prices, period = 14) {
        const rsi = [];
        const changes = [];
        
        // 가격 변화 계산
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] && prices[i - 1]) {
                changes.push(prices[i] - prices[i - 1]);
            } else {
                changes.push(0);
            }
        }
        
        for (let i = 0; i < prices.length; i++) {
            if (i < period) {
                rsi.push(null);
            } else {
                const recentChanges = changes.slice(i - period, i);
                const gains = recentChanges.filter(c => c > 0).reduce((a, b) => a + b, 0) / period;
                const losses = Math.abs(recentChanges.filter(c => c < 0).reduce((a, b) => a + b, 0)) / period;
                
                if (losses === 0) {
                    rsi.push(100);
                } else {
                    const rs = gains / losses;
                    rsi.push(100 - (100 / (1 + rs)));
                }
            }
        }
        return rsi;
    }

    // MACD 계산
    function calculateMACD(prices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) {
        const emaFast = calculateEMA(prices, fastPeriod);
        const emaSlow = calculateEMA(prices, slowPeriod);
        
        const macdLine = [];
        for (let i = 0; i < prices.length; i++) {
            if (emaFast[i] !== null && emaSlow[i] !== null) {
                macdLine.push(emaFast[i] - emaSlow[i]);
            } else {
                macdLine.push(null);
            }
        }
        
        // signalLine 계산을 위해 null이 아닌 값들만 사용
        const validMacdValues = macdLine.filter(v => v !== null);
        if (validMacdValues.length < signalPeriod) {
            return { macdLine, signalLine: macdLine.map(() => null), histogram: macdLine.map(() => null) };
        }
        
        const signalLineFull = calculateEMA(macdLine, signalPeriod);
        const histogram = [];
        for (let i = 0; i < macdLine.length; i++) {
            if (macdLine[i] !== null && signalLineFull[i] !== null) {
                histogram.push(macdLine[i] - signalLineFull[i]);
            } else {
                histogram.push(null);
            }
        }
        
        return { macdLine, signalLine: signalLineFull, histogram };
    }

    // EMA 계산 (지수 이동평균)
    function calculateEMA(prices, period) {
        const ema = [];
        const multiplier = 2 / (period + 1);
        
        // 첫 번째 값은 SMA로 시작
        let sum = 0;
        let validCount = 0;
        for (let i = 0; i < period && i < prices.length; i++) {
            if (prices[i] !== null && prices[i] !== undefined) {
                sum += prices[i];
                validCount++;
            }
        }
        
        if (validCount === 0) {
            return prices.map(() => null);
        }
        
        const initialEMA = sum / validCount;
        ema.push(initialEMA);
        
        // 나머지 값들은 EMA 계산
        for (let i = 1; i < prices.length; i++) {
            if (prices[i] !== null && prices[i] !== undefined) {
                ema.push((prices[i] - ema[i - 1]) * multiplier + ema[i - 1]);
            } else {
                ema.push(ema[i - 1]);
            }
        }
        
        return ema;
    }

    // 볼린저 밴드 계산
    function calculateBollingerBands(prices, period = 20, stdDev = 2) {
        const sma = calculateMA(prices, period);
        const upperBand = [];
        const lowerBand = [];
        
        for (let i = 0; i < prices.length; i++) {
            if (i < period - 1) {
                upperBand.push(null);
                lowerBand.push(null);
            } else {
                const slice = prices.slice(i - period + 1, i + 1);
                const mean = sma[i];
                const variance = slice.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / period;
                const standardDeviation = Math.sqrt(variance);
                
                upperBand.push(mean + (stdDev * standardDeviation));
                lowerBand.push(mean - (stdDev * standardDeviation));
            }
        }
        
        return { middle: sma, upper: upperBand, lower: lowerBand };
    }

    // 매매 신호 계산
    function calculateTradingSignal(prices, ma5, ma20, rsi) {
        if (prices.length < 2 || !ma5 || !ma20 || !rsi) {
            return { signal: '분석 불가', strength: 0, description: '데이터 부족' };
        }
        
        const currentPrice = prices[prices.length - 1];
        const prevPrice = prices[prices.length - 2];
        const currentMA5 = ma5[ma5.length - 1];
        const prevMA5 = ma5[ma5.length - 2];
        const currentMA20 = ma20[ma20.length - 1];
        const prevMA20 = ma20[ma20.length - 2];
        const currentRSI = rsi[rsi.length - 1];
        
        let signals = [];
        let strength = 0;
        
        // 골든크로스/데드크로스 확인
        if (currentMA5 !== null && currentMA20 !== null && prevMA5 !== null && prevMA20 !== null) {
            const wasBelow = prevMA5 < prevMA20;
            const isAbove = currentMA5 > currentMA20;
            
            if (wasBelow && isAbove) {
                signals.push('골든크로스');
                strength += 3;
            } else if (!wasBelow && !isAbove) {
                signals.push('데드크로스');
                strength -= 3;
            }
        }
        
        // 가격과 이동평균선 관계
        if (currentPrice > currentMA20 && currentMA5 > currentMA20) {
            signals.push('상승 추세');
            strength += 2;
        } else if (currentPrice < currentMA20 && currentMA5 < currentMA20) {
            signals.push('하락 추세');
            strength -= 2;
        }
        
        // RSI 과매수/과매도
        if (currentRSI !== null) {
            if (currentRSI > 70) {
                signals.push('과매수');
                strength -= 1;
            } else if (currentRSI < 30) {
                signals.push('과매도');
                strength += 1;
            }
        }
        
        // 최종 신호 결정
        let signal = '중립';
        let description = '추세 불명확';
        
        if (strength >= 4) {
            signal = '강한 매수';
            description = '상승 추세 강함';
        } else if (strength >= 2) {
            signal = '매수';
            description = '상승 가능성';
        } else if (strength <= -4) {
            signal = '강한 매도';
            description = '하락 추세 강함';
        } else if (strength <= -2) {
            signal = '매도';
            description = '하락 가능성';
        } else {
            description = signals.join(', ') || '추세 불명확';
        }
        
        return { signal, strength, description, details: signals };
    }

    // 시뮬레이션 차트 데이터 생성 (프록시 실패 시 사용)
    function generateSimulatedChartData(symbol, range) {
        const days = range === '1mo' ? 30 : range === '3mo' ? 90 : range === '6mo' ? 180 : 365;
        const data = [];
        const basePrice = 100 + (symbol.charCodeAt(0) % 50); // 심볼 기반 기본 가격
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            
            // 랜덤 워크 시뮬레이션
            const change = (Math.random() - 0.5) * 2; // -1 ~ 1
            const price = basePrice + (days - i) * 0.1 + change * 2;
            
            data.push({
                date: date,
                timestamp: Math.floor(date.getTime() / 1000),
                close: Math.max(10, price),
                high: Math.max(10, price + Math.random() * 3),
                low: Math.max(10, price - Math.random() * 3),
                open: Math.max(10, price + (Math.random() - 0.5) * 2),
                volume: Math.floor(Math.random() * 1000000) + 100000
            });
        }
        
        return data;
    }

    // 차트 렌더링
    async function renderChart(symbol, name, range = '3mo') {
        console.log('🔍 renderChart 호출됨:', { symbol, name, range });
        
        const modal = document.getElementById('chartModal');
        const chartTitle = document.getElementById('chartTitle');
        const chartContainer = document.querySelector('.chart-container-wrapper');
        
        console.log('🔍 DOM 요소 확인:', { 
            modal: !!modal, 
            chartTitle: !!chartTitle, 
            chartContainer: !!chartContainer 
        });
        
        if (!modal) {
            console.error('❌ 차트 모달을 찾을 수 없습니다');
            alert('차트 모달을 찾을 수 없습니다. 페이지를 새로고침해주세요.');
            return;
        }
        
        if (!chartContainer) {
            console.error('❌ 차트 컨테이너를 찾을 수 없습니다');
            alert('차트 컨테이너를 찾을 수 없습니다. 페이지를 새로고침해주세요.');
            return;
        }
        
        // 모달 표시
        console.log('📱 모달 표시 중...');
        modal.classList.remove('hidden');
        modal.style.display = 'flex'; // 강제로 display 설정
        modal.style.zIndex = '10000'; // z-index 확실히 설정
        console.log('✅ 모달 표시 완료, hidden 클래스 제거됨, display:', modal.style.display);
        
        // 모달이 실제로 보이는지 확인
        setTimeout(() => {
            const isVisible = modal.offsetParent !== null && !modal.classList.contains('hidden');
            const computedStyle = window.getComputedStyle(modal);
            console.log('👁️ 모달 가시성 확인:', { 
                isVisible, 
                hasHidden: modal.classList.contains('hidden'),
                display: computedStyle.display,
                zIndex: computedStyle.zIndex,
                offsetParent: modal.offsetParent !== null
            });
            if (computedStyle.display === 'none') {
                console.warn('⚠️ 모달이 display:none 상태입니다! 강제로 flex로 변경');
                modal.style.display = 'flex';
            }
        }, 100);
        
        if (chartTitle) {
            chartTitle.textContent = `📈 ${name} (${symbol}) - 차트 분석`;
        }
        
        // 로딩 표시 (캔버스는 유지하고 로딩 오버레이 추가)
        const existingCanvas = chartContainer.querySelector('#chartCanvas');
        if (!existingCanvas) {
            chartContainer.innerHTML = '<canvas id="chartCanvas"></canvas>';
        }
        const loadingOverlay = document.createElement('div');
        loadingOverlay.id = 'chartLoadingOverlay';
        loadingOverlay.style.cssText = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.1); color: var(--text-muted); z-index: 10;';
        loadingOverlay.textContent = '차트 데이터 로딩 중...';
        chartContainer.style.position = 'relative';
        if (!chartContainer.querySelector('#chartLoadingOverlay')) {
            chartContainer.appendChild(loadingOverlay);
        }
        console.log('⏳ 로딩 표시 완료');
        
        try {
            console.log(`📈 차트 렌더링 시작: ${symbol}, 기간: ${range}`);
            
            // 과거 데이터 가져오기
            let historicalData;
            try {
                historicalData = await fetchHistoricalData(symbol, range);
            } catch (proxyError) {
                console.error('프록시를 통한 데이터 가져오기 실패:', proxyError);
                
                // 프록시 실패 시 시뮬레이션 데이터 생성 (최소한의 차트 표시)
                console.log('시뮬레이션 차트 데이터 생성 중...');
                historicalData = generateSimulatedChartData(symbol, range);
                
                if (!historicalData || historicalData.length === 0) {
                    // 시뮬레이션도 실패한 경우
                    chartContainer.innerHTML = `
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 500px; gap: 1rem; color: var(--text-muted); text-align: center; padding: 2rem;">
                            <div style="font-size: 3rem;">⚠️</div>
                            <div style="font-size: 1.25rem; font-weight: 600; color: var(--text);">차트 데이터를 불러올 수 없습니다</div>
                            <div style="font-size: 0.875rem;">CORS 프록시 서버에 연결할 수 없습니다.<br>잠시 후 다시 시도해주세요.</div>
                            <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: var(--gradient-primary); border: none; border-radius: var(--radius-md); color: white; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                                페이지 새로고침
                            </button>
                        </div>
                    `;
                    return;
                }
                
                // 시뮬레이션 데이터 사용 알림
                const warningMsg = document.createElement('div');
                warningMsg.style.cssText = 'padding: 1rem; margin-bottom: 1rem; background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: var(--radius-md); color: var(--warning); font-size: 0.875rem; text-align: center;';
                warningMsg.textContent = '⚠️ 실제 데이터를 불러올 수 없어 시뮬레이션 차트를 표시합니다.';
                chartContainer.parentElement.insertBefore(warningMsg, chartContainer);
            }
            
            if (!historicalData || historicalData.length === 0) {
                throw new Error('차트 데이터가 없습니다');
            }
            
            console.log(`✅ 데이터 가져오기 완료: ${historicalData.length}개 데이터 포인트`);
            
            const dates = historicalData.map(d => d.date);
            const closes = historicalData.map(d => d.close);
            const highs = historicalData.map(d => d.high);
            const lows = historicalData.map(d => d.low);
            const opens = historicalData.map(d => d.open);
            
            // 이동평균선 계산
            const ma5 = calculateMA(closes, 5);
            const ma20 = calculateMA(closes, 20);
            const ma60 = calculateMA(closes, 60);
            const rsi = calculateRSI(closes, 14);
            
            // MACD 계산
            const macd = calculateMACD(closes);
            
            // 볼린저 밴드 계산
            const bollinger = calculateBollingerBands(closes);
            
            // 매매 신호 계산
            const tradingSignal = calculateTradingSignal(closes, ma5, ma20, rsi);
            
            // 현재 값 업데이트
            const currentPrice = closes[closes.length - 1];
            const ma20Value = ma20[ma20.length - 1];
            const rsiValue = rsi[rsi.length - 1];
            const changePercent = ((closes[closes.length - 1] - closes[0]) / closes[0]) * 100;
            
            // 한국 주식인지 확인
            const isKoreanStock = symbol.includes('.KS');
            
            // 가격 포맷팅 함수
            const formatPrice = (price) => {
                if (typeof price !== 'number') return price;
                if (isKoreanStock) {
                    // 한국 주식: 원화, 소수점 없이, 천단위 구분
                    return '₩' + Math.round(price).toLocaleString('ko-KR');
                } else {
                    // 미국 주식: 달러, 소수점 2자리, 천단위 구분
                    return '$' + price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                }
            };
            
            document.getElementById('currentPrice').textContent = formatPrice(currentPrice);
            document.getElementById('ma20Value').textContent = ma20Value ? formatPrice(ma20Value) : '-';
            document.getElementById('rsiValue').textContent = rsiValue ? rsiValue.toFixed(2) : '-';
            
            const changePercentEl = document.getElementById('changePercent');
            changePercentEl.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
            changePercentEl.className = `indicator-value ${changePercent >= 0 ? 'positive' : 'negative'}`;
            
            // 매매 신호 표시
            const signalEl = document.getElementById('tradingSignal');
            signalEl.textContent = tradingSignal.signal;
            signalEl.className = `indicator-value ${
                tradingSignal.strength >= 2 ? 'positive' : 
                tradingSignal.strength <= -2 ? 'negative' : ''
            }`;
            signalEl.title = tradingSignal.description;
            
            // 로딩 오버레이 제거
            const loadingOverlay = chartContainer.querySelector('#chartLoadingOverlay');
            if (loadingOverlay) {
                loadingOverlay.remove();
            }
            
            // 차트 컨테이너에 canvas 다시 생성 (기존 캔버스가 없거나 제거된 경우)
            let chartCanvas = document.getElementById('chartCanvas');
            if (!chartCanvas) {
                chartContainer.innerHTML = '<canvas id="chartCanvas"></canvas>';
                chartCanvas = document.getElementById('chartCanvas');
            }
            if (!chartCanvas) {
                throw new Error('차트 캔버스를 생성할 수 없습니다');
            }
            
            // Chart.js가 로드되었는지 확인
            if (typeof Chart === 'undefined') {
                throw new Error('Chart.js 라이브러리가 로드되지 않았습니다. 페이지를 새로고침해주세요.');
            }
            
            // 전역 chartInstance 변수에 접근
            if (window.chartInstance) {
                try {
                    window.chartInstance.destroy();
                } catch (e) {
                    console.warn('기존 차트 인스턴스 제거 중 오류:', e);
                }
                window.chartInstance = null;
            }
            
            // 차트 타입 확인
            const chartType = document.getElementById('chartType')?.value || 'line';
            const showMA5 = document.querySelector('input[data-ma="5"]')?.checked || false;
            const showMA20 = document.querySelector('input[data-ma="20"]')?.checked || false;
            const showMA60 = document.querySelector('input[data-ma="60"]')?.checked || false;
            const showMACD = document.getElementById('showMACD')?.checked || false;
            const showBollinger = document.getElementById('showBollinger')?.checked || false;
            
            const datasets = [];
            
            // 캔들스틱 차트인 경우
            if (chartType === 'candlestick') {
                // Chart.js는 기본적으로 캔들스틱을 지원하지 않으므로, 라인 차트로 시뮬레이션
                datasets.push({
                    label: '고가',
                    data: highs,
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    pointRadius: 0
                });
                datasets.push({
                    label: '저가',
                    data: lows,
                    borderColor: 'rgba(16, 185, 129, 0.3)',
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    pointRadius: 0
                });
                datasets.push({
                    label: '종가',
                    data: closes,
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                });
            } else {
                // 라인 차트
                datasets.push({
                    label: '종가',
                    data: closes,
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1
                });
            }
            
            // 이동평균선 추가
            if (showMA5) {
                datasets.push({
                    label: '5일선',
                    data: ma5,
                    borderColor: 'rgb(6, 182, 212)',
                    borderWidth: 1.5,
                    fill: false,
                    pointRadius: 0,
                    borderDash: [5, 5]
                });
            }
            
            if (showMA20) {
                datasets.push({
                    label: '20일선',
                    data: ma20,
                    borderColor: 'rgb(16, 185, 129)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0
                });
            }
            
            if (showMA60) {
                datasets.push({
                    label: '60일선',
                    data: ma60,
                    borderColor: 'rgb(245, 158, 11)',
                    borderWidth: 1.5,
                    fill: false,
                    pointRadius: 0,
                    borderDash: [5, 5]
                });
            }
            
            // 볼린저 밴드 추가
            if (showBollinger && bollinger && bollinger.upper && bollinger.middle && bollinger.lower) {
                // 볼린저 밴드 상단
                datasets.push({
                    label: '볼린저 상단',
                    data: bollinger.upper,
                    borderColor: 'rgba(139, 92, 246, 0.5)',
                    borderWidth: 1,
                    fill: '+1',
                    pointRadius: 0,
                    borderDash: [3, 3],
                    backgroundColor: 'rgba(139, 92, 246, 0.05)'
                });
                // 볼린저 밴드 중간 (MA20)
                datasets.push({
                    label: '볼린저 중간',
                    data: bollinger.middle,
                    borderColor: 'rgba(139, 92, 246, 0.3)',
                    borderWidth: 1,
                    fill: false,
                    pointRadius: 0
                });
                // 볼린저 밴드 하단
                datasets.push({
                    label: '볼린저 하단',
                    data: bollinger.lower,
                    borderColor: 'rgba(139, 92, 246, 0.5)',
                    borderWidth: 1,
                    fill: '-1',
                    pointRadius: 0,
                    borderDash: [3, 3],
                    backgroundColor: 'rgba(139, 92, 246, 0.05)'
                });
            }
            
            // MACD 추가 (별도 Y축 사용)
            if (showMACD && macd && macd.macdLine && macd.signalLine) {
                // MACD 라인
                datasets.push({
                    label: 'MACD',
                    data: macd.macdLine,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                    yAxisID: 'y1',
                    tension: 0.1
                });
                // Signal 라인
                datasets.push({
                    label: 'Signal',
                    data: macd.signalLine,
                    borderColor: 'rgb(236, 72, 153)',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                    borderWidth: 2,
                    fill: false,
                    pointRadius: 0,
                    yAxisID: 'y1',
                    tension: 0.1
                });
                // Histogram (MACD - Signal) - 바 차트로 표시
                if (macd.histogram && macd.histogram.length > 0) {
                    datasets.push({
                        label: 'Histogram',
                        data: macd.histogram,
                        borderColor: 'rgba(139, 92, 246, 0.6)',
                        backgroundColor: macd.histogram.map(val => 
                            val >= 0 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)'
                        ),
                        borderWidth: 1,
                        fill: true,
                        pointRadius: 0,
                        yAxisID: 'y1',
                        tension: 0
                    });
                }
            }
            
            try {
                window.chartInstance = new Chart(chartCanvas, {
                    type: 'line',
                    data: {
                        labels: dates.map(d => d.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })),
                        datasets: datasets
                    },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                color: 'var(--text)',
                                font: {
                                    family: 'Inter, sans-serif',
                                    size: 12
                                },
                                padding: 15,
                                filter: function(item) {
                                    // 볼린저 밴드 중간선은 범례에서 제외
                                    return item.text !== '볼린저 중간';
                                }
                            }
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                            borderColor: 'rgba(139, 92, 246, 0.5)',
                            borderWidth: 1
                        }
                    },
                    scales: (() => {
                        const scalesConfig = {
                            x: {
                                ticks: {
                                    color: 'var(--text-muted)',
                                    maxRotation: 45,
                                    minRotation: 45
                                },
                                grid: {
                                    color: 'var(--border)'
                                }
                            },
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    color: 'var(--text-muted)',
                                    callback: function(value) {
                                        // 한국 주식인지 확인하여 포맷팅
                                        if (isKoreanStock) {
                                            return '₩' + Math.round(value).toLocaleString('ko-KR');
                                        } else {
                                            return '$' + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                        }
                                    }
                                },
                                grid: {
                                    color: 'var(--border)'
                                }
                            }
                        };
                        if (showMACD) {
                            scalesConfig.y1 = {
                                type: 'linear',
                                display: true,
                                position: 'right',
                                ticks: {
                                    color: 'var(--text-muted)'
                                },
                                grid: {
                                    drawOnChartArea: false
                                }
                            };
                        }
                        return scalesConfig;
                    })(),
                    interaction: {
                        mode: 'index',
                        intersect: false
                    }
                }
                });
                
                console.log('✅ Chart.js 인스턴스 생성 완료');
                window.currentChartSymbol = symbol; // 현재 차트 심볼 저장
            } catch (chartError) {
                console.error('❌ Chart.js 생성 오류:', chartError);
                // 로딩 오버레이 제거
                const loadingOverlay = chartContainer.querySelector('#chartLoadingOverlay');
                if (loadingOverlay) {
                    loadingOverlay.remove();
                }
                // 에러 메시지 표시
                const errorMsg = chartError.message || '알 수 없는 오류가 발생했습니다.';
                chartContainer.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 500px; gap: 1rem; color: var(--text-muted); text-align: center; padding: 2rem;">
                        <div style="font-size: 3rem;">⚠️</div>
                        <div style="font-size: 1.25rem; font-weight: 600; color: var(--text);">차트 생성 실패</div>
                        <div style="font-size: 0.875rem;">${errorMsg}</div>
                        <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: var(--gradient-primary); border: none; border-radius: var(--radius-md); color: white; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                            페이지 새로고침
                        </button>
                    </div>
                `;
                throw new Error(`차트 생성 실패: ${errorMsg}`);
            }
            
        } catch (error) {
            console.error('❌ 차트 렌더링 실패:', error);
            console.error('❌ 에러 스택:', error.stack);
            if (chartContainer) {
                chartContainer.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 500px; gap: 1rem; color: var(--danger); text-align: center; padding: 2rem;">
                        <div style="font-size: 3rem;">❌</div>
                        <div style="font-size: 1.25rem; font-weight: 600;">차트를 불러올 수 없습니다</div>
                        <div style="font-size: 0.875rem; color: var(--text-muted);">${error.message || '알 수 없는 오류가 발생했습니다'}</div>
                        <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; padding: 1rem; background: rgba(0,0,0,0.1); border-radius: 8px; max-width: 500px; word-break: break-all;">
                            ${error.stack ? error.stack.substring(0, 200) : ''}
                        </div>
                        <button onclick="location.reload()" style="padding: 0.75rem 1.5rem; background: var(--gradient-primary); border: none; border-radius: var(--radius-md); color: white; font-weight: 600; cursor: pointer; margin-top: 1rem;">
                            페이지 새로고침
                        </button>
                    </div>
                `;
            }
        }
    }

    // 차트 모달 닫기 함수
    function closeChartModalFunc() {
        const chartModal = document.getElementById('chartModal');
        if (chartModal) {
            chartModal.classList.add('hidden');
            chartModal.style.display = 'none';
            chartModal.style.zIndex = '';
            console.log('✅ 차트 모달 닫기');
        }
    }
    
    // 차트 모달 이벤트 리스너
    const chartModal = document.getElementById('chartModal');
    const closeChartModal = document.getElementById('closeChartModal');
    const chartRange = document.getElementById('chartRange');
    
    if (closeChartModal) {
        closeChartModal.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeChartModalFunc();
        });
        console.log('✅ 차트 모달 닫기 버튼 이벤트 리스너 등록 완료');
    } else {
        console.error('❌ 차트 모달 닫기 버튼을 찾을 수 없습니다');
    }
    
    if (chartModal) {
        chartModal.addEventListener('click', (e) => {
            // 모달 배경(외부) 클릭 시 닫기
            if (e.target === chartModal) {
                closeChartModalFunc();
            }
        });
        
        // 모달 콘텐츠 클릭 시 이벤트 전파 방지
        const modalContent = chartModal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
    
    // 차트 타입 변경
    const chartType = document.getElementById('chartType');
    if (chartType) {
        chartType.addEventListener('change', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.currentChartSymbol) {
                console.log('🔄 차트 타입 변경:', e.target.value);
                const chartTitleEl = document.getElementById('chartTitle');
                const name = chartTitleEl ? chartTitleEl.textContent.split('(')[0].trim().replace('📈 ', '') : window.currentChartSymbol;
                const range = chartRange?.value || '3mo';
                try {
                    await renderChart(window.currentChartSymbol, name, range);
                } catch (error) {
                    console.error('❌ 차트 타입 변경 오류:', error);
                }
            }
        });
        console.log('✅ 차트 타입 변경 이벤트 리스너 등록 완료');
    }
    
    // 차트 기간 변경
    if (chartRange) {
        chartRange.addEventListener('change', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.currentChartSymbol) {
                console.log('🔄 차트 기간 변경:', e.target.value);
                // 차트 제목에서 이름 추출 또는 symbol 사용
                const chartTitleEl = document.getElementById('chartTitle');
                const name = chartTitleEl ? chartTitleEl.textContent.split('(')[0].trim().replace('📈 ', '') : window.currentChartSymbol;
                try {
                    await renderChart(window.currentChartSymbol, name, e.target.value);
                } catch (error) {
                    console.error('❌ 차트 기간 변경 오류:', error);
                }
            }
        });
        console.log('✅ 차트 기간 변경 이벤트 리스너 등록 완료');
    }
    
    // 이동평균선 및 지표 체크박스 변경
    document.addEventListener('change', async (e) => {
        if (window.currentChartSymbol && (
            e.target.matches('input[data-ma]') || 
            e.target.id === 'showMACD' || 
            e.target.id === 'showBollinger'
        )) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🔄 차트 옵션 변경 감지:', e.target.id || e.target.dataset.ma);
            const chartTitleEl = document.getElementById('chartTitle');
            const name = chartTitleEl ? chartTitleEl.textContent.split('(')[0].trim().replace('📈 ', '') : window.currentChartSymbol;
            const range = chartRange?.value || '3mo';
            try {
                await renderChart(window.currentChartSymbol, name, range);
            } catch (error) {
                console.error('❌ 차트 업데이트 오류:', error);
            }
        }
    });

    // 차트 버튼 클릭 이벤트 (이벤트 위임 사용 - 최우선 처리)
    function initChartButtonHandler() {
        // 기존 리스너 제거 (중복 방지)
        document.removeEventListener('click', chartButtonClickHandler);
        
        // 새 리스너 등록
        document.addEventListener('click', chartButtonClickHandler, true); // capture phase에서 처리
        
        console.log('✅ 차트 버튼 이벤트 리스너 등록 완료');
    }
    
    // 차트 버튼 클릭 핸들러
    async function chartButtonClickHandler(e) {
        // 차트 버튼 또는 그 내부 요소 클릭 확인
        const chartBtn = e.target.closest('.chart-btn');
        if (!chartBtn) return;
        
        console.log('🎯 차트 버튼 클릭 감지!', chartBtn);
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        const symbol = chartBtn.dataset.symbol;
        const name = chartBtn.dataset.name || symbol;
        
        console.log('📊 차트 버튼 데이터:', { symbol, name, btn: chartBtn });
        
        if (!symbol) {
            console.error('❌ 차트 버튼에 symbol이 없습니다', chartBtn);
            alert('차트 버튼에 종목 정보가 없습니다.');
            return;
        }
        
        try {
            console.log('🚀 renderChart 호출 시작...');
            await renderChart(symbol, name);
            console.log('✅ renderChart 완료');
        } catch (error) {
            console.error('❌ 차트 렌더링 오류:', error);
            alert(`차트를 불러오는 중 오류가 발생했습니다: ${error.message}`);
        }
    }
    
    // 초기화
    initChartButtonHandler();
    
    // 동적으로 생성된 버튼을 위해 결과 렌더링 후에도 다시 등록
    const originalRenderNewsBasedRecommendations = renderNewsBasedRecommendations;
    if (typeof renderNewsBasedRecommendations === 'function') {
        // 결과 렌더링 후 이벤트 리스너 재등록을 위해 감시
        // (renderNewsBasedRecommendations 함수 내부에서 처리하거나 MutationObserver 사용)
    }
});


