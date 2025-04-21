# Oyun Merkezi Projesi

Bu proje, bir oyun merkezi uygulamasını temsil eder. Kullanıcılar giriş yapabilir, kayıt olabilir, şifrelerini sıfırlayabilir ve lobiler oluşturabilir. Proje, React ve Material-UI kullanılarak geliştirilmiştir.

## Proje Yapısı

### 1. `Dashboard.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/pages/dashboard.js`
- **Açıklama:** 
  - Kullanıcıların oyunları ve lobileri görüntüleyebileceği ana sayfadır.
  - Kullanıcı, yeni bir lobi oluşturabilir ve mevcut lobileri listeleyebilir.
  - Sol menüde kullanıcı istatistikleri görüntülenir.
- **Özellikler:**
  - Oyunlar ve lobiler listesi.
  - Yeni lobi oluşturma formu.
  - Kullanıcı istatistiklerini gösteren çekilebilir bir menü.
  - Çıkış yapma butonu.

---

### 2. `Login.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/pages/login.js`
- **Açıklama:** 
  - Kullanıcıların giriş yapmasını sağlar.
  - "Beni Hatırla" özelliği ile kullanıcı bilgilerini yerel depolamada saklar.
  - Başarılı giriş sonrası kullanıcıyı `Dashboard` sayfasına yönlendirir.
- **Özellikler:**
  - Email ve şifre giriş alanları.
  - "Beni Hatırla" seçeneği.
  - Şifre sıfırlama ve kayıt olma bağlantıları.

---

### 3. `Register.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/pages/register.js`
- **Açıklama:** 
  - Yeni kullanıcıların kayıt olmasını sağlar.
  - Kullanıcı adı, email ve şifre bilgilerini alır.
  - Şifrelerin eşleşip eşleşmediğini kontrol eder.
  - Kullanıcıyı yerel depolamaya kaydeder.
- **Özellikler:**
  - Kullanıcı adı, email, şifre ve şifre tekrar alanları.
  - Şifrelerin eşleşip eşleşmediğini kontrol eder.
  - Kayıt sonrası kullanıcıyı giriş sayfasına yönlendirir.

---

### 4. `ResetPassword.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/pages/Resetpassword.js`
- **Açıklama:** 
  - Kullanıcıların şifrelerini sıfırlamasını sağlar.
  - Email adresine göre kullanıcıyı bulur ve yeni şifreyi kaydeder.
- **Özellikler:**
  - Email ve yeni şifre giriş alanları.
  - Şifre sıfırlama işlemi sonrası giriş sayfasına yönlendirme.

---

### 5. `LoginForm.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/components/LoginForm.js`
- **Açıklama:** 
  - Giriş formunu temsil eden bir bileşendir.
  - Şifreyi hashleyerek giriş verilerini üst bileşene iletir.
- **Özellikler:**
  - Email ve şifre giriş alanları.
  - "Beni Hatırla" seçeneği.
  - Şifreyi hashleme işlemi.

---

### 6. `crypto.js`
- **Dosya Yolu:** `packages/oyunMerkezi/src/utils/crypto.js`
- **Açıklama:** 
  - Şifreleri SHA-256 algoritması ile hashlemek için kullanılan yardımcı bir dosyadır.
- **Fonksiyonlar:**
  - `hashPassword(password)`: Verilen şifreyi SHA-256 algoritması ile hashler ve hexadecimal formatında döner.

---

## Kullanılan Teknolojiler
- **React:** Kullanıcı arayüzü geliştirme.
- **Material-UI:** Modern ve duyarlı tasarım bileşenleri.
- **React Router:** Sayfa yönlendirme.
- **Crypto-JS:** Şifreleme ve hashleme işlemleri.

## Özellikler
- Kullanıcı Girişi
- Kayıt Olma
- Şifre Sıfırlama
- Lobi Oluşturma
- Kullanıcı İstatistikleri Görüntüleme
