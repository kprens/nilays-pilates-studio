/* ---------------------------------------------------------------------------
   BÖLÜM METİNLERİ (TR / EN)
   Türkçe metinler müşteri dokümanından birebir alınmıştır; değiştirmeyin.
--------------------------------------------------------------------------- */

export const hero = {
  eyebrow: { tr: 'Gaziosmanpaşa · Ankara', en: 'Gaziosmanpaşa · Ankara' },
  /* Nilay Hanım'ın 29 Ağu'da istediği başlık — önceki "Daha iyi hareket
     edin. Daha güçlü hissedin." yerine. */
  title: {
    tr: ['Bedeninize iyi gelen hareket.', 'Zihninize kalan hafiflik.'],
    en: ['Movement that’s good for your body.', 'A lightness that stays with your mind.'],
  },
  lede: {
    tr: 'Ankara’da kişiye özel yaklaşımla çalışan butik Pilates stüdyosu.',
    en: 'A boutique Pilates studio in Ankara, built around a personal approach.',
  },
  chips: [
    { tr: 'Reformer', en: 'Reformer' },
    { tr: 'Hamile Pilatesi', en: 'Pregnancy Pilates' },
    { tr: 'Klinik Pilates', en: 'Clinical Pilates' },
    { tr: 'Küçük Grup', en: 'Small Group' },
    { tr: 'Özel Ders', en: 'Private Session' },
  ],
  ctaPrimary: { tr: 'Dersleri Keşfet', en: 'Explore Classes' },
  ctaSecondary: { tr: 'İletişime Geç', en: 'Get in Touch' },
  scroll: { tr: 'Aşağı kaydırın', en: 'Scroll' },
};

export const difference = {
  index: '01',
  kicker: { tr: 'Bizi Farklı Kılan', en: 'What Sets Us Apart' },
  title: { tr: 'Pilates, kişisel bir deneyimdir.', en: 'Pilates is a personal experience.' },
  items: [
    {
      title: { tr: 'Küçük Gruplar', en: 'Small Groups' },
      body: {
        tr: 'Daha fazla ilgi, daha doğru yönlendirme ve daha kişisel bir ders deneyimi.',
        en: 'More attention, more accurate guidance and a more personal class.',
      },
    },
    {
      title: { tr: 'Kişiye Özel Yaklaşım', en: 'A Personal Approach' },
      body: {
        tr: 'Her beden farklıdır. Dersler öğrencinin seviyesine, ihtiyaçlarına ve hedeflerine göre şekillenir.',
        en: 'Every body is different. Classes are shaped around your level, your needs and your goals.',
      },
    },
    {
      title: { tr: 'Profesyonel Ekipman', en: 'Professional Equipment' },
      body: {
        tr: 'Reformer, Tower, Cadillac ve Chair ekipmanlarıyla kapsamlı Pilates deneyimi.',
        en: 'A complete Pilates practice on Reformer, Tower, Cadillac and Chair.',
      },
    },
    {
      title: { tr: 'Deneyimli Eğitmenler', en: 'Experienced Instructors' },
      body: {
        tr: 'Ortak kalite anlayışıyla çalışan profesyonel eğitmen ekibi.',
        en: 'A professional team of instructors working to one shared standard.',
      },
    },
    {
      title: { tr: 'İngilizce Dersler', en: 'Classes in English' },
      body: {
        tr: 'İngilizce konuşan öğrenciler için uygun ders seçenekleri.',
        en: 'Class options for students who prefer to train in English.',
      },
    },
  ],
};

export const classes = {
  index: '02',
  kicker: { tr: 'Dersler', en: 'Classes' },
  title: { tr: 'İki farklı ritim, aynı özen.', en: 'Two different rhythms, the same care.' },
  items: [
    {
      id: 'reformer-grup',
      label: { tr: 'Grup Dersi', en: 'Group Class' },
      name: { tr: 'Reformer Grup Dersleri', en: 'Reformer Group Classes' },
      headline: {
        tr: 'Kalabalıkta Kaybolmadan, Birlikte İlerleyin.',
        en: 'Move forward together, without getting lost in the crowd.',
      },
      body: {
        tr: 'Maksimum 7 kişilik gruplarda; kişisel ilginin, doğru formun ve sıcak bir atmosferin korunduğu etkili Pilates dersleri. Kendi ritminizde bedeninizi güçlendirirken günün stresini geride bırakın ve aynı tutkuyu paylaşan bir topluluğun parçası olun.',
        en: 'Effective Pilates classes in groups of no more than seven, where personal attention, correct form and a warm atmosphere are all kept intact. Strengthen your body at your own pace, leave the day’s stress behind and become part of a community that shares the same enthusiasm.',
      },
      facts: [
        {
          label: { tr: 'Kimler için?', en: 'Who is it for?' },
          value: {
            tr: 'Yeni başlayanlar, düzenli Pilates yapanlar ve daha kişisel bir grup dersi deneyimi isteyen herkes.',
            en: 'Beginners, regular practitioners and anyone looking for a more personal group class.',
          },
        },
        {
          label: { tr: 'Grup büyüklüğü', en: 'Group size' },
          value: { tr: 'Maksimum 7 kişi', en: 'Maximum 7 people' },
        },
      ],
      cta: { label: { tr: 'Ders Programını Gör', en: 'See the Schedule' }, href: '#program' },
      image: { dir: 'studio', src: 'genel-gorunum-2', ext: 'jpg' },
      alt: {
        tr: 'Stüdyonun reformer grup dersi salonu',
        en: 'The studio’s reformer group class room',
      },
    },
    {
      id: 'ozel-ders',
      label: { tr: 'Birebir', en: 'One-to-One' },
      name: { tr: 'Özel Pilates Dersi', en: 'Private Pilates Session' },
      headline: {
        tr: 'Sadece Senin Bedenin, Senin Hedeflerin.',
        en: 'Just your body, just your goals.',
      },
      body: {
        tr: 'Tüm dikkatin ve uzmanlığın tamamen size ayrıldığı bire bir Pilates dersleri. Bedeninizin ihtiyaçlarına, postürünüze ve kişisel hedeflerinize özel hazırlanan antrenman programıyla; her hareketi en doğru formda uygulayın, sakatlanma riskini sıfırlayın ve maksimum verim alın.',
        en: 'One-to-one Pilates sessions where the instructor’s full attention and expertise are yours alone. With a programme built around your body’s needs, your posture and your personal goals, you perform every movement in its correct form, remove the risk of injury and get the most out of each session.',
      },
      facts: [
        { label: { tr: 'Süre', en: 'Duration' }, value: { tr: '50 dakika', en: '50 minutes' } },
        {
          label: { tr: 'His', en: 'The feeling' },
          value: {
            tr: 'Profesyonel, hedef odaklı, ayrıcalıklı.',
            en: 'Professional, focused, private.',
          },
        },
      ],
      cta: {
        label: { tr: 'Özel Pilates Derslerini Keşfet', en: 'Explore Private Sessions' },
        href: '#paketler',
      },
      image: { dir: 'studio', src: 'birebir-ders', ext: 'jpg' },
      alt: {
        tr: 'Birebir bir Pilates dersinden bir kare',
        en: 'A moment from a one-to-one Pilates session',
      },
    },
  ],
};

export const studio = {
  index: '03',
  kicker: { tr: 'Stüdyo', en: 'The Studio' },
  title: { tr: 'Kendinize ait bir alan.', en: 'A space that belongs to you.' },
  body: [
    {
      tr: 'Kendinize, hareketinize ve gelişiminize odaklanabileceğiniz sakin, kişisel ve profesyonel bir alan.',
      en: 'A calm, personal and professional space where you can focus on yourself, your movement and your progress.',
    },
    {
      tr: 'Nilay’s Pilates Studio; küçük gruplar, profesyonel ekipmanlar ve kişisel ilgiyle kaliteli bir Pilates deneyimi sunmak için tasarlandı.',
      en: 'Nilay’s Pilates Studio was designed to deliver a quality Pilates experience through small groups, professional equipment and personal attention.',
    },
  ],
  locationLabel: { tr: 'Konum', en: 'Location' },
  location: { tr: 'Gaziosmanpaşa, Ankara', en: 'Gaziosmanpaşa, Ankara' },
  cta: { tr: 'Konumu Gör', en: 'View Location' },
  galleryHint: { tr: 'Galeriyi büyüt', en: 'Open gallery' },
};

export const approach = {
  index: '04',
  kicker: { tr: 'Yaklaşımımız', en: 'Our Approach' },
  title: { tr: 'Pilates, hareket etmekten fazlasıdır.', en: 'Pilates is more than movement.' },
  lede: {
    tr: 'Pilates’i yalnızca bir egzersiz olarak değil; daha güçlü, daha bilinçli ve bedenine daha güvenli bir şekilde hareket etmenin bir yolu olarak görüyoruz.',
    en: 'We see Pilates not simply as exercise, but as a way of moving more strongly, more consciously and with more trust in your own body.',
  },
  values: [
    {
      key: { tr: 'Kalite', en: 'Quality' },
      body: { tr: 'Hareketleri sadece yapmak değil, doğru yapmak.', en: 'Not just doing the movement — doing it correctly.' },
    },
    {
      key: { tr: 'Gelişim', en: 'Progress' },
      body: { tr: 'Kusursuzluk yerine sürdürülebilir gelişim.', en: 'Sustainable progress instead of perfection.' },
    },
    {
      key: { tr: 'Kişisellik', en: 'Individuality' },
      body: { tr: 'Her bedenin farklı olduğunu kabul etmek.', en: 'Accepting that every body is different.' },
    },
    {
      key: { tr: 'Özgüven', en: 'Confidence' },
      body: { tr: 'Hareket ettikçe bedenine daha fazla güvenmek.', en: 'Trusting your body more the more you move it.' },
    },
  ],
};

export const teamSection = {
  index: '06',
  kicker: { tr: 'Ekibimiz', en: 'Our Team' },
  title: { tr: 'Deneyimli eğitmenler. Ortak bir yaklaşım.', en: 'Experienced instructors. One shared approach.' },
  lede: {
    tr: 'Nilay’s Pilates Studio’da eğitmenlerimiz ortak bir kalite ve eğitim anlayışıyla çalışır.',
    en: 'At Nilay’s Pilates Studio our instructors work to a shared standard of quality and teaching.',
  },
};

export const founder = {
  index: '07',
  kicker: { tr: 'Kurucu', en: 'Founder' },
  name: 'Nilay Kentkur',
  role: { tr: 'Kurucu ve Pilates Eğitmeni', en: 'Founder & Pilates Instructor' },
  /* Nilay Hanım'ın 29 Ağu'da gönderdiği kendi yazdığı biyografi — birebir
     korunmuştur. Kısa tek satırlık vurgular (poem-tarzı ayrımlar) \n ile
     tek paragraf içinde tutulur; CSS'te .founder-body p için
     white-space:pre-line bu satır kırılımlarını olduğu gibi gösterir. */
  headline: {
    tr: ['Hareketi öğretmekle başladım.', 'Bedeni anlamaya dönüştü.'],
    en: ['I began by teaching movement.', 'It became about understanding the body.'],
  },
  body: [
    {
      tr: 'Ben Nilay.',
      en: 'I’m Nilay.',
    },
    {
      tr: '2013 yılında ders vermeye başladığımda, hareketi insanlara öğretmekle başlayan bu yolculuğun zamanla çok daha derin bir yere dönüşeceğini bilmiyordum.',
      en: 'When I started teaching in 2013, I had no idea that a journey which began with teaching movement to people would grow into something much deeper.',
    },
    {
      tr: 'Yıllar içinde Pilates’in yanı sıra Yoga ve Hamak Yoga alanlarında da eğitim aldım ve dersler verdim. Bedenin nasıl çalıştığını daha iyi anlayabilmek için anatomi, klinik Pilates ve omurga patolojileri üzerine uzmanlığımı geliştirdim.',
      en: 'Over the years, alongside Pilates, I trained and taught in Yoga and Aerial Yoga as well. To understand how the body truly works, I built my expertise in anatomy, clinical Pilates and spinal pathologies.',
    },
    {
      tr: 'Bugün bir hareketi öğretirken yalnızca "nasıl yapılacağını" düşünmüyorum.\nNeden yapıldığını,\nhangi bedene nasıl uyarlanması gerektiğini\nve o bedenin harekete nasıl cevap verdiğini düşünüyorum.',
      en: 'Today, when I teach a movement, I don’t just think about “how it’s done.”\nI think about why it’s done,\nhow it needs to be adapted for each body,\nand how that body responds to the movement.',
    },
    {
      tr: 'Çünkü her beden aynı değildir.',
      en: 'Because no two bodies are the same.',
    },
    {
      tr: 'Bir hareket bir kişi için güçlendirici olabilirken, başka bir kişi için değiştirilmesi gerekebilir. İyi bir eğitmen içinse önemli olan herkese aynı hareketi yaptırmak değil, doğru hareketi doğru kişiye verebilmektir.',
      en: 'A movement that strengthens one person may need to be changed entirely for another. For a good instructor, what matters isn’t having everyone do the same movement — it’s giving the right movement to the right person.',
    },
    {
      tr: 'Benim Pilates anlayışım tam olarak burada başlıyor.',
      en: 'This is exactly where my understanding of Pilates begins.',
    },
    {
      tr: 'Güçlü bir beden elbette önemli. Ama benim için Pilates bundan daha fazlası.',
      en: 'A strong body matters, of course. But for me, Pilates is more than that.',
    },
    {
      tr: 'Bedenini tanımak.\nHareketine güvenmek.\nDaha iyi hissetmek.\nVe bir gün "Bunu yapabiliyorum." diyebilmek.',
      en: 'Getting to know your body.\nTrusting your movement.\nFeeling better.\nAnd one day, being able to say, “I can do this.”',
    },
    {
      tr: 'Nilay’s Pilates Studio’yu da bu anlayışla kurdum.',
      en: 'I founded Nilay’s Pilates Studio with exactly this understanding.',
    },
    {
      tr: 'Burada amacımız yalnızca daha fit görünmek değil; bedeninizle daha güçlü, daha bilinçli ve daha güvenli bir ilişki kurmanız.',
      en: 'Our goal here isn’t just to look fitter — it’s for you to build a stronger, more conscious and more confident relationship with your own body.',
    },
  ],
};

export const pricingSection = {
  index: '08',
  kicker: { tr: 'Paketler', en: 'Packages' },
  title: { tr: 'Size uygun paketi seçin.', en: 'Choose the package that fits you.' },
  labels: {
    perClass: { tr: '/ ders', en: '/ class' },
    lessons: { tr: 'Ders', en: 'Classes' },
    validity: { tr: 'Geçerlilik', en: 'Validity' },
    total: { tr: 'Toplam', en: 'Total' },
    best: { tr: 'En avantajlı', en: 'Best value' },
    cta: { tr: 'Bu paket için yazın', en: 'Ask about this package' },
    save: { tr: 'ders başına avantaj', en: 'saving per class' },
    reveal: { tr: 'Fiyatları Gör', en: 'Show Prices' },
    hide: { tr: 'Fiyatları Gizle', en: 'Hide Prices' },
  },
  note: {
    tr: 'Paket süreleri satın alma tarihinden itibaren geçerlidir. Ayrıntılar ve uygunluk için bize yazabilirsiniz.',
    en: 'Package durations run from the date of purchase. Write to us for details and availability.',
  },
};

export const scheduleSection = {
  index: '05',
  kicker: { tr: 'Ders Programı', en: 'Class Schedule' },
  title: { tr: 'Haftalık ders programı.', en: 'The weekly schedule.' },
  labels: {
    day: { tr: 'Gün', en: 'Day' },
    time: { tr: 'Saat', en: 'Time' },
    type: { tr: 'Ders', en: 'Class' },
    instructor: { tr: 'Eğitmen', en: 'Instructor' },
    language: { tr: 'Dil', en: 'Language' },
    closed: { tr: 'Ders yok', en: 'No classes' },
    english: { tr: 'İngilizce', en: 'In English' },
  },
};

export const reviewsSection = {
  index: '09',
  kicker: { tr: 'Öğrenci Yorumları', en: 'Student Reviews' },
  title: { tr: 'Stüdyoda çalışanlar ne diyor?', en: 'What students say.' },
  /* Google işletme profili linki henüz gelmediyse gösterilir. */
  empty: {
    tr: 'Google yorumları bu alana bağlanacak. Stüdyonun Google işletme profili paylaşıldığında bu alan güncellenecek.',
    en: 'Google reviews will be connected here. Once the studio’s Google Business profile is shared, this space will be updated.',
  },
  /* Link geldi ama sitede gösterecek yazılı yorum metni henüz yok — link
     paylaşıldı diye otomatik yorum metni ÇEKİLMEZ, biri elle eklemeli. */
  emptyLinked: {
    tr: 'Şu an sitede gösterecek yazılı bir yorum yok. Google’daki yorumlarımıza göz atabilir, deneyiminizi paylaşmak isterseniz oradan bırakabilirsiniz.',
    en: 'There are no written reviews to show here yet. You can browse our reviews on Google, or leave your own if you’d like to share your experience.',
  },
  emptyBadge: { tr: 'Yayına hazır alan', en: 'Ready for content' },
  cta: { tr: 'Google’da yorum bırakın', en: 'Leave a review on Google' },
};

export const contactSection = {
  index: '10',
  kicker: { tr: 'İletişim', en: 'Contact' },
  title: { tr: 'Bize Ulaşın', en: 'Get in Touch' },
  lede: {
    tr: 'Ders programı, paketler veya size uygun başlangıç hakkında konuşmak için yazın.',
    en: 'Write to us about the schedule, the packages, or the right way for you to begin.',
  },
  channels: {
    phone: { tr: 'Telefon', en: 'Phone' },
    whatsapp: { tr: 'WhatsApp', en: 'WhatsApp' },
    email: { tr: 'E-posta', en: 'Email' },
    instagram: { tr: 'Instagram', en: 'Instagram' },
    maps: { tr: 'Google Maps', en: 'Google Maps' },
    address: { tr: 'Adres', en: 'Address' },
    hours: { tr: 'Çalışma Saatleri', en: 'Opening Hours' },
    pending: { tr: 'Yakında eklenecek', en: 'Coming soon' },
  },
  form: {
    name: { tr: 'Ad Soyad', en: 'Full name' },
    phone: { tr: 'Telefon', en: 'Phone' },
    email: { tr: 'E-posta', en: 'Email' },
    message: { tr: 'Mesaj', en: 'Message' },
    messagePlaceholder: {
      tr: 'Hangi derse ilgi duyuyorsunuz, hangi saatler size uygun?',
      en: 'Which class are you interested in, and which hours suit you?',
    },
    submit: { tr: 'Gönder', en: 'Send' },
    optional: { tr: 'isteğe bağlı', en: 'optional' },
    /* Form artık bir e-posta servisine değil, doğrudan WhatsApp'a gidiyor
       (site.formEndpoint hâlâ boşken). waIntro, WhatsApp'ta açılan hazır
       mesajın ilk satırı; diğer alan etiketleri (name/phone/email/message)
       aynı mesajın satır başlıklarında da kullanılıyor. */
    waIntro: {
      tr: 'Merhaba, sitenizdeki formdan yazıyorum.',
      en: 'Hello, I’m writing from the form on your website.',
    },
    successTitle: { tr: 'WhatsApp açılıyor', en: 'Opening WhatsApp' },
    successBody: {
      tr: 'Mesajınız hazırlandı. Yeni açılan pencerede WhatsApp üzerinden göndermeniz yeterli.',
      en: 'Your message is ready. Just send it from the WhatsApp window that opened.',
    },
    successCta: { tr: 'Açılmadıysa buraya tıklayın', en: 'Click here if it didn’t open' },
  },
};

export const footer = {
  cta: {
    kicker: { tr: 'Başlamaya hazır mısınız?', en: 'Ready to begin?' },
    title: { tr: 'İlk dersiniz için bize yazın.', en: 'Write to us about your first class.' },
    button: { tr: 'İletişime Geç', en: 'Get in Touch' },
  },
  rights: { tr: '© {year} Nilay’s Pilates Studio', en: '© {year} Nilay’s Pilates Studio' },
  credit: { tr: 'Tasarım ve geliştirme', en: 'Design & development' },
  langLabel: { tr: 'Dil', en: 'Language' },
  backToTop: { tr: 'Başa dön', en: 'Back to top' },
};

export const ui = {
  menu: { tr: 'Menü', en: 'Menu' },
  close: { tr: 'Kapat', en: 'Close' },
  whatsappSticky: { tr: 'WhatsApp’tan yaz', en: 'Chat on WhatsApp' },
  prev: { tr: 'Önceki', en: 'Previous' },
  next: { tr: 'Sonraki', en: 'Next' },
  skip: { tr: 'İçeriğe geç', en: 'Skip to content' },
  placeholderNote: {
    tr: 'Yer tutucu görsel — gerçek stüdyo fotoğrafı gelince değişecek',
    en: 'Placeholder image — to be replaced with a real studio photograph',
  },
};
