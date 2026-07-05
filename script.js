/* ==========================================================================
   FlexiCard Pro - Final Consolidated Engine (All Features Enabled)
   ========================================================================== */

const deckDatabase = {
    kids: [
        { question: "A", answer: "🍎 Apple (A for Apple!)" },
        { question: "B", answer: "⚽ Ball (B for Ball!)" },
        { question: "C", answer: "🐱 Cat (C for Cat!)" },
        { question: "D", answer: "🐕 Dog (D for Dog!)" },
        { question: "E", answer: "🐘 Elephant (E for Elephant!)" },
        { question: "F", answer: "🐟 Fish (F for Fish!)" },
        { question: "G", answer: "🍇 Grapes (G for Grapes!)" },
        { question: "H", answer: "🐴 Horse (H for Horse!)" },
        { question: "I", answer: "🍦 Ice Cream (I for Ice Cream!)" },
        { question: "J", answer: "🃏 Jug (J for Jug!)" },
        { question: "K", answer: "🪁 Kite (K for Kite!)" },
        { question: "L", answer: "🦁 Lion (L for Lion!)" },
        { question: "M", answer: "🐒 Monkey (M for Monkey!)" },
        { question: "N", answer: "🪹 Nest (N for Nest!)" },
        { question: "O", answer: "🍊 Orange (O for Orange!)" },
        { question: "P", answer: "🦚 Peacock (P for Peacock!)" },
        { question: "Q", answer: "👸 Queen (Q for Queen!)" },
        { question: "R", answer: "🐇 Rabbit (R for Rabbit!)" },
        { question: "S", answer: "☀️ Sun (S for Sun!)" },
        { question: "T", answer: "🐅 Tiger (T for Tiger!)" },
        { question: "U", answer: "☂️ Umbrella (U for Umbrella!)" },
        { question: "V", answer: "🚐 Van (V for Van!)" },
        { question: "W", answer: "⌚ Watch (W for Watch!)" },
        { question: "X", answer: "🪘 Xylophone (X for Xylophone!)" },
        { question: "Y", answer: "🪀 Yo-Yo (Y for Yo-Yo!)" },
        { question: "Z", answer: "🦓 Zebra (Z for Zebra!)" }
    ],
    maths: Array.from({ length: 10 }, (_, i) => {
        const count = i + 1;
        const lollipops = "🍭".repeat(count);
        return { question: `${count}`, answer: `${lollipops}\n\n${count} ${count === 1 ? 'Lollipop' : 'Lollipops'}!` };
    }),
    coding: [
        // === CORE WEB ARCHITECTURE OVERVIEW ===
        { 
            question: "Web Dev Core:\nWhat are the three main pillars of a webpage?", 
            answer: "1. HTML adds Structure to a web page.\n2. CSS adds the style and makes it visually appealing.\n3. JavaScript adds interactivity and dynamic logic." 
        },
        { 
            question: "CSS History:\nWhen was CSS released and why?", 
            answer: "Released in 1996, 3 years after HTML (1993). The main idea is separating content (HTML) from presentation (CSS), making sites easier to maintain." 
        },

        // === BASICS OF HTML (Strictly from image_46c087.png) ===
        { question: "HTML Tag:\n<html> </html>", answer: "Marks the start and end of the HTML document, encapsulating all other elements." },
        { question: "HTML Tag:\n<h1> </h1>", answer: "Defines the main or highest priority heading tag on the webpage structure." },
        { question: "HTML Tag:\n<p> </p>", answer: "Defines a standard paragraph tag block for separating chunks of textual copy." },
        { question: "HTML Tag:\n<b> </b>", answer: "Applies a bold text tag treatment to make specific phrases thick and noticeable." },
        { question: "HTML Tag:\n<i> </i>", answer: "Applies an italic tag styling treatment to slant text without structural priority." },
        { question: "HTML Tag:\n<ul> </ul>", answer: "Creates an un-order list tag (bulleted list) to display descriptive points." },
        { question: "HTML Tag:\n<ol> </ol>", answer: "Creates an order list tag (numbered sequence list) for step-by-step procedures." },
        { question: "HTML Tag:\n<li> </li>", answer: "Defines individual list items tags nested directly inside a <ul> or <ol> structural block." },
        { question: "HTML Tag:\n<form> </form>", answer: "Establishes a basic form tag container to wrap inputs and dispatch user submissions." },
        { question: "HTML Tag:\n<table> </table>", answer: "Sets up a table tag basic block designed to organize dataset records into rows and cells." },
        { question: "HTML Tag:\n<a href=\"url\"> </a>", answer: "Defines a hyperlink or link tag, navigating the viewport terminal to a specific reference resource." },
        { question: "HTML Tag:\n<img src=\"url\" />", answer: "Inserts a standalone visual element known as an image tag using internal or global image paths." },
        { question: "HTML Attribute:\nsrc=\"url\"", answer: "Specifies the precise source path (url) pointing to where a multimedia asset resource lives." },
        { question: "HTML Tag:\n<br>", answer: "A void block known as a line break tag that forces a wrap to the next immediate layout baseline." },
        { question: "HTML Tag:\n<hr>", answer: "Inserts a clean horizontal line tag to visually split thematic structural sections." },

        // === CORE CSS CONCEPTS ===
        { question: "CSS Fundamentals:\nWhat is a Ruleset?", answer: "A combination of a selector and a declaration block. The selector points to the HTML element, and the declaration block changes its properties." },
        { question: "CSS Selector:\nCombinators", answer: "Explain relationships between selectors. Includes: Descendant (space), Child (>), Adjacent Sibling (+), and General Sibling (~)." },
        { question: "CSS Property:\nDisplay Layout Engine", answer: "Controls how an element behaves layout-wise. Common modes: block, inline, inline-block, flex, grid, and none (hides element)." },
        { question: "CSS Core:\nBox Model Layout Specs", answer: "Every element is a box. Comprises Content at the center, surrounded by Padding (space inside border), Border, and Margin (space outside border)." },
        { question: "CSS Layout:\nFlexbox vs Grid dimensional axis", answer: "Flexbox handles 1D data columns/rows. Grid drives 2D grids alignments simultaneously mapping complex horizontal/vertical sectors." },
        { question: "CSS Layout:\nPosition Values Layout rules", answer: "Controls positioning behavior. Modes: static (default), relative (offset from self), absolute (offset from parent), fixed (viewport lock), and sticky." },
        { question: "CSS Advanced:\nSpecificity Weight rules", answer: "Calculates selector priority weights. Order ranking from high to low: Inline styles > IDs (#) > Classes/Attributes (.) > Elements/Pseudoelements." },
        { question: "CSS Advanced:\nVariables Custom Properties syntax", answer: "Declared using '--variable-name' inside selectors (often :root) and recalled globally using the 'var(--variable-name)' system call." },

        // === JAVASCRIPT LOGIC CONCEPTS ===
        { question: "JavaScript Pillars:\nWhat is the 'DOM' structure?", answer: "Document Object Model. An interface tree tracking every HTML element as an active programmable node object that JS scripts can edit." },
        { question: "JavaScript Arrays:\nCore methods summary", answer: "Arrays hold ordered lists. Key methods: push() (add end), pop() (remove end), shift() (remove start), unshift(), map(), filter(), and reduce()." },
        { question: "JavaScript Strings:\nManipulation routines", answer: "Data format storing text sequences. Can be managed using methods like split(), slice(), replace(), indexOf(), trim(), and template literals." },
        { question: "JavaScript Engines:\nScope & Closures engine rules", answer: "Scope dictates variable visibility (Global, Function, Block). A Closure allows a nested function to access variables from its outer scope even after execution." },
        { question: "JavaScript Async:\nPromises & Async/Await engine", answer: "Handles asynchronous tasks. A Promise tracks operation status (Pending, Fulfilled, Rejected). Async/Await provides a clean synchronous-looking wrapper syntax." }
    ]
};

let currentCategory = 'kids';
let currentIndex = 0;

const bodyNode = document.body;
const flashcardElement = document.querySelector('.js-flashcard');
const questionDisplay = document.querySelector('.js-card-question');
const answerDisplay = document.querySelector('.js-card-answer');
const counterDisplay = document.querySelector('.js-card-counter');
const interactionDeck = document.querySelector('.js-interaction-deck');
const inputQuestion = document.querySelector('.js-input-question');
const inputAnswer = document.querySelector('.js-input-answer');

function renderHub() {
    flashcardElement.classList.remove('is-flipped');
    setTimeout(() => {
        const card = deckDatabase[currentCategory][currentIndex];
        questionDisplay.textContent = card.question;
        answerDisplay.textContent = card.answer;
        counterDisplay.textContent = `Card ${currentIndex + 1} of ${deckDatabase[currentCategory].length}`;
        compileInteractionDeck();
    }, 150);
}

function handleSpeech() {
    const card = deckDatabase[currentCategory][currentIndex];
    const isFlipped = flashcardElement.classList.contains('is-flipped');
    const text = isFlipped ? card.answer.replace(/<[^>]*>/g, '') : card.question;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

function playCelebration() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(500, ctx.currentTime);
    osc.frequency.linearRampToValueAtTime(1000, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

function compileInteractionDeck() {
    interactionDeck.innerHTML = "";
    
    // Listen Button
    const speakBtn = document.createElement('button');
    speakBtn.className = 'action-trigger-btn';
    speakBtn.textContent = "🔊 Listen";
    speakBtn.onclick = (e) => { e.stopPropagation(); handleSpeech(); };
    interactionDeck.appendChild(speakBtn);

    // Celebrate Button (Now available in ALL categories)
    const celeBtn = document.createElement('button');
    celeBtn.className = 'action-trigger-btn';
    celeBtn.style.marginLeft = "10px";
    celeBtn.textContent = "🎉 Celebrate!";
    celeBtn.onclick = (e) => { e.stopPropagation(); playCelebration(); };
    interactionDeck.appendChild(celeBtn);
}

// Global Listeners
document.querySelector('.js-theme-toggle').addEventListener('click', () => {
    const isDark = bodyNode.classList.toggle('is-dark');
    document.querySelectorAll('.form-input').forEach(i => i.classList.toggle('is-dark', isDark));
    document.querySelector('.js-theme-toggle').textContent = isDark ? '☀️' : '🌙';
    bodyNode.className = `theme-${currentCategory}${isDark ? ' is-dark' : ''}`;
});

flashcardElement.addEventListener('click', () => flashcardElement.classList.toggle('is-flipped'));
document.querySelector('.js-next-btn').addEventListener('click', () => { currentIndex = (currentIndex + 1) % deckDatabase[currentCategory].length; renderHub(); });
document.querySelector('.js-prev-btn').addEventListener('click', () => { currentIndex = (currentIndex - 1 + deckDatabase[currentCategory].length) % deckDatabase[currentCategory].length; renderHub(); });
document.querySelector('.js-add-btn').addEventListener('click', () => {
    if(!inputQuestion.value || !inputAnswer.value) return;
    deckDatabase[currentCategory].push({ question: inputQuestion.value, answer: inputAnswer.value });
    inputQuestion.value = ""; inputAnswer.value = "";
    renderHub();
});

// Category Switchers
['kids', 'maths', 'coding'].forEach(cat => {
    document.querySelector(`.js-switch-${cat === 'coding' ? 'science' : cat}`).addEventListener('click', () => {
        currentCategory = cat;
        currentIndex = 0;
        bodyNode.className = `theme-${cat}${bodyNode.classList.contains('is-dark') ? ' is-dark' : ''}`;
        renderHub();
    });
});

renderHub();