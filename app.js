import { astro } from "https://esm.sh/iztro@2.5.8";

astro.config({
  yearDivide: "normal",
  horoscopeDivide: "normal",
  ageDivide: "normal",
  dayDivide: "forward",
  algorithm: "zhongzhou",
});

const stems = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const branches = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

const stemElements = {
  甲: "木",
  乙: "木",
  丙: "火",
  丁: "火",
  戊: "土",
  己: "土",
  庚: "金",
  辛: "金",
  壬: "水",
  癸: "水",
};

const branchElements = {
  子: "水",
  丑: "土",
  寅: "木",
  卯: "木",
  辰: "土",
  巳: "火",
  午: "火",
  未: "土",
  申: "金",
  酉: "金",
  戌: "土",
  亥: "水",
};

const elementOrder = ["木", "火", "土", "金", "水"];
const elementTone = {
  木: "生发、学习、规划",
  火: "表达、曝光、行动",
  土: "稳定、承载、资源",
  金: "规则、效率、决断",
  水: "流动、信息、机会",
};

const elementNature = {
  木: "木主仁，重生发与规划，遇事先看方向与成长空间",
  火: "火主礼，重表达与行动，容易在看得见的舞台中聚气",
  土: "土主信，重承载与秩序，擅长把资源落到具体结果",
  金: "金主义，重规则与判断，做事讲效率，也看重边界",
  水: "水主智，重信息与流动，思维敏捷，善于顺势而为",
};

const monthRoles = {
  木: "开局、学习、筹谋、贵人牵线",
  火: "曝光、表达、职位变化、名声抬头",
  土: "稳定、落地、资产、责任加重",
  金: "制度、合同、评估、竞争筛选",
  水: "信息、流动、远行、情绪起伏",
};

const elementPlain = {
  木: "规划、生长、学习、人脉展开",
  火: "曝光、表达、行动、名声提升",
  土: "责任、稳定、落地、资源沉淀",
  金: "规则、合同、筛选、效率提升",
  水: "信息、流动、变化、情绪感受",
};

const monthNamesCn = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];

const loadingMessages = [
  "校验出生节气，推演四柱命局",
  "调用紫微排盘引擎，安命宫与身宫",
  "排布十二宫星曜，标记四化飞星",
  "换算年柱月令，查看五行旺衰",
  "归纳事业财运，生成年度断语",
];

const cityCatalog = [
  { province: "北京", city: "北京", longitude: 116.41 },
  { province: "上海", city: "上海", longitude: 121.47 },
  { province: "广东", city: "广州", longitude: 113.26 },
  { province: "广东", city: "深圳", longitude: 114.06 },
  { province: "浙江", city: "杭州", longitude: 120.16 },
  { province: "江苏", city: "南京", longitude: 118.8 },
  { province: "江苏", city: "苏州", longitude: 120.59 },
  { province: "四川", city: "成都", longitude: 104.07 },
  { province: "重庆", city: "重庆", longitude: 106.55 },
  { province: "湖北", city: "武汉", longitude: 114.31 },
  { province: "陕西", city: "西安", longitude: 108.94 },
  { province: "天津", city: "天津", longitude: 117.2 },
  { province: "湖南", city: "长沙", longitude: 112.94 },
  { province: "河南", city: "郑州", longitude: 113.63 },
  { province: "山东", city: "青岛", longitude: 120.38 },
  { province: "福建", city: "厦门", longitude: 118.09 },
  { province: "福建", city: "福州", longitude: 119.3 },
  { province: "山东", city: "济南", longitude: 117.12 },
  { province: "安徽", city: "合肥", longitude: 117.23 },
  { province: "浙江", city: "宁波", longitude: 121.55 },
  { province: "江苏", city: "无锡", longitude: 120.31 },
  { province: "广东", city: "佛山", longitude: 113.12 },
  { province: "广东", city: "东莞", longitude: 113.75 },
  { province: "广东", city: "珠海", longitude: 113.58 },
  { province: "江西", city: "南昌", longitude: 115.86 },
  { province: "云南", city: "昆明", longitude: 102.83 },
  { province: "贵州", city: "贵阳", longitude: 106.63 },
  { province: "广西", city: "南宁", longitude: 108.37 },
  { province: "海南", city: "海口", longitude: 110.32 },
  { province: "山西", city: "太原", longitude: 112.55 },
  { province: "河北", city: "石家庄", longitude: 114.51 },
  { province: "辽宁", city: "沈阳", longitude: 123.43 },
  { province: "辽宁", city: "大连", longitude: 121.61 },
  { province: "吉林", city: "长春", longitude: 125.32 },
  { province: "黑龙江", city: "哈尔滨", longitude: 126.64 },
  { province: "内蒙古", city: "呼和浩特", longitude: 111.75 },
  { province: "甘肃", city: "兰州", longitude: 103.83 },
  { province: "宁夏", city: "银川", longitude: 106.23 },
  { province: "青海", city: "西宁", longitude: 101.78 },
  { province: "新疆", city: "乌鲁木齐", longitude: 87.62 },
  { province: "西藏", city: "拉萨", longitude: 91.13 },
  { province: "香港", city: "香港", longitude: 114.17 },
  { province: "澳门", city: "澳门", longitude: 113.54 },
  { province: "台湾", city: "台北", longitude: 121.56 },
];

const solarMonthStarts = [
  { month: 1, day: 6, branch: "丑" },
  { month: 2, day: 4, branch: "寅" },
  { month: 3, day: 6, branch: "卯" },
  { month: 4, day: 5, branch: "辰" },
  { month: 5, day: 6, branch: "巳" },
  { month: 6, day: 6, branch: "午" },
  { month: 7, day: 7, branch: "未" },
  { month: 8, day: 8, branch: "申" },
  { month: 9, day: 8, branch: "酉" },
  { month: 10, day: 8, branch: "戌" },
  { month: 11, day: 7, branch: "亥" },
  { month: 12, day: 7, branch: "子" },
];

const monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const palacePositions = {
  巳: [0, 0],
  午: [0, 1],
  未: [0, 2],
  申: [0, 3],
  辰: [1, 0],
  酉: [1, 3],
  卯: [2, 0],
  戌: [2, 3],
  寅: [3, 0],
  丑: [3, 1],
  子: [3, 2],
  亥: [3, 3],
};
const majorStarInsights = {
  紫微: "紫微坐命，重格局、秩序与掌控力，适合在复杂局面里担责定调。",
  天机: "天机坐命，思维灵活，善谋划与迭代，人生常因选择和变化打开空间。",
  太阳: "太阳坐命，重表达、名望与承担，越被看见越容易激活能量。",
  武曲: "武曲坐命，重效率、资源与执行，适合用硬结果建立安全感。",
  天同: "天同坐命，性情温和，有福气与人缘，但要避免过度求安逸。",
  廉贞: "廉贞坐命，感受力强，也有锋芒，适合在规则、人际和审美里找到位置。",
  天府: "天府坐命，稳重能守，擅长管理资源，越长期主义越显优势。",
  太阴: "太阴坐命，细腻内敛，重安全感与积累，适合深耕专业、资产和审美。",
  贪狼: "贪狼坐命，才艺、欲望与社交力强，关键是把兴趣转成长期能力。",
  巨门: "巨门坐命，口才与洞察强，适合研究、表达和辨析，但需慎防口舌是非。",
  天相: "天相坐命，重公平与协作，擅长辅佐、协调与制度化推进。",
  天梁: "天梁坐命，带荫护与原则感，适合服务、专业判断和化解问题。",
  七杀: "七杀坐命，开创和决断力强，越在变化与压力中越能显示魄力。",
  破军: "破军坐命，破旧立新，适合转型、创新和攻坚，但要管理消耗。",
};
const palaceFocus = {
  命宫: "人格底色",
  命: "人格底色",
  兄弟宫: "同辈助力",
  兄弟: "同辈助力",
  夫妻宫: "亲密关系",
  夫妻: "亲密关系",
  子女宫: "传承创造",
  子女: "传承创造",
  财帛宫: "现金资源",
  财帛: "现金资源",
  疾厄宫: "身心状态",
  疾厄: "身心状态",
  迁移宫: "外部机会",
  迁移: "外部机会",
  交友宫: "圈层合作",
  交友: "圈层合作",
  官禄宫: "事业路径",
  官禄: "事业路径",
  田宅宫: "资产根基",
  田宅: "资产根基",
  福德宫: "精神能量",
  福德: "精神能量",
  父母宫: "长辈背景",
  父母: "长辈背景",
};
const sihuaTone = {
  禄: "资源变多，事情更容易顺手，适合把握机会但别贪多。",
  权: "主导权变强，责任也会变重，适合争取话语权。",
  科: "名声、贵人与专业认可被点亮，适合展示成果。",
  忌: "执着和消耗会变明显，越在意越要先稳住节奏。",
};
const topicDefinitions = [
  { key: "overview", label: "命格", palace: "命宫", title: "命盘底色", angle: "先看命宫主星，再看身宫和三方四正，判断这个人底层靠什么运行。" },
  { key: "personality", label: "性格", palace: "命宫", title: "性格模式", angle: "性格不是标签，而是你遇事时最自然的反应路径。" },
  { key: "career", label: "事业", palace: "官禄宫", title: "事业路线", angle: "官禄宫看职业路径、权责位置，以及你适合靠什么建立社会价值。" },
  { key: "wealth", label: "财运", palace: "财帛宫", title: "财富模式", angle: "财帛宫看钱从哪里来、怎么流动，以及守财还是开源更重要。" },
  { key: "love", label: "感情", palace: "夫妻宫", title: "亲密关系", angle: "夫妻宫看关系里的需求、磨合点和适合的相处方式。" },
  { key: "parents", label: "长辈", palace: "父母宫", title: "长辈缘分", angle: "父母宫看原生支持、长辈资源，也看文书契约和上级关系。" },
  { key: "friends", label: "人际", palace: "交友宫", title: "圈层合作", angle: "交友宫看朋友、团队、客户与合作对象的质量。" },
  { key: "move", label: "迁移", palace: "迁移宫", title: "外部机会", angle: "迁移宫看离开熟悉环境后的机会，适合在原地深耕还是向外发展。" },
  { key: "children", label: "子女", palace: "子女宫", title: "创造传承", angle: "子女宫既看子女缘，也看作品、下属、学生与长期创造。" },
  { key: "spirit", label: "福德", palace: "福德宫", title: "精神能量", angle: "福德宫看内心是否松弛、精神续航，以及快乐来自哪里。" },
];
const topicAdvice = {
  overview: "先承认自己的主星底色，不急着变成别人。优势要放大，短板用制度和环境来补。",
  personality: "遇到反复卡住的事，先看是主星优势用过头，还是身宫课题还没接住。",
  career: "事业不要只看热闹机会，要看官禄宫能不能承载长期权责。",
  wealth: "财运的重点不是一笔进账，而是现金流、风险边界和复利节奏。",
  love: "感情里最忌把命盘当定罪书，它更适合用来理解彼此需求。",
  parents: "长辈和上级相关议题，适合多留书面确认，少靠情绪判断。",
  move: "向外发展前先准备作品、履历、资源清单，机会来时才接得住。",
  friends: "圈层不是越大越好，关键是互信、边界和可持续合作。",
  children: "创造类事务要给时间发酵，别用短期反馈否定长期作品。",
  spirit: "精神能量不足时，不宜硬冲大事，先恢复秩序和节律。",
};

const topicDeepDives = {
  overview: {
    reality: "命格看的是一个人最底层的运行方式：遇到机会时先冲、先想、先守，还是先看关系与资源。命宫主星定气质，身宫看后天发力点，三方四正看资源从哪里来。若命宫星曜强，人生更适合主动定方向；若命宫空或煞曜多，则越要借环境、平台和制度来成事。",
    risk: "命格最怕只看一个标签。主星好，不等于一路顺；见忌，也不等于命不好。真正要看的是优势有没有被用过头，以及当前大限是否把某个宫位的课题推到台前。",
    action: "先把自己的主星优势写成能力清单，再把容易失衡的地方写成规则清单。能靠能力解决的事主动推进，容易情绪化或反复消耗的事交给流程、预算和边界。",
  },
  personality: {
    reality: "性格不是一句“外向/内向”能讲完。命宫主星决定第一反应，身宫决定现实中越来越像什么，福德宫决定独处时能不能恢复能量。若主星偏刚，处理事情多半重效率和结果；若主星偏柔，感受、人情和安全感会更影响选择。",
    risk: "性格优势一旦过量，就会变成阻力。果断过量会变成急躁，谨慎过量会变成拖延，体贴过量会变成边界不清，聪明过量会变成想太多。",
    action: "遇到重大选择时，不只问“我想不想”，还要问“这是我的优势在发挥，还是我的惯性在重复”。能把惯性看清，性格就不是限制，而是可调度的工具。",
  },
  career: {
    reality: "事业重点看官禄宫，同时要连财帛宫和迁移宫一起看。官禄宫代表职业位置与权责，财帛宫代表变现方式，迁移宫代表外部市场与机会。若官禄强，适合争取头衔、管理、专业权威；若迁移强，外地、跨平台、对外合作更容易打开局面。",
    risk: "事业宫见强星但财帛弱，容易有职位、有责任，却未必马上有钱；财帛强但官禄不稳，则容易项目多、节奏乱、长期履历不够聚焦。",
    action: "今年事业建议把“可被证明的成果”放在第一位：项目数据、作品、客户反馈、流程优化、团队贡献。少用情绪证明价值，多用结果争取位置。",
  },
  wealth: {
    reality: "财运不是单看收入高低，而是钱从哪里来、流到哪里去、能不能留下。财帛宫看现金流，田宅宫看长期资产，福德宫看消费欲望和安全感。财星旺的人适合主动经营资源，但也更容易被机会诱惑。",
    risk: "财帛见忌或煞，常见的问题不是没机会，而是合伙边界、冲动投入、回款慢、人情支出和账目不清。越是机会多，越要先看风险出口。",
    action: "把年度财务拆成三层：稳定现金流、可试错投入、长期资产。任何投资或副业，在投入前先写清亏损上限、退出条件和回款周期。",
  },
  love: {
    reality: "感情看夫妻宫，也要回看命宫的表达方式。夫妻宫不是简单看“有没有桃花”，而是看你在亲密关系里要安全感、尊重、陪伴、自由，还是共同成长。主星偏强，关系里容易有主导权议题；主星偏敏感，则更在意回应与细节。",
    risk: "感情最容易把命盘误用成定罪书。宫位显示的是相处倾向，不是给谁贴错对标签。真正的风险多来自长期不沟通、期待没说清、边界不明和情绪累积。",
    action: "关系里少猜，多确认。重要议题如金钱、家庭、时间分配、未来规划，要在情绪稳定时谈。若反复卡在同一类矛盾，先处理沟通机制，而不是急着判断缘分好坏。",
  },
  parents: {
    reality: "长辈宫看父母、上级、师长、制度，也看文书合约。这个宫位强，往往容易得到资源、背书或规范训练；这个宫位压力大，则容易在期待、控制、责任和边界之间拉扯。",
    risk: "父母宫的问题常不只发生在家庭，也会投射到职场上级、客户审核、合同流程里。若这里被四化引动，凡是证件、合同、审批、承诺，都不宜靠口头带过。",
    action: "面对长辈或上级，建议把尊重和边界分开处理。情面可以给，关键事项要写清。能提前确认规则，就不要等冲突发生后再补救。",
  },
  friends: {
    reality: "人际宫看朋友、同事、客户、合作伙伴和团队下属。它决定你适合深交少数人，还是通过大圈层获取机会。若交友宫吉，贵人常来自协作；若交友宫复杂，则人脉多但筛选成本高。",
    risk: "人际最怕把热络当信任，把资源当关系。交友宫受冲时，容易出现合伙分歧、承诺落空、朋友借力不还、团队边界不清。",
    action: "今年人际要重质量而非数量。合作前先小单测试，重要资源交换要留记录。真正好的关系，是能把边界说清之后依然舒服。",
  },
  move: {
    reality: "迁移宫看外部世界：外地、出差、移居、换平台、互联网曝光、跨圈层机会。迁移强的人，离开熟悉环境后反而更容易被看见；迁移弱的人，则适合先把基本盘打稳，再谨慎扩张。",
    risk: "迁移宫被忌或煞引动时，容易有交通奔波、计划变化、异地沟通误差、外部承诺落空。机会看似来自远方，但细节如果没核实，也容易变成消耗。",
    action: "向外发展前，准备三样东西：可展示成果、可验证履历、可承接资源的时间表。不要为了“换环境”而换环境，要为了更高质量的机会移动。",
  },
  children: {
    reality: "子女宫不只看亲子，也看作品、学生、下属、项目成果和创造力。它代表你能不能把想法生出来、养起来、交付出去。这个宫位强，适合长期创作、带人、培养项目；这个宫位弱，则需要更稳定的节奏和反馈机制。",
    risk: "子女宫受冲时，常见表现是对成果太急、对下属或孩子期待过满、项目刚开始就想看到回报。越急，越容易破坏成长节奏。",
    action: "把创造类事务当成长期养成。设阶段目标，不用一次定终局。亲子关系也一样，先建立稳定回应，再谈要求和成绩。",
  },
  spirit: {
    reality: "福德宫看精神续航、快乐来源、独处质量和内在安全感。一个人外在再忙，如果福德宫能量不足，就容易出现疲惫、空心、睡不安稳、对未来没兴致。福德好，则能在压力中恢复秩序。",
    risk: "福德宫最怕长期透支。明明身体还在撑，但心里已经不想动；明明机会很多，却没有力气选择。精神能量低时做重大决定，容易选错方向。",
    action: "今年要把恢复力当成正事。固定睡眠、运动、独处、整理空间、减少无效社交，都是在补福德。心定下来，事业和财运才接得住。",
  },
};

function mod(value, length) {
  return ((value % length) + length) % length;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function formatDateValue(date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

function normalizeCityName(value) {
  return value
    .trim()
    .replace(/市|省|自治区|特别行政区|维吾尔|壮族|回族/g, "")
    .replace(/\s+/g, "");
}

function resolveCity(input) {
  const keyword = normalizeCityName(input);
  if (!keyword) return null;
  return (
    cityCatalog.find((item) => normalizeCityName(item.city) === keyword) ||
    cityCatalog.find((item) => normalizeCityName(item.city).includes(keyword) || keyword.includes(normalizeCityName(item.city))) ||
    null
  );
}

function dayOfYear(date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0);
  return Math.floor((date.getTime() - start) / 86400000);
}

function equationOfTimeMinutes(date) {
  const b = (2 * Math.PI * (dayOfYear(date) - 81)) / 364;
  return 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);
}

function getTrueSolarBirth(birthDate, birthHour, cityInfo) {
  const date = parseDate(birthDate);
  const localMinutes = Number(birthHour) * 60 + 30;
  const longitudeCorrection = cityInfo ? (cityInfo.longitude - 120) * 4 : 0;
  const eot = equationOfTimeMinutes(date);
  const totalCorrection = Math.round(longitudeCorrection + eot);
  const solarTime = new Date(date.getTime() + (localMinutes + totalCorrection) * 60000);
  const correctedHour = solarTime.getUTCHours();

  return {
    date: formatDateValue(solarTime),
    hour: String(correctedHour),
    displayTime: `${String(correctedHour).padStart(2, "0")}:${String(solarTime.getUTCMinutes()).padStart(2, "0")}`,
    correctionMinutes: totalCorrection,
    longitudeCorrection: Math.round(longitudeCorrection),
    equationCorrection: Math.round(eot),
  };
}

function cityLabel(cityInfo, fallback) {
  return cityInfo ? `${cityInfo.province} · ${cityInfo.city}` : fallback;
}

function getGanZhi(stemIndex, branchIndex) {
  return {
    stem: stems[mod(stemIndex, 10)],
    branch: branches[mod(branchIndex, 12)],
  };
}

function pillarText(pillar) {
  return `${pillar.stem}${pillar.branch}`;
}

function getYearPillar(date) {
  const year = date.getUTCFullYear();
  const afterLiChun = date.getUTCMonth() + 1 > 2 || (date.getUTCMonth() + 1 === 2 && date.getUTCDate() >= 4);
  const ganzhiYear = afterLiChun ? year : year - 1;
  return {
    ...getGanZhi(ganzhiYear - 4, ganzhiYear - 4),
    year: ganzhiYear,
  };
}

function getSolarMonthInfo(date) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  let current = solarMonthStarts[11];

  for (const item of solarMonthStarts) {
    if (month > item.month || (month === item.month && day >= item.day)) {
      current = item;
    }
  }

  return current;
}

function getMonthPillar(date, yearPillar) {
  const monthInfo = getSolarMonthInfo(date);
  const branchIndex = branches.indexOf(monthInfo.branch);
  const offsetFromYin = mod(branchIndex - branches.indexOf("寅"), 12);
  const yinStemIndex = (mod(stems.indexOf(yearPillar.stem), 5) * 2 + 2) % 10;

  return getGanZhi(yinStemIndex + offsetFromYin, branchIndex);
}

function getDayPillar(date) {
  const anchor = Date.UTC(2000, 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const diffDays = Math.round((current - anchor) / 86400000);
  const anchorIndex = 16; // 2000-01-01 is commonly used as 庚辰日.
  const cycleIndex = mod(anchorIndex + diffDays, 60);

  return getGanZhi(cycleIndex, cycleIndex);
}

function getHourPillar(hour, dayPillar) {
  if (hour === "") {
    return null;
  }

  const numericHour = Number(hour);
  const branchIndex = numericHour === 23 ? 0 : Math.floor((numericHour + 1) / 2) % 12;
  const dayStemIndex = stems.indexOf(dayPillar.stem);
  const stemIndex = (mod(dayStemIndex, 5) * 2 + branchIndex) % 10;

  return getGanZhi(stemIndex, branchIndex);
}

function hourToTimeIndex(hour) {
  return Math.floor(((Number(hour) + 1) % 24) / 2);
}

function starName(star) {
  return String(star?.name || "").replace("星", "");
}

function formatStar(star) {
  const name = starName(star);
  const brightness = star?.brightness ? `<small>${star.brightness}</small>` : "";
  const mutagen = star?.mutagen ? `<em>${star.mutagen}</em>` : "";
  return `<span class="star-tag">${name}${brightness}${mutagen}</span>`;
}

function getZiweiChart(birthDate, birthHour, birthGender) {
  const [year, month, day] = birthDate.split("-").map(Number);
  const dateText = `${year}-${month}-${day}`;
  return astro.bySolar(dateText, hourToTimeIndex(birthHour), birthGender, true);
}

function getPalace(chart, name) {
  const shortName = name.replace(/宫$/, "");
  return chart.palaces.find((palace) => {
    const palaceName = String(palace.name);
    return palaceName === name || palaceName === shortName || `${palaceName}宫` === name;
  });
}

function palaceDisplayName(palace, fallback) {
  const name = String(palace?.name || fallback || "");
  return name.endsWith("宫") ? name : `${name}宫`;
}

function mainStarsText(palace) {
  const names = (palace?.majorStars || []).map(starName).filter(Boolean);
  return names.length ? names.join("、") : "无主星，借对宫气势成局";
}

function palaceStars(palace) {
  return {
    major: (palace?.majorStars || []).map(starName).filter(Boolean),
    minor: (palace?.minorStars || []).map(starName).filter(Boolean),
    mutagens: [...(palace?.majorStars || []), ...(palace?.minorStars || [])]
      .filter((star) => star.mutagen)
      .map((star) => ({ star: starName(star), sihua: star.mutagen })),
  };
}

function oppositePalace(chart, palace) {
  if (!palace) return null;
  const index = chart.palaces.findIndex((item) => item === palace);
  if (index < 0) return null;
  return chart.palaces[(index + 6) % 12];
}

function palaceSentence(palace, fallback) {
  const displayName = palaceDisplayName(palace, fallback);
  const mainStars = (palace?.majorStars || []).map(starName).filter(Boolean);
  if (!mainStars.length) {
    return `${displayName}无主星，判断时需借对宫与三方四正，适合把外部反馈纳入决策。`;
  }

  const first = mainStars[0];
  const insight = majorStarInsights[first] || `${first}坐守${displayName}，这部分人生主题会被明显放大。`;
  const mutagens = [...(palace.majorStars || []), ...(palace.minorStars || [])]
    .filter((star) => star.mutagen)
    .map((star) => `${starName(star)}化${star.mutagen}`)
    .join("、");
  return `${displayName}主星为${mainStars.join("、")}。${insight}${mutagens ? ` 本宫见${mutagens}，说明这一主题在今年尤其容易被事件触发。` : ""}`;
}

function buildZiweiSummaries(chart) {
  const life = getPalace(chart, "命宫");
  const body = chart.palaces.find((palace) => palace.isBodyPalace);
  const career = getPalace(chart, "官禄宫");
  const wealth = getPalace(chart, "财帛宫");
  const bodyName = palaceDisplayName(body, "未知宫位");
  const lifeSummary = `${palaceSentence(life, "命宫")}身宫落在${bodyName}，代表后天发力点更偏向${palaceFocus[body?.name] || "现实行动"}。命主${chart.soul}、身主${chart.body}，五行局为${chart.fiveElementsClass}，先天盘更适合从“主星结构 + 四化引动”来看长期命题。`;
  const careerWealthSummary = `${palaceSentence(career, "官禄宫")} ${palaceSentence(wealth, "财帛宫")}事业看官禄，财运看财帛；若两宫同时见禄、权、科，宜主动争取资源，若见忌，则先处理合同、现金流与边界。`;
  return { lifeSummary, careerWealthSummary };
}

function currentDecadal(chart, birthDate) {
  const birthYear = Number(birthDate.slice(0, 4));
  const age = new Date().getFullYear() - birthYear + 1;
  const palace = chart.palaces.find((item) => {
    const range = item.decadal?.range;
    return range && age >= range[0] && age <= range[1];
  });
  return { age, palace };
}

function palaceIndex(chart, palace) {
  return chart.palaces.findIndex((item) => item === palace);
}

function relatedPalaces(chart, palace) {
  const index = palaceIndex(chart, palace);
  if (index < 0) return [];
  return [0, 4, 8, 6]
    .map((offset) => chart.palaces[(index + offset) % 12])
    .filter(Boolean);
}

function relatedPalaceText(chart, palace) {
  const related = relatedPalaces(chart, palace);
  return related
    .map((item, index) => {
      const label = index === 0 ? "本宫" : index === 3 ? "对宫" : "三合";
      return `${label}${palaceDisplayName(item, "")}见${mainStarsText(item)}`;
    })
    .join("；");
}

function buildTopicReading(chart, topic, birthDate) {
  const palace = getPalace(chart, topic.palace);
  const displayName = palaceDisplayName(palace, topic.palace);
  const stars = palaceStars(palace);
  const borrowed = stars.major.length ? null : oppositePalace(chart, palace);
  const borrowedStars = palaceStars(borrowed).major;
  const mainText = stars.major.length ? stars.major.join("、") : `空宫，借对宫${borrowed ? palaceDisplayName(borrowed, "") : ""}${borrowedStars.join("、") || "气势"}`;
  const firstStar = stars.major[0] || borrowedStars[0];
  const starInsight = firstStar
    ? majorStarInsights[firstStar] || `${firstStar}在此主题里会放大个人取向。`
    : "这个主题更受环境、选择和阶段运势牵动，弹性较大。";
  const mutagenText = stars.mutagens.length
    ? stars.mutagens.map((item) => `${item.star}化${item.sihua}：${sihuaTone[item.sihua] || "主题被引动。"}`).join(" ")
    : "本宫未见明显四化，判断时更重主星组合、三方四正与大限流年。";
  const { age, palace: decadalPalace } = currentDecadal(chart, birthDate);
  const decadalText = decadalPalace
    ? `当前虚岁约${age}，大限落在${palaceDisplayName(decadalPalace, "")}，这十年的课题偏向${palaceFocus[decadalPalace.name] || "阶段转换"}。`
    : "";
  const deepDive = topicDeepDives[topic.key];
  const relatedText = palace ? relatedPalaceText(chart, palace) : "";

  return {
    ...topic,
    palaceName: displayName,
    badge: mainText,
    thesis: `${displayName}主星为${mainText}。${topic.angle}`,
    body: `${starInsight} ${mutagenText} ${decadalText}`,
    advice: topicAdvice[topic.key],
    sections: [
      { title: "命盘依据", body: `${relatedText || `${displayName}需要结合三方四正判断`}。${stars.mutagens.length ? `本主题四化线索为：${stars.mutagens.map((item) => `${item.star}化${item.sihua}`).join("、")}。` : "本主题未见本宫四化，重点落在主星气质与三方四正联动。"}` },
      { title: "现实表现", body: deepDive?.reality || topic.angle },
      { title: "风险提醒", body: deepDive?.risk || "此主题要避免只看单一宫位，需结合现实选择与阶段环境。" },
      { title: "行动建议", body: deepDive?.action || topicAdvice[topic.key] },
    ],
  };
}

function renderTopicReadings(chart, birthDate) {
  const readings = topicDefinitions.map((topic) => buildTopicReading(chart, topic, birthDate));
  const tabs = document.querySelector("#topicTabs");
  const grid = document.querySelector("#topicGrid");
  const renderActive = (activeKey) => {
    const item = readings.find((reading) => reading.key === activeKey) || readings[0];
    grid.innerHTML = `
      <article class="topic-card is-active-detail" data-topic-card="${item.key}">
        <div class="topic-card-head">
          <span>${item.label}</span>
          <b>${item.palaceName}</b>
        </div>
        <h4>${item.title}</h4>
        <strong>${item.badge}</strong>
        <p>${item.thesis}</p>
        <p>${item.body}</p>
        <div class="topic-detail-list">
          ${item.sections
            .map(
              (section) => `
                <section>
                  <h5>${section.title}</h5>
                  <p>${section.body}</p>
                </section>
              `
            )
            .join("")}
        </div>
        <div class="topic-advice">${item.advice}</div>
      </article>
    `;
  };

  tabs.innerHTML = readings
    .map(
      (item, index) => `
        <button class="${index === 0 ? "is-active" : ""}" type="button" data-topic="${item.key}" role="tab">
          ${item.label}
        </button>
      `
    )
    .join("");

  renderActive(readings[0].key);

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      tabs.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderActive(button.dataset.topic);
    });
  });
}

function renderCalibrationQuestions(chart) {
  const life = getPalace(chart, "命宫");
  const career = getPalace(chart, "官禄宫");
  const wealth = getPalace(chart, "财帛宫");
  const questions = [
    `你的工作更接近${mainStarsText(career)}对应的“专业判断/服务协调”，还是更偏销售、管理、技术或内容表达？`,
    `过去 1-2 年最明显的压力，是钱、工作位置、关系，还是身体精力？`,
    `你和长辈或上级的关系，是支持多，还是要求和边界感更强？`,
    `你更像${mainStarsText(life)}坐命的外显路线，还是身宫课题在现实里更明显？`,
    `财务上你目前更困扰开源，还是守财、预算、合伙边界？`,
  ];

  if (!mainStarsText(wealth).includes("无主星")) {
    questions[4] = `财帛宫见${mainStarsText(wealth)}，你的收入更像稳定积累，还是靠项目、人脉、专业爆发？`;
  }

  document.querySelector("#calibrationQuestions").innerHTML = questions
    .map((question, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${question}</p></article>`)
    .join("");
}

function renderZiwei(chart, birthDate, birthGender) {
  const chartGrid = document.querySelector("#ziweiChart");
  const grid = Array.from({ length: 4 }, () => Array(4).fill(null));

  chart.palaces.forEach((palace) => {
    const position = palacePositions[palace.earthlyBranch];
    if (position) {
      grid[position[0]][position[1]] = palace;
    }
  });

  document.querySelector("#ziweiTitle").textContent = `${mainStarsText(getPalace(chart, "命宫"))}坐命`;
  document.querySelector("#ziweiMeta").textContent = `${birthDate} · ${birthGender}命 · ${chart.lunarDate} · ${chart.chineseDate}`;

  chartGrid.innerHTML = grid
    .map((row, rowIndex) =>
      row
        .map((palace, columnIndex) => {
          if (!palace && rowIndex > 0 && rowIndex < 3 && columnIndex > 0 && columnIndex < 3) {
            if (rowIndex === 1 && columnIndex === 1) {
              return `
                <div class="ziwei-center" style="grid-row: 2 / span 2; grid-column: 2 / span 2;">
                  <span>紫微斗数</span>
                  <strong>${chart.fiveElementsClass}</strong>
                  <p>命主 ${chart.soul} · 身主 ${chart.body}</p>
                  <p>${chart.time} ${chart.timeRange}</p>
                </div>
              `;
            }
            return "";
          }
          if (!palace) return "<div></div>";

          const majorStars = palace.majorStars?.length
            ? palace.majorStars.map(formatStar).join("")
            : `<span class="empty-star">借对宫</span>`;
          const minorStars = (palace.minorStars || []).slice(0, 4).map(formatStar).join("");
          const adjectiveStars = (palace.adjectiveStars || [])
            .slice(0, 3)
            .map((star) => `<span>${starName(star)}</span>`)
            .join("");
          const decadal = palace.decadal?.range ? `${palace.decadal.range[0]}-${palace.decadal.range[1]}` : "";
          const tags = [
            palace.name === "命宫" ? "命" : "",
            palace.isBodyPalace ? "身" : "",
          ].filter(Boolean);

          return `
            <article class="ziwei-palace ${palace.name === "命宫" ? "is-life" : ""} ${palace.isBodyPalace ? "is-body" : ""}">
              <div class="palace-head">
                <span>${palace.heavenlyStem}${palace.earthlyBranch}</span>
                <b>${palace.name}</b>
              </div>
              <div class="palace-stars major-stars">${majorStars}</div>
              <div class="palace-stars minor-stars">${minorStars}</div>
              <div class="adjective-stars">${adjectiveStars}</div>
              <div class="palace-foot">
                <span>${decadal ? `${decadal}岁` : ""}</span>
                <em>${tags.join(" / ")}</em>
              </div>
            </article>
          `;
        })
        .join("")
    )
    .join("");

  const summaries = buildZiweiSummaries(chart);
  document.querySelector("#lifePalaceSummary").textContent = summaries.lifeSummary;
  document.querySelector("#careerWealthSummary").textContent = summaries.careerWealthSummary;
  renderTopicReadings(chart, birthDate);
  renderCalibrationQuestions(chart);
}

function collectElements(pillars) {
  const counts = Object.fromEntries(elementOrder.map((element) => [element, 0]));

  pillars.filter(Boolean).forEach((pillar) => {
    counts[stemElements[pillar.stem]] += 1;
    counts[branchElements[pillar.branch]] += 1;
  });

  return counts;
}

function strongestAndWeakest(counts) {
  const sorted = [...elementOrder].sort((a, b) => counts[b] - counts[a]);
  const weakest = [...elementOrder].sort((a, b) => counts[a] - counts[b]);

  return {
    strongest: sorted[0],
    second: sorted[1],
    weakest: weakest[0],
  };
}

function relationScore(dayElement, monthElement, monthBranch) {
  const dayIndex = elementOrder.indexOf(dayElement);
  const monthIndex = elementOrder.indexOf(monthElement);
  const generatesMe = mod(dayIndex - monthIndex, 5) === 1;
  const iGenerate = mod(monthIndex - dayIndex, 5) === 1;
  const controlsMe = mod(monthIndex - dayIndex, 5) === 2;
  const iControl = mod(dayIndex - monthIndex, 5) === 2;
  const same = dayIndex === monthIndex;
  let score = 64;

  if (same) score += 9;
  if (generatesMe) score += 12;
  if (iControl) score += 8;
  if (iGenerate) score += 2;
  if (controlsMe) score -= 10;
  if (monthBranch === "午" || monthBranch === "巳") score += 5;
  if (monthBranch === "子") score -= 4;

  return Math.max(42, Math.min(92, score));
}

function scoreLabel(score) {
  if (score >= 82) return "上扬";
  if (score >= 72) return "稳进";
  if (score >= 62) return "调整";
  return "蓄力";
}

function monthAdvice(score, monthElement, dayElement) {
  if (score >= 82) {
    return `主动把握机会，把${elementPlain[monthElement]}转成可以落地的成果。`;
  }

  if (score >= 72) {
    return `稳步推进已有计划，适合把节奏放稳，不急着一次做满。`;
  }

  if (score >= 62) {
    return `先稳住主线，再处理人情、预算与沟通细节。`;
  }

  return `宜守不宜攻，少做冲动决定，多做复盘和风险排查。`;
}

function monthDetail(score, monthElement, dayElement, index) {
  const monthName = monthNamesCn[index];
  const sameElement = monthElement === dayElement;
  const relation = sameElement
    ? "本月主气与日主同类，容易增强主观能量，做事更有底气，但也要避免过度坚持己见。"
    : `本月主气为${monthElement}，对命主而言会把${elementPlain[monthElement]}这一类事情推到眼前。`;

  if (score >= 82) {
    return `${monthName}气势较顺，${relation}适合主动谈合作、推进关键项目、展示成果，若有面试、汇报、签约、上线、发布等安排，可把准备工作做足后大胆向前。需要注意的是，顺势之月也容易把承诺说满，重要事项最好留出缓冲，不要为了求快而牺牲质量。`;
  }

  if (score >= 72) {
    return `${monthName}整体偏稳，${relation}这个月不一定有特别猛烈的突破，但适合把前期未完成的事一件件收口。工作上宜重视流程、材料、沟通节奏；财务上宜看清回款、预算与支出结构。凡事按步骤推进，比临时改变方向更容易见到结果。`;
  }

  if (score >= 62) {
    return `${monthName}有调整之象，${relation}容易遇到临时变化、沟通误差或计划反复。这个月不怕慢，怕的是情绪上头后立刻做决定。建议把重要沟通写清楚，把金钱往来留凭据，把工作优先级重新排一次，先稳住最重要的事情。`;
  }

  return `${monthName}属于蓄力之月，${relation}外部机会看似不少，但真正适合立刻下重注的事情不多。宜整理资料、复盘关系、修正计划、保守处理投资和借贷。若感到压力大，不要急着证明自己，先把睡眠、节奏和现金流稳住，后面的月份才更容易接住机会。`;
}

function get2026Months(dayElement) {
  return monthNames.map((name, index) => {
    const date = new Date(Date.UTC(2026, index, 15));
    const yearPillar = getYearPillar(date);
    const pillar = getMonthPillar(date, yearPillar);
    const monthElement = branchElements[pillar.branch];
    const score = relationScore(dayElement, monthElement, pillar.branch);

    return {
      name,
      pillar,
      element: monthElement,
      score,
      label: scoreLabel(score),
      advice: monthAdvice(score, monthElement, dayElement),
      detail: monthDetail(score, monthElement, dayElement, index),
    };
  });
}

function buildAnnualScore(months, counts) {
  const average = Math.round(months.reduce((sum, item) => sum + item.score, 0) / months.length);
  const balance = Object.values(counts).filter((value) => value > 0).length;
  const annualScore = Math.max(58, Math.min(96, average + balance + 8));
  const percentile = Math.max(61, Math.min(97, Math.round(annualScore * 0.92 + balance)));

  return { annualScore, percentile };
}

function buildSummaries(months, counts, dayElement, pillars, birthDate, birthCity, birthHour, trueSolar) {
  const bestMonths = months
    .filter((item) => item.score >= 78)
    .map((item) => item.name)
    .slice(0, 4)
    .join("、");
  const lowMonths = months
    .filter((item) => item.score <= 62)
    .map((item) => item.name)
    .slice(0, 3)
    .join("、");
  const { strongest, second, weakest } = strongestAndWeakest(counts);
  const baziText = pillars.map((pillar) => (pillar ? pillarText(pillar) : "时辰未定")).join("、");
  const dayPillar = pillars[2];
  const hourText = birthHour ? `${birthHour}点` : "时辰未详";
  const correctionText = trueSolar
    ? `真太阳时校正为 ${trueSolar.date} ${trueSolar.displayTime}，相对钟表时间${trueSolar.correctionMinutes >= 0 ? "增加" : "减少"}${Math.abs(trueSolar.correctionMinutes)}分钟（经度${trueSolar.longitudeCorrection >= 0 ? "+" : ""}${trueSolar.longitudeCorrection}分钟，均时差${trueSolar.equationCorrection >= 0 ? "+" : ""}${trueSolar.equationCorrection}分钟）`
    : "未做真太阳时校正";
  const monthElements = [...new Set(months.filter((item) => item.score >= 72).map((item) => item.element))].join("、");
  const cautionMonths = lowMonths || "年末";
  const opportunityMonths = bestMonths || "5月、6月";

  const annualNarrative = `命主生于公历 ${birthDate}，${birthCity}起局，原始记录为${hourText}，${correctionText}。四柱按校正后的太阳时排得 ${baziText}。其中${pillarText(dayPillar)}为日柱，${dayPillar.stem}${stemElements[dayPillar.stem]}日元代表命主自身。此局五行以${strongest}气较显，${second}气相随，${weakest}气偏弱，呈现“有主气、有牵引、亦有待补之处”的命局结构。${elementNature[dayElement]}。2026 为丙午流年，丙午可以理解为这一年的外部大环境偏向“火”的能量，火主名声、行动、表达、曝光与速度，所以这一年更容易出现被看见、被催促、被要求拿结果的情形。整体来看，${monthElements || "火土"}之月较能借势，${cautionMonths}则需谨慎言语、合同、人情往来与支出节奏。`;

  const annualDetail = `从全年走势看，2026 年不是单纯求稳的一年，而是“先动后定、先压后开”的一年。流年里“火”的主题偏旺，火可以理解为行动力、表达欲、曝光度和外界压力，容易把命主原本藏在心里的想法、野心、焦虑和执行力一起推出来，所以年初到年中会更明显感到事情变多、责任变重、外界期待变高。若今年有岗位调整、项目变化、合作重组、学习转型或副业尝试，往往不是偶然，而是流年把命局中的变化点引动了。此年最重要的不是盲目冲刺，而是分清哪些机会值得上前，哪些只是短期热闹。${opportunityMonths}可主动争取资源、表达诉求、推动成果落地；${cautionMonths}则要防止情绪化决定、口舌误会、财务松动和关系消耗。全年宜把“节奏、边界、复盘”放在第一位，做事有计划，钱财有账目，人情有分寸，越到后面越能看见这一年的转折价值。`;

  const careerSummary = `事业方面，2026 年对命主来说是“动中求进”的一年。丙午流年火势明显，火在命理中多主显露、名望、表达、推动，也代表事情会被摆到明处处理。若命主今年在工作中感到任务增多、节奏变快，或对原有岗位产生调整、升级、换方向的念头，这并非单纯的不稳定，而是流年之气在推动命局变化。命盘中${strongest}气较重，做事容易从${elementTone[strongest]}入手，优点是有自己的章法，不会完全随波逐流；但${weakest}偏弱，也提示今年在${elementTone[weakest]}上要有意识补课。${opportunityMonths}较适合主动争取项目、面谈机会、岗位职责或对外展示，这几个月适合把能力摊开给别人看，不要只埋头做事。若有晋升、转岗、谈薪、跳槽、创业或副业计划，宜先准备作品、履历、数据和可证明的成果，再去谈条件。${cautionMonths}则容易有口舌是非、临时变动或反复确认的情况，工作中要少说情绪话，多留书面依据。与领导或核心客户相处时，宜先给确定性，再谈诉求；与同事合作时，宜把边界、分工、时间点写清楚。整体而言，今年事业不是躺平之年，而是先有压力、后见转机，越能稳住心性、处理好上级与同事关系，越容易把压力转成位置与话语权。`;

  const wealthSummary = `财运方面，2026 年的重点不在“突然暴富”，而在财气被引动之后，能不能守得住、分得清、用得稳。丙午之火带来行动力与外部机会，收入机会多与项目推进、能力变现、资源整合、曝光提升有关，尤其适合凭专业能力、作品成果、管理协调或副业技能获得增量。若命主本身从事销售、运营、内容、咨询、管理、技术交付、项目制工作，今年更容易因为“被看见”而带来收入变化。但火旺也主急，容易出现求财心切、消费变多、投入提前、朋友人情往来增加的情况，所以今年最忌没有边界地借钱、合伙、冲动投资。若有投资、换工作、创业、副业加码等打算，宜先看现金流，再看合同条款，最后再看收益想象。上半年更适合铺垫资源、试水新渠道和建立信用；下半年要重视回款、分账、税务、预算和长期配置。财来有路，但不宜贪快；能把账目理清，把风险说透，今年的财运就能由浮财转为可积累之财。`;

  return { annualNarrative, annualDetail, careerSummary, wealthSummary };
}

function renderBazi(pillars) {
  const labels = ["年柱", "月柱", "日柱", "时柱"];
  const grid = document.querySelector("#baziGrid");

  grid.innerHTML = labels
    .map((label, index) => {
      const pillar = pillars[index];
      const text = pillar ? pillarText(pillar) : "未知";
      const detail = pillar
        ? `${stemElements[pillar.stem]} / ${branchElements[pillar.branch]}`
        : "未填写出生小时";

      return `
        <article class="pillar-card">
          <span>${label}</span>
          <strong>${text}</strong>
          <small>${detail}</small>
        </article>
      `;
    })
    .join("");
}

function renderElements(counts) {
  const max = Math.max(...Object.values(counts), 1);
  const bars = document.querySelector("#elementBars");
  const { strongest, second, weakest } = strongestAndWeakest(counts);

  document.querySelector("#elementSummary").textContent = `命盘五行以${strongest}、${second}较突出，${weakest}相对需要补足。${strongest}代表${elementTone[strongest]}，可作为今年发力的自然入口；${weakest}代表的${elementTone[weakest]}则适合作为年度修炼项。`;

  bars.innerHTML = elementOrder
    .map(
      (element) => `
        <div class="bar-row">
          <span>${element}</span>
          <div class="bar-track">
            <i style="width: ${(counts[element] / max) * 100}%"></i>
          </div>
          <b>${counts[element]}</b>
        </div>
      `
    )
    .join("");
}

function renderMonths(months) {
  const grid = document.querySelector("#monthGrid");

  grid.innerHTML = months
    .map(
      (item) => `
        <article class="month-card">
          <div class="month-top">
            <span>${item.name}</span>
            <b>${item.advice}</b>
          </div>
          <div class="score-line">
            <strong>本月主气：${item.element}</strong>
            <em>${elementPlain[item.element]}</em>
          </div>
          <p>${item.detail}</p>
        </article>
      `
    )
    .join("");
}

function populateControls() {
  const hourSelect = document.querySelector("#birthHour");

  for (let hour = 0; hour <= 23; hour += 1) {
    const option = document.createElement("option");
    option.value = String(hour);
    option.textContent = `${String(hour).padStart(2, "0")}:00 - ${String(hour).padStart(2, "0")}:59`;
    hourSelect.append(option);
  }

  populateDateSelects();
  populateCityOptions();
  document.querySelector("#downloadReport").addEventListener("click", downloadReportImage);
}

function populateCityOptions() {
  const options = document.querySelector("#cityOptions");
  const cityInput = document.querySelector("#birthCity");
  options.innerHTML = cityCatalog
    .map((item) => `<option value="${item.city}">${item.province} · ${item.city}</option>`)
    .join("");
  cityInput.addEventListener("input", updateCityResolve);
  updateCityResolve();
}

function updateCityResolve() {
  const cityInput = document.querySelector("#birthCity");
  const resolveText = document.querySelector("#cityResolve");
  const cityInfo = resolveCity(cityInput.value);
  if (!cityInput.value.trim()) {
    resolveText.textContent = "输入城市后，将识别省份并用于真太阳时校正";
    resolveText.classList.remove("is-warning");
    return;
  }
  if (!cityInfo) {
    resolveText.textContent = "暂未识别该城市，将按东八区标准经线估算；建议输入省会或主要城市";
    resolveText.classList.add("is-warning");
    return;
  }
  resolveText.textContent = `${cityInfo.province} · ${cityInfo.city}，经度 ${cityInfo.longitude.toFixed(2)}E，将用于真太阳时校正`;
  resolveText.classList.remove("is-warning");
}

function populateDateSelects() {
  const yearSelect = document.querySelector("#birthYear");
  const monthSelect = document.querySelector("#birthMonth");
  const daySelect = document.querySelector("#birthDay");
  const currentYear = new Date().getFullYear();

  yearSelect.innerHTML = `<option value="">年份</option>`;
  monthSelect.innerHTML = `<option value="">月份</option>`;
  daySelect.innerHTML = `<option value="">日期</option>`;

  for (let year = currentYear; year >= 1920; year -= 1) {
    yearSelect.append(new Option(`${year} 年`, String(year)));
  }

  for (let month = 1; month <= 12; month += 1) {
    monthSelect.append(new Option(`${month} 月`, String(month).padStart(2, "0")));
  }

  yearSelect.addEventListener("change", updateDayOptions);
  monthSelect.addEventListener("change", updateDayOptions);
  daySelect.addEventListener("change", syncBirthDate);
}

function updateDayOptions() {
  const year = Number(document.querySelector("#birthYear").value);
  const month = Number(document.querySelector("#birthMonth").value);
  const daySelect = document.querySelector("#birthDay");
  const previousDay = daySelect.value;

  daySelect.innerHTML = `<option value="">日期</option>`;

  if (!year || !month) {
    syncBirthDate();
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  for (let day = 1; day <= daysInMonth; day += 1) {
    daySelect.append(new Option(`${day} 日`, String(day).padStart(2, "0")));
  }

  if (previousDay && Number(previousDay) <= daysInMonth) {
    daySelect.value = previousDay;
  }

  syncBirthDate();
}

function syncBirthDate() {
  const year = document.querySelector("#birthYear").value;
  const month = document.querySelector("#birthMonth").value;
  const day = document.querySelector("#birthDay").value;
  const birthDate = document.querySelector("#birthDate");

  birthDate.value = year && month && day ? `${year}-${month}-${day}` : "";
}

function handleSubmit(event) {
  event.preventDefault();
  startReading();
}

function startReading() {
  const birthDate = document.querySelector("#birthDate").value;
  const birthHour = document.querySelector("#birthHour").value;
  const birthCity = document.querySelector("#birthCity").value.trim();
  const birthGender = document.querySelector('input[name="birthGender"]:checked').value;
  const cityInfo = resolveCity(birthCity);

  if (!birthDate || !birthHour || !birthCity) return;

  const formButton = document.querySelector("#birthForm button");
  const loadingPanel = document.querySelector("#loadingPanel");
  const resultPanel = document.querySelector("#result");
  const loadingText = document.querySelector("#loadingText");
  let step = 0;

  formButton.disabled = true;
  formButton.textContent = "起盘中...";
  resultPanel.classList.add("hidden");
  resultPanel.classList.remove("is-ready");
  loadingPanel.classList.remove("hidden");
  loadingPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  loadingText.textContent = loadingMessages[0];

  const timer = window.setInterval(() => {
    step += 1;
    loadingText.textContent = loadingMessages[step % loadingMessages.length];
  }, 520);

  window.setTimeout(() => {
    window.clearInterval(timer);
    renderReading({ birthDate, birthHour, birthCity, birthGender, cityInfo });
    loadingPanel.classList.add("hidden");
    formButton.disabled = false;
    formButton.textContent = "重新起盘";
  }, 2300);
}

function renderReading({ birthDate, birthHour, birthCity, birthGender, cityInfo }) {
  const trueSolar = getTrueSolarBirth(birthDate, birthHour, cityInfo);
  const cityDisplay = cityLabel(cityInfo, birthCity);
  const date = parseDate(trueSolar.date);
  const yearPillar = getYearPillar(date);
  const monthPillar = getMonthPillar(date, yearPillar);
  const dayPillar = getDayPillar(date);
  const hourPillar = getHourPillar(trueSolar.hour, dayPillar);
  const ziweiChart = getZiweiChart(trueSolar.date, trueSolar.hour, birthGender);
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const counts = collectElements(pillars);
  const dayElement = stemElements[dayPillar.stem];
  const months = get2026Months(dayElement);
  const { annualScore, percentile } = buildAnnualScore(months, counts);
  const summaries = buildSummaries(months, counts, dayElement, pillars, birthDate, cityDisplay, birthHour, trueSolar);

  document.querySelector("#profileLine").textContent = `${cityDisplay}出生 · ${birthDate} ${birthHour}点 · 真太阳时 ${trueSolar.date} ${trueSolar.displayTime} · ${birthGender}命`;
  document.querySelector("#resultTitle").textContent = `${mainStarsText(getPalace(ziweiChart, "命宫"))}坐命的 2026 年运势`;
  document.querySelector("#annualScore").textContent = annualScore;
  document.querySelector("#annualPercentile").textContent = `超过中国 ${percentile}% 的人`;
  document.querySelector("#annualNarrative").textContent = summaries.annualNarrative;
  document.querySelector("#annualDetail").textContent = summaries.annualDetail;
  renderBazi(pillars);
  renderZiwei(ziweiChart, trueSolar.date, birthGender);
  renderElements(counts);
  renderMonths(months);
  document.querySelector("#careerSummary").textContent = summaries.careerSummary;
  document.querySelector("#wealthSummary").textContent = summaries.wealthSummary;

  revealResultPanel();
}

function revealResultPanel() {
  const result = document.querySelector("#result");

  result.classList.remove("hidden");
  result.classList.remove("is-ready");

  window.requestAnimationFrame(() => {
    result.classList.add("is-ready");
    result.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

async function downloadReportImage() {
  const button = document.querySelector("#downloadReport");
  const previousText = button.textContent;

  button.textContent = "生成中...";
  button.disabled = true;

  try {
    const canvas = buildReportCanvas();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.95));
    const link = document.createElement("a");
    link.download = `2026-年度运势报告-${Date.now()}.png`;
    link.href = blob ? URL.createObjectURL(blob) : canvas.toDataURL("image/png");
    link.click();
    if (blob) {
      window.setTimeout(() => URL.revokeObjectURL(link.href), 1200);
    }
  } catch (error) {
    button.textContent = "生成失败";
    window.setTimeout(() => {
      button.textContent = previousText;
      button.disabled = false;
    }, 1400);
    return;
  }

  button.textContent = previousText;
  button.disabled = false;
}

function buildReportCanvas() {
  const scale = Math.min(2, window.devicePixelRatio || 1);
  const width = 1080;
  const padding = 64;
  const contentWidth = width - padding * 2;
  const title = document.querySelector("#resultTitle").textContent;
  const profile = document.querySelector("#profileLine").textContent;
  const score = document.querySelector("#annualScore").textContent;
  const percentile = document.querySelector("#annualPercentile").textContent;
  const annualNarrative = document.querySelector("#annualNarrative").textContent;
  const ziweiTitle = document.querySelector("#ziweiTitle").textContent;
  const ziweiMeta = document.querySelector("#ziweiMeta").textContent;
  const lifePalaceSummary = document.querySelector("#lifePalaceSummary").textContent;
  const careerWealthSummary = document.querySelector("#careerWealthSummary").textContent;
  const annualDetail = document.querySelector("#annualDetail").textContent;
  const career = document.querySelector("#careerSummary").textContent;
  const wealth = document.querySelector("#wealthSummary").textContent;
  const bazi = Array.from(document.querySelectorAll(".pillar-card")).map((card) =>
    card.innerText.replace(/\n+/g, " · ")
  );
  const topicReports = Array.from(document.querySelectorAll(".topic-card"))
    .slice(0, 3)
    .map((card) => card.innerText.replace(/\n+/g, " · "));
  const calibration = Array.from(document.querySelectorAll(".calibration-list article"))
    .slice(0, 3)
    .map((card) => card.innerText.replace(/\n+/g, " "));
  const months = Array.from(document.querySelectorAll(".month-card")).map((card) =>
    card.innerText.replace(/\n+/g, " · ")
  );
  const sections = [
    { label: "年度总览", title: percentile, body: annualNarrative },
    { label: "紫微命盘", title: ziweiTitle, body: `${ziweiMeta}。${lifePalaceSummary}` },
    { label: "事业财帛", title: "官禄财帛同参", body: careerWealthSummary },
    { label: "分类详批", title: "命格、性格、事业摘要", body: topicReports.join("。") },
    { label: "校准问答", title: "从初判到贴身", body: calibration.join("。") },
    { label: "流年断语", title: "2026 年整体说明", body: annualDetail },
    { label: "年度事业运势", title: "动中求进，先压后开", body: career },
    { label: "年度财运", title: "财来有路，贵在守稳", body: wealth },
  ];

  const measureCanvas = document.createElement("canvas");
  const measureContext = measureCanvas.getContext("2d");
  let estimatedHeight = 620;
  sections.forEach((section) => {
    estimatedHeight += estimateTextHeight(measureContext, section.body, contentWidth - 64, 30, 48) + 150;
  });
  months.forEach((month) => {
    estimatedHeight += estimateTextHeight(measureContext, month, contentWidth - 64, 25, 40) + 84;
  });
  estimatedHeight += 420;

  const canvas = document.createElement("canvas");
  canvas.width = width * scale;
  canvas.height = estimatedHeight * scale;
  const context = canvas.getContext("2d");
  context.setTransform(scale, 0, 0, scale, 0, 0);
  context.fillStyle = "#05060b";
  context.fillRect(0, 0, width, estimatedHeight);
  drawPosterBackground(context, width, estimatedHeight);

  let y = 62;
  context.fillStyle = "#f0c85a";
  context.font = font(700, 24);
  context.fillText("2026 丙午流年 · 八字年度运势", padding, y);
  y += 62;

  context.fillStyle = "#fff7d2";
  context.font = font(900, 52);
  y = drawWrappedText(context, title, padding, y, contentWidth - 240, 60);

  drawScoreBadge(context, width - padding - 170, 92, score);
  y += 22;
  context.fillStyle = "#c8b992";
  context.font = font(600, 25);
  y = drawWrappedText(context, profile, padding, y, contentWidth, 38);
  y += 30;

  y = drawCard(context, padding, y, contentWidth, 144, () => {
    context.fillStyle = "#f0c85a";
    context.font = font(800, 27);
    context.fillText("四柱命盘", padding + 34, y + 46);
    context.fillStyle = "#fff7d2";
    context.font = font(800, 27);
    bazi.forEach((item, index) => {
      context.fillText(item, padding + 34, y + 90 + index * 34);
    });
  });
  y += 28;

  sections.forEach((section) => {
    y = drawReportSection(context, padding, y, contentWidth, section.label, section.title, section.body);
    y += 28;
  });

  context.fillStyle = "#fff7d2";
  context.font = font(900, 38);
  context.fillText("2026 分月运势", padding, y + 44);
  y += 78;

  months.forEach((month, index) => {
    y = drawMonthSection(context, padding, y, contentWidth, month, index + 1);
    y += 18;
  });

  y += 20;
  context.fillStyle = "#a99a77";
  context.font = font(500, 22);
  drawWrappedText(
    context,
    "本报告基于传统干支与五行关系生成，用于文化娱乐与自我观察参考。",
    padding,
    y,
    contentWidth,
    34
  );

  return cropCanvas(canvas, width * scale, Math.ceil((y + 90) * scale));
}

function drawPosterBackground(context, width, height) {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "rgba(240, 200, 90, 0.16)");
  gradient.addColorStop(0.45, "rgba(5, 6, 11, 0)");
  gradient.addColorStop(1, "rgba(35, 221, 191, 0.1)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "rgba(240, 200, 90, 0.12)";
  context.lineWidth = 1;
  for (let x = 44; x < width; x += 90) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x - 260, height);
    context.stroke();
  }
}

function drawScoreBadge(context, x, y, score) {
  const gradient = context.createLinearGradient(x, y, x + 154, y + 154);
  gradient.addColorStop(0, "#b8422e");
  gradient.addColorStop(0.52, "#f0c85a");
  gradient.addColorStop(1, "#17120e");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(x + 77, y + 77, 77, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#fff7d2";
  context.font = font(900, 58);
  context.textAlign = "center";
  context.fillText(score, x + 77, y + 80);
  context.font = font(700, 20);
  context.fillText("年度运势", x + 77, y + 113);
  context.textAlign = "left";
}

function drawReportSection(context, x, y, width, label, title, body) {
  const bodyHeight = estimateTextHeight(context, body, width - 68, 29, 48);
  const height = bodyHeight + 150;
  return drawCard(context, x, y, width, height, () => {
    context.fillStyle = "#f0c85a";
    context.font = font(800, 22);
    context.fillText(label, x + 34, y + 42);
    context.fillStyle = "#fff7d2";
    context.font = font(900, 34);
    context.fillText(title, x + 34, y + 86);
    context.fillStyle = "#c8b992";
    context.font = font(500, 29);
    drawWrappedText(context, body, x + 34, y + 126, width - 68, 48);
  });
}

function drawMonthSection(context, x, y, width, text, index) {
  const bodyHeight = estimateTextHeight(context, text, width - 110, 25, 40);
  const height = bodyHeight + 64;
  return drawCard(context, x, y, width, height, () => {
    context.fillStyle = "#f0c85a";
    context.font = font(900, 28);
    context.fillText(`${index}月`, x + 34, y + 46);
    context.fillStyle = "#c8b992";
    context.font = font(500, 25);
    drawWrappedText(context, text, x + 92, y + 45, width - 126, 40);
  });
}

function drawCard(context, x, y, width, height, drawContent) {
  context.save();
  context.shadowColor = "rgba(0, 0, 0, 0.42)";
  context.shadowBlur = 28;
  context.shadowOffsetY = 12;
  roundRect(context, x, y, width, height, 18);
  context.fillStyle = "rgba(14, 14, 21, 0.92)";
  context.fill();
  context.shadowColor = "transparent";
  context.strokeStyle = "rgba(240, 200, 90, 0.22)";
  context.stroke();
  drawContent();
  context.restore();
  return y + height;
}

function roundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function estimateTextHeight(context, text, maxWidth, size, lineHeight) {
  context.font = font(500, size);
  return wrapText(context, text, maxWidth).length * lineHeight;
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
  wrapText(context, text, maxWidth).forEach((line) => {
    context.fillText(line, x, y);
    y += lineHeight;
  });
  return y;
}

function wrapText(context, text, maxWidth) {
  const lines = [];
  let line = "";
  Array.from(text).forEach((char) => {
    const nextLine = line + char;
    if (context.measureText(nextLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = nextLine;
    }
  });
  if (line) {
    lines.push(line);
  }
  return lines;
}

function font(weight, size) {
  return `${weight} ${size}px "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif`;
}

function cropCanvas(source, width, height) {
  const output = document.createElement("canvas");
  output.width = width;
  output.height = height;
  output.getContext("2d").drawImage(source, 0, 0);
  return output;
}

populateControls();
document.querySelector("#birthForm").addEventListener("submit", handleSubmit);
