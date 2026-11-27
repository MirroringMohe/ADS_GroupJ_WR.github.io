/* 数据版本 2026-11-18d · 统一编号数据库
   来源：直播美妆数据采集表-完整版.docx（P001-P187，四场淘宝直播）
        花知晓直播间套装数据采集表(2).xlsx（P188-P192，抖音，续编）
   编号规则：P 商品 / T 直播条目 / G 赠品，全局唯一不再分文件
   product.official 为 null 时页面显示"官方价待核"（对应表内"未核验"）
   gifts.kind: same 同款 / other 异品牌或未识别 / physical 实物周边
   keywords 含商品链接与链接 ID，粘贴链接即可精确命中
   前 3 个为界面演示案例（loreal/lancome/dove） */
window.DEMO_CASES = [
 {
  "id": "loreal",
  "keywords": [
   "欧莱雅",
   "loreal",
   "复颜",
   "玻尿酸",
   "精华"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "复颜玻尿酸水光充盈导入精华",
   "spec": "30ml",
   "specVolume": 30,
   "unit": "ml",
   "official": 319,
   "category": "单品"
  },
  "collected": {
   "date": "2026-11-17",
   "window": "20:00 – 22:00"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "欧莱雅官方旗舰店",
    "official": true,
    "heat": 96,
    "price": 289,
    "bundle": [
     "正装精华 30ml",
     "同款精华小样 7.5ml ×3",
     "补水面膜 ×2"
    ],
    "gifts": [
     {
      "name": "同款精华小样 7.5ml ×3",
      "volume": 22.5,
      "value": 239,
      "kind": "same",
      "basis": "按官方 30ml ¥319 折算"
     },
     {
      "name": "补水面膜 ×2",
      "value": 30,
      "kind": "other",
      "basis": "店铺单片售价 ¥15"
     }
    ],
    "crowd": "看重官方正品与售后保障",
    "note": "页面已售 10万+，赠品以订单实际显示为准；不参与跨店满减"
   },
   {
    "platform": "抖音",
    "channel": "李佳琦直播间",
    "official": false,
    "heat": 93,
    "price": 259,
    "bundle": [
     "正装精华 30ml",
     "同款精华小样 7.5ml ×2",
     "真丝睡眠眼罩 ×1"
    ],
    "gifts": [
     {
      "name": "同款精华小样 7.5ml ×2",
      "volume": 15,
      "value": 159,
      "kind": "same",
      "basis": "按官方 30ml ¥319 折算"
     },
     {
      "name": "真丝睡眠眼罩 ×1",
      "value": 39,
      "kind": "physical",
      "basis": "品牌官网同款售价 ¥39"
     }
    ],
    "crowd": "想要实物周边、对单价不特别敏感",
    "note": "前 100 名加赠化妆包"
   },
   {
    "platform": "小红书",
    "channel": "小鹿的梳妆台",
    "official": false,
    "heat": 78,
    "price": 269,
    "bundle": [
     "正装精华 30ml",
     "异品牌氨基酸洁面 30ml",
     "帆布化妆包 ×1"
    ],
    "gifts": [
     {
      "name": "异品牌氨基酸洁面 30ml",
      "value": 30,
      "kind": "other",
      "basis": "品牌天猫店 100ml ¥99 折算"
     },
     {
      "name": "帆布化妆包 ×1",
      "value": 25,
      "kind": "physical",
      "basis": "同款周边定价 ¥25"
     }
    ],
    "crowd": "正缺一支洁面、想凑一套流程",
    "note": "赠品与正装不属同一品牌"
   },
   {
    "platform": "抖音",
    "channel": "美妆小王哥",
    "official": false,
    "heat": 64,
    "price": 275,
    "bundle": [
     "正装精华 30ml",
     "同款精华小样 7.5ml ×2",
     "化妆包 ×1"
    ],
    "gifts": [
     {
      "name": "同款精华小样 7.5ml ×2",
      "volume": 15,
      "value": 159,
      "kind": "same",
      "basis": "按官方 30ml ¥319 折算"
     },
     {
      "name": "化妆包 ×1",
      "value": 25,
      "kind": "physical",
      "basis": "同款周边定价 ¥25"
     }
    ],
    "crowd": "跟着讲解下单、需要搭配建议",
    "note": ""
   },
   {
    "platform": "小红书",
    "channel": "成分党阿棠",
    "official": false,
    "heat": 57,
    "price": 279,
    "bundle": [
     "正装精华 30ml",
     "异品牌氨基酸洁面 30ml",
     "化妆包 ×1"
    ],
    "gifts": [
     {
      "name": "异品牌氨基酸洁面 30ml",
      "value": 30,
      "kind": "other",
      "basis": "品牌天猫店 100ml ¥99 折算"
     },
     {
      "name": "化妆包 ×1",
      "value": 25,
      "kind": "physical",
      "basis": "同款周边定价 ¥25"
     }
    ],
    "crowd": "注重成分讲解、想要洁面搭子",
    "note": ""
   },
   {
    "platform": "淘宝",
    "channel": "环球美妆折扣店",
    "official": false,
    "heat": 49,
    "price": 259,
    "bundle": [
     "正装精华 30ml",
     "同款精华小样 7.5ml ×1"
    ],
    "gifts": [
     {
      "name": "同款精华小样 7.5ml ×1",
      "volume": 7.5,
      "value": 80,
      "kind": "same",
      "basis": "按官方 30ml ¥319 折算"
     }
    ],
    "crowd": "预算优先、能接受第三方渠道",
    "note": "非官方渠道，注意辨别"
   }
  ],
  "insight": "官方旗舰店折扣最浅，但把 22.5ml 同款小样摊进正装里，容量单价反而最低。李佳琦直播间用眼罩凑数，看着热闹，折算后并不占优 —— 实物赠品的“体感”往往大于它的真实价值。"
 },
 {
  "id": "lancome",
  "keywords": [
   "兰蔻",
   "lancome",
   "小黑瓶",
   "肌底液"
  ],
  "product": {
   "brand": "兰蔻",
   "name": "小黑瓶精华肌底液",
   "spec": "50ml",
   "specVolume": 50,
   "unit": "ml",
   "official": 1080,
   "category": "单品"
  },
  "collected": {
   "date": "2026-11-16",
   "window": "20:00 – 22:00"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "兰蔻官方旗舰店",
    "official": true,
    "heat": 97,
    "price": 1080,
    "bundle": [
     "正装肌底液 50ml",
     "同款小样 10ml ×5"
    ],
    "gifts": [
     {
      "name": "同款小样 10ml ×5",
      "volume": 50,
      "value": 1080,
      "kind": "same",
      "basis": "按官方 50ml ¥1080 折算"
     }
    ],
    "crowd": "只要正装量、认官方渠道",
    "note": "原价销售，赠品送完即止"
   },
   {
    "platform": "抖音",
    "channel": "琦儿直播间",
    "official": false,
    "heat": 92,
    "price": 899,
    "bundle": [
     "正装肌底液 50ml",
     "同款小样 10ml ×3",
     "真丝眼罩 ×1"
    ],
    "gifts": [
     {
      "name": "同款小样 10ml ×3",
      "volume": 30,
      "value": 648,
      "kind": "same",
      "basis": "按官方 50ml ¥1080 折算"
     },
     {
      "name": "真丝眼罩 ×1",
      "value": 45,
      "kind": "physical",
      "basis": "同款周边定价 ¥45"
     }
    ],
    "crowd": "想少花钱、能接受非官方渠道",
    "note": "限时 2 小时价"
   },
   {
    "platform": "小红书",
    "channel": "果粒橙的护肤日记",
    "official": false,
    "heat": 74,
    "price": 999,
    "bundle": [
     "正装肌底液 50ml",
     "同款小样 10ml ×2",
     "化妆包 ×1"
    ],
    "gifts": [
     {
      "name": "同款小样 10ml ×2",
      "volume": 20,
      "value": 432,
      "kind": "same",
      "basis": "按官方 50ml ¥1080 折算"
     },
     {
      "name": "化妆包 ×1",
      "value": 45,
      "kind": "physical",
      "basis": "同款周边定价 ¥45"
     }
    ],
    "crowd": "偏好看博主讲解、需要搭配建议",
    "note": "赠品数量随库存浮动"
   },
   {
    "platform": "抖音",
    "channel": "美琦严选",
    "official": false,
    "heat": 61,
    "price": 949,
    "bundle": [
     "正装肌底液 50ml",
     "同款小样 10ml ×2",
     "化妆包 ×1"
    ],
    "gifts": [
     {
      "name": "同款小样 10ml ×2",
      "volume": 20,
      "value": 432,
      "kind": "same",
      "basis": "按官方 50ml ¥1080 折算"
     },
     {
      "name": "化妆包 ×1",
      "value": 45,
      "kind": "physical",
      "basis": "同款周边定价 ¥45"
     }
    ],
    "crowd": "想要折扣与赠品兼顾",
    "note": ""
   },
   {
    "platform": "淘宝",
    "channel": "全球美妆超市",
    "official": false,
    "heat": 53,
    "price": 969,
    "bundle": [
     "正装肌底液 50ml",
     "异品牌眼霜 15ml"
    ],
    "gifts": [
     {
      "name": "异品牌眼霜 15ml",
      "value": 180,
      "kind": "other",
      "basis": "品牌旗舰店 30ml ¥359 折算"
     }
    ],
    "crowd": "正想入一支眼霜、愿凑单",
    "note": "无官方授权标识"
   }
  ],
  "insight": "这是一组“折扣与单价排序相反”的典型：官方旗舰店一分不降，却把同款小样送到 50ml，折算单价最低；看着便宜的直播间，扣掉赠品后反而更贵。只比标价会得出完全相反的结论。"
 },
 {
  "id": "dove",
  "keywords": [
   "多芬",
   "dove",
   "洗发水",
   "洗护"
  ],
  "product": {
   "brand": "多芬",
   "name": "深层修护洗发水",
   "spec": "700ml",
   "specVolume": 700,
   "unit": "ml",
   "official": 79.9,
   "category": "单品"
  },
  "collected": {
   "date": "2026-11-17",
   "window": "20:00 – 22:00"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "多芬官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 69.9,
    "bundle": [
     "正装洗发水 700ml",
     "旅行装 100ml ×2"
    ],
    "gifts": [
     {
      "name": "旅行装 100ml ×2",
      "volume": 200,
      "value": 22.8,
      "kind": "same",
      "basis": "按官方 700ml ¥79.9 折算"
     }
    ],
    "crowd": "要正品凭证、送人也合适",
    "note": "含运费险"
   },
   {
    "platform": "抖音",
    "channel": "大杨的日用铺",
    "official": false,
    "heat": 88,
    "price": 59.9,
    "bundle": [
     "正装洗发水 700ml",
     "同款旅行装 200ml"
    ],
    "gifts": [
     {
      "name": "同款旅行装 200ml",
      "volume": 200,
      "value": 22.8,
      "kind": "same",
      "basis": "按官方 700ml ¥79.9 折算"
     }
    ],
    "crowd": "自用囤货、不在意包装",
    "note": ""
   },
   {
    "platform": "淘宝",
    "channel": "洗护严选集合店",
    "official": false,
    "heat": 76,
    "price": 59.9,
    "bundle": [
     "正装洗发水 700ml",
     "同品牌护发素 200ml"
    ],
    "gifts": [
     {
      "name": "护发素 200ml",
      "value": 25,
      "kind": "other",
      "basis": "同品牌 400ml 售价 ¥49.9 折算"
     }
    ],
    "crowd": "本来就要配护发素的人",
    "note": "套装拆卖，无官方授权标识"
   },
   {
    "platform": "小红书",
    "channel": "小满的家清清单",
    "official": false,
    "heat": 70,
    "price": 69,
    "bundle": [
     "正装洗发水 700ml",
     "发膜 150ml"
    ],
    "gifts": [
     {
      "name": "发膜 150ml",
      "value": 30,
      "kind": "other",
      "basis": "品牌 300ml 售价 ¥59 折算"
     }
    ],
    "crowd": "发质受损、需要深层护理",
    "note": ""
   },
   {
    "platform": "抖音",
    "channel": "阿俊家清铺",
    "official": false,
    "heat": 62,
    "price": 62,
    "bundle": [
     "正装洗发水 700ml",
     "同款旅行装 150ml"
    ],
    "gifts": [
     {
      "name": "同款旅行装 150ml",
      "volume": 150,
      "value": 17.1,
      "kind": "same",
      "basis": "按官方 700ml ¥79.9 折算"
     }
    ],
    "crowd": "想先用小瓶试试、出差带着方便",
    "note": ""
   },
   {
    "platform": "小红书",
    "channel": "洗护研究所",
    "official": false,
    "heat": 55,
    "price": 66,
    "bundle": [
     "正装洗发水 700ml",
     "沐浴露 400ml"
    ],
    "gifts": [
     {
      "name": "沐浴露 400ml",
      "value": 39.9,
      "kind": "other",
      "basis": "品牌 500ml 售价 ¥49.9 折算"
     }
    ],
    "crowd": "本来就要囤沐浴露的家庭装用户",
    "note": "赠品按容量折算非常占便宜"
   }
  ],
  "insight": "同样 700ml，有人送同款旅行装，有人直接搭一整瓶沐浴露 —— 折算到每毫升后排序完全不同。官方旗舰店贵约两成，换来的是可核验的渠道；如果本来就要买沐浴露，排在后面的方案才是你的“最划算”。"
 },
 {
  "id": "p001",
  "keywords": [
   "资生堂",
   "资生堂悦薇水乳套装祛",
   "973706969603",
   "https://item.taobao.com/item.htm?id=973706969603"
  ],
  "product": {
   "brand": "资生堂",
   "name": "资生堂悦薇水乳套装祛斑美白",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1540,
    "url": "https://item.taobao.com/item.htm?id=973706969603",
    "bundle": [
     "领券到手"
    ],
    "gifts": [
     {
      "name": "亮肤水",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手1340元送亮肤水+其他；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p002",
  "keywords": [
   "雅诗兰黛",
   "雅诗兰黛面霜智妍胶原",
   "1076878255530",
   "https://item.taobao.com/item.htm?id=1076878255530"
  ],
  "product": {
   "brand": "雅诗兰黛",
   "name": "雅诗兰黛面霜智妍胶原霜乳霜款 抗皱",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1280,
    "url": "https://item.taobao.com/item.htm?id=1076878255530",
    "bundle": [
     "雅诗兰黛面霜智妍胶原霜乳霜款 抗皱"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手1160元-1280元再加赠；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p003",
  "keywords": [
   "海蓝之谜",
   "海蓝之谜奇迹面霜抗皱",
   "835959875676",
   "https://item.taobao.com/item.htm?id=835959875676"
  ],
  "product": {
   "brand": "海蓝之谜",
   "name": "海蓝之谜奇迹面霜抗皱紧致修护面霜礼盒",
   "spec": "60ml",
   "specVolume": 60,
   "unit": "ml",
   "official": 3395,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1800,
    "url": "https://item.taobao.com/item.htm?id=835959875676",
    "bundle": [
     "60ml"
    ],
    "gifts": [
     {
      "name": "64ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "3395元拍60ml送64ml；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥3395，暂无横向对比。"
 },
 {
  "id": "p004",
  "keywords": [
   "FAN BEAUTY DIARY",
   "FANBEAUTYD",
   "1079539324925",
   "https://item.taobao.com/item.htm?id=1079539324925"
  ],
  "product": {
   "brand": "FAN BEAUTY DIARY",
   "name": "FAN BEAUTY DIARY油膏面膜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 396,
    "url": "https://item.taobao.com/item.htm?id=1079539324925",
    "bundle": [
     "FAN BEAUTY DIARY油膏面膜"
    ],
    "gifts": [
     {
      "name": "同款面膜",
      "volume": null,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手228元送同款面膜；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p005",
  "keywords": [
   "DR.WU达尔肤",
   "DRWU达尔肤8复合",
   "789926581513",
   "https://item.taobao.com/item.htm?id=789926581513"
  ],
  "product": {
   "brand": "DR.WU达尔肤",
   "name": "DR.WU达尔肤8%复合酸精华",
   "spec": "45ml",
   "specVolume": 45,
   "unit": "ml",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 636,
    "url": "https://item.taobao.com/item.htm?id=789926581513",
    "bundle": [
     "精华45ml+透亮面膜8片"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "289元精华45ml+透亮面膜8片；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p006",
  "keywords": [
   "FAN BEAUTY DIARY",
   "FANBEAUTYD",
   "1013313371544",
   "https://item.taobao.com/item.htm?id=1013313371544"
  ],
  "product": {
   "brand": "FAN BEAUTY DIARY",
   "name": "FAN BEAUTY DIARY龙血面膜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1424,
    "url": "https://item.taobao.com/item.htm?id=1013313371544",
    "bundle": [
     "盒，领券到手"
    ],
    "gifts": [
     {
      "name": "龙血面膜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍8盒，领券到手584元送龙血面膜；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p007",
  "keywords": [
   "兰蔻",
   "兰蔻全新菁纯面霜奢护",
   "1019306458658",
   "https://item.taobao.com/item.htm?id=1019306458658"
  ],
  "product": {
   "brand": "兰蔻",
   "name": "兰蔻全新菁纯面霜奢护霜 抗老抗皱",
   "spec": "60ml",
   "specVolume": 60,
   "unit": "ml",
   "official": 2950,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1570,
    "url": "https://item.taobao.com/item.htm?id=1019306458658",
    "bundle": [
     "60ml面霜"
    ],
    "gifts": [
     {
      "name": "面霜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "精萃油",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "2950元买60ml面霜送面霜+精萃油；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥2950，暂无横向对比。"
 },
 {
  "id": "p008",
  "keywords": [
   "兰蔻",
   "兰蔻菁纯眼霜淡化细纹",
   "1083979527034",
   "https://item.taobao.com/item.htm?id=1083979527034"
  ],
  "product": {
   "brand": "兰蔻",
   "name": "兰蔻菁纯眼霜 淡化细纹抗老化紧致",
   "spec": "40ml",
   "specVolume": 40,
   "unit": "ml",
   "official": 2400,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1200,
    "url": "https://item.taobao.com/item.htm?id=1083979527034",
    "bundle": [
     "40ml"
    ],
    "gifts": [
     {
      "name": "60ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "2400元买40ml送60ml；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥2400，暂无横向对比。"
 },
 {
  "id": "p009",
  "keywords": [
   "理肤泉",
   "理肤泉全新B5面膜P",
   "742817071549",
   "https://item.taobao.com/item.htm?id=742817071549"
  ],
  "product": {
   "brand": "理肤泉",
   "name": "理肤泉全新B5面膜PRO+补水修护保湿",
   "spec": "60片",
   "specVolume": 60,
   "unit": "片",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 376,
    "url": "https://item.taobao.com/item.htm?id=742817071549",
    "bundle": [
     "到手共60片"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券到手468元共60片；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p010",
  "keywords": [
   "海蓝之谜",
   "海蓝之谜精萃水精华抗",
   "786910554965",
   "https://item.taobao.com/item.htm?id=786910554965"
  ],
  "product": {
   "brand": "海蓝之谜",
   "name": "海蓝之谜精萃水精华抗皱紧致保湿精粹水礼盒",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1115,
    "url": "https://item.taobao.com/item.htm?id=786910554965",
    "bundle": [
     "套组到手"
    ],
    "gifts": [
     {
      "name": "水",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍套组到手5220元赠水+乳+其他；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p011",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰粉气垫轻",
   "805971937297",
   "https://item.taobao.com/item.htm?id=805971937297"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰粉气垫轻覆无瑕",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 695,
    "url": "https://item.taobao.com/item.htm?id=805971937297",
    "bundle": [
     "套组到手"
    ],
    "gifts": [
     {
      "name": "替换芯",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "气垫",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "口红",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍套组到手1145元送替换芯+气垫+口红；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p012",
  "keywords": [
   "肌肤之钥CPB",
   "肌肤之钥CPB晶钻粉",
   "977654597308",
   "https://item.taobao.com/item.htm?id=977654597308"
  ],
  "product": {
   "brand": "肌肤之钥CPB",
   "name": "肌肤之钥CPB晶钻粉霜贵妇粉底液",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 2300,
    "url": "https://item.taobao.com/item.htm?id=977654597308",
    "bundle": [
     "肌肤之钥CPB晶钻粉霜贵妇粉底液"
    ],
    "gifts": [
     {
      "name": "蜜粉",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手2050元送蜜粉；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p013",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰恒久粉底",
   "934383614406",
   "https://item.taobao.com/item.htm?id=934383614406"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰恒久粉底液持妆",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 670,
    "url": "https://item.taobao.com/item.htm?id=934383614406",
    "bundle": [
     "YSL圣罗兰恒久粉底液持妆"
    ],
    "gifts": [
     {
      "name": "粉底液",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手670元送粉底液；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p014",
  "keywords": [
   "Urban Decay",
   "urbandecay",
   "836056775134",
   "https://item.taobao.com/item.htm?id=836056775134"
  ],
  "product": {
   "brand": "Urban Decay",
   "name": "urbandecay长效定妆喷雾ud防水防蹭",
   "spec": "345ml",
   "specVolume": 345,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 220,
    "url": "https://item.taobao.com/item.htm?id=836056775134",
    "bundle": [
     "超大装买1得8！到手345ml"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "超大装买1得8！到手345ml；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p015",
  "keywords": [
   "Mistine蜜丝婷",
   "837166635718",
   "https://item.taobao.com/item.htm?id=837166635718"
  ],
  "product": {
   "brand": "Mistine蜜丝婷",
   "name": "Mistine蜜丝婷KEEP/SPA气垫",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 235,
    "url": "https://item.taobao.com/item.htm?id=837166635718",
    "bundle": [
     "Mistine蜜丝婷KEEP/SPA气垫"
    ],
    "gifts": [
     {
      "name": "高光",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "卸妆油",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍2领券到手229元送高光+卸妆油；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p016",
  "keywords": [
   "INSBAHA",
   "INSBAHA原色波",
   "1089135640836",
   "https://item.taobao.com/item.htm?id=1089135640836"
  ],
  "product": {
   "brand": "INSBAHA",
   "name": "INSBAHA原色波塔反骨系列遮瑕乳",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 109,
    "url": "https://item.taobao.com/item.htm?id=1089135640836",
    "bundle": [
     "INSBAHA原色波塔反骨系列遮瑕乳"
    ],
    "gifts": [
     {
      "name": "遮瑕乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍2领券到手128元送遮瑕乳；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p017",
  "keywords": [
   "欧莱雅",
   "欧莱雅黑金气垫干皮奶",
   "991619332562",
   "https://item.taobao.com/item.htm?id=991619332562"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅黑金气垫干皮奶润",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 867,
    "url": "https://item.taobao.com/item.htm?id=991619332562",
    "bundle": [
     "到手1壳+3芯+1个正装红喷"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "329元到手1壳+3芯+1个正装红喷；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p018",
  "keywords": [
   "欧莱雅",
   "欧莱雅黑胖子气垫控油",
   "930722903925",
   "https://item.taobao.com/item.htm?id=930722903925"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅黑胖子气垫控油持妆",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 403,
    "url": "https://item.taobao.com/item.htm?id=930722903925",
    "bundle": [
     "套组领券到手"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍套组领20元券到手319元；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p019",
  "keywords": [
   "兰蔻",
   "兰蔻持妆轻透粉底液遮",
   "1084868490721",
   "https://item.taobao.com/item.htm?id=1084868490721"
  ],
  "product": {
   "brand": "兰蔻",
   "name": "兰蔻持妆轻透粉底液 遮瑕混油油皮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 490,
    "url": "https://item.taobao.com/item.htm?id=1084868490721",
    "bundle": [
     "兰蔻持妆轻透粉底液 遮瑕混油油皮"
    ],
    "gifts": [
     {
      "name": "粉底液",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手490元送粉底液；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p020",
  "keywords": [
   "花西子",
   "花西子精华粉饼定妆持",
   "859960383400",
   "https://item.taobao.com/item.htm?id=859960383400"
  ],
  "product": {
   "brand": "花西子",
   "name": "花西子精华粉饼定妆持久",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 246,
    "url": "https://item.taobao.com/item.htm?id=859960383400",
    "bundle": [
     "花西子精华粉饼定妆持久"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手179元-189元再加赠；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p021",
  "keywords": [
   "花西子",
   "花西子好气色散粉定妆",
   "860696108965",
   "https://item.taobao.com/item.htm?id=860696108965"
  ],
  "product": {
   "brand": "花西子",
   "name": "花西子好气色散粉定妆久",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 298,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 211,
    "url": "https://item.taobao.com/item.htm?id=860696108965",
    "bundle": [
     "花西子好气色散粉定妆久"
    ],
    "gifts": [
     {
      "name": "1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "到手3个正装",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "到手298元买2送1，到手3个正装；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥298，暂无横向对比。"
 },
 {
  "id": "p022",
  "keywords": [
   "阿玛尼",
   "阿玛尼权力气垫混油皮",
   "785828166751",
   "https://item.taobao.com/item.htm?id=785828166751"
  ],
  "product": {
   "brand": "阿玛尼",
   "name": "阿玛尼权力气垫混油皮无瑕细腻",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 660,
    "url": "https://item.taobao.com/item.htm?id=785828166751",
    "bundle": [
     "阿玛尼权力气垫混油皮无瑕细腻"
    ],
    "gifts": [
     {
      "name": "替换芯",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手660元送替换芯+其他；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p023",
  "keywords": [
   "阿玛尼",
   "阿玛尼小白娇防晒妆前",
   "1005119694997",
   "https://item.taobao.com/item.htm?id=1005119694997"
  ],
  "product": {
   "brand": "阿玛尼",
   "name": "阿玛尼小白娇防晒妆前隔离SPF45",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 450,
    "url": "https://item.taobao.com/item.htm?id=1005119694997",
    "bundle": [
     "阿玛尼小白娇防晒妆前隔离SPF45"
    ],
    "gifts": [
     {
      "name": "防晒乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手450元送防晒乳；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p024",
  "keywords": [
   "毛戈平",
   "毛戈平妆前防晒隔离乳",
   "1044790206846",
   "https://item.taobao.com/item.htm?id=1044790206846"
  ],
  "product": {
   "brand": "毛戈平",
   "name": "毛戈平妆前防晒隔离乳DB",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 660,
    "url": "https://item.taobao.com/item.htm?id=1044790206846",
    "bundle": [
     "到手3支正装，均/支"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "550元到手3支正装，均183.3元/支；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p025",
  "keywords": [
   "欧莱雅",
   "欧莱雅黑胖子超贴粉底",
   "1068237365141",
   "https://item.taobao.com/item.htm?id=1068237365141"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅黑胖子超贴粉底液",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 458,
    "url": "https://item.taobao.com/item.htm?id=1068237365141",
    "bundle": [
     "双支装领券到手"
    ],
    "gifts": [
     {
      "name": "粉底液",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍双支装领券到手368元送粉底液+其他；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p026",
  "keywords": [
   "欧莱雅",
   "欧莱雅金致牡丹美白防",
   "918283059235",
   "https://item.taobao.com/item.htm?id=918283059235"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅金致牡丹美白防晒",
   "spec": "50ml",
   "specVolume": 50,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 320,
    "url": "https://item.taobao.com/item.htm?id=918283059235",
    "bundle": [
     "ml立减到手"
    ],
    "gifts": [
     {
      "name": "同款金致防晒",
      "volume": null,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍50ml立减到手369元赠同款金致防晒；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p027",
  "keywords": [
   "珀莱雅",
   "珀莱雅超膜防晒SPF",
   "1036060699878",
   "https://item.taobao.com/item.htm?id=1036060699878"
  ],
  "product": {
   "brand": "珀莱雅",
   "name": "珀莱雅超膜防晒SPF50+PA+++",
   "spec": "325ml",
   "specVolume": 325,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 999,
    "url": "https://item.taobao.com/item.htm?id=1036060699878",
    "bundle": [
     "100ml到手225ml，到手"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "买100ml到手225ml，到手378元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p028",
  "keywords": [
   "TF",
   "TF黑金唇镜黑管细白",
   "1083157912583",
   "https://item.taobao.com/item.htm?id=1083157912583"
  ],
  "product": {
   "brand": "TF",
   "name": "TF 黑金唇镜 黑管 细白管 口红",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 520,
    "url": "https://item.taobao.com/item.htm?id=1083157912583",
    "bundle": [
     "TF 黑金唇镜 黑管 细白管 口红"
    ],
    "gifts": [
     {
      "name": "香水",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手420元起送香水+其他；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p029",
  "keywords": [
   "欧莱雅",
   "欧莱雅小金管小银管小",
   "885350972596",
   "https://item.taobao.com/item.htm?id=885350972596"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅小金管小银管小紫管",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 400,
    "url": "https://item.taobao.com/item.htm?id=885350972596",
    "bundle": [
     "欧莱雅小金管小银管小紫管"
    ],
    "gifts": [
     {
      "name": "防晒",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1立减到手259元-369元赠防晒；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p030",
  "keywords": [
   "Elegance",
   "EleganceE大",
   "1086846511404",
   "https://item.taobao.com/item.htm?id=1086846511404"
  ],
  "product": {
   "brand": "Elegance",
   "name": "EleganceE大饼家庭装正装27g",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 969,
    "url": "https://item.taobao.com/item.htm?id=1086846511404",
    "bundle": [
     "EleganceE大饼家庭装正装27g"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1立减到手959元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p031",
  "keywords": [
   "卡诗",
   "卡诗黑钻护发精油亮泽",
   "1062750462768",
   "https://item.taobao.com/item.htm?id=1062750462768"
  ],
  "product": {
   "brand": "卡诗",
   "name": "卡诗黑钻护发精油亮泽柔顺",
   "spec": "75ml",
   "specVolume": 75,
   "unit": "ml",
   "official": 510,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 260,
    "url": "https://item.taobao.com/item.htm?id=1062750462768",
    "bundle": [
     "75ml"
    ],
    "gifts": [
     {
      "name": "105ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "510元买75ml送105ml；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥510，暂无横向对比。"
 },
 {
  "id": "p032",
  "keywords": [
   "欧舒丹",
   "欧舒丹护手霜4支套装",
   "1084159029775",
   "https://item.taobao.com/item.htm?id=1084159029775"
  ],
  "product": {
   "brand": "欧舒丹",
   "name": "欧舒丹护手霜4支套装秋冬礼盒送礼",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 540,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=1084159029775",
    "bundle": [
     "2支到手8支正装"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "540元买2支到手8支正装；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价 ¥540，暂无横向对比。"
 },
 {
  "id": "p033",
  "keywords": [
   "她研社",
   "她研社深藏BLUE量",
   "1042779739594",
   "https://item.taobao.com/item.htm?id=1042779739594"
  ],
  "product": {
   "brand": "她研社",
   "name": "她研社深藏BLUE量大吸收卫生巾安睡裤",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 50,
    "url": "https://item.taobao.com/item.htm?id=1042779739594",
    "bundle": [
     "她研社深藏BLUE量大吸收卫生巾安睡裤"
    ],
    "gifts": [
     {
      "name": "经典款",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "护垫",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍4领券到手99元送经典款+护垫；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p034",
  "keywords": [
   "自由点",
   "自由点益生菌卫生巾安",
   "1080868574165",
   "https://item.taobao.com/item.htm?id=1080868574165"
  ],
  "product": {
   "brand": "自由点",
   "name": "自由点益生菌卫生巾安睡裤组zb",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 50.9,
    "url": "https://item.taobao.com/item.htm?id=1080868574165",
    "bundle": [
     "自由点益生菌卫生巾安睡裤组zb"
    ],
    "gifts": [
     {
      "name": "卫生巾",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "护垫",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍4领券到手99.8元送卫生巾+护垫；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p035",
  "keywords": [
   "REGENERATE",
   "1076606285317",
   "https://item.taobao.com/item.htm?id=1076606285317"
  ],
  "product": {
   "brand": "REGENERATE",
   "name": "REGENERATE牙釉呵护美白新品牙膏",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 135,
    "url": "https://item.taobao.com/item.htm?id=1076606285317",
    "bundle": [
     "4支装领券到手再加"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "4支装领券到手256元再加赠；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p036",
  "keywords": [
   "offrelax",
   "offrelax星缎",
   "1009984465250",
   "https://item.taobao.com/item.htm?id=1009984465250"
  ],
  "product": {
   "brand": "offrelax",
   "name": "offrelax星缎修护保湿修护发膜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 599,
    "url": "https://item.taobao.com/item.htm?id=1009984465250",
    "bundle": [
     "offrelax星缎修护保湿修护发膜"
    ],
    "gifts": [
     {
      "name": "替换装",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "囤货装领券到手269元送替换装；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p037",
  "keywords": [
   "OLAY",
   "OLAY超白瓶美白身",
   "975006479795",
   "https://item.taobao.com/item.htm?id=975006479795"
  ],
  "product": {
   "brand": "OLAY",
   "name": "OLAY超白瓶美白身体乳皮肤干燥烟酰胺保湿滋润",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 119,
    "url": "https://item.taobao.com/item.htm?id=975006479795",
    "bundle": [
     "OLAY超白瓶美白身体乳皮肤干燥烟酰胺保湿滋润"
    ],
    "gifts": [
     {
      "name": "身体乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "大容量领42元券到手215元送身体乳；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p038",
  "keywords": [
   "moody",
   "moody经典日抛1",
   "976909516932",
   "https://item.taobao.com/item.htm?id=976909516932"
  ],
  "product": {
   "brand": "moody",
   "name": "moody经典日抛10片美瞳直播专享",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 132,
    "url": "https://item.taobao.com/item.htm?id=976909516932",
    "bundle": [
     "moody经典日抛10片美瞳直播专享"
    ],
    "gifts": [
     {
      "name": "猫超卡",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "其他赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍10领券到手490元送猫超卡+其他；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p039",
  "keywords": [
   "浴见",
   "浴见果酸修护沐浴油直",
   "1085881393561",
   "https://item.taobao.com/item.htm?id=1085881393561"
  ],
  "product": {
   "brand": "浴见",
   "name": "浴见果酸修护沐浴油直播",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 199,
    "url": "https://item.taobao.com/item.htm?id=1085881393561",
    "bundle": [
     "浴见果酸修护沐浴油直播"
    ],
    "gifts": [
     {
      "name": "替换装",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "沐浴油",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "囤货装领券到手348元赠替换装+沐浴油；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p040",
  "keywords": [
   "潘婷",
   "潘婷三分钟奇迹护发素",
   "1080438857334",
   "https://item.taobao.com/item.htm?id=1080438857334"
  ],
  "product": {
   "brand": "潘婷",
   "name": "潘婷三分钟奇迹护发素发膜级修护亮泽",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 1246,
    "url": "https://item.taobao.com/item.htm?id=1080438857334",
    "bundle": [
     "潘婷三分钟奇迹护发素发膜级修护亮泽"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领21元券到手139元-159元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p041",
  "keywords": [
   "惊时",
   "惊时分型控油洗发水2",
   "1079863229089",
   "https://item.taobao.com/item.htm?id=1079863229089"
  ],
  "product": {
   "brand": "惊时",
   "name": "惊时分型控油洗发水2.0修护",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 338,
    "url": "https://item.taobao.com/item.htm?id=1079863229089",
    "bundle": [
     "惊时分型控油洗发水2.0修护"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领12元券到手158元再加赠；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p042",
  "keywords": [
   "舒肤佳",
   "舒肤佳净透沐浴露红石",
   "975452402174",
   "https://item.taobao.com/item.htm?id=975452402174"
  ],
  "product": {
   "brand": "舒肤佳",
   "name": "舒肤佳净透沐浴露红石榴山茶花乌木玫瑰果酸",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 189,
    "url": "https://item.taobao.com/item.htm?id=975452402174",
    "bundle": [
     "舒肤佳净透沐浴露红石榴山茶花乌木玫瑰果酸"
    ],
    "gifts": [
     {
      "name": "补充装",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领20元券到手149元送补充装；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p043",
  "keywords": [
   "海飞丝",
   "海飞丝防脱丰盈去屑洗",
   "1084471486085",
   "https://item.taobao.com/item.htm?id=1084471486085"
  ],
  "product": {
   "brand": "海飞丝",
   "name": "海飞丝防脱丰盈去屑洗发水蓬松控油固发强韧防掉发洗头膏露正品",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 147.01,
    "url": "https://item.taobao.com/item.htm?id=1084471486085",
    "bundle": [
     "瓶领券到手/3瓶"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍3瓶领20元券到手159元/3瓶；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p044",
  "keywords": [
   "适乐肤",
   "适乐肤氨基酸型水杨酸",
   "865032783425",
   "https://item.taobao.com/item.htm?id=865032783425"
  ],
  "product": {
   "brand": "适乐肤",
   "name": "适乐肤氨基酸型水杨酸洁面",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 235,
    "url": "https://item.taobao.com/item.htm?id=865032783425",
    "bundle": [
     "适乐肤氨基酸型水杨酸洁面"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领对应券到手98元-198元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p045",
  "keywords": [
   "潘婷",
   "潘婷泡弹发膜胜肽修护",
   "1080442261870",
   "https://item.taobao.com/item.htm?id=1080442261870"
  ],
  "product": {
   "brand": "潘婷",
   "name": "潘婷泡弹发膜胜肽修护滋养女非护发素",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 540,
    "url": "https://item.taobao.com/item.htm?id=1080442261870",
    "bundle": [
     "潘婷泡弹发膜胜肽修护滋养女非护发素"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领21元券到手159元-269元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p046",
  "keywords": [
   "欧莱雅",
   "欧莱雅玻尿酸活力姜洗",
   "984024689138",
   "https://item.taobao.com/item.htm?id=984024689138"
  ],
  "product": {
   "brand": "欧莱雅",
   "name": "欧莱雅玻尿酸活力姜洗发水控油蓬松",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 336,
    "url": "https://item.taobao.com/item.htm?id=984024689138",
    "bundle": [
     "欧莱雅玻尿酸活力姜洗发水控油蓬松"
    ],
    "gifts": [
     {
      "name": "旅行装80ml*6",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券到手199元送旅行装80ml*6；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p047",
  "keywords": [
   "倍至",
   "倍至蓝光刷Pro美白",
   "1005857083483",
   "https://item.taobao.com/item.htm?id=1005857083483"
  ],
  "product": {
   "brand": "倍至",
   "name": "倍至蓝光刷Pro美白电动牙刷",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 141,
    "url": "https://item.taobao.com/item.htm?id=1005857083483",
    "bundle": [
     "CP套组领券到手"
    ],
    "gifts": [
     {
      "name": "刷头",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "牙膏",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍CP套组领券到手1499元送刷头+牙膏；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p048",
  "keywords": [
   "雅漾",
   "雅漾酸A精华祛痘精华",
   "1020775105667",
   "https://item.taobao.com/item.htm?id=1020775105667"
  ],
  "product": {
   "brand": "雅漾",
   "name": "雅漾酸A精华祛痘精华乳A醛控油细毛孔褪痘红",
   "spec": "40ml",
   "specVolume": 40,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 181,
    "url": "https://item.taobao.com/item.htm?id=1020775105667",
    "bundle": [
     "40ml"
    ],
    "gifts": [
     {
      "name": "超修面膜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "倍护霜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "买40ml送超修面膜+倍护霜；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p049",
  "keywords": [
   "EltaMD",
   "EltaMD安妍科泡",
   "1084505527297",
   "https://item.taobao.com/item.htm?id=1084505527297"
  ],
  "product": {
   "brand": "EltaMD",
   "name": "EltaMD安妍科泡沫洁面207ml",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 120,
    "url": "https://item.taobao.com/item.htm?id=1084505527297",
    "bundle": [
     "领券到手2瓶"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍2领45元券到手195元2瓶；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p050",
  "keywords": [
   "资生堂",
   "资生堂时光琉璃洁颜乳",
   "1071934694799",
   "https://item.taobao.com/item.htm?id=1071934694799"
  ],
  "product": {
   "brand": "资生堂",
   "name": "资生堂时光琉璃洁颜乳洗面奶洁面清洁温和养肤",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 540,
    "url": "https://item.taobao.com/item.htm?id=1071934694799",
    "bundle": [
     "资生堂时光琉璃洁颜乳洗面奶洁面清洁温和养肤"
    ],
    "gifts": [
     {
      "name": "丰润洁颜乳125ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1到手620元赠丰润洁颜乳125ml；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p051",
  "keywords": [
   "Margaret Dabbs",
   "MargaretDa",
   "1095790431912",
   "https://item.taobao.com/item.htm?id=1095790431912"
  ],
  "product": {
   "brand": "Margaret Dabbs",
   "name": "Margaret Dabbs奇迹足霜150ml",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 268,
    "url": "https://item.taobao.com/item.htm?id=1095790431912",
    "bundle": [
     "Margaret Dabbs奇迹足霜150ml"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1立减43元到手239元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p052",
  "keywords": [
   "倍加洁",
   "倍加洁宽薄牙刷成人宽",
   "840983776820",
   "https://item.taobao.com/item.htm?id=840983776820"
  ],
  "product": {
   "brand": "倍加洁",
   "name": "倍加洁宽薄牙刷成人宽头软毛情侣家用护龈家庭装独立包装男女专用",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 12.5,
    "url": "https://item.taobao.com/item.htm?id=840983776820",
    "bundle": [
     "支到手"
    ],
    "gifts": [
     {
      "name": "牙刷挂钩",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "牙线棒",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍24支到手83.8元送牙刷挂钩+牙线棒；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p053",
  "keywords": [
   "舒适达",
   "舒适达清新护齿护釉健",
   "878158776394",
   "https://item.taobao.com/item.htm?id=878158776394"
  ],
  "product": {
   "brand": "舒适达",
   "name": "舒适达清新护齿护釉健美白牙膏舒缓敏感抗酸任选",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 135.9,
    "url": "https://item.taobao.com/item.htm?id=878158776394",
    "bundle": [
     "舒适达清新护齿护釉健美白牙膏舒缓敏感抗酸任选"
    ],
    "gifts": [
     {
      "name": "牙膏",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手89.9元-176元送牙膏；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p054",
  "keywords": [
   "fino芬浓",
   "侯明昊同款fino芬",
   "925801623556",
   "https://item.taobao.com/item.htm?id=925801623556"
  ],
  "product": {
   "brand": "fino芬浓",
   "name": "侯明昊同款fino芬浓银钻发膜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 139,
    "url": "https://item.taobao.com/item.htm?id=925801623556",
    "bundle": [
     "侯明昊同款fino芬浓银钻发膜"
    ],
    "gifts": [
     {
      "name": "发膜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "三罐装，领30元券到手199元送发膜；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p055",
  "keywords": [
   "倩碧",
   "倩碧紫胖子卸妆膏温和",
   "1085492164010",
   "https://item.taobao.com/item.htm?id=1085492164010"
  ],
  "product": {
   "brand": "倩碧",
   "name": "倩碧紫胖子卸妆膏 温和深层清洁毛孔",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 420,
    "url": "https://item.taobao.com/item.htm?id=1085492164010",
    "bundle": [
     "倩碧紫胖子卸妆膏 温和深层清洁毛孔"
    ],
    "gifts": [
     {
      "name": "正",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍紫胖子，370元买正送正；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p056",
  "keywords": [
   "薇姿",
   "薇姿绿标二硫化硒去屑",
   "897317785479",
   "https://item.taobao.com/item.htm?id=897317785479"
  ],
  "product": {
   "brand": "薇姿",
   "name": "薇姿绿标二硫化硒去屑红标洗发水",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 460,
    "url": "https://item.taobao.com/item.htm?id=897317785479",
    "bundle": [
     "薇姿绿标二硫化硒去屑红标洗发水"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领150元券到手189元起；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p057",
  "keywords": [
   "护舒宝",
   "护舒宝幻彩液体卫生巾",
   "1061029251811",
   "https://item.taobao.com/item.htm?id=1061029251811"
  ],
  "product": {
   "brand": "护舒宝",
   "name": "护舒宝幻彩液体卫生巾超长夜用组合赠安睡裤",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 181.9,
    "url": "https://item.taobao.com/item.htm?id=1061029251811",
    "bundle": [
     "护舒宝幻彩液体卫生巾超长夜用组合赠安睡裤"
    ],
    "gifts": [
     {
      "name": "卫生巾",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍2领150元券到手359.8元赠卫生巾；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p058",
  "keywords": [
   "usmile",
   "同笔订单拍3usmi",
   "938136892642",
   "https://item.taobao.com/item.htm?id=938136892642"
  ],
  "product": {
   "brand": "usmile",
   "name": "同笔订单拍3 usmile笑容加小海马牙线",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 129.9,
    "url": "https://item.taobao.com/item.htm?id=938136892642",
    "bundle": [
     "同笔订单拍3 usmile笑容加小海马牙线"
    ],
    "gifts": [
     {
      "name": "牙线便携盒",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "牙线",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍3领券到手79.9元赠牙线便携盒+牙线；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p059",
  "keywords": [
   "欧乐B",
   "欧乐B官方电动牙刷原",
   "989485451773",
   "https://item.taobao.com/item.htm?id=989485451773"
  ],
  "product": {
   "brand": "欧乐B",
   "name": "欧乐B官方电动牙刷原装刷头",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 799,
    "url": "https://item.taobao.com/item.htm?id=989485451773",
    "bundle": [
     "欧乐B官方电动牙刷原装刷头"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍1领券到手165元-354元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p060",
  "keywords": [
   "usmile",
   "usmile笑容加电",
   "1070825677635",
   "https://item.taobao.com/item.htm?id=1070825677635"
  ],
  "product": {
   "brand": "usmile",
   "name": "usmile笑容加电动牙刷Y50",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "李佳琦Austin · 双11收官夜",
    "official": false,
    "heat": 100,
    "price": 479,
    "url": "https://item.taobao.com/item.htm?id=1070825677635",
    "bundle": [
     "usmile笑容加电动牙刷Y50"
    ],
    "gifts": [
     {
      "name": "美白牙膏",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍Y50领券到手329元送美白牙膏；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（李佳琦Austin · 双11收官夜），官方价待核，暂无横向对比。"
 },
 {
  "id": "p061",
  "keywords": [
   "梅森马吉拉",
   "梅森马吉拉慵懒周末温",
   "989504483925",
   "https://item.taobao.com/item.htm?id=989504483925"
  ],
  "product": {
   "brand": "梅森马吉拉",
   "name": "梅森马吉拉慵懒周末温暖壁炉淡香水礼物o",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 690,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 660,
    "url": "https://item.taobao.com/item.htm?id=989504483925",
    "bundle": [
     "梅森马吉拉慵懒周末温暖壁炉淡香水礼物o"
    ],
    "gifts": [
     {
      "name": "身体乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "品牌皮质包包等",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "直接拍=690起 赠身体乳+品牌皮质包包等；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥690，暂无横向对比。"
 },
 {
  "id": "p062",
  "keywords": [
   "珀莱雅",
   "珀莱雅全新第四代红宝",
   "920968580632",
   "https://item.taobao.com/item.htm?id=920968580632"
  ],
  "product": {
   "brand": "珀莱雅",
   "name": "珀莱雅全新第四代红宝石面霜双环肽抗皱紧致",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 249,
    "url": "https://item.taobao.com/item.htm?id=920968580632",
    "bundle": [
     "珀莱雅全新第四代红宝石面霜双环肽抗皱紧致"
    ],
    "gifts": [
     {
      "name": "同款15g*3",
      "volume": 45,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "面膜2片",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立减=279元 赠同款15g*3+面膜2片；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价待核，暂无横向对比。"
 },
 {
  "id": "p063",
  "keywords": [
   "雅萌",
   "雅萌超光面罩美容仪绿",
   "1100950256234",
   "https://item.taobao.com/item.htm?id=1100950256234"
  ],
  "product": {
   "brand": "雅萌",
   "name": "雅萌超光面罩美容仪绿光大排灯光子面膜仪美白嫩肤",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 5599,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 5599,
    "url": "https://item.taobao.com/item.htm?id=1100950256234",
    "bundle": [
     "雅萌超光面罩美容仪绿光大排灯光子面膜仪美白嫩肤"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍立减=5599元 叠折扣券再减100；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥5599，暂无横向对比。"
 },
 {
  "id": "p064",
  "keywords": [
   "雅萌",
   "雅萌闪修仪Pro家用",
   "1012079386765",
   "https://item.taobao.com/item.htm?id=1012079386765"
  ],
  "product": {
   "brand": "雅萌",
   "name": "雅萌闪修仪Pro家用脸部美容仪抗皱送礼推荐",
   "spec": "19件",
   "specVolume": 19,
   "unit": "件",
   "official": 2999,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 2919,
    "url": "https://item.taobao.com/item.htm?id=1012079386765",
    "bundle": [
     "拍到手19件 可凑消费券"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=2999元 拍到手19件 可凑消费券；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥2999，暂无横向对比。"
 },
 {
  "id": "p065",
  "keywords": [
   "珀莱雅",
   "珀莱雅红宝石水乳套装",
   "919635359477",
   "https://item.taobao.com/item.htm?id=919635359477"
  ],
  "product": {
   "brand": "珀莱雅",
   "name": "珀莱雅红宝石水乳套装紧致抗皱淡纹",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 418,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 388,
    "url": "https://item.taobao.com/item.htm?id=919635359477",
    "bundle": [
     "立减=418"
    ],
    "gifts": [
     {
      "name": "水",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "乳",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "霜5g",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "面膜2盒",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍立减=418赠水+乳+霜5g+面膜2盒；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥418，暂无横向对比。"
 },
 {
  "id": "p066",
  "keywords": [
   "OLAY",
   "OLAY淡斑小白瓶烟",
   "1051766136034",
   "https://item.taobao.com/item.htm?id=1051766136034"
  ],
  "product": {
   "brand": "OLAY",
   "name": "OLAY淡斑小白瓶烟酰胺精华液传明酸美白提亮玉兰油",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 450,
    "url": "https://item.taobao.com/item.htm?id=1051766136034",
    "bundle": [
     "OLAY淡斑小白瓶烟酰胺精华液传明酸美白提亮玉兰油"
    ],
    "gifts": [
     {
      "name": "同款精华14ml*4",
      "volume": 56,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "面膜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立减=480起，赠同款精华14ml*4+面膜；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价待核，暂无横向对比。"
 },
 {
  "id": "p067",
  "keywords": [
   "OLAY",
   "OLAY玉兰油超红瓶",
   "838688543033",
   "https://item.taobao.com/item.htm?id=838688543033"
  ],
  "product": {
   "brand": "OLAY",
   "name": "OLAY玉兰油超红瓶面霜抗皱紧致",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 289,
    "url": "https://item.taobao.com/item.htm?id=838688543033",
    "bundle": [
     "OLAY玉兰油超红瓶面霜抗皱紧致"
    ],
    "gifts": [
     {
      "name": "同款面霜",
      "volume": null,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "洁面",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立减=319元起 赠同款面霜+洁面；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价待核，暂无横向对比。"
 },
 {
  "id": "p068",
  "keywords": [
   "SINGULADERM圣歌兰",
   "SINGULADER",
   "960695403116",
   "https://item.taobao.com/item.htm?id=960695403116"
  ],
  "product": {
   "brand": "SINGULADERM圣歌兰",
   "name": "SINGULADERM圣歌兰SOS精华3.0淡纹紧致胶原抗皱",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 599,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 569,
    "url": "https://item.taobao.com/item.htm?id=960695403116",
    "bundle": [
     "SINGULADERM圣歌兰SOS精华3.0淡纹紧致胶原抗皱"
    ],
    "gifts": [
     {
      "name": "好礼赠品（页面未列明）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=599/719元 赠好礼；直播价；主播券 21 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥599，暂无横向对比。"
 },
 {
  "id": "p069",
  "keywords": [
   "羽西",
   "羽西鎏金绷复霜回弹霜",
   "1016188222663",
   "https://item.taobao.com/item.htm?id=1016188222663"
  ],
  "product": {
   "brand": "羽西",
   "name": "羽西鎏金绷复霜/回弹霜玻色因pdrn抗皱紧致淡纹O",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 439,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 409,
    "url": "https://item.taobao.com/item.htm?id=1016188222663",
    "bundle": [
     "439/ 买一瓶"
    ],
    "gifts": [
     {
      "name": "一瓶正装量",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=439/459元 买一瓶送一瓶正装量；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥439，暂无横向对比。"
 },
 {
  "id": "p070",
  "keywords": [
   "羽西",
   "羽西鎏金瓶精华21玻",
   "1012759298244",
   "https://item.taobao.com/item.htm?id=1012759298244"
  ],
  "product": {
   "brand": "羽西",
   "name": "羽西鎏金瓶精华 21%玻色因溶液淡纹修护抗皱紧致O",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 309,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 279,
    "url": "https://item.taobao.com/item.htm?id=1012759298244",
    "bundle": [
     "羽西鎏金瓶精华 21%玻色因溶液淡纹修护抗皱紧致O"
    ],
    "gifts": [
     {
      "name": "正装量精华",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=309元起 再赠正装量精华；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥309，暂无横向对比。"
 },
 {
  "id": "p071",
  "keywords": [
   "祖玛珑",
   "祖玛珑维他命E唇蜜1",
   "990809961176",
   "https://item.taobao.com/item.htm?id=990809961176"
  ],
  "product": {
   "brand": "祖玛珑",
   "name": "祖玛珑维他命E唇蜜15ml 滋润仅直播期间订单享受权益",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 310,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 280,
    "url": "https://item.taobao.com/item.htm?id=990809961176",
    "bundle": [
     "祖玛珑维他命E唇蜜15ml 滋润仅直播期间订单享受权益"
    ],
    "gifts": [
     {
      "name": "护手霜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "香氛等",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "直接拍=310元 赠护手霜+香氛等；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥310，暂无横向对比。"
 },
 {
  "id": "p072",
  "keywords": [
   "达肤妍",
   "达肤妍全能b5修护面",
   "991498624598",
   "https://item.taobao.com/item.htm?id=991498624598"
  ],
  "product": {
   "brand": "达肤妍",
   "name": "达肤妍全能b5修护面膜紧致修护舒缓淡红补水保湿",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 189,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 189,
    "url": "https://item.taobao.com/item.htm?id=991498624598",
    "bundle": [
     "达肤妍全能b5修护面膜紧致修护舒缓淡红补水保湿"
    ],
    "gifts": [
     {
      "name": "到手41片",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=189元含赠到手41片；直播价；主播券 75 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥189，暂无横向对比。"
 },
 {
  "id": "p073",
  "keywords": [
   "科瑞肤",
   "科瑞肤兜底面霜20舒",
   "933466510645",
   "https://item.taobao.com/item.htm?id=933466510645"
  ],
  "product": {
   "brand": "科瑞肤",
   "name": "科瑞肤兜底面霜2.0舒缓修护救急敏感肌紧致抗皱HK",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 319,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 289,
    "url": "https://item.taobao.com/item.htm?id=933466510645",
    "bundle": [
     "科瑞肤兜底面霜2.0舒缓修护救急敏感肌紧致抗皱HK"
    ],
    "gifts": [
     {
      "name": "到手97g",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=319 含赠到手97g；补贴后；主播券 40 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥319，暂无横向对比。"
 },
 {
  "id": "p074",
  "keywords": [
   "澳尔滨",
   "澳尔滨健康水爽肤精萃",
   "927914478637",
   "https://item.taobao.com/item.htm?id=927914478637"
  ],
  "product": {
   "brand": "澳尔滨",
   "name": "澳尔滨健康水爽肤精萃液光嫩乳优活紧致美白保湿乳",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 615,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 585,
    "url": "https://item.taobao.com/item.htm?id=927914478637",
    "bundle": [
     "澳尔滨健康水爽肤精萃液光嫩乳优活紧致美白保湿乳"
    ],
    "gifts": [
     {
      "name": "健康水",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "棉片",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=615元起 赠健康水+棉片；直播价；主播券 25 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥615，暂无横向对比。"
 },
 {
  "id": "p075",
  "keywords": [
   "cellcosmet瑞妍",
   "cellcosmet",
   "1086983934635",
   "https://item.taobao.com/item.htm?id=1086983934635"
  ],
  "product": {
   "brand": "cellcosmet瑞妍",
   "name": "cellcosmet瑞妍活力生机霜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 3190,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 3110,
    "url": "https://item.taobao.com/item.htm?id=1086983934635",
    "bundle": [
     "cellcosmet瑞妍活力生机霜"
    ],
    "gifts": [
     {
      "name": "生机霜",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=3190元起 赠生机霜；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥3190，暂无横向对比。"
 },
 {
  "id": "p076",
  "keywords": [
   "碧欧泉",
   "碧欧泉男士水动力三件",
   "724159443357",
   "https://item.taobao.com/item.htm?id=724159443357"
  ],
  "product": {
   "brand": "碧欧泉",
   "name": "碧欧泉男士水动力三件套补水保湿护肤送男友O",
   "spec": "10件",
   "specVolume": 10,
   "unit": "件",
   "official": 1205,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 1125,
    "url": "https://item.taobao.com/item.htm?id=724159443357",
    "bundle": [
     "1205 买1套到手10件"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "直接拍=1205 买1套到手10件；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥1205，暂无横向对比。"
 },
 {
  "id": "p077",
  "keywords": [
   "林清轩",
   "林清轩第六代山茶花抗",
   "1068844835797",
   "https://item.taobao.com/item.htm?id=1068844835797"
  ],
  "product": {
   "brand": "林清轩",
   "name": "林清轩第六代山茶花抗皱面部精华油修护紧致淡纹护肤",
   "spec": "8件",
   "specVolume": 8,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 409,
    "url": "https://item.taobao.com/item.htm?id=1068844835797",
    "bundle": [
     "439拍一发8件第6代精华油重磅升级"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券439拍一发8件第6代精华油重磅升级；直播价；主播券 62 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价待核，暂无横向对比。"
 },
 {
  "id": "p078",
  "keywords": [
   "freeplus芙丽芳丝",
   "freeplus芙丽",
   "747170604233",
   "https://item.taobao.com/item.htm?id=747170604233"
  ],
  "product": {
   "brand": "freeplus芙丽芳丝",
   "name": "freeplus芙丽芳丝氨基酸系洁面洗面奶霜温和男女官方",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 120,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 120,
    "url": "https://item.taobao.com/item.htm?id=747170604233",
    "bundle": [
     "freeplus芙丽芳丝氨基酸系洁面洗面奶霜温和男女官方"
    ],
    "gifts": [
     {
      "name": "到手共160g",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=120元 含赠到手共160g；直播价；主播券 113 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥120，暂无横向对比。"
 },
 {
  "id": "p079",
  "keywords": [
   "福来freiol",
   "福来freiol抚纹",
   "1063477050706",
   "https://item.taobao.com/item.htm?id=1063477050706"
  ],
  "product": {
   "brand": "福来freiol",
   "name": "福来freiol抚纹油身体油防纹滋润紧致精华油200ml",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 198,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 180,
    "url": "https://item.taobao.com/item.htm?id=1063477050706",
    "bundle": [
     "福来freiol抚纹油身体油防纹滋润紧致精华油200ml"
    ],
    "gifts": [
     {
      "name": "抚纹油15ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "刮板",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍立减=198元 赠抚纹油15ml+刮板；补贴后；主播券 30 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥198，暂无横向对比。"
 },
 {
  "id": "p080",
  "keywords": [
   "城野医生",
   "城野医生VC377超",
   "803622350075",
   "https://item.taobao.com/item.htm?id=803622350075"
  ],
  "product": {
   "brand": "城野医生",
   "name": "城野医生VC377超光瓶美白淡斑精华紧致提亮",
   "spec": "74g",
   "specVolume": 74,
   "unit": "g",
   "official": 590,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 560,
    "url": "https://item.taobao.com/item.htm?id=803622350075",
    "bundle": [
     "到手74g+vc水26ml"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=590元到手74g+vc水26ml；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥590，暂无横向对比。"
 },
 {
  "id": "p081",
  "keywords": [
   "spes多肽精华蓬松控油",
   "spes多肽精华蓬松",
   "1034192713453",
   "https://item.taobao.com/item.htm?id=1034192713453"
  ],
  "product": {
   "brand": "spes多肽精华蓬松控油",
   "name": "spes多肽精华蓬松控油洗发水500ml",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 199,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 181,
    "url": "https://item.taobao.com/item.htm?id=1034192713453",
    "bundle": [
     "spes多肽精华蓬松控油洗发水500ml"
    ],
    "gifts": [
     {
      "name": "同款洗发水",
      "volume": null,
      "value": 0,
      "kind": "same",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "沐浴露500ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=199起赠同款洗发水+沐浴露500ml；补贴后；主播券 31 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥199，暂无横向对比。"
 },
 {
  "id": "p082",
  "keywords": [
   "POLA宝丽",
   "7代POLA宝丽碧艾",
   "1019837123891",
   "https://item.taobao.com/item.htm?id=1019837123891"
  ],
  "product": {
   "brand": "POLA宝丽",
   "name": "7代POLA宝丽碧艾净透亮采洁面膏黑BA洗面奶",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 700,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 670,
    "url": "https://item.taobao.com/item.htm?id=1019837123891",
    "bundle": [
     "7代POLA宝丽碧艾净透亮采洁面膏黑BA洗面奶"
    ],
    "gifts": [
     {
      "name": "洁面",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "卸妆等",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "直接拍=700/1400元 赠洁面+卸妆等；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥700，暂无横向对比。"
 },
 {
  "id": "p083",
  "keywords": [
   "EVELOM伊芙珑",
   "EVELOM伊芙珑蚕",
   "1020198535605",
   "https://item.taobao.com/item.htm?id=1020198535605"
  ],
  "product": {
   "brand": "EVELOM伊芙珑",
   "name": "EVELOM伊芙珑蚕茧膜霜紧致抗皱",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 1370,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 460,
    "url": "https://item.taobao.com/item.htm?id=1020198535605",
    "bundle": [
     "EVELOM伊芙珑蚕茧膜霜紧致抗皱"
    ],
    "gifts": [
     {
      "name": "膜霜替换芯50ml*1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=1370元 赠膜霜替换芯50ml*1；直播价；主播券 10 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥1370，暂无横向对比。"
 },
 {
  "id": "p084",
  "keywords": [
   "朵梵",
   "朵梵小珍珠精华油A醇",
   "792941557102",
   "https://item.taobao.com/item.htm?id=792941557102"
  ],
  "product": {
   "brand": "朵梵",
   "name": "朵梵小珍珠精华油A醇次抛精油保湿抗皱紧致",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 450,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 420,
    "url": "https://item.taobao.com/item.htm?id=792941557102",
    "bundle": [
     "朵梵小珍珠精华油A醇次抛精油保湿抗皱紧致"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "直接拍=450元 买30粒到手58粒；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥450，暂无横向对比。"
 },
 {
  "id": "p085",
  "keywords": [
   "百雀羚",
   "百雀羚小雀幸滢润面膜",
   "535376421618",
   "https://item.taobao.com/item.htm?id=535376421618"
  ],
  "product": {
   "brand": "百雀羚",
   "name": "百雀羚小雀幸滢润面膜补水保湿贴片面膜旗舰店",
   "spec": "50片",
   "specVolume": 50,
   "unit": "片",
   "official": 99,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 97.87,
    "url": "https://item.taobao.com/item.htm?id=535376421618",
    "bundle": [
     "立减=/50片"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "拍立减=99元/50片；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥99，暂无横向对比。"
 },
 {
  "id": "p086",
  "keywords": [
   "Murad慕拉得",
   "Murad慕拉得A醇",
   "837793424941",
   "https://item.taobao.com/item.htm?id=837793424941"
  ],
  "product": {
   "brand": "Murad慕拉得",
   "name": "Murad慕拉得A醇精华30ml视黄醇精华紧致抗皱淡纹",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 968,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 888,
    "url": "https://item.taobao.com/item.htm?id=837793424941",
    "bundle": [
     "Murad慕拉得A醇精华30ml视黄醇精华紧致抗皱淡纹"
    ],
    "gifts": [
     {
      "name": "多重好礼",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=968元 赠多重好礼；直播价；主播券 54 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥968，暂无横向对比。"
 },
 {
  "id": "p087",
  "keywords": [
   "德美乐嘉",
   "德美乐嘉多维面膜75",
   "1070507985520",
   "https://item.taobao.com/item.htm?id=1070507985520"
  ],
  "product": {
   "brand": "德美乐嘉",
   "name": "德美乐嘉多维面膜75ml焕亮修护抗皱涂抹面膜",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 549,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 511.92,
    "url": "https://item.taobao.com/item.htm?id=1070507985520",
    "bundle": [
     "德美乐嘉多维面膜75ml焕亮修护抗皱涂抹面膜"
    ],
    "gifts": [
     {
      "name": "多维面膜20ml",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     },
     {
      "name": "面膜碗刷",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=549 赠多维面膜20ml+面膜碗刷；直播价；主播券 74 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥549，暂无横向对比。"
 },
 {
  "id": "p088",
  "keywords": [
   "EVELOM伊芙珑",
   "EVELOM伊芙珑传",
   "691291183822",
   "https://item.taobao.com/item.htm?id=691291183822"
  ],
  "product": {
   "brand": "EVELOM伊芙珑",
   "name": "EVELOM伊芙珑传奇洁颜霜卸妆膏清洁",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 440,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 410,
    "url": "https://item.taobao.com/item.htm?id=691291183822",
    "bundle": [
     "EVELOM伊芙珑传奇洁颜霜卸妆膏清洁"
    ],
    "gifts": [
     {
      "name": "洁颜霜50ml等好礼",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=440元起 赠洁颜霜50ml等好礼；直播价；主播券 50 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥440，暂无横向对比。"
 },
 {
  "id": "p089",
  "keywords": [
   "TAL雪绒花手足磨砂膏精",
   "TAL雪绒花手足磨砂",
   "1032769451839",
   "https://item.taobao.com/item.htm?id=1032769451839"
  ],
  "product": {
   "brand": "TAL雪绒花手足磨砂膏精",
   "name": "TAL雪绒花手足磨砂膏精油嫩白淡化手纹去角质死皮手足部护理专用",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 158,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "胡可",
    "official": false,
    "heat": 98,
    "price": 140,
    "url": "https://item.taobao.com/item.htm?id=1032769451839",
    "bundle": [
     "158/支 清甜橙花果香"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "领券=158/支 清甜橙花果香；直播价；主播券 16 元；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（胡可），官方价 ¥158，暂无横向对比。"
 },
 {
  "id": "p090",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰偏心护手",
   "1064921707873",
   "https://item.taobao.com/item.htm?id=1064921707873"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰偏心护手霜润唇膏套装 滋润口红生日送女生",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 960,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 880,
    "url": "https://item.taobao.com/item.htm?id=1064921707873",
    "bundle": [
     "YSL「勃艮第」节日限定 手唇呵护礼盒"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "YSL「勃艮第」节日限定 手唇呵护礼盒；直播页商品卡价；限时限量"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价 ¥960，暂无横向对比。"
 },
 {
  "id": "p091",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰夜皇后护",
   "1008801961560",
   "https://item.taobao.com/item.htm?id=1008801961560"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰夜皇后护肤套装 水乳精华护肤品生日礼物女",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 1700,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1620,
    "url": "https://item.taobao.com/item.htm?id=1008801961560",
    "bundle": [
     "夜皇后CP！既修肤质 又修肤色"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "夜皇后CP！既修肤质 又修肤色；直播页商品卡价；限时限量"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价 ¥1700，暂无横向对比。"
 },
 {
  "id": "p092",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰粉气垫粉",
   "667038097463",
   "https://item.taobao.com/item.htm?id=667038097463"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰粉气垫 粉底液服帖遮瑕持久底妆生日送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 420,
    "url": "https://item.taobao.com/item.htm?id=667038097463",
    "bundle": [
     "YSL圣罗兰粉气垫 粉底液服帖遮瑕持久底妆生日送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "润遮贴 一拍天生好皮；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p093",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰夜皇后调",
   "862616205541",
   "https://item.taobao.com/item.htm?id=862616205541"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰夜皇后调皮水 保湿维稳爽肤水精华水护肤品生日礼物女生",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 750,
    "url": "https://item.taobao.com/item.htm?id=862616205541",
    "bundle": [
     "YSL圣罗兰夜皇后调皮水 保湿维稳爽肤水精华水护肤品生日礼物女生"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "7天还原肌肤平整度；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p094",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰恒久粉底",
   "698274841262",
   "https://item.taobao.com/item.htm?id=698274841262"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰恒久粉底液 油皮遮瑕轻薄持久控油底妆化妆品生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 640,
    "url": "https://item.taobao.com/item.htm?id=698274841262",
    "bundle": [
     "超薄雾面 HIGH到凌晨"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "超薄雾面 HIGH到凌晨；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p095",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰夜皇后精",
   "754417343558",
   "https://item.taobao.com/item.htm?id=754417343558"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰夜皇后精华 熬夜细嫩透亮精华液护肤品生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 830,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 750,
    "url": "https://item.taobao.com/item.htm?id=754417343558",
    "bundle": [
     "YSL圣罗兰夜皇后精华 熬夜细嫩透亮精华液护肤品生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "一夜去黄，透嫩细亮！；直播页商品卡价；限时限量"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价 ¥830，暂无横向对比。"
 },
 {
  "id": "p096",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰粉气垫护",
   "982247108352",
   "https://item.taobao.com/item.htm?id=982247108352"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰粉气垫护手霜套装 滋润服帖底妆秋冬爱心礼物女",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 1060,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 980,
    "url": "https://item.taobao.com/item.htm?id=982247108352",
    "bundle": [
     "手霜气垫套组 又润又贴 秋冬必备！"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "手霜气垫套组 又润又贴 秋冬必备！；直播页商品卡价；限时限量"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价 ¥1060，暂无横向对比。"
 },
 {
  "id": "p097",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰偏心护手",
   "1066749889208",
   "https://item.taobao.com/item.htm?id=1066749889208"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰偏心护手霜 秋冬保湿滋润不粘腻爱心生日女生",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 520,
    "url": "https://item.taobao.com/item.htm?id=1066749889208",
    "bundle": [
     "YSL圣罗兰偏心护手霜 秋冬保湿滋润不粘腻爱心生日女生"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "偏心护手霜 偏心不想放手；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p098",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰贴肤衣粉",
   "962501176077",
   "https://item.taobao.com/item.htm?id=962501176077"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰贴肤衣粉底液 混干皮养肤滋润服帖遮瑕化妆品生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 640,
    "url": "https://item.taobao.com/item.htm?id=962501176077",
    "bundle": [
     "YSL圣罗兰贴肤衣粉底液 混干皮养肤滋润服帖遮瑕化妆品生日礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "秋冬必入！不卡粉 恒久贴；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p099",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰全新真皮",
   "565068091964",
   "https://item.taobao.com/item.htm?id=565068091964"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰全新真皮气垫 混油皮粉底液持久遮瑕底妆生日礼物女生",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 420,
    "url": "https://item.taobao.com/item.htm?id=565068091964",
    "bundle": [
     "YSL圣罗兰全新真皮气垫 混油皮粉底液持久遮瑕底妆生日礼物女生"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "「真皮」雾面 混油天菜；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p100",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰小金条口",
   "582320504739",
   "https://item.taobao.com/item.htm?id=582320504739"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰小金条口红 1961秋冬哑光雾面唇膏生日礼物",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 390,
    "url": "https://item.taobao.com/item.htm?id=582320504739",
    "bundle": [
     "YSL圣罗兰小金条口红 1961秋冬哑光雾面唇膏生日礼物"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！#1988 摘星者 肉桂裸茶；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p101",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰黑管爱心",
   "564093547806",
   "https://item.taobao.com/item.htm?id=564093547806"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰黑管爱心唇釉 镜面口红610化妆品生日礼盒女生",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=564093547806",
    "bundle": [
     "立即下单！爱心唇釉 欲感玻璃唇"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！爱心唇釉 欲感玻璃唇；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p102",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰粉管润唇",
   "778301891534",
   "https://item.taobao.com/item.htm?id=778301891534"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰粉管润唇膏 口红滋润保湿7b化妆品生日礼物化妆品送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=778301891534",
    "bundle": [
     "YSL圣罗兰粉管润唇膏 口红滋润保湿7b化妆品生日礼物化妆品送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！24小时保湿 平滑唇纹；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p103",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰彩妆套装",
   "746399651756",
   "https://item.taobao.com/item.htm?id=746399651756"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰彩妆套装 气垫口红唇釉化妆品生日礼盒女",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1025,
    "url": "https://item.taobao.com/item.htm?id=746399651756",
    "bundle": [
     "「勃艮第」限定礼盒 一套定格精致妆容"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "「勃艮第」限定礼盒 一套定格精致妆容；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p104",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰Libr",
   "611245875414",
   "https://item.taobao.com/item.htm?id=611245875414"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰Libre香水 经典橙花自由之水生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 920,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 840,
    "url": "https://item.taobao.com/item.htm?id=611245875414",
    "bundle": [
     "YSL圣罗兰Libre香水 经典橙花自由之水生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！自由之水 气场花香；直播页商品卡价；限时限量"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价 ¥920，暂无横向对比。"
 },
 {
  "id": "p105",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰女神粉底",
   "563690029233",
   "https://item.taobao.com/item.htm?id=563690029233"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰女神粉底液 干皮轻薄秋冬滋润服帖遮瑕化妆品生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 660,
    "url": "https://item.taobao.com/item.htm?id=563690029233",
    "bundle": [
     "YSL圣罗兰女神粉底液 干皮轻薄秋冬滋润服帖遮瑕化妆品生日礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！爆款回归「女神」粉底液；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p106",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰啵啵唇冻",
   "896824998520",
   "https://item.taobao.com/item.htm?id=896824998520"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰啵啵唇冻 05冷茶冻唇蜜口红唇釉化妆品生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 370,
    "url": "https://item.taobao.com/item.htm?id=896824998520",
    "bundle": [
     "YSL圣罗兰啵啵唇冻 05冷茶冻唇蜜口红唇釉化妆品生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！啵啵唇冻 嘭弹水光；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p107",
  "keywords": [
   "YSL圣罗兰",
   "正品YSL圣罗兰Li",
   "628960965163",
   "https://item.taobao.com/item.htm?id=628960965163"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "正品YSL圣罗兰Libre香水 檀香木质秋冬自由之水生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 840,
    "url": "https://item.taobao.com/item.htm?id=628960965163",
    "bundle": [
     "正品YSL圣罗兰Libre香水 檀香木质秋冬自由之水生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【檀木新香】 秋冬花香木质调自由之水；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p108",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰明星口红",
   "758380804064",
   "https://item.taobao.com/item.htm?id=758380804064"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰明星口红套装 小金条化妆品唇釉生日送女友",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 760,
    "url": "https://item.taobao.com/item.htm?id=758380804064",
    "bundle": [
     "立即下单！一次带走明星双色"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！一次带走明星双色；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p109",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰香水彩妆",
   "758534878491",
   "https://item.taobao.com/item.htm?id=758534878491"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰香水彩妆套装 1936口红化妆品生日礼盒送女友",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1560,
    "url": "https://item.taobao.com/item.htm?id=758534878491",
    "bundle": [
     "立即下单！明星香水x年度新色"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！明星香水x年度新色；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p110",
  "keywords": [
   "YSL圣罗兰",
   "官方正品YSL圣罗兰",
   "899453891389",
   "https://item.taobao.com/item.htm?id=899453891389"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "官方正品YSL圣罗兰Libre香水 浆果调自由之水生日送女生",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 840,
    "url": "https://item.taobao.com/item.htm?id=899453891389",
    "bundle": [
     "官方正品YSL圣罗兰Libre香水 浆果调自由之水生日送女生"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "自由之水 上瘾浆果；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p111",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰夜皇后调",
   "862907620173",
   "https://item.taobao.com/item.htm?id=862907620173"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰夜皇后调皮水乳套装 保湿细腻透亮护肤品生日礼物女",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1620,
    "url": "https://item.taobao.com/item.htm?id=862907620173",
    "bundle": [
     "7日平整 越用越稳"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "7日平整 越用越稳；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p112",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰明星气垫",
   "740969580217",
   "https://item.taobao.com/item.htm?id=740969580217"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰明星气垫套装 粉气垫替换芯遮瑕服帖化妆品生日礼物女",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1065,
    "url": "https://item.taobao.com/item.htm?id=740969580217",
    "bundle": [
     "立即下单！圣罗兰明星气垫囤货装"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！圣罗兰明星气垫囤货装；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p113",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰水雾唇釉",
   "1075307404691",
   "https://item.taobao.com/item.htm?id=1075307404691"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰水雾唇釉 水转雾低饱和轻薄裸色口红唇膏610生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=1075307404691",
    "bundle": [
     "YSL圣罗兰水雾唇釉 水转雾低饱和轻薄裸色口红唇膏610生日礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "YSL 全新 水雾唇釉；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p114",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰全新裸粉",
   "1026856673498",
   "https://item.taobao.com/item.htm?id=1026856673498"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰全新裸粉管口红 柔雾哑光粉细管唇膏04生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=1026856673498",
    "bundle": [
     "YSL圣罗兰全新裸粉管口红 柔雾哑光粉细管唇膏04生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！「裸」粉管 全系10色低饱和；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p115",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰圆管口红",
   "696976426494",
   "https://item.taobao.com/item.htm?id=696976426494"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰圆管口红 122蜜茶唇膏滋润化妆品生日礼物化妆品送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 380,
    "url": "https://item.taobao.com/item.htm?id=696976426494",
    "bundle": [
     "YSL圣罗兰圆管口红 122蜜茶唇膏滋润化妆品生日礼物化妆品送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！水光融唇；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p116",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰夜皇后调",
   "950053621570",
   "https://item.taobao.com/item.htm?id=950053621570"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰夜皇后调皮乳液 调皮水CP修护保湿补水护肤品生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 840,
    "url": "https://item.taobao.com/item.htm?id=950053621570",
    "bundle": [
     "YSL圣罗兰夜皇后调皮乳液 调皮水CP修护保湿补水护肤品生日礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！调皮水绝佳CP 硬控肌肤稳定度；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p117",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰粉气垫口",
   "638197902458",
   "https://item.taobao.com/item.htm?id=638197902458"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰粉气垫口红彩妆套装 镜面黑管610化妆品生日礼物送女友",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1025,
    "url": "https://item.taobao.com/item.htm?id=638197902458",
    "bundle": [
     "立即下单！NO.1 高端气垫+口红套组"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！NO.1 高端气垫+口红套组；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p118",
  "keywords": [
   "YSL圣罗兰",
   "正品YSL圣罗兰全新",
   "565043401373",
   "https://item.taobao.com/item.htm?id=565043401373"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "正品YSL圣罗兰全新黑色奥飘茗女士香水 绯夜莓果花香礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 840,
    "url": "https://item.taobao.com/item.htm?id=565043401373",
    "bundle": [
     "正品YSL圣罗兰全新黑色奥飘茗女士香水 绯夜莓果花香礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！黑色奥飘茗香水；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p119",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰高定皮革",
   "867196106650",
   "https://item.taobao.com/item.htm?id=867196106650"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰高定皮革腮红 细腻持色裸杏色自然日常通勤彩妆盘礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 460,
    "url": "https://item.taobao.com/item.htm?id=867196106650",
    "bundle": [
     "YSL圣罗兰高定皮革腮红 细腻持色裸杏色自然日常通勤彩妆盘礼物女"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！细腻融肤 整日持色；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p120",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰四色眼影",
   "742809756488",
   "https://item.taobao.com/item.htm?id=742809756488"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰四色眼影 日常大地色细闪彩妆化妆品皮革生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 650,
    "url": "https://item.taobao.com/item.htm?id=742809756488",
    "bundle": [
     "YSL圣罗兰四色眼影 日常大地色细闪彩妆化妆品皮革生日礼物送女友"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！YSL025 迷情奢金；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p121",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰定妆大白",
   "610766245225",
   "https://item.taobao.com/item.htm?id=610766245225"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰定妆大白饼 定妆粉蜜粉饼哑光持久化妆品生日礼物女生",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 570,
    "url": "https://item.taobao.com/item.htm?id=610766245225",
    "bundle": [
     "YSL圣罗兰定妆大白饼 定妆粉蜜粉饼哑光持久化妆品生日礼物女生"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！瞬时柔焦 定补随行；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p122",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰恒久粉底",
   "706706746179",
   "https://item.taobao.com/item.htm?id=706706746179"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰恒久粉底液大白饼套装 定妆粉饼持久细腻自然生日礼物",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 1190,
    "url": "https://item.taobao.com/item.htm?id=706706746179",
    "bundle": [
     "立即下单！粉底液持妆套装"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！粉底液持妆套装；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p123",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰定妆冰气",
   "1026987568433",
   "https://item.taobao.com/item.htm?id=1026987568433"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰定妆冰气垫 持久不脱妆蓝气垫夏季控油生日礼物送女友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 570,
    "url": "https://item.taobao.com/item.htm?id=1026987568433",
    "bundle": [
     "YSL圣罗兰定妆冰气垫 持久不脱妆蓝气垫夏季控油生日礼物送女友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！一拍吸油 秒柔雾；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p124",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰先锋男士",
   "572945838418",
   "https://item.taobao.com/item.htm?id=572945838418"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰先锋男士淡香水 海洋矿石木质香水清爽生日礼物送男友",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 780,
    "url": "https://item.taobao.com/item.htm?id=572945838418",
    "bundle": [
     "YSL圣罗兰先锋男士淡香水 海洋矿石木质香水清爽生日礼物送男友"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！先锋男士淡香水香水；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p125",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰天之骄子",
   "1065959938613",
   "https://item.taobao.com/item.htm?id=1065959938613"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰天之骄子香水 辛香木质男士香氛礼物送男友生日礼物",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 770,
    "url": "https://item.taobao.com/item.htm?id=1065959938613",
    "bundle": [
     "YSL圣罗兰天之骄子香水 辛香木质男士香氛礼物送男友生日礼物"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！YSL圣罗兰天之骄子香水；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p126",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰藏金精萃",
   "685058249024",
   "https://item.taobao.com/item.htm?id=685058249024"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰藏金精萃油 藏红花精华油干皮滋润保湿养肤护肤品礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 2600,
    "url": "https://item.taobao.com/item.htm?id=685058249024",
    "bundle": [
     "YSL圣罗兰藏金精萃油 藏红花精华油干皮滋润保湿养肤护肤品礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！一滴远胜十滴精华；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p127",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰黑丝缎妆",
   "563866420454",
   "https://item.taobao.com/item.htm?id=563866420454"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰黑丝缎妆前乳 服帖无瑕水润保湿隔离化妆品彩妆生日礼物",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 570,
    "url": "https://item.taobao.com/item.htm?id=563866420454",
    "bundle": [
     "YSL圣罗兰黑丝缎妆前乳 服帖无瑕水润保湿隔离化妆品彩妆生日礼物"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！服帖·无瑕·水润；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p128",
  "keywords": [
   "YSL圣罗兰",
   "YSL圣罗兰全新夜皇",
   "667450737781",
   "https://item.taobao.com/item.htm?id=667450737781"
  ],
  "product": {
   "brand": "YSL圣罗兰",
   "name": "YSL圣罗兰全新夜皇后眼霜 保湿紧致焕亮抗皱滋润护肤品生日礼物女",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "YSL圣罗兰美妆官方旗舰店",
    "official": true,
    "heat": 95,
    "price": 780,
    "url": "https://item.taobao.com/item.htm?id=667450737781",
    "bundle": [
     "YSL圣罗兰全新夜皇后眼霜 保湿紧致焕亮抗皱滋润护肤品生日礼物女"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "立即下单！改善眼周暗淡；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（YSL圣罗兰美妆官方旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p129",
  "keywords": [
   "彩棠",
   "彩棠奶皮气垫粉霜遮瑕",
   "731279856370",
   "https://item.taobao.com/item.htm?id=731279856370"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠奶皮气垫粉霜遮瑕持久不脱妆16H保湿干皮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 144.07,
    "url": "https://item.taobao.com/item.htm?id=731279856370",
    "bundle": [
     "彩棠奶皮气垫粉霜遮瑕持久不脱妆16H保湿干皮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【全新升级】拍拍皆奶润 无瑕更柔光；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p130",
  "keywords": [
   "彩棠",
   "彩棠小圆管粉底液遮瑕",
   "653442327868",
   "https://item.taobao.com/item.htm?id=653442327868"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管粉底液遮瑕24h持妆不卡粉混油干皮",
   "spec": "30ml",
   "specVolume": 30,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 193.51,
    "url": "https://item.taobao.com/item.htm?id=653442327868",
    "bundle": [
     "【雾瓷无瑕】自带遮瑕！买30ml"
    ],
    "gifts": [
     {
      "name": "15ml！",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【雾瓷无瑕】自带遮瑕！买30ml送15ml！；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p131",
  "keywords": [
   "彩棠",
   "彩棠高光修容盘三色哑",
   "609588171364",
   "https://item.taobao.com/item.htm?id=609588171364"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠高光修容盘三色哑光珠光提亮粉阴影",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 77.98,
    "url": "https://item.taobao.com/item.htm?id=609588171364",
    "bundle": [
     "彩棠高光修容盘三色哑光珠光提亮粉阴影"
    ],
    "gifts": [
     {
      "name": "官配修容刷",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【三色修容】精雕骨相！买大盘赠官配修容刷；首单价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p132",
  "keywords": [
   "彩棠",
   "彩棠妆前乳打底隔离霜",
   "632645548699",
   "https://item.taobao.com/item.htm?id=632645548699"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠妆前乳打底隔离霜16H保湿控油隐形毛孔",
   "spec": "90g",
   "specVolume": 90,
   "unit": "g",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 153.96,
    "url": "https://item.taobao.com/item.htm?id=632645548699",
    "bundle": [
     "【底妆救星】16H久贴妆 买40g到手50g"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【底妆救星】16H久贴妆 买40g到手50g；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p133",
  "keywords": [
   "彩棠",
   "彩棠三色遮瑕膏盘遮痘",
   "667552115438",
   "https://item.taobao.com/item.htm?id=667552115438"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色遮瑕膏盘 遮痘斑提亮黑眼圈三文鱼色",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 153.96,
    "url": "https://item.taobao.com/item.htm?id=667552115438",
    "bundle": [
     "彩棠三色遮瑕膏盘 遮痘斑提亮黑眼圈三文鱼色"
    ],
    "gifts": [
     {
      "name": "定制唇线笔",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【爆款遮瑕】遮瑕免费试色+赠定制唇线笔；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p134",
  "keywords": [
   "彩棠",
   "彩棠面部综合盘眼影腮",
   "979745294017",
   "https://item.taobao.com/item.htm?id=979745294017"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠面部综合盘眼影腮红修容高光彩妆",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 193.51,
    "url": "https://item.taobao.com/item.htm?id=979745294017",
    "bundle": [
     "彩棠面部综合盘眼影腮红修容高光彩妆"
    ],
    "gifts": [
     {
      "name": "便携化妆套刷",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【面部综合盘】一盘塑全妆 赠便携化妆套刷；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p135",
  "keywords": [
   "彩棠",
   "彩棠三色腮红盘高光修",
   "703063163679",
   "https://item.taobao.com/item.htm?id=703063163679"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色腮红盘高光修容三合一哑光缎光膨胀色",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 142.3,
    "url": "https://item.taobao.com/item.htm?id=703063163679",
    "bundle": [
     "彩棠三色腮红盘高光修容三合一哑光缎光膨胀色"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【三色腮红】三色多用 立体颊妆；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p136",
  "keywords": [
   "彩棠",
   "彩棠双生气垫遮瑕持久",
   "916085144739",
   "https://item.taobao.com/item.htm?id=916085144739"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双生气垫遮瑕持久不脱妆24H粉底液",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 144.07,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 140.95,
    "url": "https://item.taobao.com/item.htm?id=916085144739",
    "bundle": [
     "彩棠双生气垫遮瑕持久不脱妆24H粉底液"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【直播专享价】贴肤贴光感 24H久持色；直播页商品卡价；今日闪降；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥144.07，暂无横向对比。"
 },
 {
  "id": "p137",
  "keywords": [
   "彩棠",
   "彩棠双生气垫遮瑕持久",
   "795352147198",
   "https://item.taobao.com/item.htm?id=795352147198"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双生气垫遮瑕持久不脱妆24H服帖持妆粉底",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 163.85,
    "url": "https://item.taobao.com/item.htm?id=795352147198",
    "bundle": [
     "彩棠双生气垫遮瑕持久不脱妆24H服帖持妆粉底"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【多肤质适用】自带遮瑕！多一层 随便妆！；会员价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p138",
  "keywords": [
   "彩棠",
   "彩棠有色蜜粉饼散粉定",
   "718769521609",
   "https://item.taobao.com/item.htm?id=718769521609"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠有色蜜粉饼散粉定妆粉饼遮瑕控油",
   "spec": "11g",
   "specVolume": 11,
   "unit": "g",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 153.96,
    "url": "https://item.taobao.com/item.htm?id=718769521609",
    "bundle": [
     "【粉饼11g大容量】定补两用 12H柔焦控妆"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【粉饼11g大容量】定补两用 12H柔焦控妆；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p139",
  "keywords": [
   "彩棠",
   "彩棠有色蜜粉饼散粉定",
   "1073314561829",
   "https://item.taobao.com/item.htm?id=1073314561829"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠有色蜜粉饼散粉定妆补妆控油持妆",
   "spec": "7g",
   "specVolume": 7,
   "unit": "g",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 132.42,
    "url": "https://item.taobao.com/item.htm?id=1073314561829",
    "bundle": [
     "【有色粉饼7g】定补两用 细若无痕"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【有色粉饼7g】定补两用 细若无痕；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p140",
  "keywords": [
   "彩棠",
   "彩棠透明蜜粉饼散粉大",
   "759055869171",
   "https://item.taobao.com/item.htm?id=759055869171"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠透明蜜粉饼散粉大白饼柔焦定妆持久控油不脱妆混合肌",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 134.42,
    "url": "https://item.taobao.com/item.htm?id=759055869171",
    "bundle": [
     "彩棠透明蜜粉饼散粉大白饼柔焦定妆持久控油不脱妆混合肌"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【蝉翼粉饼】高透定妆 12H持妆锁光；补贴价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p141",
  "keywords": [
   "彩棠",
   "彩棠青粉饼柔焦定妆蜜",
   "1039167614418",
   "https://item.taobao.com/item.htm?id=1039167614418"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠青粉饼柔焦定妆蜜粉饼24h持久控油补妆",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 127.41,
    "url": "https://item.taobao.com/item.htm?id=1039167614418",
    "bundle": [
     "彩棠青粉饼柔焦定妆蜜粉饼24h持久控油补妆"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【以青修色】修黄提亮 修正泛红；补贴价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p142",
  "keywords": [
   "彩棠",
   "彩棠小圆管粉底液20",
   "658739798491",
   "https://item.taobao.com/item.htm?id=658739798491"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管粉底液2.0持妆遮瑕控油不卡粉混油",
   "spec": "30ml",
   "specVolume": 30,
   "unit": "ml",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 193.51,
    "url": "https://item.taobao.com/item.htm?id=658739798491",
    "bundle": [
     "【雾瓷无瑕】自带遮瑕！买30ml"
    ],
    "gifts": [
     {
      "name": "15ml！",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【雾瓷无瑕】自带遮瑕！买30ml送15ml！；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p143",
  "keywords": [
   "彩棠",
   "彩棠小圆管粉底液蜜粉",
   "1086555612569",
   "https://item.taobao.com/item.htm?id=1086555612569"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管粉底液蜜粉饼遮瑕持妆定妆补妆",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 273,
    "url": "https://item.taobao.com/item.htm?id=1086555612569",
    "bundle": [
     "【堡藏联名】购套组享全套限定周边"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【堡藏联名】购套组享全套限定周边；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p144",
  "keywords": [
   "彩棠",
   "彩棠小圆管粉底液20",
   "977448351924",
   "https://item.taobao.com/item.htm?id=977448351924"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管粉底液2.0+妆前精华遮瑕持妆保湿底妆套装",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 229.95,
    "url": "https://item.taobao.com/item.htm?id=977448351924",
    "bundle": [
     "【持久贴妆】"
    ],
    "gifts": [
     {
      "name": "便携粉饼 一套搞定底妆",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【持久贴妆】送便携粉饼 一套搞定底妆；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p145",
  "keywords": [
   "彩棠",
   "彩棠三色遮瑕盘修容盘",
   "1075951777070",
   "https://item.taobao.com/item.htm?id=1075951777070"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色遮瑕盘+修容盘5.2g 遮斑痘立体修颜随行",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 229.95,
    "url": "https://item.taobao.com/item.htm?id=1075951777070",
    "bundle": [
     "【爆款修遮CP】备注暗号享礼盒礼袋加"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【爆款修遮CP】备注暗号享礼盒礼袋加赠；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p146",
  "keywords": [
   "彩棠",
   "彩棠三色腮红盘修容盘",
   "1076937892495",
   "https://item.taobao.com/item.htm?id=1076937892495"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色腮红盘+修容盘5.2g 三色立体骨相修颜",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 212.29,
    "url": "https://item.taobao.com/item.htm?id=1076937892495",
    "bundle": [
     "【爆款修腮CP】备注暗号享礼盒礼袋加"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【爆款修腮CP】备注暗号享礼盒礼袋加赠；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p147",
  "keywords": [
   "彩棠",
   "彩棠高光修容盘哑光珠",
   "1054899343187",
   "https://item.taobao.com/item.htm?id=1054899343187"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠高光修容盘哑光珠光提亮修饰阴影鼻影",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 77.98,
    "url": "https://item.taobao.com/item.htm?id=1054899343187",
    "bundle": [
     "彩棠高光修容盘哑光珠光提亮修饰阴影鼻影"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【修容盘随行装】精雕骨相 轻量随行；首单价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p148",
  "keywords": [
   "彩棠",
   "彩棠修容盘哑光高光阴",
   "622342134789",
   "https://item.taobao.com/item.htm?id=622342134789"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠修容盘哑光高光阴影鼻影侧影面部提亮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 69.21,
    "url": "https://item.taobao.com/item.htm?id=622342134789",
    "bundle": [
     "彩棠修容盘哑光高光阴影鼻影侧影面部提亮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【单色修容】新手尝鲜！塑优越骨相！；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p149",
  "keywords": [
   "彩棠",
   "彩棠修容棒速修棒双头",
   "1083174767876",
   "https://item.taobao.com/item.htm?id=1083174767876"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠修容棒速修棒双头笔刷阴影侧影鼻影",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 102.76,
    "url": "https://item.taobao.com/item.htm?id=1083174767876",
    "bundle": [
     "彩棠修容棒速修棒双头笔刷阴影侧影鼻影"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【彩棠修容棒】轻融无痕 柔塑骨相；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p150",
  "keywords": [
   "彩棠",
   "彩棠小圆管持妆气垫遮",
   "836074359010",
   "https://item.taobao.com/item.htm?id=836074359010"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管持妆气垫遮瑕持久不脱妆24H油皮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 168.85,
    "url": "https://item.taobao.com/item.htm?id=836074359010",
    "bundle": [
     "彩棠小圆管持妆气垫遮瑕持久不脱妆24H油皮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【油皮气垫】持雾久控油 高遮高透气；补贴价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p151",
  "keywords": [
   "彩棠",
   "彩棠青衣气垫遮瑕持久",
   "1042719868978",
   "https://item.taobao.com/item.htm?id=1042719868978"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠青衣气垫遮瑕持久不脱妆24H控油大油皮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 122.53,
    "url": "https://item.taobao.com/item.htm?id=1042719868978",
    "bundle": [
     "彩棠青衣气垫遮瑕持久不脱妆24H控油大油皮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【油皮救星】1S痛快遮 24H舒适持；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p152",
  "keywords": [
   "彩棠",
   "彩棠定妆喷雾长效定妆",
   "673586945239",
   "https://item.taobao.com/item.htm?id=673586945239"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠定妆喷雾长效定妆持妆服帖保湿控油",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 153.96,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 150.35,
    "url": "https://item.taobao.com/item.htm?id=673586945239",
    "bundle": [
     "彩棠定妆喷雾长效定妆持妆服帖保湿控油"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【定妆推荐】转瞬成膜 定格妆色；直播页商品卡价；今日闪降；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥153.96，暂无横向对比。"
 },
 {
  "id": "p153",
  "keywords": [
   "彩棠",
   "彩棠双拼高光膏粉一体",
   "653225360063",
   "https://item.taobao.com/item.htm?id=653225360063"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双拼高光膏粉一体哑光珠光提亮元气",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 160.55,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 140.95,
    "url": "https://item.taobao.com/item.htm?id=653225360063",
    "bundle": [
     "彩棠双拼高光膏粉一体哑光珠光提亮元气"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【双重提亮】膨弹面中 拯救扁平；直播页商品卡价；限时限量；今日闪降；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥160.55，暂无横向对比。"
 },
 {
  "id": "p154",
  "keywords": [
   "彩棠",
   "彩棠妆前精华底妆黏人",
   "1078900912743",
   "https://item.taobao.com/item.htm?id=1078900912743"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠妆前精华底妆黏人精妆前16H保湿长效持妆",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 186,
    "url": "https://item.taobao.com/item.htm?id=1078900912743",
    "bundle": [
     "彩棠妆前精华底妆黏人精妆前16H保湿长效持妆"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【妆前精华液】内贴外扒 底妆「黏人精」；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p155",
  "keywords": [
   "彩棠",
   "彩棠防晒奶皮霜修颜乳",
   "1082823334721",
   "https://item.taobao.com/item.htm?id=1082823334721"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠防晒奶皮霜修颜乳素颜霜有色面霜隔离",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 156,
    "url": "https://item.taobao.com/item.htm?id=1082823334721",
    "bundle": [
     "彩棠防晒奶皮霜修颜乳素颜霜有色面霜隔离"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【防晒奶皮霜】3s修亮暗沉 防晒修颜7合1；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p156",
  "keywords": [
   "彩棠",
   "彩棠修颜乳有色面霜隔",
   "953420652886",
   "https://item.taobao.com/item.htm?id=953420652886"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠修颜乳有色面霜隔离素颜霜修饰肤色提亮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 149.07,
    "url": "https://item.taobao.com/item.htm?id=953420652886",
    "bundle": [
     "彩棠修颜乳有色面霜隔离素颜霜修饰肤色提亮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【修颜乳】5S速抹成妆 早八伪素颜；补贴价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p157",
  "keywords": [
   "彩棠",
   "彩棠油乳双萃三相喷雾",
   "976879158816",
   "https://item.taobao.com/item.htm?id=976879158816"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠油乳双萃/三相喷雾精华妆前保湿补水舒缓",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 92.87,
    "url": "https://item.taobao.com/item.htm?id=976879158816",
    "bundle": [
     "彩棠油乳双萃/三相喷雾精华妆前保湿补水舒缓"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【双萃喷雾】油乳双萃 16H润养贴妆；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p158",
  "keywords": [
   "彩棠",
   "彩棠妆前乳隔离霜保湿",
   "893266516627",
   "https://item.taobao.com/item.htm?id=893266516627"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠妆前乳隔离霜保湿控油隐形毛孔持妆",
   "spec": "115g",
   "specVolume": 115,
   "unit": "g",
   "official": 183.62,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 178.57,
    "url": "https://item.taobao.com/item.htm?id=893266516627",
    "bundle": [
     "【底妆救星】直播专享 买50g到手65g"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【底妆救星】直播专享 买50g到手65g；直播页商品卡价；今日闪降；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥183.62，暂无横向对比。"
 },
 {
  "id": "p159",
  "keywords": [
   "彩棠",
   "彩棠踏浪五色眼影青山",
   "826116557188",
   "https://item.taobao.com/item.htm?id=826116557188"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠踏浪五色眼影青山绿水盘细腻持妆",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 147.3,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 140.14,
    "url": "https://item.taobao.com/item.htm?id=826116557188",
    "bundle": [
     "彩棠踏浪五色眼影青山绿水盘细腻持妆"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【嘟嘟同款】细腻持妆 百搭显色；直播页商品卡价；今日闪降；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥147.3，暂无横向对比。"
 },
 {
  "id": "p160",
  "keywords": [
   "彩棠",
   "彩棠遮瑕笔卧蚕笔遮瑕",
   "644362221259",
   "https://item.taobao.com/item.htm?id=644362221259"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠遮瑕笔卧蚕笔 遮瑕膏遮斑点痘印细节提亮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 48.45,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 38.61,
    "url": "https://item.taobao.com/item.htm?id=644362221259",
    "bundle": [
     "彩棠遮瑕笔卧蚕笔 遮瑕膏遮斑点痘印细节提亮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【精准遮瑕】自带卷笔刀！拿捏细节！；直播页商品卡价；今日闪降"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥48.45，暂无横向对比。"
 },
 {
  "id": "p161",
  "keywords": [
   "彩棠",
   "彩棠卸妆膏面部眼部唇",
   "679365758823",
   "https://item.taobao.com/item.htm?id=679365758823"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠卸妆膏面部眼部唇部卸妆温和清洁深度",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 84.55,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 83.71,
    "url": "https://item.taobao.com/item.htm?id=679365758823",
    "bundle": [
     "彩棠卸妆膏面部眼部唇部卸妆温和清洁深度"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【便携次抛】瞬息溶妆！敏肌安心卸；直播页商品卡价；限时限量；今日闪降"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥84.55，暂无横向对比。"
 },
 {
  "id": "p162",
  "keywords": [
   "彩棠",
   "彩棠双头眉笔持久防水",
   "644711174293",
   "https://item.taobao.com/item.htm?id=644711174293"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双头眉笔持久防水不脱色根根分明野生眉",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": 79,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 72.68,
    "url": "https://item.taobao.com/item.htm?id=644711174293",
    "bundle": [
     "彩棠双头眉笔持久防水不脱色根根分明野生眉"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【勾勒眉形】轻松打造原生毛流感！；直播页商品卡价；今日闪降；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价 ¥79，暂无横向对比。"
 },
 {
  "id": "p163",
  "keywords": [
   "彩棠",
   "彩棠润色妆前乳隔离霜",
   "886793943990",
   "https://item.taobao.com/item.htm?id=886793943990"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠润色妆前乳隔离霜有色素颜霜脸部隐形毛孔",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 158.96,
    "url": "https://item.taobao.com/item.htm?id=886793943990",
    "bundle": [
     "彩棠润色妆前乳隔离霜有色素颜霜脸部隐形毛孔"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【润色妆前】匀肤提亮 早8人通勤必备；补贴价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p164",
  "keywords": [
   "彩棠",
   "彩棠白平衡妆前乳有色",
   "980004530493",
   "https://item.taobao.com/item.htm?id=980004530493"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠白平衡妆前乳有色隔离调色妆前修颜提亮",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 149.07,
    "url": "https://item.taobao.com/item.htm?id=980004530493",
    "bundle": [
     "彩棠白平衡妆前乳有色隔离调色妆前修颜提亮"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【调色妆前】光色双修 重塑原生！；补贴价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p165",
  "keywords": [
   "彩棠",
   "彩棠彩棠0感精华唇蜜",
   "975533314493",
   "https://item.taobao.com/item.htm?id=975533314493"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠彩棠0感精华唇蜜口红凝光透润透明",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 97.87,
    "url": "https://item.taobao.com/item.htm?id=975533314493",
    "bundle": [
     "彩棠彩棠0感精华唇蜜口红凝光透润透明"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【元气上市】天然轻养 红润原生；补贴后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p166",
  "keywords": [
   "彩棠",
   "彩棠海棠花唇釉哑光唇",
   "653994727598",
   "https://item.taobao.com/item.htm?id=653994727598"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠海棠花唇釉哑光唇泥唇彩丝绒雾面",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 109,
    "url": "https://item.taobao.com/item.htm?id=653994727598",
    "bundle": [
     "彩棠海棠花唇釉哑光唇泥唇彩丝绒雾面"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【奶霜唇釉】绒雾质感！顺滑隐唇纹；优惠后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p167",
  "keywords": [
   "彩棠",
   "彩棠唇线笔哑雾持妆勾",
   "887780784343",
   "https://item.taobao.com/item.htm?id=887780784343"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠唇线笔哑雾持妆勾勒晕染丰唇防水",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 58.33,
    "url": "https://item.taobao.com/item.htm?id=887780784343",
    "bundle": [
     "【勾勒唇型】一支打造饱满唇妆"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【勾勒唇型】一支打造饱满唇妆；补贴后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p168",
  "keywords": [
   "彩棠",
   "彩棠踏浪眼线胶笔下至",
   "825736867489",
   "https://item.taobao.com/item.htm?id=825736867489"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠踏浪眼线胶笔下至笔新手不晕染持色防水汗",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 58.33,
    "url": "https://item.taobao.com/item.htm?id=825736867489",
    "bundle": [
     "彩棠踏浪眼线胶笔下至笔新手不晕染持色防水汗"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【勾勒眼型】12H持色防晕妆；补贴后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p169",
  "keywords": [
   "彩棠",
   "彩棠粉扑遮瑕气垫粉底",
   "674949435907",
   "https://item.taobao.com/item.htm?id=674949435907"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠粉扑遮瑕气垫粉底不易吃粉灵巧便携",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 29.9,
    "url": "https://item.taobao.com/item.htm?id=674949435907",
    "bundle": [
     "彩棠粉扑遮瑕气垫粉底不易吃粉灵巧便携"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【官配粉扑】定制妆具！灵巧上妆；优惠后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p170",
  "keywords": [
   "彩棠",
   "彩棠化妆刷扁弧型粉底",
   "645737280881",
   "https://item.taobao.com/item.htm?id=645737280881"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠化妆刷扁弧型粉底刷修容高光刷",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 58.33,
    "url": "https://item.taobao.com/item.htm?id=645737280881",
    "bundle": [
     "彩棠化妆刷扁弧型粉底刷修容高光刷"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【定制刷具】官配化妆刷！精准雕琢妆容；补贴后；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p171",
  "keywords": [
   "彩棠",
   "彩棠粉底修容遮瑕点彩",
   "1021535496698",
   "https://item.taobao.com/item.htm?id=1021535496698"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠粉底修容遮瑕点彩专业化妆套刷12支",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 408.89,
    "url": "https://item.taobao.com/item.htm?id=1021535496698",
    "bundle": [
     "【化妆套刷】精雕细琢 晕染随心"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【化妆套刷】精雕细琢 晕染随心；会员价；直播页商品卡价；政府补贴"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p172",
  "keywords": [
   "彩棠",
   "彩棠双仓面霜首创双效",
   "1079689734327",
   "https://item.taobao.com/item.htm?id=1079689734327"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双仓面霜首创双效妆前面霜服帖保湿修护敏感肌",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 226,
    "url": "https://item.taobao.com/item.htm?id=1079689734327",
    "bundle": [
     "彩棠双仓面霜首创双效妆前面霜服帖保湿修护敏感肌"
    ],
    "gifts": [
     {
      "name": "赠品明细未展开（页面仅显示赠品数量）",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "直播页未提供可靠赠品单价，未估值"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "【双仓面霜】内平底 外贴妆24H不干卡；会员价；直播页商品卡价；直播加赠❗"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p173",
  "keywords": [
   "彩棠",
   "彩棠底妆妆前乳修颜乳",
   "978068773931",
   "https://item.taobao.com/item.htm?id=978068773931"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠底妆妆前乳修颜乳气垫小样试用装",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 9.81,
    "url": "https://item.taobao.com/item.htm?id=978068773931",
    "bundle": [
     "彩棠底妆妆前乳修颜乳气垫小样试用装"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "爆品试用9.9任选1样！回购立减！；补贴后；直播页商品卡价；购前先拍✨"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p174",
  "keywords": [
   "彩棠",
   "彩棠小圆管粉底小样联",
   "681369530180",
   "https://item.taobao.com/item.htm?id=681369530180"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小圆管粉底小样联包试色卡持妆干皮混油不黯沉",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 6.84,
    "url": "https://item.taobao.com/item.htm?id=681369530180",
    "bundle": [
     "彩棠小圆管粉底小样联包试色卡持妆干皮混油不黯沉"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "「小圆管」粉底液 爆品试用！回购立减！；补贴后；直播页商品卡价；购前先拍✨"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p175",
  "keywords": [
   "彩棠",
   "彩棠单色遮瑕盘眼部三",
   "1062970751811",
   "https://item.taobao.com/item.htm?id=1062970751811"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠单色遮瑕盘 眼部三文鱼遮瑕黑眼圈",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 97.87,
    "url": "https://item.taobao.com/item.htm?id=1062970751811",
    "bundle": [
     "彩棠单色遮瑕盘 眼部三文鱼遮瑕黑眼圈"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【单色遮瑕膏】柔润扒肤 持久遮瑕；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p176",
  "keywords": [
   "彩棠",
   "彩棠双色腮红盘哑光膨",
   "1063792498651",
   "https://item.taobao.com/item.htm?id=1063792498651"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双色腮红盘 哑光膨胀收缩修容",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 61.77,
    "url": "https://item.taobao.com/item.htm?id=1063792498651",
    "bundle": [
     "彩棠双色腮红盘 哑光膨胀收缩修容"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【双色腮红盘】一盘集齐「2款热门色」；补贴价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p177",
  "keywords": [
   "彩棠",
   "彩棠卸妆湿巾旅行独立",
   "637834067599",
   "https://item.taobao.com/item.htm?id=637834067599"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠卸妆湿巾旅行独立装深层清洁柔软亲肤",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 58.33,
    "url": "https://item.taobao.com/item.htm?id=637834067599",
    "bundle": [
     "【便携卸妆】一片速卸！温和净澈"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【便携卸妆】一片速卸！温和净澈；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p178",
  "keywords": [
   "彩棠",
   "彩棠遮瑕液20面中高",
   "824052578035",
   "https://item.taobao.com/item.htm?id=824052578035"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠遮瑕液2.0 面中高光提亮液遮黑眼圈润不卡",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 97.87,
    "url": "https://item.taobao.com/item.htm?id=824052578035",
    "bundle": [
     "彩棠遮瑕液2.0 面中高光提亮液遮黑眼圈润不卡"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【新手遮瑕】多色可选！新手轻松遮！；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p179",
  "keywords": [
   "彩棠",
   "彩棠三色遮瑕膏遮红痘",
   "667552875927",
   "https://item.taobao.com/item.htm?id=667552875927"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色遮瑕膏 遮红痘印绿色遮瑕三文鱼色",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 153.96,
    "url": "https://item.taobao.com/item.htm?id=667552875927",
    "bundle": [
     "彩棠三色遮瑕膏 遮红痘印绿色遮瑕三文鱼色"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【爆款遮瑕】 一盘嘭亮无瑕 搞定全脸瑕疵；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p180",
  "keywords": [
   "彩棠",
   "彩棠修容盘遮瑕盘膏三",
   "672354805293",
   "https://item.taobao.com/item.htm?id=672354805293"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠修容盘+遮瑕盘膏 三色遮瑕脸部修容套装",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 289.27,
    "url": "https://item.taobao.com/item.htm?id=672354805293",
    "bundle": [
     "【修颜套装】修颜套装 皮相骨相兼修"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【修颜套装】修颜套装 皮相骨相兼修；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p181",
  "keywords": [
   "彩棠",
   "彩棠修容盘三色腮红哑",
   "714435482831",
   "https://item.taobao.com/item.htm?id=714435482831"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠修容盘+三色腮红 哑光高光膨胀彩妆套装",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 259.61,
    "url": "https://item.taobao.com/item.htm?id=714435482831",
    "bundle": [
     "【氛围感套装】修轮廓 提气色 一套搞定"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【氛围感套装】修轮廓 提气色 一套搞定；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p182",
  "keywords": [
   "彩棠",
   "彩棠双生气垫修容盘唇",
   "917528129584",
   "https://item.taobao.com/item.htm?id=917528129584"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠双生气垫修容盘唇釉定妆喷雾彩妆套装",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 203.39,
    "url": "https://item.taobao.com/item.htm?id=917528129584",
    "bundle": [
     "【精致套组】双生气垫+mini修容 快速成妆"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【精致套组】双生气垫+mini修容 快速成妆；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p183",
  "keywords": [
   "彩棠",
   "彩棠面综盘口红染眉膏",
   "1083196911257",
   "https://item.taobao.com/item.htm?id=1083196911257"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠面综盘口红染眉膏彩妆套装礼物",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 54,
    "url": "https://item.taobao.com/item.htm?id=1083196911257",
    "bundle": [
     "【草木染秋限定】草木入妆 一叶知秋"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【草木染秋限定】草木入妆 一叶知秋；会员价；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p184",
  "keywords": [
   "彩棠",
   "彩棠三色渐变腮红唇冻",
   "1067204979234",
   "https://item.taobao.com/item.htm?id=1067204979234"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠三色渐变腮红唇冻口红七夕礼物套装",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 97.87,
    "url": "https://item.taobao.com/item.htm?id=1067204979234",
    "bundle": [
     "【礼盒套组】珠玉琢光 万彩生辉"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【礼盒套组】珠玉琢光 万彩生辉；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p185",
  "keywords": [
   "彩棠",
   "彩棠争青菁华唇冻唇膏",
   "787560943477",
   "https://item.taobao.com/item.htm?id=787560943477"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠争青菁华唇冻唇膏口红滋润镜面水光",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 117.64,
    "url": "https://item.taobao.com/item.htm?id=787560943477",
    "bundle": [
     "彩棠争青菁华唇冻唇膏口红滋润镜面水光"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【修护淡纹】饱满嘟透 28天淡纹修护；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p186",
  "keywords": [
   "彩棠",
   "彩棠小釉瓶口红唇膏礼",
   "1043000131030",
   "https://item.taobao.com/item.htm?id=1043000131030"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠小釉瓶口红唇膏礼盒淡唇纹提升气色节日",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": null,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 87.98,
    "url": "https://item.taobao.com/item.htm?id=1043000131030",
    "bundle": [
     "【礼物首选】「小釉瓶」口红礼盒"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【礼物首选】「小釉瓶」口红礼盒；补贴后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p187",
  "keywords": [
   "彩棠",
   "彩棠争青口红哑光唇膏",
   "696676022175",
   "https://item.taobao.com/item.htm?id=696676022175"
  ],
  "product": {
   "brand": "彩棠",
   "name": "彩棠争青口红哑光唇膏润唇膏滋润唇釉",
   "spec": "1件",
   "specVolume": 1,
   "unit": "件",
   "official": null,
   "category": "单品"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "淘宝",
    "channel": "彩棠旗舰店",
    "official": true,
    "heat": 85,
    "price": 129,
    "url": "https://item.taobao.com/item.htm?id=696676022175",
    "bundle": [
     "彩棠争青口红哑光唇膏润唇膏滋润唇釉"
    ],
    "gifts": [],
    "crowd": "关注该商品的直播购买用户",
    "note": "【哑雾口红】推荐S101！百搭不挑人；优惠后；直播页商品卡价"
   }
  ],
  "insight": "当前时段只有这一条在播记录（彩棠旗舰店），官方价待核，暂无横向对比。"
 },
 {
  "id": "p188",
  "keywords": [
   "花知晓",
   "Flower Knows",
   "冬日梦礼盒",
   "冬日梦",
   "唇釉",
   "腮红",
   "口红",
   "眼影",
   "提亮液",
   "遮瑕盘",
   "https://v.douyin.com/Zz4bBuMKJzs/"
  ],
  "product": {
   "brand": "花知晓",
   "name": "【现货直发】花知晓-冬日梦礼盒 唇釉腮红口红眼影提亮液遮瑕盘 db",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 456,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "花知晓",
    "official": true,
    "heat": 60,
    "price": 269,
    "url": "https://v.douyin.com/Zz4bBuMKJzs/",
    "bundle": [
     "商品标题列示唇釉、腮红、口红、眼影、提亮液、遮瑕盘。主图左侧标示二选一。具体搭配、件数和容量待核"
    ],
    "gifts": [
     {
      "name": "卸妆湿巾 ×1片",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "草莓洛可可mini手持镜挂件（小茶薄荷）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "十周年立体镜（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "十周年气垫梳（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾中礼盒（空包装）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "活动专享价 ¥299/套 券后价 ¥269 平台券 · 满60减30 · 仅剩 00:01:47 满1件减157元 送赠 先用后付 · 0元下单，确认收货后付款 顺丰隔日达 · 预计后天送达 具体色号以链接规格为主，礼赠详情与机制以交易快照和订单实际显示为准；满1件减157元至299元，叠加平台券满60减30；运费：包邮+运费险；截图1（21:57），页面已售1000+。热度按截图销量估计。 顺丰包邮，含运费险。主播口播待补"
   }
  ],
  "insight": "当前时段只有这一条在播记录（花知晓），官方价 ¥456，暂无横向对比。"
 },
 {
  "id": "p189",
  "keywords": [
   "花知晓",
   "Flower Knows",
   "白昼诗礼盒",
   "白昼诗",
   "唇釉",
   "腮红",
   "提亮液",
   "遮瑕液",
   "眼影",
   "眼线胶笔",
   "https://v.douyin.com/qkxV7ccgurg/"
  ],
  "product": {
   "brand": "花知晓",
   "name": "【萌新专属】花知晓-白昼诗礼盒 唇釉腮红提亮液遮瑕液眼影眼线胶笔",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 475,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "花知晓",
    "official": true,
    "heat": 50,
    "price": 269,
    "url": "https://v.douyin.com/qkxV7ccgurg/",
    "bundle": [
     "商品标题列示唇釉、腮红、提亮液、遮瑕液、眼影、眼线胶笔。具体搭配、件数和容量待核"
    ],
    "gifts": [
     {
      "name": "2026年限定菱格手提包 ×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "草莓洛可可mini手持镜挂件（小茶薄荷）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "骑士独角兽手持镜（星光粉）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "遮瑕mini装 1.5g（02/03色号随机）×1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾中礼盒（空包装）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "活动专享价 ¥299/套 券后价 ¥269 平台券 · 满60减30 · 仅剩 00:04:42 满1件减176元 送赠 顺丰隔日达 · 预计后天送达 具体色号以链接规格为主，礼赠详情与机制以交易快照和订单实际显示为准；满1件减176元至299元，叠加平台券满60减30；运费：包邮+运费险；截图2（21:54），页面已售400+。热度按截图销量估计。 商品标题标注「萌新专属」，具体资格待核。顺丰包邮，含运费险。主播口播待补。 商品页标注「暴怒小孩 推荐」"
   }
  ],
  "insight": "当前时段只有这一条在播记录（花知晓），官方价 ¥475，暂无横向对比。"
 },
 {
  "id": "p190",
  "keywords": [
   "花知晓",
   "Flower Knows",
   "天鹅湖礼盒",
   "天鹅湖",
   "唇釉",
   "腮红",
   "眼影",
   "水润提亮液",
   "蜜粉饼",
   "https://v.douyin.com/lLNaUpvKvUY/"
  ],
  "product": {
   "brand": "花知晓",
   "name": "【现货直发】花知晓-天鹅湖礼盒 唇釉腮红眼影水润提亮液蜜粉饼 db",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 476,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "花知晓",
    "official": true,
    "heat": 70,
    "price": 269,
    "url": "https://v.douyin.com/lLNaUpvKvUY/",
    "bundle": [
     "商品标题列示唇釉、腮红、眼影、水润提亮液、蜜粉饼。主图左侧标示二选一。具体搭配、件数和容量待核"
    ],
    "gifts": [
     {
      "name": "雪花芭蕾高光粉挂件（随机色）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "十周年气垫梳（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾mini提亮液（01/03色号随机）×1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "骑士独角兽手持镜（限定色云朵白）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾中礼盒（空包装）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "活动专享价 ¥299/套 券后价 ¥269 平台券 · 满60减30 · 仅剩 00:04:50 满1件减177元 送赠 先用后付 · 0元下单，确认收货后付款 顺丰隔日达 · 预计后天送达 具体色号以链接规格为主，礼赠详情与机制以交易快照和订单实际显示为准；满1件减177元至299元，叠加平台券满60减30；运费：包邮+运费险；截图3（21:54），页面已售3000+。热度按截图销量估计。 顺丰包邮，含运费险。主播口播待补"
   }
  ],
  "insight": "当前时段只有这一条在播记录（花知晓），官方价 ¥476，暂无横向对比。"
 },
 {
  "id": "p191",
  "keywords": [
   "花知晓",
   "Flower Knows",
   "芭蕾舞礼盒",
   "芭蕾舞",
   "唇釉",
   "腮红",
   "眼影盘",
   "提亮液",
   "眼线液笔",
   "https://v.douyin.com/hQhMNCddMXk/",
   "##T4hCkZDVtb9##"
  ],
  "product": {
   "brand": "花知晓",
   "name": "【现货直发】花知晓-芭蕾舞礼盒 唇釉腮红眼影盘提亮液眼线液笔 db",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 465,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "花知晓",
    "official": true,
    "heat": 85,
    "price": 269,
    "url": "https://v.douyin.com/hQhMNCddMXk/",
    "bundle": [
     "商品标题列示唇釉、腮红、眼影盘、提亮液、眼线液笔。具体搭配、件数和容量待核"
    ],
    "gifts": [
     {
      "name": "平头眼影刷 ×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "草莓洛可可mini手持镜挂件（小茶薄荷）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "十周年气垫梳（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "十周年立体镜（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "气垫拇指粉扑 ×1包（1个）",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾中礼盒（空包装）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "活动专享价 ¥299/套 券后价 ¥269 平台券 · 满60减30 · 仅剩 00:05:06 满1件减166元 送赠 直播间同价 先用后付 · 0元下单，确认收货后付款 顺丰隔日达 · 预计后天送达 具体色号以链接规格为主，礼赠详情与机制以交易快照和订单实际显示为准；满1件减166元至299元，叠加平台券满60减30；运费：包邮+运费险；截图4（21:54），页面已售1万+。热度按截图销量估计。 顺丰包邮，含运费险。主播口播待补。 抖音分享口令 ##T4hCkZDVtb9## 商品页标注「童话奇奇屋 推荐」。 直播间入口 https://live.douyin.com/386749253154?from_search=true"
   }
  ],
  "insight": "当前时段只有这一条在播记录（花知晓），官方价 ¥465，暂无横向对比。"
 },
 {
  "id": "p192",
  "keywords": [
   "花知晓",
   "Flower Knows",
   "雪精灵礼盒",
   "雪精灵",
   "唇釉",
   "腮红",
   "眼影",
   "水润提亮液",
   "https://v.douyin.com/an3cmvc6fII/"
  ],
  "product": {
   "brand": "花知晓",
   "name": "【现货直发】花知晓-雪精灵礼盒 唇釉腮红眼影水润提亮液日常 db",
   "spec": "1套",
   "specVolume": 1,
   "unit": "套",
   "official": 406,
   "category": "套装"
  },
  "collected": {
   "window": "采集日 undefined"
  },
  "listings": [
   {
    "platform": "抖音",
    "channel": "花知晓",
    "official": true,
    "heat": 95,
    "price": 228,
    "url": "https://v.douyin.com/an3cmvc6fII/",
    "bundle": [
     "商品标题列示唇釉、腮红、眼影、水润提亮液。具体搭配、件数和容量待核"
    ],
    "gifts": [
     {
      "name": "周年限定手机链（随机款）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "保湿精华喷雾 50ml ×1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "骑士独角兽手持镜（限定色云朵白）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "草莓洛可可mini手持镜挂件（小茶薄荷）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾mini提亮液（01/03色号随机）×1",
      "volume": null,
      "value": 0,
      "kind": "other",
      "basis": "实物赠品，无可靠价格"
     },
     {
      "name": "雪花芭蕾中礼盒（空包装）×1",
      "volume": null,
      "value": 0,
      "kind": "physical",
      "basis": "实物赠品，无可靠价格"
     }
    ],
    "crowd": "关注该商品的直播购买用户",
    "note": "活动专享价 ¥258/套 券后价 ¥228 平台券 · 满60减30 · 仅剩 00:04:55 满1件减148元 送赠 先用后付 · 0元下单，确认收货后付款 顺丰隔日达 · 预计后天送达 具体色号以链接规格为主，礼赠详情与机制以交易快照和订单实际显示为准；满1件减148元至258元，叠加平台券满60减30；运费：包邮+运费险；截图5（21:54），页面已售2万+。热度按截图销量估计。 顺丰包邮，含运费险。主播口播待补"
   }
  ],
  "insight": "当前时段只有这一条在播记录（花知晓），官方价 ¥406，暂无横向对比。"
 }
];
