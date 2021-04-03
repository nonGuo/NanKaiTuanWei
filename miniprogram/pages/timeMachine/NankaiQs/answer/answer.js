Page({

  data: {
    nickname: '南开人',
    totalPage: 25,
    page: 0,
    score: 0,
    answerHidden: true,
    buttonDisabled: "",
    answerImagePath: '',
    correctAnswerImagePath: 'https://image.potatofield.cn/NankaiQs/right.png',
    wrongAnswerImagePath: 'https://image.potatofield.cn/NankaiQs/wrong.png',
    showImageMask: true,
    clickTwice: false,
    highScoreImagePath: 'https://image.potatofield.cn/NankaiQs/NankaiQsMore.jpg',
    lowScoreImagePath: 'https://image.potatofield.cn/NankaiQs/NankaiQsLess.jpg',
    questionBank: [
      { question: "_____创作的《中国历史研究法》，就是由他在南开上课的讲稿整理而成。", selectA: "梁启超", selectB: "范文澜", selectC: "汤用彤", selectD: "竺可桢", answer: "A" },
      { question: '七七事变爆发不久，_____说："南开凝聚了我一生之心血，战端一开，难以保全。保不住就不保了，决不能向日本人屈服！打烂了南开可以再重建，国家一旦灭亡了，还谈什么教育！"', selectA: "严修", selectB: "张伯苓", selectC: "周恩来", selectD: "杨石先", answer: "B" },
      { question: "1934年10月，南开学生在华北运动会上当着日本驻屯军司令的面，组成_____的旗语，成为激励国人的爱国壮举。", selectA: "勿忘国耻", selectB: "国在人在", selectC: "毋忘国耻", selectD: "与国共存", answer: "C" },
      { question: '南开师生的爱国行为，使日本侵略者如芒在背，必欲除之而后快。著名记者爱泼斯坦在《人民之战》一书中记载，日军毫不避讳地宣布了轰炸南开大学的计划，理由是南开学生"抗日拥共"，南开大学是反日基地。日文报纸也说南开是_____。', selectA: "有名的中国大学", selectB: "有名的抗日大学", selectC: "有名的国民大学", selectD: "有名的共产大学", answer: "D" },
      { question: "南开被毁不到月余，张伯苓最疼爱的四子____，半个月后也在战场上为国捐躯，时年26岁。", selectA: "张锡祜", selectB: "张锡祚", selectC: "张锡羊", selectD: "张锡禄", answer: "A" },
      { question: '南开大学被炸毁当日下午，_____向报界表示："敌人此次轰炸南开，被毁者为南开之物质，而南开之精神，将因此挫折而愈益奋励。"', selectA: "严修", selectB: "张伯苓", selectC: "周恩来", selectD: "杨石先", answer: "B" },
      { question: "日寇毁校后，南开大学被迫南迁，经过长途跋涉，与北大、清华合组_____。三校齐心协力、弦歌不辍，谱写了中国高等教育史上的光辉篇章。", selectA: "东南联大", selectB: "东北联大", selectC: "西南联大", selectD: "西北联大", answer: "C" },
{ question: "_____体量虽小，却始终是西南联大办学的中坚力量", selectA: "清华大学", selectB: "北京大学", selectC: "复旦大学", selectD: "南开大学", answer: "D" },
{ question: "在战后起草《世界人权宣言》时，张伯苓胞弟、南开教授_____担任联合国人权委员会副主席，为构建国际人权保护体系作出了杰出贡献。", selectA: "张彭春", selectB: "张锡祜", selectC: "张锡羊", selectD: "张锡禄", answer: "A" },
      {
        question: '抗战胜利后，南开校友向_____汇报："在被立案惩处的汉奸之中，没有一个是战前的南开学校毕业生。"_____笑答："这比接受任何勋章都让我高兴。"', selectA: "严修", selectB: "张伯苓", selectC: "周恩来", selectD: "杨石先", answer: "B" },
{ question: "自1919年建校以来，南开人始终将自己的命运同祖国和人民的命运紧密联系在一起，为救国报国谱写了一曲曲可歌可泣的壮丽篇章，有名可考的烈士就有_____位。", selectA: "34", selectB: "35", selectC: "36", selectD: "37", answer: "C" },
{ question: "1950年，_____应南开大学学生会请求题写了校名", selectA: "周恩来", selectB: "华国锋", selectC: "邓小平", selectD: "毛泽东", answer: "D" },
      { question: '1958年8月13日，_____视察南开大学，并在视察后作出重要指示："高等学校要抓住三个东西：一是党委领导；二是群众路线；三是把教育和生产劳动结合起来。"这个重要指示，也成为指导全国高校办学的方针。', selectA: "毛泽东", selectB: "周恩来", selectC: "华国锋", selectD: "邓小平", answer: "A" },
      { question: '_____在1951年，1957年，1959年三回母校视察，希望"南开在新的时代，有新的校风，有新的教学特点，要保证质量，真正能够很好地为社会主义服务，为将来共产主义服务"。', selectA: "毛泽东", selectB: "周恩来", selectC: "华国锋", selectD: "邓小平", answer: "B" },
      { question: '_____与曹禺合写为张伯苓祝寿的诗中说"南开越大，中国就越强！"', selectA: "闻一多", selectB: "鲁迅", selectC: "老舍", selectD: "李大刚", answer: "C" },
      { question: "_____未曾在南开任过教", selectA: "范文澜", selectB: "汤用彤", selectC: "竺可桢", selectD: "曹禺", answer: "D" },
      { question: "_____是全民族抗战爆发后第一所被日寇毁掠并化为焦土的高等学府。", selectA: "南开大学", selectB: "清华大学", selectC: "北京大学", selectD: "复旦大学", answer: "A" },
      { question: "著名记者爱泼斯坦在《人民之战》一书中记载，日军毫不避讳地宣布了轰炸_____的计划", selectA: "清华大学", selectB: "南开大学", selectC: "北京大学", selectD: "复旦大学", answer: "B" },
      { question: "1937年7月29日至30日，_____校园连续两天遭日军轰炸，成为一片焦土。以战前价值计算，损失约663万元(法币)，是全国高校全部战争损失的十分之一。", selectA: "清华大学", selectB: "北京大学", selectC: "南开大学", selectD: "复旦大学", answer: "C" },
      { question: "1958年8月13日，毛泽东主席视察南开大学，并在视察后作出重要指示中高等学校要抓的不包含_____", selectA: "党委领导", selectB: "群众路线", selectC: "把教育和生产劳动结合起来", selectD: "教育独立发展", answer: "D" },
      { question: '南开大学既是教学中心，又是科研中心，取得了一批国内外公认的优秀成果。其中_____团队成果"炎症性免疫反应的新型分子与细胞机制"入选2018年度"中国高校十大科技进展"', selectA: "陈永胜团队", selectB: "赵新团队", selectC: "曹雪涛团队", selectD: "方勇纯教授（团队）", answer: "C" },
      { question: "2008-2017年南开大学论文累计被引用篇数13069篇，累计被引用次数246598次，被引用次数排名第16位；篇均被引用次数18.87次，在全国累计被引用次数较多的高校中位居_____。", selectA: "第一位", selectB: "第二位", selectC: "第三位", selectD: "第四位", answer: "A"},
      { question: '南开大学秉承"知中国，服务中国"的优良传统，立足"四个服务"职责使命，聚焦"一带一路"、京津冀一体化、自贸区等国家和区域发展战略，积极发挥学科、人才和技术优势，努力为国家和地方经济社会发展服务，特别是全方位服务_____开发开放。', selectA: "北京大兴区", selectB: "天津北辰区", selectC: "天津滨海新区", selectD: "河北雄安新区", answer: "C" },
      { question: '南开大学不断强化学生全面素质和创新能力的培养，珍视"__________"的办学理念，以"注重素质、培养能力、强化基础、拓宽专业、严格管理、保证质量"为教学指导思想，实行弹性学制、学分制、主辅修制、双学位制。"', selectA: "综合性", selectB: "文以治国、理以强国、商以富国", selectC: "得天下英才而育之", selectD: "规模适度、内涵发展", answer: "B" },
      { question: '制定实施《南开大学"十三五"素质教育实施纲要》，出台《本科生素质发展辅学指导意见》，建立"_____"学生素质发展辅学支持体系，全面构建南开特色的"公能"素质教育体系，促进学生全面发展。', selectA: "德智体美", selectB: "公能兼备", selectC: "允公允能", selectD: "立公增能", answer: "D" },
      { question: '南开大学有着广泛的国际影响，与320多所国际知名大学和国际学术机构建立了合作与交流关系。承建了美国马里兰大学孔子学院等9所海外孔子学院。2012年、2015年两次获评"__________"。', selectA: "孔子学院先进中方合作院校", selectB: "牛津/剑桥暑期项目先进中方合作院校", selectC: "世界经济论坛（达沃斯论坛）先进中方合作院校", selectD: "全球大学领导者论坛（GULF）先进中方合作院校", answer: "A" },
      { question: "南开大学先后授予数学家陈省身、物理学家吴大猷、经济学家扬·米尔达尔、美国科学院院士蒋—卡洛·若塔、哈佛大学医学院教授摩斯·居达·福克曼、台湾海基会前董事长江丙坤、美国莱斯大学校长李达伟、世界经济论坛主席克劳斯·施瓦布、新加坡总统陈庆炎、法国宪法委员会主席洛朗·法比尤斯等10位国际著名人士_____称号。", selectA: "名誉博士", selectB: "名誉教授", selectC: "客座教授", selectD: "客座教授", answer: "A" },
      { question: '南开大学有中国科学院院士_____人，中国工程院院士2人，发展中国家科学院院士7人，国家"万人计划"领军人才18人、青年拔尖人才8人', selectA: "11", selectB: "12", selectC: "13", selectD: "14", answer: "A" },
      { question: '南开大学拥有"马克思主义理论研究和建设工程"首席专家11人、主要成员29人，"973"和"863"首席科学家18人次，国家重点研发计划项目负责人11人，"国家杰出青年科学基金"获得者_____人。', selectA: "46", selectB: "47", selectC: "48", selectD: "49", answer: "D" },
      { question: '南开大学拥有天津市杰出人才_____人，天津市"人才发展特殊支持计划"领军人才3人、青年拔尖人才10人、高层次创新创业团队带头人5人，天津市"131"创新人才培养工程第一层次人选61人、创新型人才团队带头人16人、"天津市杰出青年科学基金"获得者18人，天津市级教学名师奖获得者35人，天津市级教学团队14个。', selectA: "8", selectB: "9", selectC: "10", selectD: "11", answer: "A" },
      { question: "_____年以来，获得国家自然科学二等奖4项、国家科技进步二等奖1项、国家技术发明二等奖1项，获国家教学成果奖13项、国家级精品资源共享课31门、精品视频公开课15门。", selectA: "2006", selectB: "2007", selectC: "2008", selectD: "2009", answer: "B" },
      { question: "南开大学有9项成果获2017年度天津市科学技术奖，_____项成果获教育部2017年度高等学校科学研究优秀成果奖（科学技术）奖励，2项发明专利获2017年天津市专利奖。", selectA: "一项", selectB: "两项", selectC: "三项", selectD: "四项", answer: "B" },
      { question: '陈永胜团队项目"光电转化效率达12.7%的有机太阳能电池"入选"__________"。', selectA: "2017中国光学十大进展", selectB: "2017中国电学十大进展", selectC: "2017中国有机化学十大进展", selectD: "2017中国太阳能学十大进展", answer: "A" },
{ question: '南开大学_____团队研发的"面向生物医学工程的微操作机器人系统"入选"2018中国智能制造十大科技进展"。', selectA: "曹雪涛团队", selectB: "赵新团队", selectC: "陈永胜团队", selectD: "方勇纯教授（团队）", answer: "B" },
{ question: "2017年度，南开大学SCI收录论文1467篇，全国高校排名第_____位。", selectA: "49", selectB: "50", selectC: "51", selectD: "52", answer: "D" },
{ question: '南开大学秉承"__________"的优良传统，立足"四个服务"职责使命，聚焦"一带一路"、京津冀一体化、自贸区等国家和区域发展战略，积极发挥学科、人才和技术优势，努力为国家和地方经济社会发展服务', selectA: "知中国，服务中国", selectB: "允公允能", selectC: "日新月异", selectD: "德智体美劳全面发展", answer: "A" },
{ question: '__________ 、中国APEC研究院、新一代中国人工智能发展战略研究院、经济与社会发展研究院、滨海开发研究院、教育与产业区域发展研究中心、人权研究中心、当代中国问题研究院、WTO研究中心、国家经济战略研究院、津南研究院、统计研究院、生态文明研究院等研究机构是国家有关部委和地方政府的"智囊团"和"人才库"。', selectA: "马克思主义思想研究院", selectB: "毛泽东主义思想研究院", selectC: "邓小平理论思想研究院", selectD: "习近平新时代中国特色社会主义思想研究院", answer: "D" },
{ question: '学校按照"__________"的原则，全面对接"创新驱动发展"战略、"中国制造2025"等的实施，积极推动各类协同创新中心和若干高层次交叉科学中心建设，与一批高校、企业、科研院所、政府部门建立了紧密合作关系。', selectA: "国家急需，世界一流", selectB: "创新与发展", selectC: "紧扣时代脉搏", selectD: "发展是动力", answer: "A" },
{ question: "从SCI收录论文累计被引用篇数来看，南开大学论文累计被引用篇数13069篇，累计被引用次数246598次，被引用次数排名第16位。", selectA: "2007-2019", selectB: "2007-2017", selectC: "2008-2019", selectD: "2008-2017", answer: "D" },
{ question: "2017年度，南开大学SEI收录论文数958篇，全国高校排名第_____位。", selectA: "50", selectB: "51", selectC: "52", selectD: "53", answer: "D" },
      { question: "南开大学是国家教育部直属重点_____大学", selectA: "综合性", selectB: "理工类", selectC: "财经类", selectD: "艺术类", answer: "A" },
      { question: "南开大学是_____的母校", selectA: "毛泽东", selectB: "周恩来", selectC: "邓小平", selectD: "江泽民", answer: "B" },
      { question: "南开大学由严修、_____秉承教育救国理念创办", selectA: "蔡元培", selectB: "竺可桢", selectC: "蒋梦麟", selectD: "张伯苓", answer: "D" },
      { question: "南开大学肇始于_____年", selectA: "1900", selectB: "1904", selectC: "1908", selectD: "1912", answer: "B" },
      { question: "_____年南开大学校园遭侵华日军炸毁，学校南迁", selectA: "1935", selectB: "1936", selectC: "1937", selectD: "1938", answer: "C" },
      { question: "_____年南开大学合组成西南联合大学", selectA: "1935", selectB: "1936", selectC: "1937", selectD: "1938", answer: "D" },
      { question: "南开大学与_____、清华大学合组西南联合大学，被誉为“学府北辰”", selectA: "北京大学", selectB: "复旦大学", selectC: "浙江大学", selectD: "南京大学", answer: "A" },
      { question: "南开大学_____年回津复校并改为国立。", selectA: "1945", selectB: "1946", selectC: "1947", selectD: "1948", answer: "B" },
      { question: "_____年9月津南校区建成启用", selectA: "2013", selectB: "2014", selectC: "2015", selectD: "2016", answer: "C" },
      { question: "南开大学现在形成了八里台校区、津南校区、_____“一校三区”办学格局", selectA: "泰达学院", selectB: "滨海学院", selectC: "迎水道校区", selectD: "津南学院", answer: "A" },
      { question: "_____年9月，南开大学入选国家42所世界一流大学建设高校", selectA: "2016", selectB: "2017", selectC: "2018", selectD: "2019", answer: "B" },
      { question: "南开大学坚持“_____”的校训", selectA: "爱国进步民主科学", selectB: "自强不息，厚德载物", selectC: "实事求是", selectD: "允公允能，日新月异", answer: "D" },
      { question: "南开大学坚持“文以治国、理以强国、_____”的理念", selectA: "师以救国", selectB: "医以救国", selectC: "商以富国", selectD: "工以富国", answer: "C" },
      { question: "南开大学占地_____万平方米", selectA: "122.50", selectB: "245.89", selectC: "445.19", selectD: "672.72", answer: "C" },
      { question: "南开大学现有专业学院_____个", selectA: "23", selectB: "24", selectC: "25", selectD: "26", answer: "D" },
      { question: "南开大学现有本科专业_____个", selectA: "85", selectB: "86", selectC: "87", selectD: "88", answer: "B" },
      { question: "南开大学现有国家“双一流”建设学科_____个", selectA: "3", selectB: "4", selectC: "5", selectD: "6", answer: "C" },
      { question: "南开大学现有一级学科国家重点学科_____个", selectA: "3", selectB: "4", selectC: "5", selectD: "6", answer: "D" },
      { question: "南开大学现有国家重点实验室_____个", selectA: "2", selectB: "3", selectC: "4", selectD: "5", answer: "A" },
      { question: "南开大学现有中国科学院院士_____人", selectA: "8", selectB: "9", selectC: "10", selectD: "11", answer: "D" },
      { question: "2014年，中国特色社会主义经济建设协同创新中心通过国家第______批“2011计划”认定，成为我国经济学领域首个获批的协同创新中心", selectA: "二", selectB: "三", selectC: "四", selectD: "五", answer: "A" },
      { question: "南开大学的办学理念是______", selectA: "面向四面八方，胸怀博大，广纳新知，锐意进取", selectB: "文以治国、理以强国、商以富国", selectC: "智圆行方", selectD: "允公允能", answer: "B" },
      { question: "下面四个选项中，哪一个不是南开大学的教学指导思想", selectA: "注重素质", selectB: "强化基础", selectC: "与时俱进", selectD: "严格管理", answer: "C" },
      { question: "把“课堂教学—校园文化—社会实践”的有机结合作为育人的基本环节，以杰出校友______为楷模，塑造学生健全人格、高尚品德、创新精神和实践能力", selectA: "周恩来", selectB: "陈省身", selectC: "杨石先", selectD: "郭永怀", answer: "A" },
      { question: "推进创新创业教育，开办______，建设“青年创新创业实践基地”，打造创业服务和项目预孵化的实体平台", selectA: "创业讲座", selectB: "创业实践平台", selectC: "创业班", selectD: "创业校友会", answer: "C" },
      { question: "制定实施《南开大学“十三五”素质教育实施纲要》，出台《本科生素质发展辅学指导意见》，建立“______”学生素质发展辅学支持体系，全面构建南开特色的“公能”素质教育体系，促进学生全面发展", selectA: "三公五能", selectB: "允公允能", selectC: "公能", selectD: "立公增能", answer: "D" },
      { question: "南开大学以______著称，重视学生德、智、体、美、劳全面发展，为青年学子的健康成长营造了丰富高雅、活泼向上的校园文化氛围", selectA: "文理并重", selectB: "治学严谨", selectC: "优良校风", selectD: "培养全面", answer: "C" },
      { question: "南开大学有着广泛的国际影响，与______多所国际知名大学和国际学术机构建立了合作与交流关系", selectA: "350", selectB: "340", selectC: "330", selectD: "320", answer: "D" },
      { question: "南开大学承建了美国马里兰大学孔子学院等______所海外孔子学院", selectA: "7", selectB: "8", selectC: "9", selectD: "10", answer: "C" },
      { question: "南开大学______次获评“孔子学院先进中方合作院校”", selectA: "1", selectB: "2", selectC: "3", selectD: "4", answer: "B" },
      { question: "学校承担了______任务，推出了牛津/剑桥暑期项目等一批水平较高的海外学习项目", selectA: "国家汉语对外教育培训", selectB: "校际交换生", selectC: "国家人才培养储备", selectD: "先进人才培养", answer: "A" },
      { question: "学校通过积极参与各类国际组织活动，进一步推动与世界一流大学、机构的______合作", selectA: "实质性、深层次", selectB: "高水平、深层次", selectC: "进一步", selectD: "全方位", answer: "A" },
      { question: "南开大学曾授予数学家陈省身、物理学家吴大猷、经济学家扬·米尔达尔、美国科学院院士蒋—卡洛·若塔等人______称号", selectA: "名誉教授", selectB: "客座教授", selectC: "名誉博士", selectD: "兼职教授", answer: "C" },
      { question: "南开大学曾曾聘诺贝尔奖获得者杨振宁、李政道、罗伯特·蒙代尔、彼得·杜赫提、卡尔·巴里·夏普莱斯等人为______", selectA: "名誉教授", selectB: "客座教授", selectC: "名誉博士", selectD: "兼职教授", answer: "A" },
      { question: "南开大学将继续坚持南开道路，光大南开品格，弘扬南开精神，坚持______为本，强化质量特色", selectA: "强校", selectB: "育人", selectC: "爱国", selectD: "为公", answer: "B" },
      { question: "哪一项不是南开大学六大战略______", selectA: "人才强校", selectB: "科研创新", selectC: "服务滨海", selectD: "知中国服务中国", answer: "D" },
      { question: "南开大学为建设______、中国特色、世界一流大学而努力奋斗！", selectA: "华北领先", selectB: "南开品格", selectC: "天津知名", selectD: "南开风格", answer: "B" },
      { question: "南开毕业生以基础扎实、素质全面、富于开拓精神和______而受到社会各界青睐", selectA: "创新能力", selectB: "实践能力", selectC: "社会责任感", selectD: "人格魅力", answer: "B" },
      { question: "下面哪一位没有被南开大学聘为名誉教授______", selectA: "韩国前总统金大中", selectB: "美国前国务卿基辛格", selectC: "世界经济论坛主席克劳斯·施瓦布", selectD: "著名作家金庸", answer: "C" },
      { question: "南开大学先后授予______位国际著名人士名誉博士称号", selectA: "7", selectB: "8", selectC: "9", selectD: "10", answer: "D" },
      { question: "APEC研究中心、人权研究中心、京津冀协同发展研究院、滨海开发研究院、当代中国问题研究院、中国公司治理研究院、跨国公司研究中心、台湾经济研究所等，连续多年发布相关报告，成为服务国家战略和_______的高端智库", selectA: "区域发展", selectB: "全球治理", selectC: "地域规划", selectD: "社会保障", answer: "A" },
{ question: "南开还将筹建____个交叉科学中心，通过创新学科组织模式，打破传统学科间的壁垒", selectA: "7", selectB: "8", selectC: "9", selectD: "10", answer: "D" },
  { question: "以重大科学问题和国家重大需求为牵引，促进学科交叉创新与群聚发展，形成一批新的学科制高点和增长点，构建南开特色的________体系", selectA: "独立研究", selectB: "交叉研究", selectC: "多重研究", selectD: "交叉学科", answer: "B" },
  { question: "习近平总书记多次强调，“办好中国的世界一流大学，必须有中国特色”，要“扎根______办大学”", selectA: "基层实践", selectB: "传统文化", selectC: "社会规律", selectD: "中国大地", answer: "D" },
  { question: "天津市委市政府对南开发展高度重视，市第____次党代会报告提出支持南开建设世界一流大学", selectA: "八", selectB: "九", selectC: "十", selectD: "十一", answer: "D" },
  { question: "市委主要负责同志把南开作为联系点，多次来校调研推动______工作，鼎力支持学校加快发展建设", selectA: "校园文化", selectB: "党建思政", selectC: "基础设施", selectD: "教学调研", answer: "B" },
  { question: "南开大学认真落实习近平总书记重要指示精神，在整改中，紧紧围绕_______根本任务，把党的领导贯穿办学治校、教书育人全过程", selectA: "文化建设", selectB: "思政建设", selectC: "立德树人", selectD: "人才培养", answer: "C" },
  { question:"引导师生增强“______”，坚定“______”，坚决做到“______”", selectA: "四个自信、四个意识、两个维护", selectB: "四个意识、两个维护、四个自信", selectC: "四个意识、四个自信、四个维护", selectD: "四个意识、四个自信、两个维护", answer: "D" },
  { question: "南开大学在抓好校院两级党的领导和党的建设的同时，强化基层基础，在2003年、______年就先后出台支部工作细则和专业学院工作细则，新时代又不断修订完善。", selectA: "2004", selectB: "2007", selectC: "2010", selectD: "2015", answer: "B" },
  { question: "学校连续16年开展“创最佳党日活动”，连续13年开展支部结对共建活动，把______落到基层。", selectA: "管党治党", selectB: "党建工作", selectC: "党日活动", selectD: "支部共建", answer: "A" },
  { question: "学校把______作为社会主义核心价值观的南开表达，以杰出校友周恩来为楷模", selectA: "校规", selectB: "校纪", selectC: "校训", selectD: "校风", answer: "C" },
  { question: "推进课堂教学、校园文化、_______“三位一体”的全方位、全过程、全员育人。", selectA: "社会实践", selectB: "公能品格", selectC: "素质教育", selectD: "体育锻炼", answer: "A" },
  { question: "回望百年南开，“爱国奋斗”始终是主题主线，“_______”始终是核心价值。", selectA: "允公允能", selectB: "日新月异", selectC: "服务中国", selectD: "公能日新", answer: "D" },
  { question: "习近平总书记指出，_______是中华民族的民族心、民族魂", selectA: "爱好和平", selectB: "爱国主义", selectC: "民族精神", selectD: "民族文化", answer: "B" },
  { question: "我们现在迎来了从站起来、富起来到强起来的阶段，我们要把学习的______目标同民族复兴的宏大目标结合起来，为之而奋斗。", selectA: "最高", selectB: "一般", selectC: "具体", selectD: "核心", answer: "C" },
  { question: "当年开办南开大学，就是为了中华民族______去培养人才的。", selectA: "站起来", selectB: "富起来", selectC: "强起来", selectD: "复兴", answer: "A" },
  { question: "南开以学习贯彻习近平总书记对___名入伍大学生的重要回信和勉励语精神为契机，把爱国之心化为报国之行，努力培养担当民族复兴大任的时代新人。", selectA: "5", selectB: "7", selectC: "8", selectD: "10", answer: "C" },
  { question: "南开还将筹建交叉科学中心，通过创新学科组织模式，打破传统学科间的壁垒，以重大_____问题和国家重大需求为牵引", selectA: "社会", selectB: "教育", selectC: "创新", selectD: "科学", answer: "D" },
  {
    question: "紧贴国家重大战略需求和世界学术前沿，南开近年来在人工智能研究、______研究、现代工学体系构建、智能医学工程人才培养、标志性论文和科研成果产出等方面均有新的突破", selectA: "精神文明", selectB: "政治建设", selectC: "生态文明", selectD: "社会文明", answer: "C" },
      { question: "_____在1962年创办了元素有机化学研究所", selectA: "杨石先", selectB: "严修", selectC: "张伯苓", selectD: "陈省身", answer: "A" },
      { question: "伴随着中华人民共和国的成立，_____年中共南开大学支部公开", selectA: "1947", selectB: "1948", selectC: "1949", selectD: "1950", answer: "C" },
      { question: "南开积极服务_____、京津冀协同、自贸区等国家建设和战略，承担直接服务经济社会发展的项目1400余个", selectA: "经济发展", selectB: "一带一路", selectC: "科教兴国", selectD: "可持续发展", answer: "B" },
      { question: "南开人把“为国家培养全心全意为人民服务的人才”、“发扬学术与提高文化”作为新的使命，向_____进军", selectA: "创新", selectB: "民主", selectC: "科学", selectD: "法治", answer: "C" },
      { question: "改革开放后，南开大学把重点工作转移到_____工作上来", selectA: "教学和科研", selectB: "教育和科研", selectC: "教学和科技", selectD: "教育和科技", answer: "A" },
      { question: "南开还在全国高校中较早进行教学改革探索，着眼“三个面向”，注重学生全面发展特别是_____能力培养，", selectA: "创新", selectB: "逻辑", selectC: "沟通", selectD: "自立", answer: "A" },
      { question: "_____，南开大学成立马克思主义学院", selectA: "1987", selectB: "1988", selectC: "1997", selectD: "1998", answer: "C" },
      { question: "在教育部与天津市共建支持下，南开大学目前形成了_____的办学格局，以“南开品格、中国特色、世界一流”为建设目标", selectA: "多元化", selectB: "全面化", selectC: "一校多区", selectD: "一校三区", answer: "D" },
      { question: "南开在社会上赢得了“南开_____，堪称一流”的美誉", selectA: "学风", selectB: "学德", selectC: "校风", selectD: "校训", answer: "A" },
      { question: "杨石先的学生李正名院士，带领团队成功创制了具有自主知识产权的_____", selectA: "光学信息处理机", selectB: "绿色农药", selectC: "微注射控制器", selectD: "激光除污机", answer: "B" },
      { question: "南开牵头组建的中国特色社会主义经济建设协同创新中心，成为全国唯一一个以_____为主攻方向的国家级协同创新中心", selectA: "政治建设", selectB: "经济建设", selectC: "文化建设", selectD: "社会建设", answer: "C" },
      { question: "中国特色社会主义进入新时代，南开按照_____要求，用教学科研成果报国强国。", selectA: "四个全面", selectB: "四个意识", selectC: "四个服务", selectD: "四个自信", answer: "C" },
      { question: "南开的对外合作办学也走在前列，1983年就在国内率先与加拿大_____联合培养研究生", selectA: "麦吉尔大写", selectB: "约克大学", selectC: "多伦多大学", selectD: "蒙特利尔大学", answer: "B" },
      { question: "2017年，南开大学入选世界一流大学建设高校，并成为36所_____高校之一。", selectA: "A类", selectB: "B类", selectC: "C类", selectD: "D类", answer: "A" },
      { question: "_____年，南开大学发布爱国公约", selectA: "1948", selectB: "1949", selectC: "1950", selectD: "1951", answer: "D" },
      { question: "1978年的全国科学大会上，元素有机化学研究所_____项研究成果受到表彰，", selectA: "12", selectB: "13", selectC: "14", selectD: "15", answer: "D" },
      { question: "党的十八大以来，南开充分发挥_____的学科综合优势，深入研究宣传阐释习近平新时代中国特色社会主义思想。", selectA: "文理兼备", selectB: "多元全面", selectC: "种类丰富", selectD: "门类齐全", answer: "D" },
      { question: "1978年的全国科学大会上，杨石先荣获_____称号", selectA: "奉献工作者", selectB: "勤奋工作者", selectC: "先进工作者", selectD: "优秀工作者", answer: "C" },
      { question: "南开大学有近50位教师参与_____重点教材编写，是国内参与专家人数最多的高校之一", selectA: "985工程", selectB: "211工程", selectC: "马工程", selectD: "双一流工程", answer: "C" },
      { question: "费孝通先生在南开创办社会学专业班和南开的《中国上市公司治理评价研究报告》，都为服务_____社会发展作出了重要贡献", selectA: "经济", selectB: "政治", selectC: "文明", selectD: "文化", answer: "A" },
      {question:"习近平总书记到访我校的时间是____",selectA:"1月16日", selectB:"1月17日", selectC:"1月18日", selectD:"1月19日", answer: "B" },
{question:"南开大学百年校史展的主题是____",selectA:"允公允能 日新月异", selectB:"爱国奋斗 自强不息", selectC:"爱国奋斗 公能日新", selectD:"爱国奋斗 不忘初心", answer: "C" },
{question:"南开人的办学初心是____",selectA:"育才救国、兴学图强", selectB:"救亡图存、兴学图强", selectC:"兼容并包、育才救国", selectD:"自强不息、厚德载物", answer: "A" },
{question:"19世纪20年代，老舍与曹禺合写为张伯苓祝寿的诗中说道____",selectA:"南开越大，中国就越强", selectB:"南开越好，中国就越强", selectC:"南开越好，中国就越棒", selectD:"南开越大，中国就越棒", answer: "A" },
{question:"下列哪部作品不是剧作家曹禺的代表作?",selectA:"《雷雨》", selectB:"《日出》", selectC:"《原野》", selectD:"《屈原》", answer: "D" },
{question:"南开五虎是在20世纪20年代为南开争得很大光荣的____中五位主力队员的绰号。现在南开大学的校园中，有一条以他们命名的“五虎路”。",selectA:"学校足球队", selectB:"学校篮球队", selectC:"学校棒球队", selectD:"学校羽毛球队", answer: "B" },
{question:"允公允能，日新月异的校训于____年正式颁定",selectA:"1937", selectB:"1936", selectC:"1935", selectD:"1934", answer: "D"},
{question:"周恩来总理在南开大学读书期间曾参演下列哪部话剧?",selectA:"《仇大娘》", selectB:"《北京大爷》", selectC:"《黄土谣》", selectD:"《有一种毒药》", answer: "A" },
{question:"《南开大学发展方案》于____年提出。",selectA:"1926", selectB:"1927", selectC:"1928", selectD:"1929", answer: "C" },
{question:"南开大学首届招生____人。",selectA:"96", selectB:"97", selectC:"98", selectD:"99", answer: "A" },
{question:"创校校长张伯苓曾多次称赞____是南开最好的学生。",selectA:"周恩来", selectB:"林枫", selectC:"周光召", selectD:"朱光亚", answer: "A" },
{question:"周恩来总理是南开大学招生第____批学生。",selectA:"一", selectB:"二", selectC:"三", selectD:"四", answer: "A" },
{question:"周恩来总理在我校文科读书时，学号是____",selectA:"60", selectB:"61", selectC:"62", selectD:"63", answer: "C" },
{question:"南开五虎不包括____",selectA:"唐宝堃", selectB:"王锡良", selectC:"魏蓬云", selectD:"董守义", answer: "D" },
{question:"现南开园中，____是以南开五虎命名。",selectA:"五虎路", selectB:"大中路", selectC:"励学路", selectD:"白堤路", answer: "A" },
{question:"南开五虎的教练是____",selectA:"董守义", selectB:"华克", selectC:"饶伯森", selectD:"盖莱", answer: "A" },
{question:"创校校长张伯苓____年发起第一届华北运动会。",selectA:"1907", selectB:"1908", selectC:"1909", selectD:"1910", answer: "C" },
{question:"创校校长张伯苓____年发起运动运动会",selectA:"1910", selectB:"1911", selectC:"1912", selectD:"1913", answer: "A" },
{question:'强国必先强种 强种必先强身"是张伯苓____年在《四十年南开学校之回顾》中提出的',selectA:"1942", selectB:"1943", selectC:"1944", selectD:"1945", answer: "C" },
    ],
    questions: [], 
    buttonContent: "下一题",
    currentQuestion: "",
    currentSelectA: "",
    currentSelectB: "",
    currentSelectC: "",
    currentSelectD: "",
    currentAnswer: "",
    currentRightAnswer:""
  },

  onLoad: function (options) {
    var that = this
    that.selectQuestions()
    wx.downloadFile({
      url: that.data.highScoreImagePath,
      success: function (res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          highScoreImagePath: tempFilePath
        })
      }
    })
    wx.downloadFile({
      url: that.data.lowScoreImagePath,
      success: function(res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          lowScoreImagePath: tempFilePath
        })
      }
    })
    that.setData({
      nickname: options.nickname,
      currentQuestion: that.data.questions[0].question,
      currentSelectA: that.data.questions[0].selectA,
      currentSelectB: that.data.questions[0].selectB,
      currentSelectC: that.data.questions[0].selectC,
      currentSelectD: that.data.questions[0].selectD,
      currentRightAnswer: that.data.questions[0].answer
    })
  },

  //随机抽取题目
  selectQuestions: function () {
    var that = this
    var questionRange = that.data.questionBank.length
    var selectedQuestions = []
    var indexes = []
    var totalPage = that.data.totalPage
    while (selectedQuestions.length < totalPage) {
      var rand = Math.floor(Math.random() * questionRange)
      if (indexes.indexOf(rand) == -1) {
        indexes.push(rand)
        selectedQuestions.push(that.data.questionBank[rand])
      }
    }
    that.setData({
      questions: selectedQuestions
    })
  },

  //绘制成绩单并跳转下一页
  createPoster: function () {
    wx.showToast({
      title: '正在阅卷中',
      icon: 'loading',
      duration: 10000,
      mask: true,
    })
    var that = this;
    var context = wx.createCanvasContext('poster');
    //绘制背景
    var background;
    if (that.data.score >= 88) {
      background = that.data.highScoreImagePath;
    }
    else {
      background = that.data.lowScoreImagePath;
    }
    context.drawImage(background, 0, 0, 1620, 1080);
    //绘制昵称
    var name = '亲爱的' + that.data.nickname + '同学：';
    context.setFontSize(60);
    context.setFillStyle('#ffffff');
    context.setTextAlign('left');
    context.fillText(name, 120, 340);
    context.stroke();
    //绘制分数
    var score = that.data.score;
    context.setTextAlign('center');
    context.fillText(score, 650, 500);
    context.stroke();
    context.draw();
    //将生成好的图片保存到本地，需要延迟一会，绘制期间耗时
    setTimeout(function () {
      wx.canvasToTempFilePath({
        canvasId: 'poster',
        success: function (res) {
          var tempFilePath = res.tempFilePath;
          that.setData({
            imagePath: tempFilePath,
          });
          wx.redirectTo({
            url: '../poster/poster?nickname=' + that.data.nickname + '&imagePath=' + that.data.imagePath,
          })
        },
        fail: function (res) {
          wx.showToast({
            title: '出问题了',
            icon: 'none',
            duration: 1500
          })
        }
      });
    }, 3000);
  },

  //改变选项时进行传值
  radioChange: function (e) {
    this.setData({
      currentAnswer: e.detail.value
    })
  },

  //点击下一题按钮
  bindNextQuestion: function () {
    var that = this;

    // 如果是第二次点击则跳过该判断
    if (that.data.clickTwice){
      that.nextPage()
      return;
    }

    //判断是否未填写
    if (that.data.currentAnswer == '') {
      wx.showModal({
        title: '提示',
        content: '确认跳过本题？',
        success: function (res) {
          if (res.confirm) {
            that.nextPage()
          }
        }
      })
    } else {
      that.nextPage()
    }
  },

  // 跳转到下一页之前的操作(显示答案，跳转页面)
  nextPage: function() {
    var that = this;
    var currentPage = that.data.page;

    if (that.data.clickTwice) {
      that.setData({
        clickTwice: false,
        answerHidden: true
      })
      that.nextQuestion()
      return;
    }

    if (that.data.currentAnswer == that.data.questions[currentPage].answer) {
      that.setData({
        answerHidden: true,
        answerImagePath: that.data.correctAnswerImagePath
      })
      that.setData({
        buttonDisabled: true,
        showImageMask: ''
      })
      setTimeout(function () {
        that.setData({
          showImageMask: true
        })
      }, 1000)
      setTimeout(function () {
        that.setData({
          buttonDisabled: '',
        })
        that.nextQuestion()
      }, 1100)
    }
    else {
      that.setData({
        answerHidden: true,
        answerImagePath: that.data.wrongAnswerImagePath
      })
      that.setData({
        buttonDisabled: true,
        showImageMask: ''
      })
      setTimeout(function () {
        that.setData({
          showImageMask: true,
          answerHidden: '',
          buttonDisabled: '',
          clickTwice: true
        })
      }, 1000)
    }
  },

  //跳转到下一题
  nextQuestion: function () {
    var that = this;
    var currentPage = that.data.page;
    var currentScore = that.data.score;
    var totalPage = that.data.totalPage

    //判断当前题目是否做对
    if (that.data.currentAnswer == that.data.questions[currentPage].answer) {
      that.setData({
        score: currentScore + 100 / totalPage,
      })
    }

    //不是最后一页
    if (that.data.page < totalPage - 1) {
      //清空当前选框
      that.setData({
        checked: "",
        currentAnswer: "",
      })

      //页数自增
      currentPage++;
      that.setData({
        page: currentPage
      })

      that.setData({
        buttonDisabled: "",
        currentQuestion: that.data.questions[currentPage].question,
        currentSelectA: that.data.questions[currentPage].selectA,
        currentSelectB: that.data.questions[currentPage].selectB,
        currentSelectC: that.data.questions[currentPage].selectC,
        currentSelectD: that.data.questions[currentPage].selectD,
        currentRightAnswer: that.data.questions[currentPage].answer
      });

      if (currentPage == totalPage - 1) {
        that.setData({
          buttonContent: "交卷"
        })
      }
    } else {
      that.createPoster()
    }
  },
})
