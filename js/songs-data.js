// ==========================================================================
// قائمة الأغاني والعيّنات الخاصة بـ الفنان سامح نبيل - Sameh Nabil
// تم تنظيم وتنسيق الأغاني ببياناتها الدقيقة وتصنيفاتها
// ==========================================================================

const songsData = [
  {
    id: 1,
    title: "أنا بتحسد جنبك عشان أجمل إنسانة قابلتها",
    recipient: "إيمان",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "01:37",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/أنا بتحسد جنبك عشان  أجمل إنسانة قابلتها 🫂 ( إيمان ) - Copy.mp3",
    description: "أغنية رومانسية مخصصة بالاسم لـ إيمان بمشاعر وألحان ساحرة"
  },
  {
    id: 2,
    title: "أنا لما بحب (خطوبة حنان وأحمد)",
    recipient: "حنان + أحمد",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "00:46",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/أنا لما بحب .. ( حنان خطوبه+ أحمد).mp3",
    description: "أغنية احتفال بالخطوبة مخصصة للعروسين حنان وأحمد"
  },
  {
    id: 3,
    title: "أيوة بسببك قادر أكمل",
    recipient: "سلوى",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:53",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/أيوة بسببك قادر أكمل  ( سلوى ).mp3",
    description: "إهداء رومانسي صادق ومميز بالاسم لـ سلوى"
  },
  {
    id: 4,
    title: "عيد ميلاد اباكير",
    recipient: "اباكير",
    category: "birthdays",
    categoryName: "أعياد الميلاد",
    duration: "03:28",
    cover: "assets/images/cover_birthday.jpg",
    audioUrl: "assets/songs/اباكير 2عيد ميلاد.m4a",
    description: "أغنية عيد ميلاد مبهجة وحماسية مخصصة لـ اباكير"
  },
  {
    id: 5,
    title: "احنا بقينا لبعض",
    recipient: "مينا + ميرنا",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "01:26",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/احنا بقينا لبعض  ( مينا + ميرنا ).mp3",
    description: "أغنية زفاف رومانسية مخصصة للعروسين مينا وميرنا"
  },
  {
    id: 6,
    title: "اسمع يا عريس وصايا الله",
    recipient: "مايكل + هبه",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "00:30",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/اسمع يا عريس وصايا الله  ( مايكل + هبه ).mp3",
    description: "زفة إكليل مباركة ومميزة للعروسين مايكل وهبه"
  },
  {
    id: 7,
    title: "الحب جاني جاني",
    recipient: "مينا",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "00:54",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/الحب جاني جاني  ( مينا ) - Copy.mp3",
    description: "أغنية مبهجة بإيقاع شبابي مخصصة باسم مينا"
  },
  {
    id: 8,
    title: "أمي ثم أمي (هدية لـ ست الحبايب)",
    recipient: "أم سامح",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "03:55",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/امي_ثم_امي_هديه_ل_ام_سامح_.mp3",
    description: "إهداء مؤثر ودافئ بصوت الفنان سامح نبيل لـ أم سامح"
  },
  {
    id: 9,
    title: "انتي أجمل ست في العالم",
    recipient: "سلمى",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:39",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/انتي أجمل ست في العالم  ( سلمي ).mp3",
    description: "أغنية غزل وإهداء استثنائي مخصص باسم سلمى"
  },
  {
    id: 10,
    title: "انتي قلبي وروحي",
    recipient: "فاطمة",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:30",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/انتي قلبي وروحي 🫂 ( فاطمة).mp3",
    description: "إهداء رومانسي لطيف ومميز باسم فاطمة"
  },
  {
    id: 11,
    title: "سنة حلوة يا انجيلوس (عيد ميلاد)",
    recipient: "انجيلوس",
    category: "birthdays",
    categoryName: "أعياد الميلاد",
    duration: "01:26",
    cover: "assets/images/cover_birthday.jpg",
    audioUrl: "assets/songs/انجيلوس عيد ميلاد_.mp3",
    description: "أغنية عيد ميلاد واحتفال بهيج مخصصة لـ انجيلوس"
  },
  {
    id: 12,
    title: "النهارده عيد ميلاد مينا",
    recipient: "مينا",
    category: "birthdays",
    categoryName: "أعياد الميلاد",
    duration: "00:34",
    cover: "assets/images/cover_birthday.jpg",
    audioUrl: "assets/songs/انهاردة عيد ميلاد  ( مينا ).mp3",
    description: "تهنئة عيد ميلاد مبهجة وحصرية باسم مينا"
  },
  {
    id: 13,
    title: "أول مرة قابلتك فيها",
    recipient: "مارينا",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "00:58",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/اول مرة قابلتك فيها  ( مارينا ) _أحلى هدية ممكن تقدمها هي حاجة متفصلة على مقاس اللي بتحبه. أغنيتك المفضلة بصوت نجمك المفضل.. بس باسمك أنت! - Copy.mp3",
    description: "ذكرى أجمل لقاء بلحن ساحر مخصص باسم مارينا"
  },
  {
    id: 14,
    title: "بمناسبة العيد عايز أقولك",
    recipient: "ميار",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "01:00",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/بمناسبة العيد عايز أقولك ... ( ميار ).mp3",
    description: "تهنئة عيد رقيقة وإهداء لطيف باسم ميار"
  },
  {
    id: 15,
    title: "تعالي نعيش حياتنا يا مريم",
    recipient: "مريم",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "01:11",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/تعالي نعيش حياتنا يامريم.mp3",
    description: "أغنية رومانسية جميلة ومميزة مصممة باسم مريم"
  },
  {
    id: 16,
    title: "حلوة في كل الحالات",
    recipient: "ساندي",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "01:15",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/حلوة في كل الحالات 🫶  ( ساندي).mp3",
    description: "أغنية غزل وإهداء راقي ومميز باسم ساندي"
  },
  {
    id: 17,
    title: "إهداء خاص للدكتور باسيلي",
    recipient: "د. باسيلي",
    category: "graduation",
    categoryName: "التخرج والنجاح",
    duration: "02:26",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/دكتور_باسيلي_٢.mp3",
    description: "أغنية تقدير ونجاح وتكريم خاصة للدكتور باسيلي"
  },
  {
    id: 18,
    title: "إهداء غنائي باسم رانيا",
    recipient: "رانيا",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:30",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/رانيا .m4a",
    description: "إهداء غنائي عذب ومميز بصوت دافئ باسم رانيا"
  },
  {
    id: 19,
    title: "احضني (فرح روماندا)",
    recipient: "روماندا",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "05:35",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/روماندا_احضني -فراح.mp3",
    description: "أغنية زفاف ورقصة سلو ساحرة للعروس روماندا"
  },
  {
    id: 20,
    title: "سهرنا يا ليل للصبح يا ليل",
    recipient: "محمد",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "01:05",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/سهرنا يا ليل للصبح يا ليل  ( محمد ).mp3",
    description: "أجواء سهرة واحتفال مبهجة مصممة باسم محمد"
  },
  {
    id: 21,
    title: "فستانك الأبيض يا إنجي",
    recipient: "إنجي",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "01:43",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/فستانك الابيض باسم _انجي.m4a",
    description: "أغنية زفاف وفرحة الفستان الأبيض باسم إنجي"
  },
  {
    id: 22,
    title: "كل البشر من طين وانتي من نور",
    recipient: "ساندي",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:51",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/كل البشر من طين وانتي يقلبي من نور  ( ساندي )   ZAZA - زياد ظاظا.mp3",
    description: "إهداء شبابي إيقاعي مميز ومصمم لـ ساندي"
  },
  {
    id: 23,
    title: "كنت بحلم بيك يوماتي",
    recipient: "چيسيكا",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "00:42",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/كنت بحلم بيك يوماتى حلم غير لون حياتى  ( چيسيكا ).mp3",
    description: "أغنية حب ورومانسية حالمة مصممة باسم چيسيكا"
  },
  {
    id: 24,
    title: "كيرلس وميرنا - زفة الفرح (النسخة 2)",
    recipient: "كيرلس + ميرنا",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "02:48",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/كيرلس +ميرنا افراح (2).mp3",
    description: "أغنية زفاف حماسية ومبهجة للعروسين كيرلس وميرنا"
  },
  {
    id: 25,
    title: "كيرلس وميرنا - فرحة العمر",
    recipient: "كيرلس + ميرنا",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "02:28",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/كيرلس +ميرنا افراح.mp3",
    description: "أغنية زفاف استثنائية مصممة للعروسين كيرلس وميرنا"
  },
  {
    id: 26,
    title: "لو عيشت احلف كل حياتي",
    recipient: "فاطمة",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "00:59",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/لو عيشت احلف كل حياتي يافاطمه.mp3",
    description: "إهداء رومانسي راقي ومميز باسم فاطمة"
  },
  {
    id: 27,
    title: "أغنية مخصصة باسم مارينا",
    recipient: "مارينا",
    category: "gifts",
    categoryName: "الإهداءات والمفاجآت",
    duration: "01:31",
    cover: "assets/images/cover_gift.jpg",
    audioUrl: "assets/songs/مارينا .mp3",
    description: "أغنية وإهداء غنائي ممتع بصوت عذب باسم مارينا"
  },
  {
    id: 28,
    title: "مبروك مبروك يا حياة قلبي",
    recipient: "ميرنا + أحمد",
    category: "weddings",
    categoryName: "الأفراح والخطوبة",
    duration: "00:36",
    cover: "assets/images/cover_wedding.jpg",
    audioUrl: "assets/songs/مبروك مبروك  يا حياة قلبى مبروك _ ( ميرنا + أحمد).mp3",
    description: "تهنئة زفاف وخطوبة مبهجة للعروسين ميرنا وأحمد"
  },
  {
    id: 29,
    title: "ياما ليالي وانت مش معايا",
    recipient: "مينا + مارينا",
    category: "special",
    categoryName: "المناسبات الخاصة",
    duration: "03:03",
    cover: "assets/images/cover_special.jpg",
    audioUrl: "assets/songs/ياما-ليالي-وانت-مش-معايا-_-مينا-مارينا-_-_-مش-مجرد-أغنية..-دي-ذكرى-با...سوص-لـ-_-مينا-و-مارينا-_..mp3",
    description: "ذكرى خاصة وقصة حب ملهمة مخصصة لـ مينا ومارينا"
  }
];
