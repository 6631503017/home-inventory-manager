# 📱 แบบฟอร์มส่งงานสอบ Take-home | Take-home Assignment Template
**ชื่อ - นามสกุล (Full Name):** Natthanan Kaewsaengin  
**รหัสนักศึกษา (Student ID):** 6631503017  
**ชื่อแอป (App Name):** Home Inventory Manager  
**Framework ที่ใช้ (Framework Used):** React Native + Expo  
**ลิงก์ GitHub Repository:** https://github.com/6631503017/home-inventory-manager  
**ลิงก์ไฟล์ติดตั้ง (APK) [Expo URL] !คำเตือน! หมดอายุวันที่ 9 พฤษภาคม 2568:** https://expo.dev/accounts/aboutblank/projects/home-inventory-manager/builds/6e35a1f5-fd5c-48ec-88f3-de1a1e4e3001  
**ลิงก์ไฟล์ติดตั้ง (APK) [FileBin] สำรอง:** https://filebin.net/budw4k9v0i21l0wa    

---

## 1. การออกแบบแอป | App Concept and Design

### 1.1 ผู้ใช้งานเป้าหมาย | User Personas  
```markdown
Persona 1:  
- ชื่อ: แพร  
- อายุ: 25 ปี  
- อาชีพ: พนักงานออฟฟิศ  
- ความต้องการ: ต้องการจัดการของในบ้านให้เป็นระเบียบ และรู้ว่าต้องซื้ออะไรเพิ่ม

Persona 2:  
- ชื่อ: ต้น  
- อายุ: 30 ปี  
- อาชีพ: ฟรีแลนซ์  
- ความต้องการ: ต้องการแอพที่ช่วยเตือนเมื่อของใกล้หมด และมี UI ที่ใช้งานง่าย
```

### 1.2 เป้าหมายของแอป | App Goals  
```markdown
- ช่วยผู้ใช้จัดการของในบ้านให้เป็นระเบียบ
- แสดงรายการของที่ต้องซื้อเพิ่ม
- แบ่งหมวดหมู่ของให้ชัดเจน
- มีระบบเตือนเมื่อของใกล้หมด
```

### 1.3 โครงร่างหน้าจอ / Mockup  
แอพมี 3 หน้าหลัก:
1. หน้า Dashboard - แสดงภาพรวมของของทั้งหมดและของที่ต้องซื้อ
2. หน้า Inventory - จัดการรายการของทั้งหมด แบ่งตามหมวดหมู่
3. หน้า Profile - แสดงสถิติและประวัติการใช้งาน

### 1.4 การไหลของผู้ใช้งาน | User Flow  
```markdown
เปิดแอป > ดู Dashboard > เข้าหน้า Inventory > เพิ่ม/แก้ไข/ลบรายการ > ดูประวัติในหน้า Profile
```

---

## 2. การพัฒนาแอป | App Implementation

### 2.1 รายละเอียดการพัฒนา | Development Details  
```markdown
- React Native 0.76.3 
- Expo 52.0.16
- Nativewind 4.0.1
- Package: Expo Router, Expo Haptics, React Native Gesture Handler, Expo Status Bar, React Native Safe Area Context
```

### 2.2 ฟังก์ชันที่พัฒนา | Features Implemented  
```markdown
- [x] เพิ่ม/แก้ไข/ลบ รายการของ
- [x] แบ่งหมวดหมู่ของ
- [x] ระบบเตือนเมื่อของใกล้หมด
- [x] Pull-to-refresh
- [x] Swipe actions
- [x] Haptic feedback
- [x] เรียงลำดับรายการ
```

### 2.3 ภาพหน้าจอแอป | App Screenshots  
```markdown
- ![Dashboard](screenshots/dashboard.png)
- ![Inventory](screenshots/inventory.png)
- ![Profile](screenshots/profile.png)
```

---

## 3. การ Build และติดตั้งแอป | Deployment

### 3.1 ประเภท Build | Build Type
- [x] Debug  
- [ ] Release  

### 3.2 แพลตฟอร์มที่ทดสอบ | Platform Tested  
- [x] Android  
- [ ] iOS  

### 3.3 ไฟล์ README และวิธีติดตั้ง | README & Install Guide  
```markdown
1. ติดตั้ง Bun
2. ติดตั้ง Expo CLI: bun install -g expo-cli
3. Clone repository
4. ติดตั้ง dependencies: bun install
5. รันแอพ: bunx expo start
6. สแกน QR code ด้วย Expo Go app
```

---

## 4. การสะท้อนผลลัพธ์ | Reflection

```markdown
- เรียนรู้การใช้ Expo Router สำหรับ navigation
- พบปัญหาเรื่อง font loading ในตอนแรก
- เรียนรู้การใช้ Gesture Handler สำหรับ swipe actions
- หากมีเวลา จะเพิ่ม:
  - ระบบ login
  - การ sync ข้อมูลกับ cloud
  - การแชร์รายการกับคนอื่น
```

---

## 5. การใช้ AI ช่วยพัฒนา | AI Assisted Development

### 5.1 ใช้ AI ช่วยคิดไอเดีย | Idea Generation
```markdown
Prompt ที่ใช้:  
"Suggest features for a home inventory management app with gamification elements"

ผลลัพธ์:  
ได้ไอเดียเกี่ยวกับระบบหมวดหมู่, การเตือน, และ UI ที่ใช้งานง่าย
```

### 5.2 ใช้ AI ช่วยออกแบบ UI | UI Layout Prompt
```markdown
Prompt ที่ใช้:  
"Design a modern UI for a home inventory app using React Native and Tailwind"

ผลลัพธ์:  
ได้โครงสร้าง UI ที่ทันสมัยและใช้งานง่าย
```

### 5.3 ใช้ AI ช่วยเขียนโค้ด | Code Writing Prompt
```markdown
Prompt ที่ใช้:  
"Implement swipe actions and haptic feedback in React Native"

ผลลัพธ์:  
ได้โค้ดสำหรับ swipe actions และ haptic feedback
```

### 5.4 ใช้ AI ช่วย debug | Debug Prompt
```markdown
Prompt ที่ใช้:  
"Fix font loading issues in Expo app"

ผลลัพธ์:  
ได้วิธีแก้ไขปัญหาการโหลด font
```

### 5.5 ใช้ AI ช่วย Deploy | Deployment Prompt
```markdown
Prompt ที่ใช้:  
"How to build and test Expo app on Android"

ผลลัพธ์:  
bun install -g eas-cli
eas login
eas build -p android --profile preview
```

---

## ✅ Checklist ก่อนส่ง | Final Checklist
- [x] กรอกข้อมูลครบทุก Section  
- [x] แนบ GitHub และไฟล์ติดตั้ง  
- [x] สะท้อนผล และใช้ AI อย่างมีเหตุผล  