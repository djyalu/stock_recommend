document.addEventListener('DOMContentLoaded', () => {
    // --- Data Embedded from investors.js to avoid CORS issues ---
    const investors = [
        {
            id: 'buffett',
            image: 'assets/Warren%20Buffett%20-%20The%20Oracle%20of%20Omaha.webp',
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
            image: 'assets/Peter%20Lynch%20-%20The%20Chameleon.webp',
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
            image: 'assets/Ray%20Dalio%20-%20The%20Macro%20Master.webp',
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
            image: 'assets/George%20Soros%20-%20The%20Man%20Who%20Broke%20the%20Bank.webp',
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
            image: 'assets/Charlie%20Munger%20-%20The%20Architect.webp',
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
            image: 'assets/Benjamin%20Graham%20-%20The%20Father%20of%20Value%20Investing.webp',
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
            image: 'assets/Cathie%20Wood%20-%20The%20Innovation%20Evangelist.webp',
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
            image: 'assets/Carl%20Icahn%20-%20The%20Corporate%20Raider.webp',
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
                es: 'Activism, unlocking value, contrarian.'
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
            image: 'assets/Bill%20Ackman%20-%20The%20Activist.webp',
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
            image: 'assets/Jim%20Simons%20-%20The%20Quant%20King.webp',
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

    // UI Elements for Translation
    const uiElements = {
        mainTitle: document.getElementById('mainTitle'),
        subTitle: document.getElementById('subTitle'),
        stockInput: document.getElementById('stockInput'),
        analyzeBtn: document.getElementById('analyzeBtn'),
        selectTitle: document.getElementById('selectTitle'),
        resultsTitle: document.getElementById('resultsTitle')
    };

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

            card.innerHTML = `
                <img src="${investor.image}" alt="${name}" loading="lazy" onerror="this.src='https://via.placeholder.com/100/333/fff?text=${name.charAt(0)}'">
                <h3>${name}</h3>
                <p>${title}</p>
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
        'https://api.allorigins.win/raw?url='
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

                // Simulated fundamentals (Yahoo Chart API doesn't provide PER/ROE freely/easily in one call)
                // We will generate realistic-looking fundamentals based on the price to keep the app functional
                // while using REAL price data.
                return {
                    ticker: meta.symbol,
                    price: currentPrice,
                    change: change,
                    changePercent: changePercent,
                    volume: volume,
                    // Synthesized fundamentals for the Guru logic
                    per: Math.abs(currentPrice / (Math.random() * 10 + 1)),
                    pbr: Math.random() * 5 + 1,
                    roe: Math.random() * 20 + 5,
                    debtToEquity: Math.random() * 100,
                    revenueGrowth: Math.random() * 20,
                    sentiment: changePercent > 0 ? 0.6 + (Math.random() * 0.3) : 0.4 - (Math.random() * 0.3)
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
                alert(`Failed to load data for ${symbol}`);
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


            const newsData = await fetchRealNews(symbol); // Fetch real news from Yahoo Finance

            // 3. Render
            renderStockSummary(stockData);
            generateAdvice(name, stockData);
            renderNews(newsData);

            // Show Sections
            resultsSection.style.display = 'block';
            stockSummary.classList.remove('hidden');
            newsSection.classList.remove('hidden');

            // Scroll
            stockSummary.scrollIntoView({ behavior: 'smooth' });

        } catch (err) {
            console.error(err);
            alert("An error occurred while fetching data.");
        } finally {
            analyzeBtn.textContent = originalBtnText;
            analyzeBtn.disabled = false;
        }
    });

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

    // Fetch real news from Yahoo Finance
    async function fetchRealNews(symbol) {
        try {
            const targetUrl = `${BASE_URL}/v1/finance/search?q=${encodeURIComponent(symbol)}&quotesCount=1&newsCount=5`;
            const data = await fetchWithProxy(targetUrl);

            if (data.news && data.news.length > 0) {
                return data.news.slice(0, 3).map(item => ({
                    source: item.publisher || 'Yahoo Finance',
                    headline: item.title || 'No title',
                    summary: item.summary || item.title || 'Click to read more...',
                    date: new Date(item.providerPublishTime * 1000).toLocaleDateString(),
                    url: item.link || `https://finance.yahoo.com/quote/${symbol}`
                }));
            }

            // Fallback to mock news if no real news available
            return generateMockNews(symbol);
        } catch (error) {
            console.error('News fetch error:', error);
            return generateMockNews(symbol);
        }
    }

    // Keep mock news generator as fallback
    function generateMockNews(stockName) {
        const sources = ['Yahoo Finance', 'Bloomberg', 'Reuters', 'CNBC'];
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

    function renderNews(newsItems) {
        newsGrid.innerHTML = '';
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

                // Custom logic per investor based on mock data
                if (id === 'buffett') {
                    if (data.roe > 15 && data.debtToEquity < 50 && data.per < 20) {
                        adviceText = getLocalizedMessage('buffett_buy', stock);
                    } else if (data.per > 50) {
                        adviceText = getLocalizedMessage('buffett_expensive', stock);
                    } else {
                        adviceText = getLocalizedMessage('buffett_wait', stock);
                    }
                } else if (id === 'wood') {
                    if (data.revenueGrowth > 20) {
                        adviceText = getLocalizedMessage('wood_buy', stock);
                    } else {
                        adviceText = getLocalizedMessage('wood_sell', stock);
                    }
                } else if (id === 'lynch') {
                    if (data.per < 25 && data.revenueGrowth > 10) {
                        adviceText = getLocalizedMessage('lynch_buy', stock);
                    } else {
                        adviceText = getLocalizedMessage('lynch_avoid', stock);
                    }
                } else if (id === 'graham') {
                    if (data.pbr < 1.5 && data.per < 15) {
                        adviceText = getLocalizedMessage('graham_buy', stock);
                    } else {
                        adviceText = getLocalizedMessage('graham_expensive', stock);
                    }
                } else if (id === 'dalio') {
                    // Dalio: Focus on diversification and sentiment (as a proxy for macro/market mood)
                    if (data.sentiment < 0.4) {
                        adviceText = getLocalizedMessage('dalio_bear', stock);
                    } else {
                        adviceText = getLocalizedMessage('dalio_neutral', stock);
                    }
                } else if (id === 'soros') {
                    // Soros: Momentum (Reflexivity) - if change is high, bet on it continuing
                    if (Math.abs(data.changePercent) > 3) {
                        adviceText = getLocalizedMessage('soros_momentum', stock);
                    } else {
                        adviceText = getLocalizedMessage('soros_flat', stock);
                    }
                } else if (id === 'munger') {
                    // Munger: Quality (High ROE, Low Debt) - stricter than Buffett
                    if (data.roe > 20 && data.debtToEquity < 30) {
                        adviceText = getLocalizedMessage('munger_buy', stock);
                    } else {
                        adviceText = getLocalizedMessage('munger_pass', stock);
                    }
                } else if (id === 'icahn') {
                    // Icahn: Activist - Look for underperforming companies (Low ROE) to fix
                    if (data.roe < 5) {
                        adviceText = getLocalizedMessage('icahn_activist', stock);
                    } else {
                        adviceText = getLocalizedMessage('icahn_watch', stock);
                    }
                } else if (id === 'ackman') {
                    // Ackman: Predictable cash flow (Good Revenue Growth + Reasonable PE)
                    if (data.revenueGrowth > 10 && data.per < 30) {
                        adviceText = getLocalizedMessage('ackman_buy', stock);
                    } else {
                        adviceText = getLocalizedMessage('ackman_pass', stock);
                    }
                } else if (id === 'simons') {
                    // Simons: Quant/Patterns - High volume + volatility
                    if (parseInt(data.volume.replace(/,/g, '')) > 5000000 && Math.abs(data.changePercent) > 2) {
                        adviceText = getLocalizedMessage('simons_algo', stock);
                    } else {
                        adviceText = getLocalizedMessage('simons_noise', stock);
                    }
                } else {
                    // Fallback to generic template if no specific logic defined yet
                    const adviceFunc = investor.adviceTemplate[currentLang] || investor.adviceTemplate['en'];
                    adviceText = adviceFunc(stock);
                }

                const adviceCard = document.createElement('div');
                adviceCard.className = 'advice-card';
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
    console.log('Stock Guru: Initialization complete.');
});

