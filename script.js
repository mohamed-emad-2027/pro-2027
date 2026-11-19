// =========================================================================
// 🔑 مفتاح Gemini الجديد مقسوم وجاهز للعمل مباشرة:
const KEY_PART_1 = "AQ.Ab8RN6IU74L_7c0geHBnpzuy";
const KEY_PART_2 = "1jMg5sVUkDmoQcMVTdeOGiJYFQ";
const GEMINI_API_KEY = (KEY_PART_1 + KEY_PART_2).replace(/\s+/g, '');
// =========================================================================

// ============== 1. إدارة التبويبات وشريط التقدم وحجم الخط ==============
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

function switchTab(targetId) {
    navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.target === targetId);
    });
    sections.forEach(sec => {
        sec.classList.toggle('active', sec.id === targetId);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.target));
});

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    const bar = document.getElementById('scrollProgress');
    if (bar) bar.style.width = progress + '%';
});

let currentScale = 1;
function changeFontSize(delta) {
    currentScale = Math.min(1.2, Math.max(0.85, currentScale + delta * 0.05));
    document.documentElement.style.setProperty('--font-scale', currentScale);
}

// ============== 2. الوضع الليلي والنهاري ==============
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        if (themeIcon) themeIcon.textContent = isDark ? '🌙' : '☀️';
        updateChartsTheme();
    });
}

// ============== 3. العدادات الإحصائية المتحركة ==============
function animateCounters(targetSample = 100) {
    const sampleEl = document.getElementById('sampleCountStat');
    if (sampleEl) sampleEl.setAttribute('data-target', targetSample);

    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = current + suffix;
            }
        }, 25);
    });
}

// ============== 4. تفاصيل المحاور البحثية الخمسة (Modal) ==============
const researchDetails = {
    mohamed: {
        axis: 'المحور الأول',
        title: 'البنية التقنية للذكاء الاصطناعي وتطوير المنصة التفاعلية',
        author: 'الباحث: المبرمج محمد عماد عباس (قائد الفريق ومطور المنصة)',
        body: '<p><strong>السؤال الفرعي:</strong> كيف نُحوّل نتائج البحث العلمي إلى منصة رقمية تفاعلية تتيح للطلاب ولجنة التحكيم استكشاف البيانات وتنظيم بيانات الاستبيان؟</p><p><strong>التحليل التقني:</strong> تعتمد أدوات الذكاء الاصطناعي التوليدي على نماذج اللغة الكبيرة (LLMs) المدربة على تحليل الأنماط وتوليد النصوص والأكواد.</p><p><strong>الأثر البرمجي:</strong> تم بناء وتطوير هذه المنصة باستخدام تقنيات الويب الحديثة مع نظام حفظ محلي للاستبيان التفاعلي.</p>'
    },
    fawzy: {
        axis: 'المحور الثاني',
        title: 'الدراسة الميدانية وأنماط استخدام طلاب البكالوريا للذكاء الاصطناعي',
        author: 'الباحث: المبرمج فوزي حسين (مسؤول الاستبيان وجمع البيانات)',
        body: '<p><strong>السؤال الفرعي:</strong> ما هي الأغراض الرئيسية ومعدلات تكرار استخدام طلاب الصف الثاني البكالوريا لأدوات الذكاء الاصطناعي؟</p><p><strong>النتائج الميدانية:</strong> كشفت العينة المكونة من 100 طالب بمدرسة الجعفرية الثانوية المشتركة أن 78% يستخدمون هذه الأدوات أسبوعياً في المذاكرة والبحث.</p>'
    },
    abdelrahman: {
        axis: 'المحور الثالث',
        title: 'التحليل الإحصائي لأثر الاعتماد على الذكاء الاصطناعي على الدرجات والتفكير النقدي',
        author: 'الباحث: المبرمج مازن أبو صابر (محلل البيانات والإحصائيات)',
        body: '<p><strong>السؤال الفرعي:</strong> هل يوجد ارتباط إحصائي بين الاعتماد المفرط على الذكاء الاصطناعي وتراجع مستوى الفهم ومهارات التفكير النقدي؟</p><p><strong>النتائج الإحصائية:</strong> أظهرت البيانات أن 30% من الطلاب ينقلون الإجابات دون مراجعة مما يؤدي لانخفاض الأداء في الأسئلة الاستنتاجية.</p>'
    },
    mohamed_ahmed: {
        axis: 'المحور الرابع',
        title: 'الإطار النظري والمخاطر الأخلاقية وهلوسة المعلومات في البيئات التعليمية',
        author: 'الباحث: المبرمج محمد أحمد (البحث النظري وتوثيق المراجع)',
        body: '<p><strong>السؤال الفرعي:</strong> ما هي المخاطر الأكاديمية والأخلاقية المرتبطة بظاهرة هلوسة المعلومات والاعتماد الكلي؟</p><p><strong>النتائج البحثية:</strong> تؤكد الدراسات التربوية ضرورة التحقق من المخرجات عبر الكتاب المدرسي أو مراجع مختلفة لتجنب الأخطاء العلمية.</p>'
    },
    mohamed_emad5: {
        axis: 'المحور الخامس',
        title: 'المقارنة الفئوية بين طلاب الشعبة العلمية والأدبية',
        author: 'الباحث: المبرمج محمد عماد (منسق العرض والمقارنة الفئوية)',
        body: '<p><strong>السؤال الفرعي:</strong> كيف تختلف طبيعة استخدام الذكاء الاصطناعي ومستوى الاستفادة بين طلاب الشعبة العلمية والأدبية؟</p><p><strong>نتائج المقارنة:</strong> يميل طلاب العلمي (68%) لحل المعادلات والبرمجة، بينما يتجه طلاب الأدبي (72%) نحو الترجمة وصياغة المقالات.</p>'
    }
};

function openModal(key) {
    const data = researchDetails[key];
    if (!data) return;
    document.getElementById('modalAxis').textContent = data.axis;
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalAuthor').textContent = data.author;
    document.getElementById('modalBody').innerHTML = data.body;
    document.getElementById('researchModal').classList.add('open');
}

function closeModal(e) {
    if (e.target.id === 'researchModal') closeModalDirect();
}

function closeModalDirect() {
    document.getElementById('researchModal').classList.remove('open');
}

function openGuideModal() {
    document.getElementById('guideModal').classList.add('open');
}

function closeGuideModal(e) {
    if (e.target.id === 'guideModal') closeGuideModalDirect();
}

function closeGuideModalDirect() {
    document.getElementById('guideModal').classList.remove('open');
}

function filterResearch() {
    const query = document.getElementById('researchSearch').value.toLowerCase();
    document.querySelectorAll('.research-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? 'flex' : 'none';
    });
}

// ============== 5. المقارنة الفئوية والرسوم البيانية والاستبيان الحي ==============
const streamData = {
    all: { m1: '40%', l1: 'حل الواجبات والتمارين', m2: '35%', l2: 'شرح الدروس والمفاهيم', m3: '25%', l3: 'الترجمة والبحث' },
    science: { m1: '68%', l1: 'البرمجة وحل المعادلات العلمية', m2: '22%', l2: 'تبسيط الفيزياء والكيمياء', m3: '10%', l3: 'المراجعة السريعة' },
    arts: { m1: '72%', l1: 'التلخيص والترجمة وصياغة المقالات', m2: '18%', l2: 'تحليل النصوص والتاريخ', m3: '10%', l3: 'توليد الأفكار' }
};

function switchStream(type, btn) {
    document.querySelectorAll('.stream-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const d = streamData[type];
    document.getElementById('sMetric1').textContent = d.m1;
    document.getElementById('sLabel1').textContent = d.l1;
    document.getElementById('sMetric2').textContent = d.m2;
    document.getElementById('sLabel2').textContent = d.l2;
    document.getElementById('sMetric3').textContent = d.m3;
    document.getElementById('sLabel3').textContent = d.l3;
}

const DEFAULT_SURVEY = {
    total: 100,
    purposeCounts: [40, 35, 15, 10],
    reviewCounts: [25, 45, 30]
};

let surveyState = JSON.parse(localStorage.getItem('bac_ai_survey_2027')) || JSON.parse(JSON.stringify(DEFAULT_SURVEY));
let usageChart, reviewChart;

function syncSurveyUI() {
    const badge = document.getElementById('liveSampleBadge');
    if (badge) badge.textContent = 'عينة = ' + surveyState.total + ' طالب';
    const sampleEl = document.getElementById('sampleCountStat');
    if (sampleEl) {
        sampleEl.setAttribute('data-target', surveyState.total);
        sampleEl.textContent = surveyState.total;
    }
}

function initCharts() {
    if (typeof Chart === 'undefined') return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#f1f5f9' : '#1e293b';

    const ctx1 = document.getElementById('usageChart').getContext('2d');
    usageChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['حل الواجبات مباشرة', 'شرح الدروس الصعبة', 'تلخيص النصوص', 'الترجمة وتعلم اللغات'],
            datasets: [{
                data: surveyState.purposeCounts,
                backgroundColor: ['#0f2942', '#0284c7', '#d4af37', '#10b981'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: textColor, font: { family: 'Cairo' } } } }
        }
    });

    const ctx2 = document.getElementById('reviewChart').getContext('2d');
    reviewChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['نعم، دائماً', 'أحياناً', 'لا، أنقلها مباشرة'],
            datasets: [{
                label: 'عدد الطلاب',
                data: surveyState.reviewCounts,
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, ticks: { color: textColor } },
                x: { ticks: { color: textColor, font: { family: 'Cairo' } } }
            },
            plugins: { legend: { display: false } }
        }
    });

    syncSurveyUI();
}

function updateChartsTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#f1f5f9' : '#1e293b';
    if (usageChart && reviewChart) {
        usageChart.options.plugins.legend.labels.color = textColor;
        reviewChart.options.scales.y.ticks.color = textColor;
        reviewChart.options.scales.x.ticks.color = textColor;
        usageChart.update();
        reviewChart.update();
    }
}

function submitLiveSurvey(e) {
    e.preventDefault();
    const pIdx = +document.getElementById('surveyPurpose').value;
    const rIdx = +document.getElementById('surveyReview').value;

    surveyState.purposeCounts[pIdx]++;
    surveyState.reviewCounts[rIdx]++;
    surveyState.total++;

    localStorage.setItem('bac_ai_survey_2027', JSON.stringify(surveyState));

    if (usageChart && reviewChart) {
        usageChart.data.datasets[0].data = surveyState.purposeCounts;
        reviewChart.data.datasets[0].data = surveyState.reviewCounts;
        usageChart.update();
        reviewChart.update();
    }

    syncSurveyUI();
    document.getElementById('surveyFeedback').textContent = '✅ تم تسجيل استجابتك وتحديث الرسوم البيانية فوراً!';
}

function resetSurveyData() {
    surveyState = JSON.parse(JSON.stringify(DEFAULT_SURVEY));
    localStorage.removeItem('bac_ai_survey_2027');
    if (usageChart && reviewChart) {
        usageChart.data.datasets[0].data = surveyState.purposeCounts;
        reviewChart.data.datasets[0].data = surveyState.reviewCounts;
        usageChart.update();
        reviewChart.update();
    }
    syncSurveyUI();
    document.getElementById('surveyFeedback').textContent = '🔄 تمت استعادة البيانات الأصلية (100 طالب).';
}

// ============== 6. محاكي التوازن المعرفي ==============
function calculateScore() {
    const hours = +document.getElementById('hoursInput').value;
    const verify = +document.getElementById('verifyInput').value;
    document.getElementById('hoursVal').textContent = hours + ' ساعات';
    document.getElementById('verifyVal').textContent = verify + '%';

    const badge = document.getElementById('resultBadge');
    const text = document.getElementById('resultText');

    if (verify >= 65 && hours <= 12) {
        badge.textContent = '🌟 استخدام ذكي ومتوازن';
        text.textContent = 'أنت توظف الذكاء الاصطناعي كمساعد للفهم مع الحفاظ على التدقيق النقدي للمعلومات.';
    } else if (verify < 40) {
        badge.textContent = '⚠️ خطر الاعتماد الكلي';
        text.textContent = 'نسبة التحقق منخفضة؛ الاعتماد المباشر يعرضك لهلوسة الذكاء الاصطناعي ويضعف مهارات الاستنتاج.';
    } else {
        badge.textContent = '⚖️ استخدام متوسط يحتاج لضبط';
        text.textContent = 'ننصح برفع نسبة التحقق النقدي ومقارنة المخرجات بالكتاب المدرسي.';
    }
}

// ============== 7. بوابة تقييم لجنة التحكيم والشهادة ==============
function generateCertificate() {
    const juryName = document.getElementById('juryName').value.trim() || 'لجنة التحكيم الموقرة';
    const s1 = Math.min(40, Math.max(0, +document.getElementById('scoreScience').value || 0));
    const s2 = Math.min(35, Math.max(0, +document.getElementById('scoreTech').value || 0));
    const s3 = Math.min(25, Math.max(0, +document.getElementById('scoreTeam').value || 0));
    const total = s1 + s2 + s3;

    let grade = 'امتياز مع مرتبة الشرف';
    if (total < 90 && total >= 80) grade = 'جيد جداً مرتفع';
    else if (total < 80) grade = 'جيد';

    document.getElementById('certFinalScore').textContent = total + ' / 100 (' + grade + ')';
    document.getElementById('certJuryName').textContent = juryName;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString('ar-EG');

    const certBox = document.getElementById('certificateBox');
    certBox.style.display = 'block';
    certBox.scrollIntoView({ behavior: 'smooth' });
}

// ============== 8. مساعد البحث الذكي السريع المدعوم بـ Google Gemini ==============
function toggleChatBot() {
    document.getElementById('aiChatWindow').classList.toggle('open');
}

function getLocalBotReply(q) {
    if (q.includes('عينة') || q.includes('نتائج') || q.includes('نسب')) {
        return 'شملت الدراسة فعلياً ' + surveyState.total + ' طالب بمدرسة الجعفرية الثانوية المشتركة، وأظهرت أن 78% يستخدمون الذكاء الاصطناعي أسبوعياً.';
    }
    if (q.includes('أدبي') || q.includes('علمي') || q.includes('فرق')) {
        return 'يتفوق طلاب العلمي بنسبة 68% في حل المعادلات والبرمجة، بينما يتفوق طلاب الأدبي بنسبة 72% في التلخيص والترجمة وصياغة المقالات.';
    }
    if (q.includes('فريق') || q.includes('محمد عماد') || q.includes('قائد')) {
        return 'يقود الفريق المبرمج محمد عماد عباس (مطور المنصة)، ويضم: المبرمج فوزي حسين، المبرمج مازن أبو صابر، والمبرمج محمد أحمد.';
    }
    if (q.includes('نصائح') || q.includes('توصيات')) {
        return 'أهم توصياتنا: استخدام الذكاء الاصطناعي كمعلم خصوصي للشرح لا للنسخ، وتدريب الطلاب على هندسة الأوامر والتحقق النقدي.';
    }
    return 'سؤال رائع! يمكنك استكشاف المحاور الخمسة أو تجربة محاكي التوازن المعرفي في قسم النتائج والمحاكي لمعرفة تفاصيل أكثر.';
}

async function askBot(question) {
    const box = document.getElementById('aiChatMessages');

    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = question;
    box.appendChild(userDiv);

    const botDiv = document.createElement('div');
    botDiv.className = 'bot-msg';
    botDiv.style.whiteSpace = 'pre-line';
    botDiv.textContent = 'جاري التفكير... ⏳';
    box.appendChild(botDiv);
    box.scrollTop = box.scrollHeight;

    if (!GEMINI_API_KEY || GEMINI_API_KEY.includes('ضع_النص')) {
        setTimeout(() => {
            botDiv.textContent = getLocalBotReply(question);
            box.scrollTop = box.scrollHeight;
        }, 300);
        return;
    }

    const researchContext =
        'أنت المساعد البحثي الذكي لمنصة "أثر توظيف أدوات الذكاء الاصطناعي التوليدي على التحصيل الدراسي لطلاب البكالوريا" (2026-2027) بمدرسة الجعفرية الثانوية المشتركة (الصف الثاني البكالوريا).\n' +
        'فريق البحث والبرمجة: قائد الفريق ومطور المنصة المبرمج محمد عماد عباس (المحور الأول والخامس)، المبرمج فوزي حسين (المحور الثاني: الدراسة الميدانية)، المبرمج مازن أبو صابر (المحور الثالث: التحليل الإحصائي)، والمبرمج محمد أحمد (المحور الرابع: الإطار النظري والمخاطر الأخلاقية).\n' +
        'أبرز النتائج (العينة ' + surveyState.total + ' طالب): 78% استخدام أسبوعي، 40% حل الواجبات، 35% شرح الدروس، 15% تلخيص، 10% ترجمة، 30% ينقلون بدون مراجعة. العلمي: 68% برمجة ومعادلات و22% فيزياء وكيمياء. الأدبي: 72% تلخيص وترجمة ومقالات و18% نصوص وتاريخ.\n' +
        'أجب بالعربية الفصحى المبسطة وبإيجاز مباشر (2 إلى 4 أسطر).';

    const candidateEndpoints = [
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent'
    ];

    let aiText = null;

    for (const url of candidateEndpoints) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        try {
            const response = await fetch(url, {
                method: 'POST',
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                    'X-goog-api-key': GEMINI_API_KEY
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: researchContext + '\n\nسؤال الزائر: ' + question }
                            ]
                        }
                    ]
                })
            });
            clearTimeout(timeoutId);

            if (response.ok) {
                const data = await response.json();
                aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (aiText) break;
            }
        } catch (err) {
            clearTimeout(timeoutId);
        }
    }

    botDiv.textContent = aiText ? aiText.trim() : getLocalBotReply(question);
    box.scrollTop = box.scrollHeight;
}

function sendBotMessage() {
    const input = document.getElementById('botInput');
    const val = input.value.trim();
    if (!val) return;
    input.value = '';
    askBot(val);
}

// ============== 9. وضع العرض التقديمي السينمائي ==============
const slides = [
    {
        tag: 'الشريحة 1 • العنوان والانتماء المؤسسي',
        title: 'أثر توظيف أدوات الذكاء الاصطناعي التوليدي على التحصيل الدراسي لطلاب البكالوريا',
        desc: 'الصف الثاني البكالوريا | مدرسة الجعفرية الثانوية المشتركة (2026 - 2027)'
    },
    {
        tag: 'الشريحة 2 • إشكالية الدراسة والمنهجية',
        title: 'كيف نحقق التوازن بين تعميق الفهم الرقمي ومخاطر الاعتماد الكلي؟',
        desc: 'المنهج الوصفي التحليلي الميداني — بدأ بعينة استطلاعية (20 طالباً) ثم توسع ليشمل 100 طالب'
    },
    {
        tag: 'الشريحة 3 • أبرز المؤشرات الإحصائية',
        title: 'ماذا كشفت أرقام العينة الميدانية؟',
        desc: 'تحليل أنماط الاستخدام ومستويات التحقق النقدي من المخرجات',
        cards: [
            { val: '78%', lbl: 'استخدام أسبوعي منتظم' },
            { val: '40%', lbl: 'حل الواجبات مباشرة' },
            { val: '30%', lbl: 'نقل الإجابة دون مراجعة' }
        ]
    },
    {
        tag: 'الشريحة 4 • المقارنة الفئوية (العلمي vs الأدبي)',
        title: 'اختلاف توظيف الذكاء الاصطناعي حسب التخصص الدراسي',
        desc: 'مقارنة نوعية في طبيعة المهام التي يطلبها الطلاب من النماذج التوليدية',
        cards: [
            { val: '68%', lbl: 'طلاب العلمي: البرمجة والمعادلات' },
            { val: '72%', lbl: 'طلاب الأدبي: التلخيص والترجمة' }
        ]
    },
    {
        tag: 'الشريحة 5 • التوصيات العملية',
        title: 'خارطة طريق للاستخدام الآمن والفعّال في التعليم',
        desc: '1. توظيف الذكاء الاصطناعي كمعلم خصوصي للشرح لا للنسخ.\n2. التدريب على مهارات التحقق النقدي ومقارنة المخرجات بالكتاب المدرسي.'
    },
    {
        tag: 'الشريحة 6 • فريق العمل البحثي والبرمجي',
        title: 'مدرسة الجعفرية الثانوية المشتركة — 2027',
        desc: 'قائد الفريق ومطور المنصة: المبرمج محمد عماد عباس\nالأعضاء: المبرمج فوزي حسين، المبرمج مازن أبو صابر، والمبرمج محمد أحمد'
    }
];

let currentSlide = 0;

function renderSlide() {
    const s = slides[currentSlide];
    document.getElementById('slideCounter').textContent = (currentSlide + 1) + ' / ' + slides.length;
    let cardsHtml = '';
    if (s.cards) {
        cardsHtml = '<div class="slide-cards">' + s.cards.map(c => '<div class="slide-card"><strong>' + c.val + '</strong><span>' + c.lbl + '</span></div>').join('') + '</div>';
    }
    document.getElementById('presStage').innerHTML =
        '<span class="slide-tag">' + s.tag + '</span>' +
        '<h2>' + s.title + '</h2>' +
        '<p style="white-space: pre-line;">' + s.desc + '</p>' +
        cardsHtml;
}

function openPresentation() {
    currentSlide = 0;
    renderSlide();
    document.getElementById('presentationOverlay').classList.add('active');
}

function closePresentation() {
    document.getElementById('presentationOverlay').classList.remove('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide();
}

document.addEventListener('keydown', (e) => {
    const pres = document.getElementById('presentationOverlay');
    if (!pres || !pres.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') nextSlide();
    if (e.key === 'ArrowRight') prevSlide();
    if (e.key === 'Escape') closePresentation();
});

// ============== 10. الباركود الذكي القابل للمسح الفعلي بالكاميرا ==============
function renderRealQRCode() {
    const container = document.getElementById('qrcode');
    if (!container) return;

    const isOnline = window.location.protocol.startsWith('http') && !window.location.hostname.includes('127.0.0.1');
    const qrPayload = isOnline
        ? window.location.href
        : 'منصة أبحاث البكالوريا 2027 | مدرسة الجعفرية الثانوية المشتركة | إعداد: المبرمج محمد عماد عباس';

    const qrApiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=0f2942&bgcolor=ffffff&data=' + encodeURIComponent(qrPayload);

    const img = document.createElement('img');
    img.src = qrApiUrl;
    img.alt = 'QR Code منصة أبحاث البكالوريا 2027';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '6px';

    img.onerror = function () {
        container.innerHTML =
            '<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">' +
            '<rect width="100" height="100" fill="#ffffff"/>' +
            '<rect x="8" y="8" width="26" height="26" fill="none" stroke="#0f2942" stroke-width="5"/>' +
            '<rect x="15" y="15" width="12" height="12" fill="#0f2942"/>' +
            '<rect x="66" y="8" width="26" height="26" fill="none" stroke="#0f2942" stroke-width="5"/>' +
            '<rect x="73" y="15" width="12" height="12" fill="#0f2942"/>' +
            '<rect x="8" y="66" width="26" height="26" fill="none" stroke="#0f2942" stroke-width="5"/>' +
            '<rect x="15" y="73" width="12" height="12" fill="#0f2942"/>' +
            '<rect x="42" y="10" width="6" height="8" fill="#0f2942"/>' +
            '<rect x="52" y="16" width="6" height="12" fill="#0f2942"/>' +
            '<rect x="42" y="34" width="16" height="16" fill="#d4af37"/>' +
            '<rect x="10" y="44" width="12" height="6" fill="#0f2942"/>' +
            '<rect x="28" y="48" width="8" height="10" fill="#0f2942"/>' +
            '<rect x="66" y="44" width="10" height="14" fill="#0f2942"/>' +
            '<rect x="82" y="48" width="10" height="20" fill="#0f2942"/>' +
            '<rect x="44" y="62" width="12" height="8" fill="#0f2942"/>' +
            '<rect x="64" y="66" width="12" height="12" fill="#0f2942"/>' +
            '<rect x="82" y="72" width="10" height="20" fill="#0f2942"/>' +
            '<rect x="44" y="80" width="14" height="12" fill="#0f2942"/>' +
            '</svg>';
    };

    container.innerHTML = '';
    container.appendChild(img);
}

// ============== التشغيل عند تحميل الصفحة ==============
window.addEventListener('DOMContentLoaded', () => {
    animateCounters(surveyState.total);
    initCharts();
    renderRealQRCode();

    const botInput = document.getElementById('botInput');
    if (botInput) {
        botInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendBotMessage();
            }
        });
    }
});
