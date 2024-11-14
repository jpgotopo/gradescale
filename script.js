const scalePatterns = {
    major: [0, 2, 4, 5, 7, 9, 11],
    minor: [0, 2, 3, 5, 7, 8, 10],
    harmonicMinor: [0, 2, 3, 5, 7, 8, 11],
    melodicMinor: [0, 2, 3, 5, 7, 9, 11],
    dorian: [0, 2, 3, 5, 7, 9, 10],
    phrygian: [0, 1, 3, 5, 7, 8, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10],
    aeolian: [0, 2, 3, 5, 7, 8, 10],
    locrian: [0, 1, 3, 5, 6, 8, 10],
    pentatonicMajor: [0, 2, 4, 7, 9],
    pentatonicMinor: [0, 3, 5, 7, 10],
    blues: [0, 3, 5, 6, 7, 10],
    chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    majorHarmonic: [0, 2, 4, 5, 8, 9, 11]
};

const chordPatterns = {
    major: ["", "m", "m", "", "", "m", "dim"],
    minor: ["m", "dim", "", "m", "m", "", ""],
    harmonicMinor: ["m", "dim", "aug", "m", "", "", "dim"],
    melodicMinor: ["m", "m", "aug", "", "", "dim", "dim"],
    dorian: ["m", "m", "", "", "m", "dim", ""],
    phrygian: ["m", "", "", "m", "dim", "", ""],
    lydian: ["", "", "m", "dim", "", "m", "m"],
    mixolydian: ["", "m", "dim", "", "m", "m", ""],
    aeolian: ["m", "dim", "", "m", "m", "", ""],
    locrian: ["dim", "", "m", "", "m", "", "m"],
    pentatonicMajor: ["", "", "", "", ""],
    pentatonicMinor: ["m", "", "", "m", "m"],
    blues: ["m", "", "", "", "", "m"],
    chromatic: Array(12).fill(""),
    majorHarmonic: ["", "m", "", "", "aug", "m", "dim"]
};

const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function generateTables() {
    const rootNote = document.getElementById("rootNote").value;
    const scaleType = document.getElementById("scaleType").value;

    const rootIndex = chromaticScale.indexOf(rootNote);
    const scalePattern = scalePatterns[scaleType];
    const chordPattern = chordPatterns[scaleType];

    const scaleNotes = scalePattern.map(interval => chromaticScale[(rootIndex + interval) % 12]);

    const scaleTableBody = document.getElementById("scaleTable").querySelector("tbody");
    const chordTableBody = document.getElementById("chordTable").querySelector("tbody");

    scaleTableBody.innerHTML = "";
    chordTableBody.innerHTML = "";

    scaleNotes.forEach((note, index) => {
        const degree = index + 1;

        // Populate scale table
        const scaleRow = document.createElement("tr");
        scaleRow.innerHTML = `<td>${degree}</td><td>${note}</td>`;
        scaleTableBody.appendChild(scaleRow);

        // Populate chord table
        const chordRow = document.createElement("tr");
        chordRow.innerHTML = `<td>${degree}</td><td>${note}${chordPattern[index]}</td>`;
        chordTableBody.appendChild(chordRow);
    });
}