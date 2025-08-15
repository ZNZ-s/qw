// استيراد الوحدات المطلوبة
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');

// إنشاء تطبيق Express
const app = express();

const port = 6184; // يمكنك تغيير المنفذ إذا كنت تريد

// تعريف مجلد الملفات الثابتة (static files)
app.use(express.static(path.join(__dirname)));

// تعريف المسار الرئيسي
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// بدء الخادم
app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});
