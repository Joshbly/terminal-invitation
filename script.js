const terminalText = `[New Connection Established]
User: [Your Name]
Target: Constantin Weisser, Data Scientist
Intent: Initiate Lunch Meeting

Processing Query...
- Analyzing Mutual Interest: AI and Innovation
- Predicting Optimal Meeting Outcome: Knowledge Exchange
- Suggested Topic: HubSpot's Advanced Strategies

Proposed Action: 
- Initiate "Lunch_Meeting.exe"
- Parameters: Next Week, [Your Preferred Location]
- Expected Output: Stimulating Conversation, Potential Collaboration

Awaiting User Confirmation...
`;

let i = 0;
const speed = 50; // Speed of typing, in milliseconds
const terminal = document.getElementById("terminal");

function typeWriter() {
  if (i < terminalText.length) {
    terminal.innerHTML += terminalText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
