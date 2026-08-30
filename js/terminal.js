const form = document.getElementById("terminal-form");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");

const commandNames = [
    "help",
    "about",
    "projects",
    "skills",
    "socials",
    "contact",
    "neofetch",
    "clear"
];

const commands = {

    neofetch() {
        return `
            <pre class="neofetch">
       ████████        theodore@portfolio
     ██        ██      ───────────────────
    ██   ████   ██     OS: PortfolioOS
    ██   █  █   ██     Host: GitHub Pages
    ██   ████   ██     Shell: Web Terminal
     ██        ██      Role: Developer
       ████████        Languages: HTML CSS JS
                       Status: Online
            </pre>
        `;
    },

    help() {
        return `
            <p><strong>Available commands:</strong></p>
            <p>about      - About me</p>
            <p>projects   - My projects</p>
            <p>skills     - My skills</p>
            <p>socials    - Social links</p>
            <p>contact    - Contact</p>
            <p>neofetch   - System information</p>
            <p>clear      - Clear terminal</p>
        `;
    },

    about() {
        return `
            <p><strong>About Theodore</strong></p>
            <p>
                Hi! I'm Theodore, a developer who enjoys
                building things and learning new technologies.
            </p>
        `;
    },

    projects() {
        return `
            <p><strong>Projects</strong></p>

            <p>
                <strong>[01] Terminal Portfolio</strong><br>
                Personal terminal-style portfolio.<br>
                Tech: HTML, CSS, JavaScript
            </p>

            <p>
                <strong>[02] Coming Soon</strong><br>
                Another project is currently in development.
            </p>
        `;
    },

    skills() {
        return `
            <p><strong>Skills</strong></p>
            <p>
                HTML<br>
                CSS<br>
                JavaScript<br>
                Git & GitHub<br>
                Linux
            </p>
        `;
    },

    socials() {
        return `
            <p><strong>Socials</strong></p>
            <p>
                GitHub:
                <a href="https://github.com/" target="_blank">
                    GitHub
                </a>
            </p>
        `;
    },

    contact() {
        return `
            <p><strong>Contact</strong></p>
            <p>Email: your-email@example.com</p>
        `;
    },

    clear() {
        output.innerHTML = "";
        return "";
    }
};


/* ========================================
   COMMAND HISTORY
======================================== */

let history = [];
let historyIndex = -1;

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const command = input.value.trim().toLowerCase();

    if (!command) return;

    history.push(command);
    historyIndex = history.length;

    output.innerHTML += `
        <p class="output-command">
            theodore@portfolio:~$ ${command}
        </p>
    `;

    if (commands[command]) {

        output.innerHTML += commands[command]();

    } else {

        output.innerHTML += `
            <p>Command not found: ${command}</p>

            <p>
                Type
                <span class="command">help</span>
                for available commands.
            </p>
        `;
    }

    input.value = "";

    output.scrollTop = output.scrollHeight;
});


/* ========================================
   ARROW UP / DOWN
======================================== */

input.addEventListener("keydown", (event) => {

    if (event.key === "ArrowUp") {

        event.preventDefault();

        if (history.length === 0) return;

        if (historyIndex > 0) {
            historyIndex--;
        }

        input.value = history[historyIndex];
    }


    if (event.key === "ArrowDown") {

        event.preventDefault();

        if (history.length === 0) return;

        if (historyIndex < history.length - 1) {

            historyIndex++;

            input.value = history[historyIndex];

        } else {

            historyIndex = history.length;

            input.value = "";
        }
    }
});


/* ========================================
   TAB AUTOCOMPLETE
======================================== */

input.addEventListener("keydown", (event) => {

    if (event.key !== "Tab") return;

    event.preventDefault();

    const value = input.value.toLowerCase();

    const match = commandNames.find(command =>
        command.startsWith(value)
    );

    if (match) {
        input.value = match;
    }
});


/* ========================================
   BOOT ANIMATION
======================================== */

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const bootMessages = [
    "[ SYSTEM BOOT ]",
    "",
    "Initializing Theodore Portfolio...",
    "Loading terminal modules...",
    "Loading projects...",
    "Loading skills...",
    "Connecting to portfolio...",
    "",
    "ACCESS GRANTED",
    "",
    "Welcome, visitor."
];

let bootIndex = 0;

function boot() {

    if (bootIndex < bootMessages.length) {

        bootText.textContent +=
            bootMessages[bootIndex] + "\n";

        bootIndex++;

        setTimeout(boot, 180);

    } else {

        setTimeout(() => {

            bootScreen.classList.add("hidden");

            setTimeout(() => {
                bootScreen.remove();
            }, 600);

        }, 700);
    }
}


/* ========================================
   KEEP TERMINAL FOCUSED
======================================== */

document.addEventListener("click", () => {
    input.focus();
});


/* START BOOT */

boot();
