const form = document.getElementById("terminal-form");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");

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
            <p>GitHub: <a href="https://github.com/" target="_blank">GitHub</a></p>
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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const command = input.value.trim().toLowerCase();

    if (!command) return;

    output.innerHTML += `
        <p class="output-command">
            theodore@portfolio:~$ ${command}
        </p>
    `;

    if (commands[command]) {
        output.innerHTML += commands[command]();
    } else {
        output.innerHTML += `
            <p>
                Command not found: ${command}
            </p>
            <p>
                Type <span class="command">help</span>
                for available commands.
            </p>
        `;
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
});

document.addEventListener("click", () => {
    input.focus();
});const form = document.getElementById("terminal-form");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");

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
            <p>GitHub: <a href="https://github.com/" target="_blank">GitHub</a></p>
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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const command = input.value.trim().toLowerCase();

    if (!command) return;

    output.innerHTML += `
        <p class="output-command">
            theodore@portfolio:~$ ${command}
        </p>
    `;

    if (commands[command]) {
        output.innerHTML += commands[command]();
    } else {
        output.innerHTML += `
            <p>
                Command not found: ${command}
            </p>
            <p>
                Type <span class="command">help</span>
                for available commands.
            </p>
        `;
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
});

document.addEventListener("click", () => {
    input.focus();
});
