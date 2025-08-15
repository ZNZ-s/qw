// استيراد الوحدات المطلوبة
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');

// إنشاء تطبيق Express
const app = express();
const PORT2 = 6465;
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

// إنشاء الخادم
const server = http.createServer((req, res) => {
  // تحديد مسار ملف index.html
  const filePath = path.join(__dirname, 'indexvu.html');
  
  // قراءة ملف index.html
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // إذا لم يتم العثور على الملف
        res.writeHead(404);
        res.end('404 - File Not Found');
      } else {
        // خطأ في الخادم
        res.writeHead(500);
        res.end('500 - Internal Server Error');
      }
    } else {
      // إرسال محتوى الملف بنجاح
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content, 'utf-8');
    }
  });
});

// تشغيل الخادم على البورت المحدد
server.listen(PORT2, () => {
  console.log(`Server is running on http://localhost:${PORT2}`);
});