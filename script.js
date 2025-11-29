document.addEventListener('DOMContentLoaded', () => {
    // --- 32 Investment Gurus Data ---
    // UI Avatars API for placeholder images
    const getAvatarUrl = (name, bg = '1a1a1a', color = '00e676') => 
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=100&background=${bg}&color=${color}&bold=true`;

    const investors = [
        {
            id: 'buffett',
            image: 'assets/Disney_Style_Guru_2_Buffett.png',
            name: { en: 'Warren Buffett', ko: '워렌 버핏', ja: 'ウォーレン・バフェット', zh: '沃伦·巴菲特', es: 'Warren Buffett' },
            title: { en: 'The Oracle of Omaha', ko: '오마하의 현인', ja: 'オマハの賢人', zh: '奥马哈先知', es: 'El Oráculo de Omaha' },
            philosophy: { en: 'Value investing, long-term horizon, moat, margin of safety.', ko: '가치 투자, 장기적 관점, 경제적 해자, 안전 마진.', ja: 'バリュー投資、長期的視野、堀、安全域。', zh: '价值投资，长期持有，护城河，安全边际。', es: 'Inversión de valor, horizonte a largo plazo, foso económico.' },
            achievement: { en: 'Built Berkshire Hathaway into $900B+ empire. Average 20% annual returns over 60 years.', ko: '버크셔 해서웨이를 9000억 달러 이상의 제국으로 성장. 60년간 연평균 20% 수익률.', ja: 'バークシャー・ハサウェイを9000億ドル以上の帝国に成長。60年間平均年率20%のリターン。', zh: '将伯克希尔哈撒韦打造成9000亿美元帝国。60年平均年化20%回报。', es: 'Construyó Berkshire Hathaway en un imperio de $900B+. 20% de retorno anual durante 60 años.' }
        },
        {
            id: 'lynch',
            image: 'assets/Disney_Style_Guru_3_Lynch.png',
            name: { en: 'Peter Lynch', ko: '피터 린치', ja: 'ピーター・リンチ', zh: '彼得·林奇', es: 'Peter Lynch' },
            title: { en: 'The Chameleon', ko: '카멜레온', ja: 'カメレオン', zh: '变色龙', es: 'El Camaleón' },
            philosophy: { en: 'Invest in what you know, growth at a reasonable price (GARP).', ko: '아는 것에 투자하라, 합리적인 가격의 성장주(GARP).', ja: '知っているものに投資せよ、妥当な価格での成長。', zh: '投资你所了解的，合理价格的增长。', es: 'Invierte en lo que conoces, crecimiento a precio razonable.' },
            achievement: { en: 'Magellan Fund averaged 29.2% annual returns (1977-1990), beating S&P 500.', ko: '마젤란 펀드 연평균 29.2% 수익률(1977-1990), S&P 500 초과 달성.', ja: 'マゼランファンドで年率29.2%のリターンを達成(1977-1990)、S&P500を上回る。', zh: '麦哲伦基金年均29.2%回报(1977-1990)，超越标普500。', es: 'Fondo Magellan promedió 29.2% de retorno anual (1977-1990).' }
        },
        {
            id: 'dalio',
            image: 'assets/Disney_Style_Guru_4_Dalio.png',
            name: { en: 'Ray Dalio', ko: '레이 달리오', ja: 'レイ・ダリオ', zh: '雷·达里奥', es: 'Ray Dalio' },
            title: { en: 'The Macro Master', ko: '매크로 마스터', ja: 'マクロの達人', zh: '宏观大师', es: 'El Maestro Macro' },
            philosophy: { en: 'Radical transparency, economic machine, diversification, risk parity.', ko: '극단적 투명성, 경제 기계, 분산 투자, 리스크 패리티.', ja: '徹底的な透明性、経済マシン、分散投資。', zh: '极度透明，经济机器，多元化。', es: 'Transparencia radical, máquina económica, diversificación.' },
            achievement: { en: 'Founded Bridgewater Associates, worlds largest hedge fund ($150B+ AUM).', ko: '세계 최대 헤지펀드 브릿지워터 어소시에이츠 설립 (AUM 1500억 달러 이상).', ja: '世界最大のヘッジファンド、ブリッジウォーター・アソシエイツを設立(運用資産1500億ドル以上)。', zh: '创立桥水基金，全球最大对冲基金(管理资产1500亿美元以上)。', es: 'Fundó Bridgewater Associates, el fondo de cobertura más grande del mundo.' }
        },
        {
            id: 'soros',
            image: 'assets/Disney_Style_Guru_28_Soros.png',
            name: { en: 'George Soros', ko: '조지 소로스', ja: 'ジョージ・ソロス', zh: '乔治·索罗斯', es: 'George Soros' },
            title: { en: 'The Man Who Broke the Bank of England', ko: '영란은행을 무너뜨린 사나이', ja: 'イングランド銀行を潰した男', zh: '打垮英格兰银行的人', es: 'El hombre que quebró el Banco de Inglaterra' },
            philosophy: { en: 'Reflexivity theory, boom-bust cycles, macro speculation.', ko: '재귀성 이론, 붐-버스트 사이클, 거시 투기.', ja: '再帰性理論、ブーム・バスト・サイクル、マクロ投機。', zh: '反身性理论，繁荣-萧条周期，宏观投机。', es: 'Teoría de la reflexividad, ciclos de auge y caída.' },
            achievement: { en: 'Made $1 billion shorting British Pound in 1992 (Black Wednesday).', ko: '1992년 영국 파운드 공매도로 10억 달러 수익 (검은 수요일).', ja: '1992年、英ポンドの空売りで10億ドルの利益を得る(ブラック・ウェンズデー)。', zh: '1992年做空英镑获利10亿美元(黑色星期三)。', es: 'Ganó $1 billón vendiendo en corto la libra esterlina en 1992.' }
        },
        {
            id: 'munger',
            image: 'assets/Disney_Style_Guru_27_Munger.png',
            name: { en: 'Charlie Munger', ko: '찰리 멍거', ja: 'チャーリー・マンガー', zh: '查理·芒格', es: 'Charlie Munger' },
            title: { en: 'The Architect', ko: '설계자', ja: '設計者', zh: '架构师', es: 'El Arquitecto' },
            philosophy: { en: 'Mental models, inversion thinking, multidisciplinary approach.', ko: '정신 모델, 역발상 사고, 다학제적 접근.', ja: 'メンタルモデル、逆転の発想、多分野アプローチ。', zh: '思维模型，逆向思维，多学科方法。', es: 'Modelos mentales, pensamiento inverso, enfoque multidisciplinario.' },
            achievement: { en: 'Vice Chairman of Berkshire. Buffetts partner in building $900B empire.', ko: '버크셔 부회장. 버핏과 함께 9000억 달러 제국 건설.', ja: 'バークシャー副会長。バフェットとともに9000億ドル帝国を構築。', zh: '伯克希尔副董事长。与巴菲特共同建立9000亿帝国。', es: 'Vicepresidente de Berkshire. Socio de Buffett en construir imperio de $900B.' }
        },
        {
            id: 'graham',
            image: 'assets/Disney_Style_Guru_29_Graham.png',
            name: { en: 'Benjamin Graham', ko: '벤자민 그레이엄', ja: 'ベンジャミン・グレアム', zh: '本杰明·格雷厄姆', es: 'Benjamin Graham' },
            title: { en: 'The Father of Value Investing', ko: '가치 투자의 아버지', ja: 'バリュー投資の父', zh: '价值投资之父', es: 'El Padre de la Inversión de Valor' },
            philosophy: { en: 'Net-net strategy, intrinsic value, Mr. Market concept, margin of safety.', ko: '넷넷 전략, 내재 가치, 미스터 마켓 개념, 안전 마진.', ja: 'ネットネット戦略、本質的価値、ミスター・マーケット概念、安全域。', zh: '净净策略，内在价值，市场先生概念，安全边际。', es: 'Estrategia net-net, valor intrínseco, concepto de Sr. Mercado.' },
            achievement: { en: 'Wrote "The Intelligent Investor" - the bible of investing. Taught Warren Buffett.', ko: '"현명한 투자자" 저술 - 투자의 바이블. 워렌 버핏의 스승.', ja: '「賢明なる投資家」を執筆 - 投資のバイブル。ウォーレン・バフェットの師匠。', zh: '撰写《聪明的投资者》- 投资圣经。巴菲特的老师。', es: 'Escribió "El Inversor Inteligente" - la biblia de inversión. Enseñó a Buffett.' }
        },
        {
            id: 'wood',
            image: 'assets/Disney_Style_Guru_12_Wood.png',
            name: { en: 'Cathie Wood', ko: '캐시 우드', ja: 'キャシー・ウッド', zh: '凯西·伍德', es: 'Cathie Wood' },
            title: { en: 'The Innovation Evangelist', ko: '혁신 전도사', ja: 'イノベーションの伝道師', zh: '创新布道者', es: 'La Evangelista de la Innovación' },
            philosophy: { en: 'Disruptive innovation, exponential growth, 5-year time horizon.', ko: '파괴적 혁신, 기하급수적 성장, 5년 투자 시계.', ja: '破壊的イノベーション、指数関数的成長、5年の時間軸。', zh: '颠覆性创新，指数级增长，5年投资期限。', es: 'Innovación disruptiva, crecimiento exponencial, horizonte de 5 años.' },
            achievement: { en: 'ARK Invest returned 150%+ in 2020. Pioneer in actively managed tech ETFs.', ko: 'ARK 인베스트 2020년 150% 이상 수익률. 액티브 운용 테크 ETF의 선구자.', ja: 'ARKインベストが2020年に150%以上のリターン。アクティブ運用テックETFのパイオニア。', zh: 'ARK投资2020年回报超150%。主动管理科技ETF先驱。', es: 'ARK Invest retornó 150%+ en 2020. Pionera en ETFs tecnológicos gestionados activamente.' }
        },
        {
            id: 'icahn',
            image: 'assets/Disney_Style_Guru_5_Icahn.png',
            name: { en: 'Carl Icahn', ko: '칼 아이칸', ja: 'カール・アイカーン', zh: '卡尔·伊坎', es: 'Carl Icahn' },
            title: { en: 'The Corporate Raider', ko: '기업 사냥꾼', ja: '企業乗っ取り屋', zh: '企业掠夺者', es: 'El Asaltante Corporativo' },
            philosophy: { en: 'Shareholder activism, unlock hidden value, target underperforming management.', ko: '주주 행동주의, 숨겨진 가치 발굴, 저성과 경영진 타깃.', ja: '株主アクティビズム、隠れた価値の解放、低業績経営陣をターゲット。', zh: '股东激进主义，释放隐藏价值，针对表现不佳的管理层。', es: 'Activismo accionarial, desbloquear valor oculto.' },
            achievement: { en: 'Legendary activist investor. Forced changes at Apple, eBay, Yahoo, TWA.', ko: '전설적인 행동주의 투자자. 애플, 이베이, 야후, TWA에서 변화 주도.', ja: '伝説的なアクティビスト投資家。Apple、eBay、Yahoo、TWAで変革を強制。', zh: '传奇激进投资者。在苹果、eBay、雅虎、TWA推动变革。', es: 'Legendario inversor activista. Forzó cambios en Apple, eBay, Yahoo.' }
        },
        {
            id: 'ackman',
            image: 'assets/Disney_Style_Guru_6_Ackman.png',
            name: { en: 'Bill Ackman', ko: '빌 애크먼', ja: 'ビル・アックマン', zh: '比尔·阿克曼', es: 'Bill Ackman' },
            title: { en: 'The Activist', ko: '행동주의자', ja: 'アクティビスト', zh: '激进投资者', es: 'El Activista' },
            philosophy: { en: 'Concentrated portfolio, simple predictable businesses, activist approach.', ko: '집중 포트폴리오, 단순 예측 가능 비즈니스, 행동주의적 접근.', ja: '集中ポートフォリオ、シンプルで予測可能なビジネス、アクティビストアプローチ。', zh: '集中投资组合，简单可预测业务，激进方法。', es: 'Cartera concentrada, negocios simples y predecibles.' },
            achievement: { en: 'Made $2.6B betting against market in COVID crash. Pershing Square founder.', ko: '코로나 폭락장에서 26억 달러 수익. 퍼싱 스퀘어 창립자.', ja: 'COVIDクラッシュで市場に逆張りし26億ドルの利益。パーシング・スクエア創設者。', zh: '在新冠崩盘中做空获利26亿美元。潘兴广场创始人。', es: 'Ganó $2.6B apostando contra el mercado en COVID. Fundador de Pershing Square.' }
        },
        {
            id: 'simons',
            image: 'assets/Disney_Style_Guru_7_Simons.png',
            name: { en: 'Jim Simons', ko: '짐 사이먼스', ja: 'ジム・シモンズ', zh: '吉姆·西蒙斯', es: 'Jim Simons' },
            title: { en: 'The Quant King', ko: '퀀트의 제왕', ja: 'クオンツの王', zh: '量化之王', es: 'El Rey Cuantitativo' },
            philosophy: { en: 'Quantitative analysis, algorithmic trading, pattern recognition, data-driven.', ko: '정량적 분석, 알고리즘 트레이딩, 패턴 인식, 데이터 기반.', ja: '定量分析、アルゴリズム取引、パターン認識、データ駆動。', zh: '定量分析，算法交易，模式识别，数据驱动。', es: 'Análisis cuantitativo, trading algorítmico, reconocimiento de patrones.' },
            achievement: { en: 'Medallion Fund: 66% avg annual return (before fees). Best track record ever.', ko: '메달리온 펀드: 연평균 66% 수익률(수수료 전). 역사상 최고 실적.', ja: 'メダリオンファンド：年率平均66%のリターン(手数料前)。史上最高の実績。', zh: '大奖章基金：年均66%回报(费用前)。史上最佳业绩。', es: 'Fondo Medallion: 66% retorno anual promedio. Mejor historial de la historia.' }
        },
        {
            id: 'druckenmiller',
            image: 'assets/Disney_Style_Guru_1_Druckenmiller.png',
            name: { en: 'Stanley Druckenmiller', ko: '스탠리 드러켄밀러', ja: 'スタンレー・ドラッケンミラー', zh: '斯坦利·德鲁肯米勒', es: 'Stanley Druckenmiller' },
            title: { en: 'The Chameleon', ko: '카멜레온', ja: 'カメレオン', zh: '变色龙', es: 'El Camaleón' },
            philosophy: { en: 'Macro trading, trend following, flexible allocation, capital preservation.', ko: '거시 트레이딩, 추세 추종, 유연한 배분, 자본 보존.', ja: 'マクロ取引、トレンドフォロー、柔軟な配分、資本保全。', zh: '宏观交易，趋势跟踪，灵活配置，资本保全。', es: 'Trading macro, seguimiento de tendencias, asignación flexible.' },
            achievement: { en: 'Never had a losing year in 30 years. Partnered with Soros to break Bank of England.', ko: '30년간 단 한 해도 손실 없음. 소로스와 함께 영란은행 공략.', ja: '30年間一度も損失年なし。ソロスとイングランド銀行攻略で協力。', zh: '30年从未亏损。与索罗斯合作做空英镑。', es: 'Nunca tuvo un año con pérdidas en 30 años. Socio de Soros.' }
        },
        {
            id: 'tudor_jones',
            image: 'assets/Disney_Style_Guru_8_Jones.png',
            name: { en: 'Paul Tudor Jones', ko: '폴 튜더 존스', ja: 'ポール・チューダー・ジョーンズ', zh: '保罗·都铎·琼斯', es: 'Paul Tudor Jones' },
            title: { en: 'The Macro Trader', ko: '거시 트레이더', ja: 'マクロトレーダー', zh: '宏观交易员', es: 'El Trader Macro' },
            philosophy: { en: 'Global macro, technical analysis, risk management, contrarian timing.', ko: '글로벌 매크로, 기술적 분석, 리스크 관리, 역발상 타이밍.', ja: 'グローバルマクロ、テクニカル分析、リスク管理、逆張りタイミング。', zh: '全球宏观，技术分析，风险管理，逆向时机。', es: 'Macro global, análisis técnico, gestión de riesgos.' },
            achievement: { en: 'Predicted 1987 Black Monday crash. Tudor Investment Corp manages $11B+.', ko: '1987년 블랙 먼데이 폭락 예측. 튜더 인베스트먼트 110억 달러 이상 운용.', ja: '1987年のブラックマンデー暴落を予測。チューダー・インベストメントは110億ドル以上を運用。', zh: '预测1987年黑色星期一。都铎投资管理110亿美元以上。', es: 'Predijo el crash del Lunes Negro de 1987. Tudor gestiona $11B+.' }
        },
        {
            id: 'li_lu',
            image: 'assets/Disney_Style_Guru_9_Li_Lu.png',
            name: { en: 'Li Lu', ko: '리 루', ja: 'リー・ルー', zh: '李录', es: 'Li Lu' },
            title: { en: 'The Chinese Buffett', ko: '중국의 버핏', ja: '中国のバフェット', zh: '中国巴菲特', es: 'El Buffett Chino' },
            philosophy: { en: 'Value investing in Asia, long-term holding, deep research on Chinese markets.', ko: '아시아 가치 투자, 장기 보유, 중국 시장 심층 연구.', ja: 'アジアでのバリュー投資、長期保有、中国市場の深い研究。', zh: '亚洲价值投资，长期持有，中国市场深度研究。', es: 'Inversión de valor en Asia, tenencia a largo plazo.' },
            achievement: { en: 'Introduced BYD to Buffett. Mungers chosen successor for Asian investments.', ko: '버핏에게 BYD 소개. 멍거가 선택한 아시아 투자 후계자.', ja: 'バフェットにBYDを紹介。マンガーが選んだアジア投資の後継者。', zh: '向巴菲特介绍比亚迪。芒格选定的亚洲投资继承人。', es: 'Presentó BYD a Buffett. Sucesor elegido por Munger para Asia.' }
        },
        {
            id: 'marks',
            image: 'assets/Disney_Style_Guru_10_Marks.png',
            name: { en: 'Howard Marks', ko: '하워드 막스', ja: 'ハワード・マークス', zh: '霍华德·马克斯', es: 'Howard Marks' },
            title: { en: 'The Distressed Debt King', ko: '부실채권의 제왕', ja: '不良債権の王', zh: '困境债务之王', es: 'El Rey de la Deuda Distressed' },
            philosophy: { en: 'Second-level thinking, market cycles, distressed debt, risk awareness.', ko: '2차적 사고, 시장 사이클, 부실 채권, 리스크 인식.', ja: '二次的思考、市場サイクル、不良債権、リスク認識。', zh: '二级思维，市场周期，困境债务，风险意识。', es: 'Pensamiento de segundo nivel, ciclos de mercado, deuda distressed.' },
            achievement: { en: 'Co-founded Oaktree Capital ($170B AUM). Famous for his investor memos.', ko: '오크트리 캐피탈 공동 설립 (AUM 1700억 달러). 투자자 메모로 유명.', ja: 'オークツリー・キャピタル共同設立(運用資産1700億ドル)。投資家向けメモで有名。', zh: '联合创立橡树资本(管理资产1700亿美元)。以投资者备忘录闻名。', es: 'Co-fundó Oaktree Capital ($170B AUM). Famoso por sus memos.' }
        },
        {
            id: 'templeton',
            image: 'assets/Disney_Style_Guru_11_Templeton.png',
            name: { en: 'John Templeton', ko: '존 템플턴', ja: 'ジョン・テンプルトン', zh: '约翰·邓普顿', es: 'John Templeton' },
            title: { en: 'The Global Pioneer', ko: '글로벌 투자의 선구자', ja: 'グローバル投資のパイオニア', zh: '全球投资先驱', es: 'El Pionero Global' },
            philosophy: { en: 'Global diversification, contrarian investing, buy at maximum pessimism.', ko: '글로벌 분산, 역발상 투자, 최대 비관론에서 매수.', ja: 'グローバル分散、逆張り投資、最大悲観時に購入。', zh: '全球分散，逆向投资，在最悲观时买入。', es: 'Diversificación global, inversión contraria.' },
            achievement: { en: 'Pioneer of global investing. Templeton Growth Fund beat market for 50+ years.', ko: '글로벌 투자의 선구자. 템플턴 성장 펀드 50년 이상 시장 초과 수익.', ja: 'グローバル投資のパイオニア。テンプルトン・グロース・ファンドは50年以上市場を上回る。', zh: '全球投资先驱。邓普顿成长基金50多年跑赢市场。', es: 'Pionero de la inversión global. Superó al mercado por 50+ años.' }
        },
        {
            id: 'klarman',
            image: 'assets/Disney_Style_Guru_13_Klarman.png',
            name: { en: 'Seth Klarman', ko: '세스 클라만', ja: 'セス・クラーマン', zh: '塞斯·卡拉曼', es: 'Seth Klarman' },
            title: { en: 'The Deep Value Hunter', ko: '심층 가치 투자자', ja: 'ディープバリュー・ハンター', zh: '深度价值猎手', es: 'El Cazador de Valor Profundo' },
            philosophy: { en: 'Margin of safety, patient capital, absolute returns, risk-averse value.', ko: '안전 마진, 인내심 있는 자본, 절대 수익, 리스크 회피형 가치.', ja: '安全域、忍耐強い資本、絶対リターン、リスク回避型バリュー。', zh: '安全边际，耐心资本，绝对回报，风险规避价值。', es: 'Margen de seguridad, capital paciente, retornos absolutos.' },
            achievement: { en: 'Wrote "Margin of Safety" (sells for $1000+). Baupost Group manages $27B.', ko: '"안전 마진" 저술 (1000달러 이상에 거래). 바우포스트 그룹 270억 달러 운용.', ja: '「安全域」を執筆(1000ドル以上で取引)。バウポスト・グループは270億ドルを運用。', zh: '撰写《安全边际》(售价超1000美元)。鲍勃斯特集团管理270亿美元。', es: 'Escribió "Margen de Seguridad" (se vende por $1000+). Baupost gestiona $27B.' }
        },
        {
            id: 'miller',
            image: 'assets/Disney_Style_Guru_14_Miller.png',
            name: { en: 'Bill Miller', ko: '빌 밀러', ja: 'ビル・ミラー', zh: '比尔·米勒', es: 'Bill Miller' },
            title: { en: 'The Contrarian Legend', ko: '역발상의 전설', ja: '逆張りの伝説', zh: '逆向传奇', es: 'La Leyenda Contraria' },
            philosophy: { en: 'Contrarian value, buy during fear, concentrated positions, long-term view.', ko: '역발상 가치, 공포에 매수, 집중 포지션, 장기적 관점.', ja: '逆張りバリュー、恐怖時に購入、集中ポジション、長期的視点。', zh: '逆向价值，恐慌时买入，集中持仓，长期观点。', es: 'Valor contrario, comprar durante el miedo, posiciones concentradas.' },
            achievement: { en: 'Beat S&P 500 for 15 consecutive years (1991-2005). Record streak.', ko: '15년 연속 S&P 500 초과 수익 (1991-2005). 기록적인 연속 기록.', ja: '15年連続でS&P500を上回る(1991-2005)。記録的な連勝。', zh: '连续15年跑赢标普500(1991-2005)。创纪录连胜。', es: 'Superó al S&P 500 por 15 años consecutivos (1991-2005).' }
        },
        {
            id: 'smith',
            image: 'assets/Disney_Style_Guru_15_Smith.png',
            name: { en: 'Terry Smith', ko: '테리 스미스', ja: 'テリー・スミス', zh: '特里·史密斯', es: 'Terry Smith' },
            title: { en: 'The Quality Investor', ko: '퀄리티 투자자', ja: 'クオリティ投資家', zh: '品质投资者', es: 'El Inversor de Calidad' },
            philosophy: { en: 'Buy quality, dont overpay, do nothing. Simple, repeatable strategy.', ko: '좋은 기업을 사라, 비싸게 사지 마라, 아무것도 하지 마라.', ja: '質の高い企業を買い、高く払わず、何もしない。シンプルで再現可能な戦略。', zh: '买优质，不多付，什么都不做。简单可重复策略。', es: 'Compra calidad, no pagues de más, no hagas nada.' },
            achievement: { en: 'Fundsmith Equity Fund: 15%+ annualized returns since 2010.', ko: '펀드스미스 주식 펀드: 2010년 이후 연평균 15% 이상 수익률.', ja: 'ファンドスミス・エクイティ・ファンド：2010年以来年率15%以上のリターン。', zh: 'Fundsmith股票基金：2010年以来年化回报超15%。', es: 'Fundsmith Equity Fund: 15%+ retornos anualizados desde 2010.' }
        },
        {
            id: 'einhorn',
            image: 'assets/Disney_Style_Guru_16_Einhorn.png',
            name: { en: 'David Einhorn', ko: '데이비드 아인혼', ja: 'デイビッド・アインホーン', zh: '大卫·艾因霍恩', es: 'David Einhorn' },
            title: { en: 'The Short Selling Legend', ko: '공매도의 전설', ja: '空売りの伝説', zh: '做空传奇', es: 'La Leyenda del Short Selling' },
            philosophy: { en: 'Value with catalyst, forensic accounting, short selling frauds.', ko: '촉매가 있는 가치, 법의학적 회계 분석, 사기 기업 공매도.', ja: 'カタリストのあるバリュー、フォレンジック会計、詐欺企業の空売り。', zh: '有催化剂的价值，法务会计，做空欺诈公司。', es: 'Valor con catalizador, contabilidad forense, venta corta de fraudes.' },
            achievement: { en: 'Famous for exposing Lehman Brothers fraud before 2008 crash. Greenlight Capital founder.', ko: '2008년 붕괴 전 리먼 브라더스 사기 폭로로 유명. 그린라이트 캐피탈 설립자.', ja: '2008年の暴落前にリーマン・ブラザーズの不正を暴露したことで有名。グリーンライト・キャピタル創設者。', zh: '因在2008年崩盘前揭露雷曼兄弟欺诈而闻名。绿光资本创始人。', es: 'Famoso por exponer el fraude de Lehman Brothers. Fundador de Greenlight.' }
        },
        {
            id: 'loeb',
            image: 'assets/Disney_Style_Guru_17_Loeb.png',
            name: { en: 'Daniel Loeb', ko: '다니엘 롭', ja: 'ダニエル・ローブ', zh: '丹尼尔·勒布', es: 'Daniel Loeb' },
            title: { en: 'The Event-Driven Activist', ko: '이벤트 드리븐 행동주의자', ja: 'イベント・ドリブン・アクティビスト', zh: '事件驱动激进者', es: 'El Activista Event-Driven' },
            philosophy: { en: 'Event-driven investing, shareholder activism, catalyst identification.', ko: '이벤트 드리븐 투자, 주주 행동주의, 촉매 식별.', ja: 'イベント・ドリブン投資、株主アクティビズム、カタリスト特定。', zh: '事件驱动投资，股东激进主义，催化剂识别。', es: 'Inversión event-driven, activismo accionarial.' },
            achievement: { en: 'Third Point LLC manages $15B+. Known for aggressive activist letters.', ko: '서드 포인트 150억 달러 이상 운용. 공격적인 주주 서한으로 유명.', ja: 'サード・ポイントは150億ドル以上を運用。攻撃的なアクティビスト書簡で知られる。', zh: '第三点管理150亿美元以上。以激进的股东信函闻名。', es: 'Third Point gestiona $15B+. Conocido por cartas activistas agresivas.' }
        },
        {
            id: 'griffin',
            image: 'assets/Disney_Style_Guru_18_Griffin.png',
            name: { en: 'Ken Griffin', ko: '켄 그리핀', ja: 'ケン・グリフィン', zh: '肯·格里芬', es: 'Ken Griffin' },
            title: { en: 'The Market Maker King', ko: '마켓 메이커의 왕', ja: 'マーケットメーカーの王', zh: '做市商之王', es: 'El Rey de los Market Makers' },
            philosophy: { en: 'Multi-strategy approach, market making, quantitative strategies, speed.', ko: '멀티 전략 접근, 마켓 메이킹, 퀀트 전략, 속도.', ja: 'マルチ戦略アプローチ、マーケットメイキング、定量戦略、スピード。', zh: '多策略方法，做市，量化策略，速度。', es: 'Enfoque multi-estrategia, market making, estrategias cuantitativas.' },
            achievement: { en: 'Founded Citadel ($50B+ AUM) and Citadel Securities (largest market maker).', ko: '시타델(AUM 500억 달러 이상)과 시타델 시큐리티즈(최대 마켓 메이커) 설립.', ja: 'シタデル(運用資産500億ドル以上)とシタデル・セキュリティーズ(最大のマーケットメーカー)を設立。', zh: '创立城堡投资(500亿美元以上)和城堡证券(最大做市商)。', es: 'Fundó Citadel ($50B+ AUM) y Citadel Securities.' }
        },
        {
            id: 'robertson',
            image: 'assets/Disney_Style_Guru_19_Robertson.png',
            name: { en: 'Julian Robertson', ko: '줄리안 로버트슨', ja: 'ジュリアン・ロバートソン', zh: '朱利安·罗伯逊', es: 'Julian Robertson' },
            title: { en: 'The Tiger Cub Father', ko: '타이거 컵스의 아버지', ja: 'タイガー・カブの父', zh: '小虎之父', es: 'El Padre de los Tiger Cubs' },
            philosophy: { en: 'Long/short equity, fundamental analysis, mentor culture, talent development.', ko: '롱/숏 주식, 펀더멘털 분석, 멘토 문화, 인재 육성.', ja: 'ロング/ショート株式、ファンダメンタル分析、メンター文化、人材育成。', zh: '多空股票，基本面分析，导师文化，人才培养。', es: 'Equity long/short, análisis fundamental, cultura de mentoría.' },
            achievement: { en: 'Tiger Management spawned 100+ "Tiger Cubs" hedge funds. Legendary mentor.', ko: '타이거 매니지먼트에서 100개 이상의 "타이거 컵스" 헤지펀드 배출. 전설적인 멘토.', ja: 'タイガー・マネジメントから100以上の「タイガー・カブ」ヘッジファンドを輩出。伝説的なメンター。', zh: '老虎基金培养出100多只"小虎"对冲基金。传奇导师。', es: 'Tiger Management generó 100+ fondos "Tiger Cubs". Mentor legendario.' }
        },
        {
            id: 'pabrai',
            image: 'assets/Disney_Style_Guru_20_Pabrai.png',
            name: { en: 'Mohnish Pabrai', ko: '모니쉬 파브라이', ja: 'モニッシュ・パブライ', zh: '莫尼什·帕布莱', es: 'Mohnish Pabrai' },
            title: { en: 'The Cloner', ko: '클로너', ja: 'クローナー', zh: '克隆者', es: 'El Clonador' },
            philosophy: { en: 'Clone successful investors, concentrated bets, low risk high uncertainty.', ko: '성공한 투자자 복제, 집중 베팅, 낮은 리스크 높은 불확실성.', ja: '成功した投資家を複製、集中投資、低リスク高不確実性。', zh: '克隆成功投资者，集中下注，低风险高不确定性。', es: 'Clonar inversores exitosos, apuestas concentradas.' },
            achievement: { en: 'Pabrai Investment Funds: 25%+ CAGR. Famous for "Dhandho Investor" book.', ko: '파브라이 투자 펀드: 연평균 25% 이상 성장. "단도 투자자" 책으로 유명.', ja: 'パブライ・インベストメント・ファンド：年率25%以上の成長。「ダンドー投資家」の本で有名。', zh: '帕布莱投资基金：年复合增长率超25%。以《Dhandho投资者》一书闻名。', es: 'Pabrai Investment Funds: 25%+ CAGR. Famoso por "Dhandho Investor".' }
        },
        {
            id: 'fink',
            image: 'assets/Disney_Style_Guru_21_Fink.png',
            name: { en: 'Larry Fink', ko: '래리 핑크', ja: 'ラリー・フィンク', zh: '拉里·芬克', es: 'Larry Fink' },
            title: { en: 'The Asset Management Titan', ko: '자산운용의 거인', ja: '資産運用の巨人', zh: '资产管理巨头', es: 'El Titán de la Gestión de Activos' },
            philosophy: { en: 'Long-term thinking, ESG investing, passive index funds, risk management.', ko: '장기적 사고, ESG 투자, 패시브 인덱스 펀드, 리스크 관리.', ja: '長期的思考、ESG投資、パッシブインデックスファンド、リスク管理。', zh: '长期思维，ESG投资，被动指数基金，风险管理。', es: 'Pensamiento a largo plazo, inversión ESG, fondos indexados pasivos.' },
            achievement: { en: 'CEO of BlackRock, worlds largest asset manager ($10 trillion+ AUM).', ko: '블랙록 CEO, 세계 최대 자산운용사 (AUM 10조 달러 이상).', ja: 'ブラックロックCEO、世界最大の資産運用会社(運用資産10兆ドル以上)。', zh: '贝莱德CEO，全球最大资产管理公司(管理资产超10万亿美元)。', es: 'CEO de BlackRock, el mayor gestor de activos del mundo ($10T+ AUM).' }
        },
        {
            id: 'jones',
            image: 'assets/Disney_Style_Guru_22_Jones.png',
            name: { en: 'Alfred Winslow Jones', ko: '알프레드 윈슬로우 존스', ja: 'アルフレッド・ウィンスロー・ジョーンズ', zh: '阿尔弗雷德·温斯洛·琼斯', es: 'Alfred Winslow Jones' },
            title: { en: 'The Hedge Fund Pioneer', ko: '헤지펀드의 선구자', ja: 'ヘッジファンドのパイオニア', zh: '对冲基金先驱', es: 'El Pionero del Hedge Fund' },
            philosophy: { en: 'Long/short equity, leverage, hedging market risk, performance fees.', ko: '롱/숏 주식, 레버리지, 시장 리스크 헤지, 성과 보수.', ja: 'ロング/ショート株式、レバレッジ、市場リスクのヘッジ、成功報酬。', zh: '多空股票，杠杆，对冲市场风险，业绩报酬。', es: 'Equity long/short, apalancamiento, cobertura de riesgo de mercado.' },
            achievement: { en: 'Created the first hedge fund in 1949. Invented the hedge fund structure.', ko: '1949년 최초의 헤지펀드 창설. 헤지펀드 구조 발명.', ja: '1949年に最初のヘッジファンドを創設。ヘッジファンド構造を発明。', zh: '1949年创建首只对冲基金。发明对冲基金结构。', es: 'Creó el primer hedge fund en 1949. Inventó la estructura del hedge fund.' }
        },
        {
            id: 'steinhardt',
            image: 'assets/Disney_Style_Guru_23_Steinhardt.png',
            name: { en: 'Michael Steinhardt', ko: '마이클 스타인하트', ja: 'マイケル・スタインハート', zh: '迈克尔·斯坦哈特', es: 'Michael Steinhardt' },
            title: { en: 'The Trading Prodigy', ko: '트레이딩 신동', ja: 'トレーディングの神童', zh: '交易神童', es: 'El Prodigio del Trading' },
            philosophy: { en: 'Short-term trading, variant perception, contrarian timing, aggressive style.', ko: '단기 트레이딩, 변별적 인식, 역발상 타이밍, 공격적 스타일.', ja: '短期トレーディング、変異認識、逆張りタイミング、攻撃的スタイル。', zh: '短期交易，变异认知，逆向时机，激进风格。', es: 'Trading a corto plazo, percepción variante, timing contrario.' },
            achievement: { en: 'Steinhardt Partners: 24% annual return over 28 years (1967-1995).', ko: '스타인하트 파트너스: 28년간 연평균 24% 수익률 (1967-1995).', ja: 'スタインハート・パートナーズ：28年間で年率24%のリターン(1967-1995)。', zh: '斯坦哈特合伙人：28年年均回报24%(1967-1995)。', es: 'Steinhardt Partners: 24% retorno anual en 28 años (1967-1995).' }
        },
        {
            id: 'bacon',
            image: 'assets/Disney_Style_Guru_24_Bacon.png',
            name: { en: 'Louis Bacon', ko: '루이스 베이컨', ja: 'ルイス・ベーコン', zh: '路易斯·培根', es: 'Louis Bacon' },
            title: { en: 'The Global Macro Master', ko: '글로벌 매크로 마스터', ja: 'グローバルマクロの達人', zh: '全球宏观大师', es: 'El Maestro del Macro Global' },
            philosophy: { en: 'Global macro trading, risk management, capital preservation, discretionary.', ko: '글로벌 매크로 트레이딩, 리스크 관리, 자본 보존, 재량적 운용.', ja: 'グローバルマクロ取引、リスク管理、資本保全、裁量運用。', zh: '全球宏观交易，风险管理，资本保全，自主决策。', es: 'Trading macro global, gestión de riesgos, preservación de capital.' },
            achievement: { en: 'Moore Capital: 20%+ annual returns over 30 years. Never had a losing year.', ko: '무어 캐피탈: 30년간 연평균 20% 이상 수익률. 한 번도 손실 없음.', ja: 'ムーア・キャピタル：30年間で年率20%以上のリターン。損失年なし。', zh: '摩尔资本：30年年均回报超20%。从未亏损。', es: 'Moore Capital: 20%+ retornos anuales en 30 años. Sin años perdedores.' }
        },
        {
            id: 'burry',
            image: 'assets/Disney_Style_Guru_25_Burry.png',
            name: { en: 'Michael Burry', ko: '마이클 버리', ja: 'マイケル・バーリー', zh: '迈克尔·伯里', es: 'Michael Burry' },
            title: { en: 'The Big Short', ko: '빅 숏', ja: 'ビッグ・ショート', zh: '大空头', es: 'El Gran Corto' },
            philosophy: { en: 'Deep value analysis, contrarian bets, forensic research, patience.', ko: '심층 가치 분석, 역발상 베팅, 법의학적 연구, 인내.', ja: 'ディープバリュー分析、逆張り投資、フォレンジック研究、忍耐。', zh: '深度价值分析，逆向下注，法务研究，耐心。', es: 'Análisis de valor profundo, apuestas contrarias, investigación forense.' },
            achievement: { en: 'Predicted 2008 housing crash. Made $100M+ shorting subprime. "The Big Short" movie.', ko: '2008년 주택 시장 붕괴 예측. 서브프라임 공매도로 1억 달러 이상 수익. 영화 "빅 숏"의 실제 인물.', ja: '2008年の住宅崩壊を予測。サブプライムの空売りで1億ドル以上の利益。映画「マネー・ショート」の実在人物。', zh: '预测2008年房地产崩盘。做空次贷获利超1亿美元。电影《大空头》原型。', es: 'Predijo el crash inmobiliario de 2008. Ganó $100M+ en cortos. Película "The Big Short".' }
        },
        {
            id: 'greenblatt',
            image: 'assets/Disney_Style_Guru_26_Greenblatt.png',
            name: { en: 'Joel Greenblatt', ko: '조엘 그린블랫', ja: 'ジョエル・グリーンブラット', zh: '乔尔·格林布拉特', es: 'Joel Greenblatt' },
            title: { en: 'The Magic Formula Inventor', ko: '마법 공식의 발명가', ja: 'マジックフォーミュラの発明者', zh: '神奇公式发明者', es: 'El Inventor de la Fórmula Mágica' },
            philosophy: { en: 'Magic formula (high ROIC + low P/E), special situations, systematic value.', ko: '마법 공식 (높은 ROIC + 낮은 P/E), 특수 상황, 체계적 가치.', ja: 'マジックフォーミュラ(高ROIC+低P/E)、特殊状況、体系的バリュー。', zh: '神奇公式(高ROIC+低市盈率)，特殊情况，系统性价值。', es: 'Fórmula mágica (alto ROIC + bajo P/E), situaciones especiales.' },
            achievement: { en: 'Gotham Capital: 50% annual returns (1985-1994). Wrote "The Little Book That Beats the Market".', ko: '고담 캐피탈: 연평균 50% 수익률 (1985-1994). "시장을 이기는 작은 책" 저술.', ja: 'ゴッサム・キャピタル：年率50%のリターン(1985-1994)。「市場を打ち負かす小さな本」を執筆。', zh: '哥谭资本：年均回报50%(1985-1994)。著有《战胜市场的小书》。', es: 'Gotham Capital: 50% retornos anuales (1985-1994). Escribió "El Pequeño Libro".' }
        },
        {
            id: 'fisher',
            image: 'assets/Disney_Style_Guru_30_Jones_2.png',
            name: { en: 'Philip Fisher', ko: '필립 피셔', ja: 'フィリップ・フィッシャー', zh: '菲利普·费雪', es: 'Philip Fisher' },
            title: { en: 'The Growth Investing Father', ko: '성장 투자의 아버지', ja: '成長投資の父', zh: '成长投资之父', es: 'El Padre de la Inversión en Crecimiento' },
            philosophy: { en: 'Scuttlebutt method, quality growth, long-term holding, management quality.', ko: '스커틀버트 방법론, 양질의 성장, 장기 보유, 경영진 품질.', ja: 'スカットルバット方式、質の高い成長、長期保有、経営陣の質。', zh: '闲聊法，优质成长，长期持有，管理层质量。', es: 'Método scuttlebutt, crecimiento de calidad, tenencia a largo plazo.' },
            achievement: { en: 'Wrote "Common Stocks and Uncommon Profits". Held Motorola 21 years (75x gain).', ko: '"위대한 기업에 투자하라" 저술. 모토로라 21년 보유 (75배 수익).', ja: '「フィッシャーの株式投資」を執筆。モトローラを21年保有(75倍の利益)。', zh: '撰写《怎样选择成长股》。持有摩托罗拉21年(75倍收益)。', es: 'Escribió "Acciones Ordinarias y Beneficios Extraordinarios". Mantuvo Motorola 21 años.' }
        },
        {
            id: 'swensen',
            image: 'assets/Disney_Style_Guru_31_Druckenmiller_2.png',
            name: { en: 'David Swensen', ko: '데이비드 스웬슨', ja: 'デイビッド・スウェンセン', zh: '大卫·斯文森', es: 'David Swensen' },
            title: { en: 'The Yale Model Creator', ko: '예일 모델의 창시자', ja: 'イェールモデルの創設者', zh: '耶鲁模式创始人', es: 'El Creador del Modelo Yale' },
            philosophy: { en: 'Endowment model, alternative assets, long-term horizon, diversification.', ko: '기부금 모델, 대안 자산, 장기 투자, 분산.', ja: '大学基金モデル、オルタナティブ資産、長期的視野、分散。', zh: '捐赠基金模式，另类资产，长期视野，分散化。', es: 'Modelo de dotación, activos alternativos, horizonte a largo plazo.' },
            achievement: { en: 'Grew Yale endowment from $1B to $31B (1985-2021). 13.7% annual returns.', ko: '예일대 기부금을 10억 달러에서 310억 달러로 성장 (1985-2021). 연평균 13.7% 수익률.', ja: 'イェール大学の基金を10億ドルから310億ドルに成長(1985-2021)。年率13.7%のリターン。', zh: '将耶鲁捐赠基金从10亿增至310亿美元(1985-2021)。年均回报13.7%。', es: 'Creció la dotación de Yale de $1B a $31B (1985-2021). 13.7% retornos anuales.' }
        },
        {
            id: 'bogle',
            image: 'assets/Disney_Style_Guru_32_Klarman_2.png',
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


    const investorGrid = document.getElementById('investorGrid');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const stockInput = document.getElementById('stockInput');
    const autocompleteList = document.getElementById('autocompleteList');
    const resultsSection = document.getElementById('resultsSection');
    const resultsGrid = document.getElementById('resultsGrid');
    const stockSummary = document.getElementById('stockSummary');
    const newsSection = document.getElementById('newsSection');
    const newsGrid = document.getElementById('newsGrid');
    const selectedInvestors = new Set();

    let currentLang = 'ko';
    let currentFocus = -1;
    let debounceTimer;
    let isRealData = false;

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

    async function fetchFmpData(symbol) {
        const apiKey = getFmpApiKey();
        if (!apiKey) return null;

        try {
            // Fetch key metrics (ratios)
            const ratiosUrl = `${FMP_BASE_URL}/ratios-ttm/${symbol}?apikey=${apiKey}`;
            const quoteUrl = `${FMP_BASE_URL}/quote/${symbol}?apikey=${apiKey}`;

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

        closeModalBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });

        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.add('hidden');
            }
        });

        saveApiKeyBtn.addEventListener('click', () => {
            const key = apiKeyInput.value.trim();
            setFmpApiKey(key);
            settingsModal.classList.add('hidden');

            const message = key ? translations.apiKeySaved[currentLang] : translations.apiKeyCleared[currentLang];
            alert(message);
        });

        toggleApiKeyBtn.addEventListener('click', () => {
            apiKeyInput.type = apiKeyInput.type === 'password' ? 'text' : 'password';
        });
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
        investors.forEach(investor => {
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
        autocompleteList.innerHTML = '';
        currentFocus = -1;
    }

    async function showAutocomplete(query) {
        closeAllLists();

        if (!query || query.length < 1) {
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
                        stockInput.value = item.symbol;
                        closeAllLists();
                    });

                    autocompleteList.appendChild(div);
                });
            }
        } catch (error) {
            console.error('Autocomplete error:', error);
        }
    }

    // Input event with debouncing
    stockInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            showAutocomplete(e.target.value);
        }, 300);
    });

    // Keyboard navigation
    stockInput.addEventListener('keydown', (e) => {
        const items = autocompleteList.getElementsByClassName('autocomplete-item');

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
            } else {
                analyzeBtn.click();
            }
        } else if (e.keyCode === 27) { // Escape
            closeAllLists();
        }
    });

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
        'https://api.allorigins.win/raw?url=',
        'https://thingproxy.freeboard.io/fetch/'
    ];
    const BASE_URL = 'https://query1.finance.yahoo.com';

    async function fetchWithProxy(targetUrl) {
        for (const proxy of PROXIES) {
            try {
                const url = `${proxy}${encodeURIComponent(targetUrl)}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return await response.json();
            } catch (e) {
                console.warn(`Proxy ${proxy} failed:`, e);
                // Continue to next proxy
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

                // Try to get real financial data from FMP API
                const fmpData = await fetchFmpData(ticker);
                isRealData = !!fmpData;

                // Use real data if available, otherwise use simulation
                let financialData;
                if (fmpData) {
                    financialData = {
                        per: fmpData.per || 15,
                        pbr: fmpData.pbr || 2,
                        roe: fmpData.roe || 10,
                        debtToEquity: fmpData.debtToEquity || 50,
                        revenueGrowth: fmpData.revenueGrowth || 10,
                        dividendYield: fmpData.dividendYield || 0,
                        eps: fmpData.eps || 0,
                        marketCap: fmpData.marketCap || 0
                    };
                    console.log('Using REAL financial data from FMP API');
                } else {
                    // Simulation data (fallback)
                    financialData = {
                        per: Math.abs(currentPrice / (Math.random() * 10 + 1)),
                        pbr: Math.random() * 5 + 1,
                        roe: Math.random() * 20 + 5,
                        debtToEquity: Math.random() * 100,
                        revenueGrowth: Math.random() * 20,
                        dividendYield: Math.random() * 3,
                        eps: currentPrice / (Math.random() * 20 + 5),
                        marketCap: 0
                    };
                    console.log('Using SIMULATION financial data');
                }

                // Update data source badge
                updateDataStatus();

                return {
                    ticker: meta.symbol,
                    price: currentPrice,
                    change: change,
                    changePercent: changePercent,
                    volume: volume,
                    ...financialData,
                    sentiment: changePercent > 0 ? 0.6 + (Math.random() * 0.3) : 0.4 - (Math.random() * 0.3),
                    isRealData: isRealData
                };
            }
            return null;
        } catch (error) {
            console.error("Fetch Data Error:", error);
            return null;
        }
    }

    analyzeBtn.addEventListener('click', async () => {
        const stockInputVal = stockInput.value.trim();

        if (!stockInputVal) {
            alert(translations.alertStock[currentLang]);
            return;
        }

        if (selectedInvestors.size === 0) {
            alert(translations.alertInvestor[currentLang]);
            return;
        }

        // Show loading state
        const originalBtnText = analyzeBtn.textContent;
        analyzeBtn.textContent = "Searching...";
        analyzeBtn.disabled = true;

        try {
            // 1. Search for the symbol
            const searchResult = await searchSymbol(stockInputVal);

            if (!searchResult) {
                alert(`Could not find stock: ${stockInputVal}`);
                analyzeBtn.textContent = originalBtnText;
                analyzeBtn.disabled = false;
                return;
            }

            const symbol = searchResult.symbol;
            const name = searchResult.shortname || searchResult.longname || symbol;

            // 2. Fetch Real Data
            const realData = await fetchStockData(symbol);

            if (!realData) {
                alert(`Failed to load data for ${symbol}. Please try again.`);
                analyzeBtn.textContent = originalBtnText;
                analyzeBtn.disabled = false;
                return;
            }

            // Map to App Data Structure
            const stockData = {
                name: name,
                ticker: realData.ticker,
                price: realData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                change: realData.change.toFixed(2),
                changePercent: realData.changePercent.toFixed(2),
                volume: formatVolume(realData.volume),
                per: realData.per,
                pbr: realData.pbr,
                roe: realData.roe,
                debtToEquity: realData.debtToEquity,
                revenueGrowth: realData.revenueGrowth,
                sentiment: realData.sentiment
            };

            // 3. Render Stock Summary & Advice (Prioritize these)
            renderStockSummary(stockData);
            generateAdvice(name, stockData);

            // Show Sections immediately
            resultsSection.style.display = 'block';
            stockSummary.classList.remove('hidden');

            // Scroll to summary
            stockSummary.scrollIntoView({ behavior: 'smooth' });

            // 4. Fetch News (Non-blocking)
            try {
                const newsData = await fetchRealNews(symbol);
                renderNews(newsData);
                newsSection.classList.remove('hidden');
            } catch (newsErr) {
                console.warn("News fetch failed, but continuing:", newsErr);
            }

        } catch (err) {
            console.error("Critical Error:", err);
            alert(`An error occurred: ${err.message || "Unknown error"}`);
        } finally {
            analyzeBtn.textContent = originalBtnText;
            analyzeBtn.disabled = false;
        }
    });

    async function fetchRealNews(ticker) {
        try {
            // Use the search API to get news for the ticker
            const targetUrl = `${BASE_URL}/v1/finance/search?q=${ticker}&quotesCount=0&newsCount=5`;
            const data = await fetchWithProxy(targetUrl);

            if (data.news && data.news.length > 0) {
                return data.news.map(item => ({
                    source: item.provider_name || 'Yahoo Finance',
                    headline: item.title,
                    summary: item.type || 'News',
                    date: new Date(item.provider_publish_time * 1000).toLocaleDateString(),
                    url: item.link
                }));
            }
            return generateMockNews(ticker);
        } catch (e) {
            console.warn("News fetch failed, using mock:", e);
            return generateMockNews(ticker);
        }
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

            card.innerHTML = `
                <span class="news-source">${item.source}${item.url ? ' <span style="font-size:0.8em">🔗</span>' : ''}</span>
                <div class="news-headline">${item.headline}</div>
                <div class="news-summary">${item.summary}</div>
                <div class="news-date">${item.date}</div>
            `;
            newsGrid.appendChild(card);
        });
    }

    function generateAdvice(stock, data) {
        resultsGrid.innerHTML = '';

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
                    } else {
                        adviceText = getLocalizedMessage('wood_sell', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'lynch') {
                    if (data.per < 25 && data.revenueGrowth > 10) {
                        adviceText = getLocalizedMessage('lynch_buy', stock);
                        adviceSentiment = "positive";
                    } else {
                        adviceText = getLocalizedMessage('lynch_avoid', stock);
                        adviceSentiment = "negative";
                    }
                } else if (id === 'graham') {
                    if (data.pbr < 1.5 && data.per < 15) {
                        adviceText = getLocalizedMessage('graham_buy', stock);
                        adviceSentiment = "positive";
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

                // Generate rationale based on investor's focus
                let rationale = '';
                if (id === 'buffett') {
                    rationale = `ROE: ${data.roe.toFixed(1)}% | P/E: ${data.per.toFixed(1)} | Debt/Equity: ${data.debtToEquity.toFixed(1)}`;
                } else if (id === 'wood') {
                    rationale = `Revenue Growth: ${data.revenueGrowth.toFixed(1)}%`;
                } else if (id === 'lynch') {
                    rationale = `P/E: ${data.per.toFixed(1)} | Revenue Growth: ${data.revenueGrowth.toFixed(1)}%`;
                } else if (id === 'graham') {
                    rationale = `P/B: ${data.pbr.toFixed(2)} | P/E: ${data.per.toFixed(1)}`;
                } else if (id === 'dalio') {
                    rationale = `Sentiment: ${(data.sentiment * 100).toFixed(0)}%`;
                } else if (id === 'soros') {
                    rationale = `Price Change: ${data.changePercent}%`;
                } else if (id === 'munger') {
                    rationale = `ROE: ${data.roe.toFixed(1)}% | Debt/Equity: ${data.debtToEquity.toFixed(1)}`;
                } else if (id === 'icahn') {
                    rationale = `ROE: ${data.roe.toFixed(1)}%`;
                } else if (id === 'ackman') {
                    rationale = `Revenue Growth: ${data.revenueGrowth.toFixed(1)}% | P/E: ${data.per.toFixed(1)}`;
                } else if (id === 'simons') {
                    rationale = `Volume: ${data.volume} | Price Change: ${data.changePercent}%`;
                }

                const rationaleLabel = {
                    en: 'Analysis Basis',
                    ko: '분석 근거',
                    ja: '分析根拠',
                    zh: '分析依据',
                    es: 'Base de análisis'
                }[currentLang];

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

    console.log('Stock Guru: Initializing...');
    // Initialize
    updateLanguage();
    updateDataStatus();
    console.log('Stock Guru: Initialization complete.');
});


