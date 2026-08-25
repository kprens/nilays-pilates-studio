# Nilay's Pilates Studio — web sitesi

Statik, iki dilli (TR/EN), bağımlılıksız bir site. Çıktı düz HTML/CSS/JS olduğu
için GitHub Pages doğrudan yayınlar; sunucu, framework ya da `npm install` yok.

**Canlı:** https://kprens.github.io/nilays-pilates-studio/

---

## ⚠ Önce bunu okuyun

`index.html` ve `en/index.html` **üretilmiş dosyalardır. Elle düzenlemeyin** —
bir sonraki derlemede üzerlerine yazılır. İçeriği `src/data/` altından değiştirin
ve derleyin:

```bash
node src/build.mjs
```

Derleme sonunda stüdyodan hâlâ beklenen bilgilerin listesini yazdırır.

---

## Klasör yapısı

```
src/
  data/            ← İÇERİK BURADA. Günlük değişiklikler için tek durak.
    site.js          marka, adres, telefon/WhatsApp/e-posta, menü, meta
    content.js       tüm bölüm metinleri (TR + EN yan yana)
    pricing.js       paket fiyatları, dile duyarlı
    schedule.js      haftalık ders programı
    team.js          eğitmenler
    gallery.js       stüdyo galerisi ve bölüm görselleri
    reviews.js       Google yorumları (şu an bilerek boş)
  templates/       HTML şablonları (page.mjs = <head> + bölüm sırası)
  lib/util.mjs     yardımcılar (çeviri seçici, para biçimi, ikonlar)
  build.mjs        derleyici

assets/
  css/app.css      tasarım sistemi (tokenlar → bileşenler → responsive)
  js/app.js        etkileşim katmanı, bağımlılıksız
  img/             görseller (şu an yer tutucu)

tools/
  make-placeholders.mjs   yer tutucu SVG üretici
  make-brand.py           favicon / apple-touch-icon / og.png
```

---

## Sık yapılan işler

**Fiyat değiştirmek** → `src/data/pricing.js`, sonra derle.
İngilizce sayfada farklı fiyat gösterilecekse ilgili kademeye
`en: { total: 0, perClass: 0 }` ekleyin; eklenmezse Türkçe fiyat kullanılır.

**Ders programını girmek** → `src/data/schedule.js` içindeki `days` dizisini
doldurun ve `isSample` değerini `false` yapın. "Örnek program" uyarısı otomatik kalkar.

**Yeni eğitmen** → `src/data/team.js` dizisine bir nesne ekleyin, portreyi
`assets/img/team/` içine koyun. Ekip bölümü kendini günceller.

**Gerçek fotoğrafları koymak** → dosyayı `assets/img/studio/` içine koyun,
`src/data/gallery.js` içindeki `src`/`ext` alanlarını güncelleyin ve
`placeholder: true` satırını silin. Yer tutucu etiketi kendiliğinden kaybolur.
Aynı dosya adını kullansanız bile sorun olmaz: derleme her görsele içerik
hash'i eklediği için ziyaretçiler önbellekteki eski görseli görmez.

**Telefon / WhatsApp eklemek** → `src/data/site.js` içindeki `phone` ve
`whatsapp` alanlarını doldurun. İletişim satırları ve mobildeki sabit WhatsApp
düğmesi otomatik etkinleşir; boşken uydurma numara basılmaz.

**İletişim formunu bağlamak** → `site.formEndpoint` alanına Formspree/Netlify
adresini yazın. Boşken form gönderilmez, kullanıcıya Instagram'a yönlendiren
açıklayıcı bir ekran gösterilir.

---

## Stüdyodan hâlâ beklenenler

Bunlar bilinçli olarak boş bırakıldı; uydurma veri konmadı.

- Telefon ve WhatsApp numarası
- E-posta adresi (ve form gönderim adresi)
- Gerçek haftalık ders programı — şu an yerleşimi göstermek için örnek
- Gerçek stüdyo fotoğrafları ve eğitmen portreleri
- Google işletme profili linki (öğrenci yorumları bölümü buna bağlanacak)
- İngilizce sayfa için ayrı fiyat listesi (şu an TR fiyatları gösteriliyor)
- Açık adresin teyidi: `Beyaz Zambaklar Sok. 9/4` Instagram profilinden alındı,
  müşteri dokümanında yalnızca "Gaziosmanpaşa, Ankara" yazıyor

---

## Teknik notlar

- **Motion:** IntersectionObserver ile scroll reveal. Reveal'in başlangıç
  gizliliği `.js` sınıfına bağlıdır — JS yüklenmezse tüm içerik görünür kalır.
  `prefers-reduced-motion` desteklenir.
- **Önbellek:** CSS, JS ve görsel URL'lerine derlemede içerik hash'i eklenir.
- **SEO:** iki ayrı statik sayfa, karşılıklı `hreflang` + `x-default`, canonical,
  Open Graph, JSON-LD (`HealthAndBeautyBusiness` + `SportsActivityLocation`).
- **Erişilebilirlik:** semantik başlık hiyerarşisi, ARIA'lı sekme desenleri
  (ok tuşlarıyla gezinme), `<dialog>` tabanlı lightbox, görünür odak halkaları,
  içeriğe atlama bağlantısı.
