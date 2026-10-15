export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const resolveAssetUrls = (value) => {
  if (typeof value === "string") {
    return value.startsWith("/assets/") ? assetUrl(value) : value;
  }

  if (Array.isArray(value)) {
    return value.map(resolveAssetUrls);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, resolveAssetUrls(child)])
    );
  }

  return value;
};

const rawContent = {
  zh: {
    locale: "zh-CN",
    brand: "清正源华",
    brandEn: "TSINO-TEK",
    languageLabel: "EN",
    nav: [
      ["home", "首页"],
      ["products", "产品介绍"],
      ["applications", "应用领域"],
      ["factory", "智造工厂"],
      ["about", "关于我们"],
      ["news", "新闻中心"],
      ["qualifications", "公司资质"],
      ["contact", "联系我们"]
    ],
    common: {
      previous: "上一项",
      next: "下一项",
      learnMore: "查看详情",
      viewSpecs: "查看参数",
      close: "关闭",
      contactUs: "获取方案",
      scroll: "向下探索",
      category: "产品系列",
      model: "型号",
      power: "功率范围",
      voltage: "输入电压",
      frequency: "开关频率",
      device: "功率器件",
      speed: "转速范围",
      communication: "通信方式"
    },
    hero: [
      {
        eyebrow: "高速电机控制专家",
        title: "让每一次高速旋转，更精准、更高效",
        copy: "第五代电机控制技术与 GaN / SiC 功率器件协同，为先进制造提供可靠驱动力。",
        desktop: "/assets/hero/hero-1.jpg",
        mobile: "/assets/hero/hero-3.jpg"
      },
      {
        eyebrow: "从控制器到行业方案",
        title: "面向未来制造的高速驱动平台",
        copy: "覆盖半导体、精密加工、医疗设备、新能源与工业流体等关键场景。",
        desktop: "/assets/hero/hero-2.jpg",
        mobile: "/assets/hero/hero-4.jpg"
      }
    ],
    productsIntro: {
      eyebrow: "PRODUCTS",
      title: "产品介绍",
      copy: "从小功率超高速电驱到磁悬浮控制，以统一的控制平台覆盖不同电压、功率与通信需求。"
    },
    products: [
      {
        id: "bd",
        category: "高速驱动器 · BD 系列",
        short: "BD 系列",
        accent: "48 万 rpm",
        name: "TSD-BD",
        image: "/assets/products/tsd-bd.png",
        thumbs: ["TSD-BD", "TSD-DCHSF"],
        description: "高性能高速电机矢量驱动器，采用 SoC FPGA 硬件加速。无需编码器即可实现高速无感矢量控制，兼顾带载能力与低温升。",
        specs: [["输出频率", "8,000 Hz"], ["驱动转速", "0–480,000 rpm"], ["输入电压", "24–80 VDC"], ["通信", "IO / RS485 / CAN"]]
      },
      {
        id: "hp",
        category: "高速驱动器 · HP 系列",
        short: "HP 系列",
        accent: "0.75–20 kVA",
        name: "HP2S 系列",
        image: "/assets/products/hp-series.png",
        thumbs: ["S23A0P7", "S23D3P8", "T38A18P"],
        description: "面向 AC230V 与 AC380V 场景的高功率密度驱动平台，采用 SiC 功率器件，支持高频输出与工业现场总线。",
        specs: [["输出频率", "8,000 Hz"], ["驱动转速", "0–480,000 rpm"], ["输入电压", "230 / 380 VAC"], ["通信", "IO / RS485 / CAN / EtherCAT"]]
      },
      {
        id: "medical",
        category: "医疗端定制 · SM 系列",
        short: "医疗定制",
        accent: "静音节能",
        name: "医疗设备电控方案",
        image: "/assets/products/medical-series.png",
        thumbs: ["呼吸机", "制氧机", "离心机"],
        description: "面向呼吸机、制氧机与离心机的电机控制方案，在低噪声、低振动与精确调速之间取得平衡。",
        specs: [["方案形态", "主控板 / 驱动模块"], ["控制对象", "BLDC / PMSM"], ["核心特性", "静音 / 节能 / 软启动"], ["定制内容", "软硬件协同开发"]]
      },
      {
        id: "appliance",
        category: "白电端定制 · SM 系列",
        short: "白电定制",
        accent: "批量定制",
        name: "白电变频控制方案",
        image: "/assets/products/white-series.png",
        thumbs: ["冰箱", "空调", "直流风机"],
        description: "覆盖变频冰箱、空调、工业泵及风机控制，提供从电机算法、功率板到整机联调的完整支持。",
        specs: [["方案形态", "主控板 / 电驱"], ["控制对象", "压缩机 / 风机 / 泵"], ["核心特性", "高效 / 低噪 / 可靠"], ["量产支持", "测试与产线协同"]]
      },
      {
        id: "industrial",
        category: "工业端定制 · BM 系列",
        short: "工业定制",
        accent: "一体控制",
        name: "TSD-BM",
        image: "/assets/products/industrial-series.png",
        thumbs: ["TSD-BM-I", "TSD-BM-II"],
        description: "针对工业设备的紧凑型电驱方案，可按设备空间、接口、安全与动态性能要求进行软硬件定制。",
        specs: [["控制方式", "无感矢量控制"], ["适配电机", "PMSM / BLDC / IM"], ["接口", "IO / RS485 / CAN"], ["交付", "模块 / 整机方案"]]
      },
      {
        id: "tb",
        category: "高速驱动器 · TB 系列",
        short: "TB 系列",
        accent: "60 万 rpm",
        name: "TSD-TB",
        image: "/assets/products/tb-series.png",
        thumbs: ["TSD-TB"],
        description: "采用 GaN 功率器件的超高速电机驱动器，面向 PCB 钻孔、精密磨削等对控制频率要求极高的应用。",
        specs: [["输出频率", "10,000 Hz"], ["驱动转速", "0–600,000 rpm"], ["开关频率", "150 kHz"], ["功率器件", "GaN"]]
      },
      {
        id: "ambc",
        category: "磁悬浮轴承 · AMBC 系列",
        short: "AMBC 系列",
        accent: "五自由度",
        name: "TSD-AMBC",
        image: "/assets/products/ambc-series.png",
        thumbs: ["控制器", "径向轴承", "轴向轴承"],
        description: "面向磁悬浮高速旋转装备的轴承控制平台，可与高速电驱形成一体化控制，提升动态响应与系统集成度。",
        specs: [["控制对象", "径向 / 轴向轴承"], ["控制架构", "多通道闭环"], ["核心特性", "快速响应 / 高精度"], ["集成", "电机与轴承一体控制"]]
      }
    ],
    applicationsIntro: {
      eyebrow: "APPLICATIONS",
      title: "应用领域",
      copy: "以高控制频率、低电流谐波与稳定带载能力，服务高速精密制造和高效流体装备。"
    },
    applications: [
      {
        id: "wafer",
        title: "晶圆切割",
        image: "/assets/applications/wafer.png",
        mobile: "/assets/applications/wafer-mobile.png",
        description: "高速电主轴需要兼顾高带载刚度、低振动和小体积。高精无感控制有助于降低主轴发热与振动，改善晶圆切割的正崩和背崩。",
        rows: [["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "IO / RS485 / CAN"], ["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"]]
      },
      {
        id: "dental",
        title: "义齿切削设备",
        image: "/assets/applications/dental.png",
        mobile: "/assets/applications/dental-mobile.png",
        description: "紧凑设备对驱动器体积和加工精度提出双重要求。高功率密度与低温升控制可帮助提升义齿、珠宝及氧化锆加工质量。",
        rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "CAN"]]
      },
      {
        id: "pcb-drill",
        title: "PCB 钻孔机",
        image: "/assets/applications/pcb-drill.jpg",
        mobile: "/assets/applications/pcb-drill-mobile.png",
        description: "超高转速主轴要求更高的控制频率。GaN 高速开关与单周期控制可改善加工精度，减少断刀概率并提升设备节拍。",
        rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "IO / RS485 / CAN"], ["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "CAN"]]
      },
      {
        id: "pcb-separate",
        title: "PCB 分板机",
        image: "/assets/applications/pcb-separate.png",
        mobile: "/assets/applications/pcb-separate-mobile.png",
        description: "驱动交流和直流电机时均可实现快速矢量控制，缩短加减速时间，让铣刀式分板设备获得更稳定的切割质量和工作效率。",
        rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "CAN"], ["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"]]
      },
      {
        id: "grinder",
        title: "高精密磨床",
        image: "/assets/applications/grinder.png",
        mobile: "/assets/applications/grinder-mobile.png",
        description: "高速无感控制在超高转速下稳定调节主轴，低纹波电流有助于减小发热对敏感材料与加工精度的影响。",
        rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "CAN"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "RS485 / CAN"]]
      },
      {
        id: "blower",
        title: "高速离心式鼓风机",
        image: "/assets/applications/blower.png",
        mobile: "/assets/applications/blower-mobile.png",
        description: "高速直驱减少机械传动损耗，配合高频控制和 SiC 功率器件，支持鼓风系统长期高效、低维护运行。",
        rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "CAN"]]
      },
      {
        id: "compressor",
        title: "高速压缩机",
        image: "/assets/applications/compressor.png",
        mobile: "/assets/applications/compressor-mobile.png",
        description: "面向高速直驱压缩系统，专用算法输出高旋转场，并在无需正弦滤波器的条件下降低电机发热、改善系统效率。",
        rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "CAN"]]
      }
    ],
    factory: {
      eyebrow: "SMART MANUFACTURING",
      title: "从研发验证到稳定量产",
      copy: "河北固安自有智能制造工厂配置 SMT 贴片线、波峰焊产线、恒温老化室和专业检测设备。研发、工艺、测试与生产协同，保障产品质量与交期。",
      metrics: [["2,000 m²", "自有制造基地"], ["100%", "关键功能测试"], ["多工位", "老化与可靠性验证"]],
      imageAlt: "清正源华办公与制造环境"
    },
    about: {
      eyebrow: "ABOUT US",
      title: "专注高速电机控制技术",
      copy: "清正源华（北京）科技有限公司成立于 2018 年，总部位于北京市海淀区。公司研发和生产超高速电机 / 电主轴驱动器、高精密磁悬浮轴承及行业定制控制方案。核心团队由清华大学、德国高校及其他知名高校的博士、硕士组成。",
      detail: "第五代电机控制技术采用 SoC FPGA 并行加速矢量控制，结合 GaN / SiC 功率器件，提高控制频率与精度，降低电流谐波和电机温升。",
      imageAlt: "清正源华公司前台"
    },
    newsIntro: { eyebrow: "NEWS", title: "新闻中心", copy: "记录技术落地、制造能力和行业合作的持续进展。" },
    news: [
      { date: "2026-06-09", title: "清正源华荣获科力尔电机集团“金牌供应商”奖", copy: "在合作伙伴大会上，清正源华凭借产品质量、交付和技术协同能力获得认可。", image: "/assets/news/award.jpg" },
      { date: "2025-03-24", title: "直流变频制氧机突破静音与节能标准", copy: "与医疗器械行业伙伴联合研发的变频制氧机，以新一代电机智控技术改善噪音、能耗与启动冲击。", image: "/assets/news/oxygen.jpg" },
      { date: "2023-11-17", title: "全新 SMT 生产线扩产完成", copy: "新增生产线投入使用，进一步增强高速驱动器与行业定制控制器的量产保障能力。", image: "/assets/news/factory.jpg" }
    ],
    qualifications: {
      eyebrow: "QUALIFICATIONS",
      title: "公司资质",
      copy: "持续投入研发、知识产权与质量能力建设。",
      tabs: [["honor", "企业荣誉", "/assets/certs/honor.png"], ["patent", "专利证书", "/assets/certs/patent.png"], ["software", "软件著作", "/assets/certs/software.png"]]
    },
    contact: {
      eyebrow: "CONTACT",
      title: "让高速系统更快落地",
      copy: "告诉我们电机类型、目标转速、功率、电压和通信要求，工程团队将协助匹配产品或定制方案。",
      company: "清正源华（北京）科技有限公司",
      address: "北京市海淀区北清路用友产业园北区 16D 2 层 202",
      phone: "010-65400661",
      email: "info@tsino-tek.com",
      copyEmail: "复制邮箱",
      copied: "邮箱已复制",
      openEmail: "发送邮件",
      formTitle: "需求概况",
      name: "姓名",
      companyLabel: "公司",
      phoneLabel: "电话",
      need: "需求描述",
      namePlaceholder: "如何称呼您",
      companyPlaceholder: "所在公司或团队",
      phonePlaceholder: "联系电话",
      needPlaceholder: "例如：高速电主轴，目标 30 万 rpm，AC230V",
      submit: "通过邮件发送需求",
      privacy: "提交后将调用您设备上的默认邮件客户端，不会在本网站保存信息。"
    },
    footer: { copyright: "© 2026 清正源华（北京）科技有限公司", record: "公开网站重建演示" }
  },
  en: {
    locale: "en",
    brand: "TSINO-TEK",
    brandEn: "Qingzheng Yuanhua",
    languageLabel: "中文",
    nav: [["home", "Home"], ["products", "Products"], ["applications", "Applications"], ["factory", "Manufacturing"], ["about", "About"], ["news", "News"], ["qualifications", "Qualifications"], ["contact", "Contact"]],
    common: { previous: "Previous", next: "Next", learnMore: "Learn more", viewSpecs: "View specs", close: "Close", contactUs: "Get a solution", scroll: "Explore", category: "Product family", model: "Model", power: "Power", voltage: "Input", frequency: "Switching", device: "Device", speed: "Speed", communication: "Communication" },
    hero: [
      { eyebrow: "High-speed motor control", title: "Precision and efficiency at every revolution", copy: "Fifth-generation motor control, paired with GaN and SiC power devices, drives advanced manufacturing with confidence.", desktop: "/assets/hero/hero-1.jpg", mobile: "/assets/hero/hero-3.jpg" },
      { eyebrow: "From controllers to complete solutions", title: "A high-speed drive platform for future manufacturing", copy: "Purpose-built for semiconductors, precision machining, medical devices, new energy and industrial fluid systems.", desktop: "/assets/hero/hero-2.jpg", mobile: "/assets/hero/hero-4.jpg" }
    ],
    productsIntro: { eyebrow: "PRODUCTS", title: "Product portfolio", copy: "A common control platform spanning compact ultra-high-speed drives, magnetic bearings and application-specific controllers." },
    products: [
      { id: "bd", category: "High-speed drive · BD", short: "BD series", accent: "480k rpm", name: "TSD-BD", image: "/assets/products/tsd-bd.png", thumbs: ["TSD-BD", "TSD-DCHSF"], description: "A high-performance vector drive accelerated by SoC FPGA. Encoderless control combines high load capacity with low motor temperature.", specs: [["Output frequency", "8,000 Hz"], ["Motor speed", "0–480,000 rpm"], ["Input", "24–80 VDC"], ["Communication", "IO / RS485 / CAN"]] },
      { id: "hp", category: "High-speed drive · HP", short: "HP series", accent: "0.75–20 kVA", name: "HP2S series", image: "/assets/products/hp-series.png", thumbs: ["S23A0P7", "S23D3P8", "T38A18P"], description: "A power-dense SiC drive platform for AC230V and AC380V systems with high-frequency output and industrial fieldbus options.", specs: [["Output frequency", "8,000 Hz"], ["Motor speed", "0–480,000 rpm"], ["Input", "230 / 380 VAC"], ["Communication", "IO / RS485 / CAN / EtherCAT"]] },
      { id: "medical", category: "Medical custom · SM", short: "Medical", accent: "Quiet & efficient", name: "Medical motion control", image: "/assets/products/medical-series.png", thumbs: ["Ventilator", "Oxygen concentrator", "Centrifuge"], description: "Motor-control solutions for ventilators, oxygen concentrators and centrifuges, balancing low noise, low vibration and precise speed regulation.", specs: [["Format", "Controller / drive module"], ["Motors", "BLDC / PMSM"], ["Strengths", "Quiet / efficient / soft start"], ["Scope", "Hardware and software"]] },
      { id: "appliance", category: "Appliance custom · SM", short: "Appliance", accent: "Production ready", name: "Variable-speed appliance control", image: "/assets/products/white-series.png", thumbs: ["Refrigeration", "HVAC", "DC fan"], description: "Control solutions for compressors, HVAC, pumps and fans, covering algorithms, power electronics and system commissioning.", specs: [["Format", "Controller / drive"], ["Loads", "Compressor / fan / pump"], ["Strengths", "Efficient / quiet / reliable"], ["Support", "Validation and production"]] },
      { id: "industrial", category: "Industrial custom · BM", short: "Industrial", accent: "Integrated", name: "TSD-BM", image: "/assets/products/industrial-series.png", thumbs: ["TSD-BM-I", "TSD-BM-II"], description: "Compact industrial drives tailored to equipment packaging, interfaces, safety requirements and dynamic performance.", specs: [["Control", "Sensorless vector"], ["Motors", "PMSM / BLDC / IM"], ["Interfaces", "IO / RS485 / CAN"], ["Delivery", "Module / complete solution"]] },
      { id: "tb", category: "High-speed drive · TB", short: "TB series", accent: "600k rpm", name: "TSD-TB", image: "/assets/products/tb-series.png", thumbs: ["TSD-TB"], description: "A GaN ultra-high-speed drive for PCB drilling, precision grinding and applications requiring extreme control bandwidth.", specs: [["Output frequency", "10,000 Hz"], ["Motor speed", "0–600,000 rpm"], ["Switching", "150 kHz"], ["Power device", "GaN"]] },
      { id: "ambc", category: "Magnetic bearing · AMBC", short: "AMBC series", accent: "Five axes", name: "TSD-AMBC", image: "/assets/products/ambc-series.png", thumbs: ["Controller", "Radial bearing", "Axial bearing"], description: "A magnetic-bearing control platform for high-speed rotating equipment, designed for integrated motor and bearing control.", specs: [["Bearing", "Radial / axial"], ["Architecture", "Multi-channel closed loop"], ["Strengths", "Fast response / precision"], ["Integration", "Motor + bearing control"]] }
    ],
    applicationsIntro: { eyebrow: "APPLICATIONS", title: "Applications", copy: "High control bandwidth, low current harmonics and stable loading for precision manufacturing and efficient fluid equipment." },
    applications: [
      { id: "wafer", title: "Wafer dicing", image: "/assets/applications/wafer.png", mobile: "/assets/applications/wafer-mobile.png", description: "High-speed spindles demand load stiffness, low vibration and compact packaging. Precision sensorless control helps reduce heat and improve cut quality.", rows: [["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "IO / RS485 / CAN"], ["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"]] },
      { id: "dental", title: "Dental milling", image: "/assets/applications/dental.png", mobile: "/assets/applications/dental-mobile.png", description: "Compact machines demand both small drives and high accuracy. Power-dense, low-temperature control supports dental, jewelry and zirconia machining.", rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "CAN"]] },
      { id: "pcb-drill", title: "PCB drilling", image: "/assets/applications/pcb-drill.jpg", mobile: "/assets/applications/pcb-drill-mobile.png", description: "Ultra-high-speed spindles need exceptional control bandwidth. GaN switching and single-cycle control improve accuracy and throughput.", rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "IO / RS485 / CAN"], ["TSD-BD", "0–1 kVA", "24–80 VDC", "64 kHz", "Si", "480,000 rpm", "CAN"]] },
      { id: "pcb-separate", title: "PCB routing", image: "/assets/applications/pcb-separate.png", mobile: "/assets/applications/pcb-separate-mobile.png", description: "Fast vector control for AC and DC motors shortens acceleration cycles and stabilizes routing quality.", rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "CAN"], ["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"]] },
      { id: "grinder", title: "Precision grinding", image: "/assets/applications/grinder.png", mobile: "/assets/applications/grinder-mobile.png", description: "Stable sensorless control and low-ripple current reduce thermal effects in ultra-high-speed precision grinding.", rows: [["TSD-TB", "0–0.8 kVA", "220 VAC", "150 kHz", "GaN", "600,000 rpm", "CAN"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "RS485 / CAN"]] },
      { id: "blower", title: "Centrifugal blowers", image: "/assets/applications/blower.png", mobile: "/assets/applications/blower-mobile.png", description: "High-speed direct drive reduces mechanical loss while SiC power electronics support long, efficient operation.", rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "CAN"]] },
      { id: "compressor", title: "High-speed compressors", image: "/assets/applications/compressor.png", mobile: "/assets/applications/compressor-mobile.png", description: "Dedicated high-speed algorithms deliver the rotating field required by direct-drive compressors while controlling motor temperature.", rows: [["HP2S-S23D", "0–3.8 kVA", "230 VAC", "64 kHz", "SiC", "480,000 rpm", "EtherCAT"], ["HP2S-T38E", "5–20 kVA", "380 VAC", "64 kHz", "SiC", "480,000 rpm", "CAN"]] }
    ],
    factory: { eyebrow: "SMART MANUFACTURING", title: "From validation to dependable production", copy: "Our 2,000 m² manufacturing base in Gu'an integrates SMT, wave soldering, controlled-temperature aging and professional inspection. Engineering, process, test and production teams work as one.", metrics: [["2,000 m²", "Owned manufacturing base"], ["100%", "Critical-function testing"], ["Multi-stage", "Aging and reliability checks"]], imageAlt: "TSINO-TEK office and manufacturing environment" },
    about: { eyebrow: "ABOUT US", title: "Focused on high-speed motor control", copy: "Founded in 2018 and headquartered in Beijing, TSINO-TEK develops ultra-high-speed motor and spindle drives, precision magnetic bearings and application-specific motion-control solutions. Its core R&D team includes graduates from Tsinghua University, German universities and other leading institutions.", detail: "Fifth-generation control uses SoC FPGA parallel vector-control acceleration with GaN and SiC power devices to increase bandwidth and precision while reducing current harmonics and motor temperature.", imageAlt: "TSINO-TEK reception" },
    newsIntro: { eyebrow: "NEWS", title: "Company news", copy: "Progress in technology, manufacturing and industry collaboration." },
    news: [
      { date: "2026-06-09", title: "TSINO-TEK named a Gold Supplier by Keli Motor Group", copy: "The recognition reflects product quality, delivery performance and engineering collaboration.", image: "/assets/news/award.jpg" },
      { date: "2025-03-24", title: "Variable-speed oxygen concentrator advances quiet efficiency", copy: "A jointly developed motor-control system reduces noise, energy use and startup impact for medical equipment.", image: "/assets/news/oxygen.jpg" },
      { date: "2023-11-17", title: "New SMT production line enters operation", copy: "Expanded production strengthens volume delivery for high-speed drives and custom controllers.", image: "/assets/news/factory.jpg" }
    ],
    qualifications: { eyebrow: "QUALIFICATIONS", title: "Qualifications", copy: "Ongoing investment in R&D, intellectual property and quality capabilities.", tabs: [["honor", "Company honors", "/assets/certs/honor.png"], ["patent", "Patents", "/assets/certs/patent.png"], ["software", "Software copyrights", "/assets/certs/software.png"]] },
    contact: { eyebrow: "CONTACT", title: "Move your high-speed system forward", copy: "Share your motor type, target speed, power, voltage and communication requirements. Our engineers will recommend a product or custom solution.", company: "TSINO-TEK (Beijing) Technology Co., Ltd.", address: "Room 202, Floor 2, Building 16D, UFIDA Industrial Park North, Haidian, Beijing", phone: "+86 10 6540 0661", email: "info@tsino-tek.com", copyEmail: "Copy email", copied: "Email copied", openEmail: "Send email", formTitle: "Project outline", name: "Name", companyLabel: "Company", phoneLabel: "Phone", need: "Requirements", namePlaceholder: "Your name", companyPlaceholder: "Company or team", phonePlaceholder: "Contact number", needPlaceholder: "Example: high-speed spindle, 300k rpm, AC230V", submit: "Send via email", privacy: "Submitting opens your default email app. No information is stored on this website." },
    footer: { copyright: "© 2026 TSINO-TEK (Beijing) Technology Co., Ltd.", record: "Public website reconstruction demo" }
  }
};

export const content = resolveAssetUrls(rawContent);
