// =========================================================================
// 🚀 محرك الذكاء الاصطناعي العالمي الفائق - منصة أبحاث البكالوريا 2027
// تطوير: المبرمج محمد عماد عباس | مدرسة الجعفرية الثانوية المشتركة
// =========================================================================
const KEY_PART_1 = "AQ.Ab8RN6IU74L_7c0geHBnpzuy";
const KEY_PART_2 = "1jMg5sVUkDmoQcMVTdeOGiJYFQ";
const DEFAULT_GEMINI_KEY = (KEY_PART_1 + KEY_PART_2).replace(/\s+/g, '');
const API_PANEL_PASSCODE = "Mohmmed@2030#.";
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

// =========================================================================
// ============== 8. مساعد الذكاء الاصطناعي العالمي الفائق =================
// =========================================================================
let aiChatHistory = [];
let activeTypingTimer = null;
let isSpeaking = false;

function injectProChatbotUI() {
    if (document.getElementById('proAiStyles')) return;

    const style = document.createElement('style');
    style.id = 'proAiStyles';
    style.textContent = `
        #aiChatWindow {
            width: min(410px, 94vw) !important;
            max-height: 82vh !important;
            border-radius: 18px !important;
            box-shadow: 0 20px 50px rgba(15, 41, 66, 0.35) !important;
            border: 1px solid rgba(212, 175, 55, 0.45) !important;
            overflow: hidden !important;
        }
        .pro-ai-toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 6px;
            padding: 6px 12px;
            background: linear-gradient(90deg, #0b1f33, #143656);
            border-bottom: 1px solid rgba(212, 175, 55, 0.3);
            font-size: 11px;
            color: #e2e8f0;
        }
        .pro-ai-status {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 700;
            color: #34d399;
        }
        .pro-ai-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
            box-shadow: 0 0 8px #10b981;
            animation: proPulse 1.6s infinite;
        }
        @keyframes proPulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.85); }
        }
        .pro-ai-tools-btns {
            display: flex;
            gap: 4px;
        }
        .pro-tool-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            border-radius: 6px;
            padding: 2px 7px;
            font-size: 11px;
            cursor: pointer;
            font-family: inherit;
            transition: 0.2s;
        }
        .pro-tool-btn:hover {
            background: #d4af37;
            color: #0f2942;
            border-color: #d4af37;
        }
        .pro-api-panel {
            display: none;
            padding: 8px 10px;
            background: #f8fafc;
            border-bottom: 1px solid #cbd5e1;
            gap: 6px;
            align-items: center;
        }
        .pro-api-panel.open {
            display: flex;
        }
        .pro-api-panel input {
            flex: 1;
            padding: 5px 8px;
            border-radius: 6px;
            border: 1px solid #94a3b8;
            font-size: 11px;
            direction: ltr;
        }
        .pro-api-panel button {
            background: #0f2942;
            color: #fff;
            border: none;
            border-radius: 6px;
            padding: 5px 10px;
            font-size: 11px;
            cursor: pointer;
            font-family: inherit;
        }
        .pro-msg-actions {
            display: flex;
            gap: 6px;
            margin-top: 6px;
            padding-top: 5px;
            border-top: 1px dashed rgba(148, 163, 184, 0.35);
            font-size: 11px;
        }
        .pro-mini-action {
            background: rgba(15, 41, 66, 0.08);
            border: none;
            border-radius: 5px;
            padding: 2px 7px;
            font-size: 10.5px;
            cursor: pointer;
            color: inherit;
            font-family: inherit;
            transition: 0.2s;
        }
        .pro-mini-action:hover {
            background: #d4af37;
            color: #0f2942;
        }
        .pro-source-tag {
            margin-right: auto;
            font-size: 10px;
            opacity: 0.75;
            font-weight: 600;
        }
        .pro-mic-btn {
            background: #0284c7;
            color: #fff;
            border: none;
            border-radius: 8px;
            padding: 0 10px;
            cursor: pointer;
            font-size: 15px;
            transition: 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .pro-mic-btn.recording {
            background: #ef4444;
            animation: proPulse 0.9s infinite;
        }
        .pro-followup-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: 6px;
        }
        .pro-chip {
            background: linear-gradient(135deg, #0f2942, #1e3a8a);
            color: #fff;
            border: 1px solid rgba(212, 175, 55, 0.5);
            border-radius: 14px;
            padding: 3px 9px;
            font-size: 11px;
            cursor: pointer;
            font-family: inherit;
            transition: 0.2s;
        }
        .pro-chip:hover {
            background: #d4af37;
            color: #0f2942;
        }
    `;
    document.head.appendChild(style);

    const chatWin = document.getElementById('aiChatWindow');
    const messagesBox = document.getElementById('aiChatMessages');
    if (chatWin && messagesBox && !document.getElementById('proAiToolbar')) {
        const toolbar = document.createElement('div');
        toolbar.id = 'proAiToolbar';
        toolbar.className = 'pro-ai-toolbar';
        toolbar.innerHTML = `
            <span class="pro-ai-status"><span class="pro-ai-dot"></span> AI Pro 2027 متصل</span>
            <div class="pro-ai-tools-btns">
                <button type="button" class="pro-tool-btn" onclick="toggleApiKeyPanel()" title="إعداد مفتاح Gemini API">🔒 API</button>
                <button type="button" class="pro-tool-btn" onclick="exportChatTranscript()" title="تحميل المحادثة كملف">📄 تصدير</button>
                <button type="button" class="pro-tool-btn" onclick="clearProChat()" title="مسح المحادثة">🗑️</button>
            </div>
        `;
        chatWin.insertBefore(toolbar, messagesBox);

        const apiPanel = document.createElement('div');
        apiPanel.id = 'proApiPanel';
        apiPanel.className = 'pro-api-panel';
        apiPanel.innerHTML = `
            <input type="password" id="proApiKeyInput" placeholder="الصق مفتاح Gemini API (AIzaSy...) هنا">
            <button type="button" onclick="saveProApiKey()">حفظ وتفعيل</button>
            <button type="button" onclick="lockApiPanel()" title="قفل الـ API">🔒</button>
        `;
        chatWin.insertBefore(apiPanel, messagesBox);
    }

    const botInput = document.getElementById('botInput');
    if (botInput && botInput.parentElement && !document.getElementById('proMicBtn')) {
        const micBtn = document.createElement('button');
        micBtn.type = 'button';
        micBtn.id = 'proMicBtn';
        micBtn.className = 'pro-mic-btn';
        micBtn.title = 'تحدث بصوتك بالعربية';
        micBtn.textContent = '🎤';
        micBtn.onclick = startVoiceRecognition;
        botInput.parentElement.insertBefore(micBtn, botInput);
    }
}

function toggleChatBot() {
    injectProChatbotUI();
    document.getElementById('aiChatWindow').classList.toggle('open');
}

function toggleApiKeyPanel() {
    const panel = document.getElementById('proApiPanel');
    if (!panel) return;

    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        return;
    }

    const enteredPass = prompt('أدخل كلمة السر أولاً لفتح إعدادات API:');
    if (enteredPass === null) return;

    if (enteredPass !== API_PANEL_PASSCODE) {
        appendSystemNotice('⛔ كلمة السر غير صحيحة! لا يُسمح بفتح إعدادات API لغير المالك.');
        return;
    }

    panel.classList.add('open');
    const inp = document.getElementById('proApiKeyInput');
    if (inp) inp.value = localStorage.getItem('custom_gemini_key_2027') || '';
}

function lockApiPanel() {
    const panel = document.getElementById('proApiPanel');
    if (panel) panel.classList.remove('open');
    appendSystemNotice('🔒 تم قفل لوحة API بنجاح.');
}

function saveProApiKey() {
    const inp = document.getElementById('proApiKeyInput');
    if (!inp) return;
    const val = inp.value.trim();
    if (val.length > 15) {
        localStorage.setItem('custom_gemini_key_2027', val);
        document.getElementById('proApiPanel').classList.remove('open');
        appendSystemNotice('✅ تم تفعيل مفتاح Google Gemini API الشخصي بنجاح وتم قفل اللوحة!');
    } else if (!val) {
        localStorage.removeItem('custom_gemini_key_2027');
        document.getElementById('proApiPanel').classList.remove('open');
        appendSystemNotice('🔄 تمت العودة للوضع التلقائي الهجين وتم قفل اللوحة.');
    }
}

function appendSystemNotice(msg) {
    const box = document.getElementById('aiChatMessages');
    if (!box) return;
    const div = document.createElement('div');
    div.className = 'bot-msg';
    div.textContent = msg;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
}

function clearProChat() {
    if (activeTypingTimer) clearInterval(activeTypingTimer);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    aiChatHistory = [];
    const box = document.getElementById('aiChatMessages');
    if (box) {
        box.innerHTML = '<div class="bot-msg">مرحباً بك في المساعد الذكي العالمي لمنصة بكالوريا 2027! 🚀\nاسألني عن أي شيء داخل المنصة (نتائج العينة، العلمي والأدبي، فريق العمل ورقم المبرمج محمد عماد: 01055212909) أو أي سؤال عام، برمجي، علمي، أو صوتي عبر الميكروفون 🎤.</div>';
    }
}

function exportChatTranscript() {
    if (!aiChatHistory.length) {
        appendSystemNotice('ℹ️ ابدأ بطرح سؤال أولاً لتصدير المحادثة.');
        return;
    }
    let content = 'تقرير محادثة المساعد البحثي الذكي — منصة بكالوريا 2027\n';
    content += 'مدرسة الجعفرية الثانوية المشتركة | تطوير: المبرمج محمد عماد عباس (01055212909)\n';
    content += 'التاريخ: ' + new Date().toLocaleString('ar-EG') + '\n';
    content += '====================================================\n\n';
    aiChatHistory.forEach(item => {
        content += (item.role === 'user' ? '👤 الزائر: ' : '🤖 المساعد الذكي: ') + item.text + '\n\n';
    });

    const blob = new Blob(['\uFEFF' + content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'تقرير_المساعد_الذكي_2027.txt';
    link.click();
}

function speakArabicText(text, btn) {
    if (!('speechSynthesis' in window)) {
        appendSystemNotice('⚠️ متصفحك لا يدعم القراءة الصوتية.');
        return;
    }
    if (isSpeaking) {
        window.speechSynthesis.cancel();
        isSpeaking = false;
        if (btn) btn.textContent = '🔊 استماع';
        return;
    }
    const clean = text.replace(/[^\u0600-\u06FFa-zA-Z0-9\s.,؟!:%()-]/g, ' ');
    const utter = new SpeechSynthesisUtterance(clean);
    utter.lang = 'ar-EG';
    utter.rate = 1.02;
    utter.onend = () => {
        isSpeaking = false;
        if (btn) btn.textContent = '🔊 استماع';
    };
    isSpeaking = true;
    if (btn) btn.textContent = '⏹️ إيقاف';
    window.speechSynthesis.speak(utter);
}

function startVoiceRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        appendSystemNotice('⚠️ الإدخال الصوتي يعمل على متصفح Google Chrome أو Edge.');
        return;
    }
    const micBtn = document.getElementById('proMicBtn');
    const recognition = new SpeechRec();
    recognition.lang = 'ar-EG';
    recognition.interimResults = false;

    if (micBtn) micBtn.classList.add('recording');
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (micBtn) micBtn.classList.remove('recording');
        if (transcript) askBot(transcript);
    };
    recognition.onerror = () => {
        if (micBtn) micBtn.classList.remove('recording');
    };
    recognition.onend = () => {
        if (micBtn) micBtn.classList.remove('recording');
    };
    recognition.start();
}

function trySolveMath(q) {
    const cleanExpr = q.replace(/[^\d+\-*/().%]/g, '');
    if (cleanExpr.length >= 3 && /[+\-*/%]/.test(cleanExpr) && /\d/.test(cleanExpr)) {
        try {
            const result = Function('"use strict"; return (' + cleanExpr + ')')();
            if (typeof result === 'number' && isFinite(result)) {
                return '🧮 ناتج العملية الحسابية (' + cleanExpr + ') هو: ' + result;
            }
        } catch (e) {}
    }
    return null;
}

function getUniversalKnowledgeReply(q) {
    const text = q.trim().toLowerCase();

    if (text.includes('رقم') || text.includes('تليفون') || text.includes('هاتف') || text.includes('واتس') || text.includes('تواصل') || text.includes('موبايل')) {
        return '📱 رقم التواصل والواتساب المباشر لقائد الفريق ومطور المنصة المبرمج محمد عماد عباس:\n01055212909\nمتاح لأي استفسارات تقنية أو برمجية حول منصة أبحاث البكالوريا 2027 بمدرسة الجعفرية الثانوية المشتركة.';
    }
    if (text.includes('فريق') || text.includes('قائد') || text.includes('محمد عماد') || text.includes('فوزي') || text.includes('مازن') || text.includes('محمد أحمد') || text.includes('اعضاء') || text.includes('أعضاء')) {
        return '👥 فريق البحث والبرمجة بمدرسة الجعفرية الثانوية المشتركة (2027):\n1. المبرمج محمد عماد عباس: قائد الفريق ومطور المنصة (المحور الأول والخامس) — للتواصل: 01055212909.\n2. المبرمج فوزي حسين: مسؤول الدراسة الميدانية والاستبيان (المحور الثاني).\n3. المبرمج مازن أبو صابر: محلل البيانات والإحصائيات (المحور الثالث).\n4. المبرمج محمد أحمد: البحث النظري والمخاطر الأخلاقية (المحور الرابع).';
    }
    if (text.includes('عينة') || text.includes('نتائج') || text.includes('نسب') || text.includes('إحصائ') || text.includes('احصائ') || text.includes('استبيان') || text.includes('أهم')) {
        return '📊 أبرز نتائج الدراسة الميدانية (العينة الحالية: ' + surveyState.total + ' طالب بعد عينة استطلاعية من 20 طالباً):\n• 78% يستخدمون الذكاء الاصطناعي أسبوعياً.\n• 40% لحل الواجبات، 35% لشرح الدروس، 15% للتلخيص، و10% للترجمة.\n• 30% ينقلون الإجابات مباشرة دون مراجعة الكتاب المدرسي.';
    }
    if (text.includes('علمي') || text.includes('أدبي') || text.includes('ادبي') || text.includes('مقارنة') || text.includes('فرق') || text.includes('شعبة')) {
        return '⚖️ المقارنة الفئوية بين طلاب البكالوريا:\n• الشعبة العلمية: 68% في البرمجة وحل المعادلات، 22% في الفيزياء والكيمياء، و10% للمراجعة السريعة.\n• الشعبة الأدبية: 72% في التلخيص والترجمة وصياغة المقالات، 18% في تحليل النصوص والتاريخ، و10% لتوليد الأفكار.';
    }
    if (text.includes('محاكي') || text.includes('توازن') || text.includes('تحكيم') || text.includes('شهادة') || text.includes('عرض') || text.includes('منصة') || text.includes('اقسام') || text.includes('أقسام')) {
        return '🧭 دليل أدوات المنصة التفاعلية:\n• الرئيسية والمحاور: استعراض المحاور الخمسة والبحث الفوري بداخلها.\n• النتائج والمحاكي: رسوم بيانية حية تتحدث فوراً مع الاستبيان + محاكي التوازن المعرفي لقياس نسبة التحقق النقدي.\n• الخلاصة والتحكيم: بوابة لجنة التحكيم لإصدار شهادة تقييم فورية + وضع العرض التقديمي السينمائي (6 شرائح).';
    }
    if (text.includes('خارج') || text.includes('مواقع') || text.includes('روابط') || text.includes('أدوات') || text.includes('ادوات') || text.includes('مصادر') || text.includes('مساعدات')) {
        return '🌐 أهم الأدوات والمصادر الخارجية الموثوقة للطلاب والمبرمجين:\n• للبحث والمذاكرة: Google Gemini، NotebookLM، وPerplexity AI.\n• للمصادر التعليمية الرسمية: بنك المعرفة المصري (EKB).\n• للبرمجة وتطوير الويب: MDN Web Docs، W3Schools، ومنصة GitHub لاستضافة المشاريع.';
    }
    if (text.includes('برمجة') || text.includes('كود') || text.includes('html') || text.includes('css') || text.includes('javascript') || text.includes('جافا') || text.includes('api')) {
        return '💻 في تطوير الويب والبرمجة:\n• HTML لبناء هيكل الصفحة، وCSS للتنسيق والألوان المتجاوبة، وJavaScript لإضافة التفاعل والاتصال بالـ API عبر دالة fetch().\n• لربط أي موقع بواجهة برمجية (API) بأمان، يُفضّل دائماً استخدام مؤقت زمني (AbortController) مع نظام هجين يضمن سرعة الاستجابة.';
    }
    if (text.includes('ذكاء') || text.includes('هلوسة') || text.includes('اوامر') || text.includes('أوامر') || text.includes('prompt') || text.includes('مذاكرة') || text.includes('توصيات') || text.includes('نصائح')) {
        return '🤖 قواعد الاستخدام الذكي للذكاء الاصطناعي التوليدي:\n1. اكتب أمراً واضحاً ومحدداً (هندسة الأوامر) واطلب الشرح خطوة بخطوة بدل طلب الإجابة النهائية فقط.\n2. راجع المخرجات دائماً مع الكتاب المدرسي لتجنب «هلوسة المعلومات» (توليد معلومات غير دقيقة بثقة عالية).';
    }
    const mathAns = trySolveMath(q);
    if (mathAns) return mathAns;

    if (text.includes('سلام') || text.includes('اهلا') || text.includes('أهلا') || text.includes('مرحبا') || text.includes('ازيك') || text.includes('مساعدة') || text.includes('تقدم')) {
        return 'أهلاً بك! أنا المساعد الذكي العالمي لمنصة بكالوريا 2027 (مدرسة الجعفرية الثانوية المشتركة).\nاسألني عن أي تفصيلة داخل المنصة أو خارجها، أو جرب الميكروفون 🎤 للتحدث بصوتك!';
    }
    return 'بخصوص سؤالك عن «' + q.trim() + '»:\n• تؤكد دراستنا الميدانية بمدرسة الجعفرية الثانوية المشتركة (100 طالب) أن توظيف الذكاء الاصطناعي التوليدي يرفع التحصيل الدراسي بشرط التحقق النقدي من المعلومات وعدم الاعتماد الكلي.\n• وللتواصل المباشر مع مطور المنصة المبرمج محمد عماد عباس: 01055212909.';
}

async function fetchWithTimeout(url, options, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, { ...options, signal: controller.signal });
        clearTimeout(timer);
        return res;
    } catch (err) {
        clearTimeout(timer);
        throw err;
    }
}

function cleanAIOutput(raw) {
    if (!raw) return null;
    const cleaned = raw.split(/\n---|\*\*Sponsor|Support Pollinations/i)[0].trim();
    if (!cleaned || cleaned.length < 3 || cleaned.startsWith('<!DOCTYPE') || cleaned.startsWith('{')) {
        return null;
    }
    return cleaned;
}

function getSuggestedFollowups(q) {
    const t = q.toLowerCase();
    if (t.includes('نتائج') || t.includes('عينة')) {
        return ['الفرق بين العلمي والأدبي', 'توصيات الاستخدام الآمن', 'قائد الفريق'];
    }
    if (t.includes('علمي') || t.includes('أدبي')) {
        return ['أهم نتائج العينة', 'مخاطر هلوسة المعلومات', 'أدوات خارجية مفيدة'];
    }
    return ['أهم النتائج 📊', 'العلمي vs الأدبي ⚖️', 'رقم المبرمج محمد 📱'];
}

function renderStreamedBotResponse(botDiv, fullText, sourceLabel, question) {
    const box = document.getElementById('aiChatMessages');
    aiChatHistory.push({ role: 'assistant', text: fullText });
    if (aiChatHistory.length > 12) aiChatHistory = aiChatHistory.slice(-12);

    const textSpan = document.createElement('div');
    botDiv.textContent = '';
    botDiv.appendChild(textSpan);

    let idx = 0;
    const step = Math.max(2, Math.ceil(fullText.length / 45));

    if (activeTypingTimer) clearInterval(activeTypingTimer);
    activeTypingTimer = setInterval(() => {
        idx += step;
        if (idx >= fullText.length) {
            textSpan.textContent = fullText;
            clearInterval(activeTypingTimer);
            activeTypingTimer = null;

            const actionsBar = document.createElement('div');
            actionsBar.className = 'pro-msg-actions';

            const speakBtn = document.createElement('button');
            speakBtn.type = 'button';
            speakBtn.className = 'pro-mini-action';
            speakBtn.textContent = '🔊 استماع';
            speakBtn.onclick = () => speakArabicText(fullText, speakBtn);

            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'pro-mini-action';
            copyBtn.textContent = '📋 نسخ';
            copyBtn.onclick = () => {
                navigator.clipboard?.writeText(fullText);
                copyBtn.textContent = '✅ تم النسخ';
                setTimeout(() => (copyBtn.textContent = '📋 نسخ'), 1500);
            };

            const badge = document.createElement('span');
            badge.className = 'pro-source-tag';
            badge.textContent = sourceLabel;

            actionsBar.appendChild(speakBtn);
            actionsBar.appendChild(copyBtn);
            actionsBar.appendChild(badge);
            botDiv.appendChild(actionsBar);

            const chipsRow = document.createElement('div');
            chipsRow.className = 'pro-followup-chips';
            getSuggestedFollowups(question).forEach(label => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'pro-chip';
                chip.textContent = label;
                chip.onclick = () => askBot(label);
                chipsRow.appendChild(chip);
            });
            botDiv.appendChild(chipsRow);
            box.scrollTop = box.scrollHeight;
        } else {
            textSpan.textContent = fullText.slice(0, idx) + ' ▍';
            box.scrollTop = box.scrollHeight;
        }
    }, 18);
}

async function askBot(question) {
    injectProChatbotUI();
    const box = document.getElementById('aiChatMessages');

    const userDiv = document.createElement('div');
    userDiv.className = 'user-msg';
    userDiv.textContent = question;
    box.appendChild(userDiv);

    aiChatHistory.push({ role: 'user', text: question });

    const botDiv = document.createElement('div');
    botDiv.className = 'bot-msg';
    botDiv.style.whiteSpace = 'pre-line';
    botDiv.textContent = '⚡ جاري التحليل الذكي...';
    box.appendChild(botDiv);
    box.scrollTop = box.scrollHeight;

    const qLower = question.trim().toLowerCase();
    const isInstantLocal =
        qLower.includes('رقم') ||
        qLower.includes('واتس') ||
        qLower.includes('تليفون') ||
        qLower.includes('موبايل') ||
        trySolveMath(question) !== null;

    if (isInstantLocal) {
        setTimeout(() => {
            renderStreamedBotResponse(botDiv, getUniversalKnowledgeReply(question), '⚡ استجابة فورية', question);
        }, 180);
        return;
    }

    const customSavedKey = (localStorage.getItem('custom_gemini_key_2027') || '').trim();
    const activeGeminiKey = customSavedKey || DEFAULT_GEMINI_KEY;

    const recentMemory = aiChatHistory
        .slice(-4)
        .map(m => (m.role === 'user' ? 'المستخدم: ' : 'المساعد: ') + m.text)
        .join('\n');

    const systemPrompt =
        'أنت المساعد البحثي الذكي العالمي لمنصة "أثر توظيف أدوات الذكاء الاصطناعي التوليدي على التحصيل الدراسي لطلاب البكالوريا" (2026-2027) بمدرسة الجعفرية الثانوية المشتركة (الصف الثاني البكالوريا). ' +
        'قائد الفريق ومطور المنصة: المبرمج محمد عماد عباس (رقم الهاتف والواتساب: 01055212909)، ومعه المبرمج فوزي حسين، المبرمج مازن أبو صابر، والمبرمج محمد أحمد. ' +
        'نتائج العينة (' + surveyState.total + ' طالب): 78% استخدام أسبوعي، 40% واجبات، 35% شرح، 15% تلخيص، 10% ترجمة، 30% نقل بدون مراجعة. العلمي: 68% برمجة ومعادلات. الأدبي: 72% تلخيص وترجمة. ' +
        'أجب عن أي سؤال (داخل المنصة أو خارجها أو برمجة أو دراسة أو مصادر خارجية) بالعربية الفصحى المبسطة وبإيجاز ذكي ومنظم.';

    let liveReply = null;
    let sourceName = '🧠 AI Pro Engine';

    if (activeGeminiKey) {
        const geminiModels = ['gemini-3.8-flash', 'gemini-flash-latest'];
        const payload = JSON.stringify({
            contents: [{ parts: [{ text: systemPrompt + '\n\nسياق المحادثة:\n' + recentMemory }] }]
        });

        for (const modelName of geminiModels) {
            for (let attempt = 1; attempt <= 2; attempt++) {
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${encodeURIComponent(activeGeminiKey)}`;
                    const gemRes = await fetchWithTimeout(
                        url,
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: payload
                        },
                        customSavedKey ? 15000 : 12000
                    );

                    if (gemRes.ok) {
                        const gemData = await gemRes.json();
                        liveReply = cleanAIOutput(gemData?.candidates?.[0]?.content?.parts?.[0]?.text);
                        if (liveReply) {
                            sourceName = `✨ Gemini (${modelName})`;
                            break;
                        }
                    } else {
                        const errText = await gemRes.text().catch(() => '');
                        console.warn(`Gemini ${modelName} (محاولة ${attempt}) رجّع حالة ${gemRes.status}:`, errText);
                        if (gemRes.status === 400 || gemRes.status === 401 || gemRes.status === 403 || gemRes.status === 404) {
                            break;
                        }
                        if (attempt < 2) {
                            await new Promise(r => setTimeout(r, 600));
                        }
                    }
                } catch (e) {
                    console.warn(`Gemini ${modelName} (محاولة ${attempt}) فشل الاتصال:`, e);
                    if (attempt < 2) {
                        await new Promise(r => setTimeout(r, 600));
                    }
                }
            }
            if (liveReply) break;
        }
    }

    if (!liveReply) {
        try {
            const apiRes = await fetchWithTimeout(
                'https://text.pollinations.ai/openai',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        model: 'openai',
                        messages: [
                            { role: 'system', content: systemPrompt },
                            ...aiChatHistory.slice(-4).map(m => ({ role: m.role, content: m.text }))
                        ]
                    })
                },
                6500
            );
            if (apiRes.ok) {
                const apiData = await apiRes.json();
                liveReply = cleanAIOutput(apiData?.choices?.[0]?.message?.content);
                if (liveReply) sourceName = '🌐 Live Cloud AI';
            }
        } catch (e) {}
    }

    const finalAnswer = liveReply || getUniversalKnowledgeReply(question);
    renderStreamedBotResponse(botDiv, finalAnswer, sourceName, question);
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
        desc: 'قائد الفريق ومطور المنصة: المبرمج محمد عماد عباس (01055212909)\nالأعضاء: المبرمج فوزي حسين، المبرمج مازن أبو صابر، والمبرمج محمد أحمد'
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
    injectProChatbotUI();

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
