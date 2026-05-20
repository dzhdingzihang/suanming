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
  "换算年柱月令，查看五行旺衰",
  "取日主为命局核心，观喜忌流转",
  "引入 2026 丙午流年，排布十二流月",
  "归纳事业财运，生成年度断语",
];

const cities = [
  "北京",
  "上海",
  "广州",
  "深圳",
  "杭州",
  "南京",
  "苏州",
  "成都",
  "重庆",
  "武汉",
  "西安",
  "天津",
  "长沙",
  "郑州",
  "青岛",
  "厦门",
  "福州",
  "济南",
  "合肥",
  "宁波",
  "无锡",
  "佛山",
  "东莞",
  "珠海",
  "南昌",
  "昆明",
  "贵阳",
  "南宁",
  "海口",
  "太原",
  "石家庄",
  "沈阳",
  "大连",
  "长春",
  "哈尔滨",
  "呼和浩特",
  "兰州",
  "银川",
  "西宁",
  "乌鲁木齐",
  "拉萨",
  "香港",
  "澳门",
  "台北",
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

function mod(value, length) {
  return ((value % length) + length) % length;
}

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
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

function buildSummaries(months, counts, dayElement, pillars, birthDate, birthCity, birthHour) {
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
  const monthElements = [...new Set(months.filter((item) => item.score >= 72).map((item) => item.element))].join("、");
  const cautionMonths = lowMonths || "年末";
  const opportunityMonths = bestMonths || "5月、6月";

  const annualNarrative = `命主生于公历 ${birthDate}，${birthCity}起局，${hourText}。四柱排得 ${baziText}。其中${pillarText(dayPillar)}为日柱，${dayPillar.stem}${stemElements[dayPillar.stem]}日元代表命主自身。此局五行以${strongest}气较显，${second}气相随，${weakest}气偏弱，呈现“有主气、有牵引、亦有待补之处”的命局结构。${elementNature[dayElement]}。2026 为丙午流年，丙午可以理解为这一年的外部大环境偏向“火”的能量，火主名声、行动、表达、曝光与速度，所以这一年更容易出现被看见、被催促、被要求拿结果的情形。整体来看，${monthElements || "火土"}之月较能借势，${cautionMonths}则需谨慎言语、合同、人情往来与支出节奏。`;

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
  document.querySelector("#downloadReport").addEventListener("click", downloadReportImage);
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

  if (!birthDate || !birthCity) return;

  const formButton = document.querySelector("#birthForm button");
  const loadingPanel = document.querySelector("#loadingPanel");
  const resultPanel = document.querySelector("#result");
  const loadingText = document.querySelector("#loadingText");
  let step = 0;

  formButton.disabled = true;
  formButton.textContent = "起盘中...";
  resultPanel.classList.add("hidden");
  loadingPanel.classList.remove("hidden");
  loadingPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  loadingText.textContent = loadingMessages[0];

  const timer = window.setInterval(() => {
    step += 1;
    loadingText.textContent = loadingMessages[step % loadingMessages.length];
  }, 520);

  window.setTimeout(() => {
    window.clearInterval(timer);
    renderReading({ birthDate, birthHour, birthCity });
    loadingPanel.classList.add("hidden");
    formButton.disabled = false;
    formButton.textContent = "重新起盘";
  }, 2300);
}

function renderReading({ birthDate, birthHour, birthCity }) {

  const date = parseDate(birthDate);
  const yearPillar = getYearPillar(date);
  const monthPillar = getMonthPillar(date, yearPillar);
  const dayPillar = getDayPillar(date);
  const hourPillar = getHourPillar(birthHour, dayPillar);
  const pillars = [yearPillar, monthPillar, dayPillar, hourPillar];
  const counts = collectElements(pillars);
  const dayElement = stemElements[dayPillar.stem];
  const months = get2026Months(dayElement);
  const { annualScore, percentile } = buildAnnualScore(months, counts);
  const summaries = buildSummaries(months, counts, dayElement, pillars, birthDate, birthCity, birthHour);

  document.querySelector("#profileLine").textContent = `${birthCity}出生 · ${birthDate}${birthHour ? ` · ${birthHour}点` : " · 时辰未知"}`;
  document.querySelector("#resultTitle").textContent = `${pillarText(dayPillar)}日主的 2026 年运势`;
  document.querySelector("#annualScore").textContent = annualScore;
  document.querySelector("#annualPercentile").textContent = `超过中国 ${percentile}% 的人`;
  document.querySelector("#annualNarrative").textContent = summaries.annualNarrative;
  document.querySelector("#annualDetail").textContent = summaries.annualDetail;
  renderBazi(pillars);
  renderElements(counts);
  renderMonths(months);
  document.querySelector("#careerSummary").textContent = summaries.careerSummary;
  document.querySelector("#wealthSummary").textContent = summaries.wealthSummary;

  document.querySelector("#result").classList.remove("hidden");
  document.querySelector("#result").scrollIntoView({ behavior: "smooth", block: "start" });
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
  const annualDetail = document.querySelector("#annualDetail").textContent;
  const career = document.querySelector("#careerSummary").textContent;
  const wealth = document.querySelector("#wealthSummary").textContent;
  const bazi = Array.from(document.querySelectorAll(".pillar-card")).map((card) =>
    card.innerText.replace(/\n+/g, " · ")
  );
  const months = Array.from(document.querySelectorAll(".month-card")).map((card) =>
    card.innerText.replace(/\n+/g, " · ")
  );
  const sections = [
    { label: "年度总览", title: percentile, body: annualNarrative },
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
