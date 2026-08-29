const form = document.getElementById("terminal-form");
const input = document.getElementById("command-input");
const output = document.getElementById("terminal-output");

const commands = {
    help() {
        return `
            <p><strong>Available commands:</strong></p>
            <p>about - About me</p>
            <p>projects - My projects</p>
            <p>skills - My skills</p>
            <p>contact - Contact</p>
            <p>clear - Clear terminal</p>
        `;
    },

    about() {
        return `
            <p><strong>About Me</strong></p>
            <p>Hi! I'm Alfa, a developer who enjoys building things and learning new technologies.</p>
        `;
    },

    projects() {
        return `
            <p><strong>Projects</strong></p>
            <p>Coming soon...</p>
        `;
    },

    skills() {
        return `
            <p><strong>Skills</strong></p>
            <p>HTML • CSS • JavaScript • Git • Linux</p>
        `;
    },

    contact() {
        return `
            <p><strong>Contact</strong></p>
            <p>GitHub: your-github</p>
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
            alfa@portfolio:~$ ${command}
        </p>
    `;

    if (commands[command]) {
        output.innerHTML += commands[command]();
    } else {
        output.innerHTML += `
            <p>Command not found: ${command}</p>
            <p>Type <span class="command">help</span> for available commands.</p>
        `;
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
});

document.addEventListener("click", () => {
    input.focus();
});
