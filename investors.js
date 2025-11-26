const investors = [
    {
        id: 'buffett',
        image: 'assets/Warren Buffett - The Oracle of Omaha.png',
        name: {
            en: 'Warren Buffett', ko: '워렌 버핏', ja: 'ウォーレン・バフェット', zh: '沃伦·巴菲特', es: 'Warren Buffett'
        },
        title: {
            en: 'The Oracle of Omaha', ko: '오마하의 현인', ja: 'オマハの賢人', zh: '奥马哈先知', es: 'El Oráculo de Omaha'
        },
        philosophy: {
            en: 'Value investing, long-term horizon, moat, margin of safety.',
            ko: '가치 투자, 장기적 관점, 경제적 해자, 안전 마진.',
            ja: 'バリュー投資、長期的視野、堀（Moat）、安全域。',
            zh: '价值投资，长期持有，护城河，安全边际。',
            es: 'Inversión de valor, horizonte a largo plazo, foso económico, margen de seguridad.'
        },
        adviceTemplate: {
            en: (stock) => `For ${stock}, I'd ask: Does it have a durable competitive advantage? Is it trading at a fair price? If you don't feel comfortable owning it for 10 years, don't own it for 10 minutes.`,
            ko: (stock) => `${stock}에 대해 이렇게 묻고 싶네. 지속 가능한 경쟁 우위가 있는가? 적정한 가격인가? 10년 동안 보유할 생각이 없다면 단 10분도 보유하지 말게.`,
            ja: (stock) => `${stock}についてこう問いかけよう。永続的な競争優位性はあるか？適正価格か？10年間保有する気がないなら、10分間も保有してはいけない。`,
            zh: (stock) => `关于${stock}，我会问：它有持久的竞争优势吗？价格公道吗？如果你不打算持有10年，那就连10分钟也不要持有。`,
            es: (stock) => `Para ${stock}, preguntaría: ¿Tiene una ventaja competitiva duradera? ¿Cotiza a un precio justo? Si no te sientes cómodo poseyéndolo durante 10 años, no lo tengas ni 10 minutos.`
        }
    },
    {
        id: 'lynch',
        image: 'assets/Peter Lynch - The Chameleon.png',
        name: {
            en: 'Peter Lynch', ko: '피터 린치', ja: 'ピーター・リンチ', zh: '彼得·林奇', es: 'Peter Lynch'
        },
        title: {
            en: 'The Chameleon', ko: '카멜레온', ja: 'カメレオン', zh: '变色龙', es: 'El Camaleón'
        },
        philosophy: {
            en: 'Invest in what you know, growth at a reasonable price (GARP).',
            ko: '아는 것에 투자하라, 합리적인 가격의 성장주(GARP).',
            ja: '知っているものに投資せよ、妥当な価格での成長（GARP）。',
            zh: '投资你所了解的，合理价格的增长（GARP）。',
            es: 'Invierte en lo que conoces, crecimiento a un precio razonable (GARP).'
        },
        adviceTemplate: {
            en: (stock) => `Look at ${stock} closely. Do you use their product? Do you understand how they make money? If it's a "story stock" with no earnings, be careful. "Invest in what you know."`,
            ko: (stock) => `${stock}을(를) 자세히 보게. 그들의 제품을 사용하는가? 어떻게 돈을 버는지 이해하는가? 실적 없는 "스토리 주식"이라면 조심하게. "아는 것에 투자하라."`,
            ja: (stock) => `${stock}をよく見なさい。彼らの製品を使っているか？どうやって利益を出しているか理解しているか？利益のない「ストーリー銘柄」なら要注意だ。「知っているものに投資せよ」。`,
            zh: (stock) => `仔细观察${stock}。你用他们的产品吗？你明白他们怎么赚钱吗？如果它是没有盈利的“故事股”，要小心。“投资你所了解的。”`,
            es: (stock) => `Mira ${stock} de cerca. ¿Usas su producto? ¿Entiendes cómo ganan dinero? Si es una "acción de historia" sin ganancias, ten cuidado. "Invierte en lo que conoces".`
        }
    },
    {
        id: 'dalio',
        image: 'assets/Ray Dalio - The Macro Master.png',
        name: {
            en: 'Ray Dalio', ko: '레이 달리오', ja: 'レイ・ダリオ', zh: '雷·达里奥', es: 'Ray Dalio'
        },
        title: {
            en: 'The Macro Master', ko: '매크로 마스터', ja: 'マクロの達人', zh: '宏观大师', es: 'El Maestro Macro'
        },
        philosophy: {
            en: 'Radical transparency, economic machine, diversification.',
            ko: '극단적 투명성, 경제 기계, 분산 투자.',
            ja: '徹底的な透明性、経済マシン、分散投資。',
            zh: '极度透明，经济机器，多元化。',
            es: 'Transparencia radical, máquina económica, diversificación.'
        },
        adviceTemplate: {
            en: (stock) => `Regarding ${stock}, consider the macroeconomic cycle. Cash is trash, but diversification is key. How does this fit into your uncorrelated return streams?`,
            ko: (stock) => `${stock}과 관련하여 거시경제 사이클을 고려하게. 현금은 쓰레기지만, 분산 투자가 핵심일세. 이것이 자네의 상관관계 없는 수익 흐름에 어떻게 부합하는가?`,
            ja: (stock) => `${stock}に関しては、マクロ経済サイクルを考慮しなさい。現金はゴミだが、分散投資が鍵だ。これはあなたの相関のないリターン源泉にどう適合するか？`,
            zh: (stock) => `关于${stock}，考虑宏观经济周期。现金是垃圾，但多元化是关键。这如何适应你的非相关回报流？`,
            es: (stock) => `Con respecto a ${stock}, considera el ciclo macroeconómico. El efectivo es basura, pero la diversificación es clave. ¿Cómo encaja esto en tus flujos de retorno no correlacionados?`
        }
    },
    {
        id: 'soros',
        image: 'assets/George Soros - The Man Who Broke the Bank.png',
        name: {
            en: 'George Soros', ko: '조지 소로스', ja: 'ジョージ・ソロス', zh: '乔治·索罗斯', es: 'George Soros'
        },
        title: {
            en: 'The Man Who Broke the Bank of England', ko: '영란은행을 무너뜨린 사나이', ja: 'イングランド銀行を潰した男', zh: '打垮英格兰银行的人', es: 'El hombre que quebró el Banco de Inglaterra'
        },
        philosophy: {
            en: 'Reflexivity, boom-bust cycles, short-term speculation.',
            ko: '재귀성 이론, 붐-버스트 사이클, 단기 투기.',
            ja: '再帰性理論、ブーム・バスト・サイクル、短期投機。',
            zh: '反身性，繁荣-萧条周期，短期投机。',
            es: 'Reflexividad, ciclos de auge y caída, especulación a corto plazo.'
        },
        adviceTemplate: {
            en: (stock) => `Markets are in flux. For ${stock}, are participants acting on a misconception? If the trend is false but strong, bet on it, but be ready to reverse instantly.`,
            ko: (stock) => `시장은 유동적이야. ${stock}에 대해 시장 참여자들이 오해하고 있는가? 추세가 거짓이라도 강력하다면 베팅하되, 즉시 반대로 돌아설 준비를 하게.`,
            ja: (stock) => `市場は流動的だ。${stock}について、参加者は誤解に基づいて行動しているか？トレンドが偽りでも強力ならそれに乗れ。だが、即座に反転する準備をしておけ。`,
            zh: (stock) => `市场在不断变化。对于${stock}，参与者是否基于误解行事？如果趋势是错误的但很强劲，那就下注，但要准备好随时反转。`,
            es: (stock) => `Los mercados están en cambio constante. Para ${stock}, ¿actúan los participantes sobre una idea errónea? Si la tendencia es falsa pero fuerte, apuesta por ella, pero prepárate para revertir al instante.`
        }
    },
    {
        id: 'munger',
        image: 'assets/Charlie Munger - The Architect.png',
        name: {
            en: 'Charlie Munger', ko: '찰리 멍거', ja: 'チャーリー・マンガー', zh: '查理·芒格', es: 'Charlie Munger'
        },
        title: {
            en: 'The Architect', ko: '설계자', ja: '設計者', zh: '架构师', es: 'El Arquitecto'
        },
        philosophy: {
            en: 'Lollapalooza effect, mental models, inversion.',
            ko: '롤라팔루자 효과, 정신 모델, 역발상.',
            ja: 'ロラパルーザ効果、メンタルモデル、逆転の発想。',
            zh: '查理芒格效应，思维模型，逆向思维。',
            es: 'Efecto Lollapalooza, modelos mentales, inversión.'
        },
        adviceTemplate: {
            en: (stock) => `Invert, always invert. What could kill ${stock}? If you can't understand the business, put it in the 'too hard' pile.`,
            ko: (stock) => `거꾸로, 항상 거꾸로 생각하게. 무엇이 ${stock}을(를) 망칠 수 있는가? 비즈니스를 이해할 수 없다면 '너무 어려운' 서류함에 넣어두게.`,
            ja: (stock) => `逆転させろ、常に逆転させろ。何が${stock}を殺すのか？ビジネスが理解できないなら、「難しすぎる」箱に入れておけ。`,
            zh: (stock) => `反过来想，总是反过来想。什么会杀死${stock}？如果你看不懂这个生意，就把它放进“太难”的一堆里。`,
            es: (stock) => `Invierte, siempre invierte. ¿Qué podría matar a ${stock}? Si no puedes entender el negocio, ponlo en la pila de 'demasiado difícil'.`
        }
    },
    {
        id: 'graham',
        image: 'assets/Benjamin Graham - The Father of Value Investing.png',
        name: {
            en: 'Benjamin Graham', ko: '벤자민 그레이엄', ja: 'ベンジャミン・グレアム', zh: '本杰明·格雷厄姆', es: 'Benjamin Graham'
        },
        title: {
            en: 'The Father of Value Investing', ko: '가치 투자의 아버지', ja: 'バリュー投資の父', zh: '价值投资之父', es: 'El Padre de la Inversión de Valor'
        },
        philosophy: {
            en: 'Net-net, intrinsic value, Mr. Market.',
            ko: '넷넷(Net-net), 내재 가치, 미스터 마켓.',
            ja: 'ネットネット、本質的価値、ミスター・マーケット。',
            zh: '净净（Net-net），内在价值，市场先生。',
            es: 'Net-net, valor intrínseco, Sr. Mercado.'
        },
        adviceTemplate: {
            en: (stock) => `Is ${stock} selling for less than its liquidation value? Ignore Mr. Market's mood swings. Focus on the balance sheet.`,
            ko: (stock) => `${stock}이(가) 청산 가치보다 싸게 팔리고 있는가? 미스터 마켓의 기분 변화는 무시하게. 대차대조표에 집중하게.`,
            ja: (stock) => `${stock}は清算価値以下で売られているか？ミスター・マーケットの気分の波は無視しろ。バランスシートに集中せよ。`,
            zh: (stock) => `${stock}的售价低于其清算价值吗？忽略市场先生的情绪波动。关注资产负债表。`,
            es: (stock) => `¿Se vende ${stock} por menos de su valor de liquidación? Ignora los cambios de humor del Sr. Mercado. Céntrate en el balance.`
        }
    },
    {
        id: 'wood',
        image: 'assets/Cathie Wood - The Innovation Evangelist.png',
        name: {
            en: 'Cathie Wood', ko: '캐시 우드', ja: 'キャシー・ウッド', zh: '凯西·伍德', es: 'Cathie Wood'
        },
        title: {
            en: 'The Innovation Evangelist', ko: '혁신 전도사', ja: 'イノベーションの伝道師', zh: '创新布道者', es: 'La Evangelista de la Innovación'
        },
        philosophy: {
            en: 'Disruptive innovation, exponential growth.',
            ko: '파괴적 혁신, 기하급수적 성장.',
            ja: '破壊的イノベーション、指数関数的成長。',
            zh: '颠覆性创新，指数级增长。',
            es: 'Innovación disruptiva, crecimiento exponencial.'
        },
        adviceTemplate: {
            en: (stock) => `We look for exponential growth. Is ${stock} a platform for disruptive innovation? We are not afraid of volatility if the long-term thesis is sound.`,
            ko: (stock) => `우리는 기하급수적인 성장을 찾습니다. ${stock}이(가) 파괴적 혁신을 위한 플랫폼입니까? 장기적인 가설이 건전하다면 변동성은 두렵지 않습니다.`,
            ja: (stock) => `私たちは指数関数的な成長を探しています。${stock}は破壊的イノベーションのプラットフォームですか？長期的なテーゼが健全であれば、ボラティリティは恐れません。`,
            zh: (stock) => `我们寻找指数级增长。${stock}是颠覆性创新的平台吗？如果长期论点是合理的，我们不害怕波动。`,
            es: (stock) => `Buscamos un crecimiento exponencial. ¿Es ${stock} una plataforma para la innovación disruptiva? No tememos a la volatilidad si la tesis a largo plazo es sólida.`
        }
    },
    {
        id: 'icahn',
        image: 'assets/Carl Icahn - The Corporate Raider.png',
        name: {
            en: 'Carl Icahn', ko: '칼 아이칸', ja: 'カール・アイカーン', zh: '卡尔·伊坎', es: 'Carl Icahn'
        },
        title: {
            en: 'The Corporate Raider', ko: '기업 사냥꾼', ja: '企業乗っ取り屋', zh: '企业掠夺者', es: 'El Asaltante Corporativo'
        },
        philosophy: {
            en: 'Activism, unlocking value, contrarian.',
            ko: '행동주의, 가치 실현, 역발상.',
            ja: 'アクティビズム、価値の解放、逆張り。',
            zh: '激进主义，释放价值，逆向投资。',
            es: 'Activismo, desbloqueo de valor, contrarian.'
        },
        adviceTemplate: {
            en: (stock) => `Is management at ${stock} doing a terrible job? If the assets are valuable but the CEO is incompetent, I'd buy a stake and force a change.`,
            ko: (stock) => `${stock}의 경영진이 끔찍하게 일을 못하고 있는가? 자산은 가치 있는데 CEO가 무능하다면, 지분을 매입해서 변화를 강제하겠네.`,
            ja: (stock) => `${stock}の経営陣はひどい仕事をしていないか？資産に価値があるのにCEOが無能なら、株を買い占めて変化を強いる。`,
            zh: (stock) => `${stock}的管理层做得一团糟吗？如果资产有价值但CEO无能，我会买入股份并强迫改变。`,
            es: (stock) => `¿La dirección de ${stock} está haciendo un trabajo terrible? Si los activos son valiosos pero el CEO es incompetente, compraría una participación y forzaría un cambio.`
        }
    },
    {
        id: 'ackman',
        image: 'assets/Bill Ackman - The Activist.png',
        name: {
            en: 'Bill Ackman', ko: '빌 애크먼', ja: 'ビル・アックマン', zh: '比尔·阿克曼', es: 'Bill Ackman'
        },
        title: {
            en: 'The Activist', ko: '행동주의자', ja: 'アクティビスト', zh: '激进投资者', es: 'El Activista'
        },
        philosophy: {
            en: 'Concentrated portfolio, simple predictable businesses.',
            ko: '집중 포트폴리오, 단순하고 예측 가능한 비즈니스.',
            ja: '集中ポートフォリオ、単純で予測可能なビジネス。',
            zh: '集中投资组合，简单可预测的业务。',
            es: 'Cartera concentrada, negocios simples y predecibles.'
        },
        adviceTemplate: {
            en: (stock) => `I like simple, predictable, free-cash-flow-generative businesses. For ${stock}, if it fits that mold and is undervalued, I'd take a large position.`,
            ko: (stock) => `나는 단순하고 예측 가능하며 잉여 현금 흐름을 창출하는 비즈니스를 좋아해. ${stock}이(가) 그 틀에 맞고 저평가되어 있다면, 대규모로 투자하겠어.`,
            ja: (stock) => `私は単純で予測可能、フリーキャッシュフローを生み出すビジネスが好きだ。${stock}がその型にはまり、過小評価されていれば、大きなポジションを取る。`,
            zh: (stock) => `我喜欢简单、可预测、产生自由现金流的业务。对于${stock}，如果它符合这个模式并且被低估，我会大量持有。`,
            es: (stock) => `Me gustan los negocios simples, predecibles y generadores de flujo de caja libre. Para ${stock}, si encaja en ese molde y está infravalorado, tomaría una gran posición.`
        }
    },
    {
        id: 'simons',
        image: 'assets/Jim Simons - The Quant King.png',
        name: {
            en: 'Jim Simons', ko: '짐 사이먼스', ja: 'ジム・シモンズ', zh: '吉姆·西蒙斯', es: 'Jim Simons'
        },
        title: {
            en: 'The Quant King', ko: '퀀트의 제왕', ja: 'クオンツの王', zh: '量化之王', es: 'El Rey Cuantitativo'
        },
        philosophy: {
            en: 'Quantitative analysis, pattern recognition.',
            ko: '정량적 분석, 패턴 인식.',
            ja: '定量的分析、パターン認識。',
            zh: '定量分析，模式识别。',
            es: 'Análisis cuantitativo, reconocimiento de patrones.'
        },
        adviceTemplate: {
            en: (stock) => `I don't look at the fundamentals of ${stock}. My models look for non-random patterns in the price data. It's all about the math.`,
            ko: (stock) => `난 ${stock}의 펀더멘털은 보지 않아. 내 모델은 가격 데이터에서 비무작위 패턴을 찾을 뿐이야. 모든 것은 수학이지.`,
            ja: (stock) => `私は${stock}のファンダメンタルズは見ない。私のモデルは価格データの中の非ランダムなパターンを探す。すべては数学だ。`,
            zh: (stock) => `我不看${stock}的基本面。我的模型在价格数据中寻找非随机模式。这全关乎数学。`,
            es: (stock) => `No miro los fundamentos de ${stock}. Mis modelos buscan patrones no aleatorios en los datos de precios. Todo se trata de matemáticas.`
        }
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
        en: "Enter stock name (e.g., Tesla, Samsung)...",
        ko: "종목명을 입력하세요 (예: 테슬라, 삼성전자)...",
        ja: "銘柄名を入力してください（例：テスラ、サムスン）...",
        zh: "输入股票名称（例如：特斯拉，三星）...",
        es: "Introduce el nombre de la acción (ej. Tesla, Samsung)..."
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
    alertStock: {
        en: "Please enter a stock name.", ko: "종목명을 입력해주세요.", ja: "銘柄名を入力してください。", zh: "请输入股票名称。", es: "Por favor, introduce un nombre de acción."
    },
    alertInvestor: {
        en: "Please select at least one investor.", ko: "최소 한 명의 고수를 선택해주세요.", ja: "少なくとも1人の達人を選択してください。", zh: "请至少选择一位大师。", es: "Por favor, selecciona al menos un inversor."
    }
};

