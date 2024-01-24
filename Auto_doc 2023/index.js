const express = require('express');
const { PDFDocument } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// Инициализация переменных
const data = {
    name: 'Анчембарв',
    surname: 'Еркин',
    student_iin: '122375873453',
    sex: true,
    student_phone: '+77773476329',
    student_email: 'john.doe@example.com',
    adress: 'Республика Казахстан, г.Алматы, ул. Абая, 103'
};

// Функция для разбиения текста на строки
function splitTextToLines(text, maxWidth, font, fontSize) {
    const paragraphs = text.split('\n');
    const lines = [];

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine = '';

        words.forEach(word => {
            const wordWithSpace = currentLine.length > 0 ? ` ${word}` : word;
            const lineWidth = font.widthOfTextAtSize(currentLine + wordWithSpace, fontSize);
            if (lineWidth < maxWidth) {
                currentLine += wordWithSpace;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        });

        if (currentLine !== '') {
            lines.push(currentLine);
        }
    });

    return lines;
}

app.get('/', async (req, res) => {
    // Загрузка существующего PDF
    const templateBytes = await fs.readFile('./Document.pdf');
    const pdfDoc = await PDFDocument.load(templateBytes);

    // Регистрация fontkit
    pdfDoc.registerFontkit(fontkit);

    // Загрузка шрифта
    const fontBytes = await fs.readFile('./fonts/calibri.ttf');
    const customFont = await pdfDoc.embedFont(fontBytes);

    // Получение страниц
    const page = pdfDoc.getPages()[0];
    const fourPage = pdfDoc.getPages()[3];
    const fullname = `${data.name} ${data.surname}`;
    const way_data = `Адрес: ${data.adress}\nТелефон: ${data.student_phone}\nEmail: ${data.student_email}`;

    // Заполнение PDF
    page.drawText(fullname, { x: 113, y: 706, size: 12, font: customFont });
    page.drawText(data.student_iin, { x: 146, y: 692, size: 10, font: customFont });
    fourPage.drawText(fullname, { x: 324, y: 432, size: 12, font: customFont });
    fourPage.drawText(data.student_iin, { x: 384, y: 245, size: 12, font: customFont });

    // Отрисовка way_data
    const lines = splitTextToLines(way_data, 223, customFont, 12);
    let startY = 390; // Начальная Y координата
    const lineHeight = 15; // Высота строки

    lines.forEach((line, index) => {
        if (line === '' && index !== 0) {
            startY -= lineHeight; // Дополнительный отступ для нового параграфа
        } else {
            fourPage.drawText(line.trim(), {
                x: 324,
                y: startY,
                size: 12,
                font: customFont
            });
            startY -= lineHeight; // Обновление координаты Y для следующей строки
        }
    });

    // Сохранение PDF
    const pdfBytes = await pdfDoc.save();
    await fs.writeFile('./Document.pdf', pdfBytes);

    res.send('PDF generated');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
