document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#find-btn").addEventListener("click", function () {
        var notes = document.querySelector("#notes-input").value;
        document.querySelector("#result").innerHTML = findscale(notes);
    });
});

function findscale(notes = '') {
    return 'under construction';
}

function scales() {
    return [
        {
            "scale": "C major",
            "notes": ['C', 'D', 'E', 'F', 'G', 'A', 'B']
        },
        {
            "scale": "C# major",
            "notes": ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C']
        },
        {
            "scale": "D major",
            "notes": ['D', 'E', 'F#', 'G', 'A', 'B', 'C#']
        },
        {
            "scale": "D# major (E flat)",
            "notes": ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D']
        },
        {
            "scale": "E major",
            "notes": ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#']
        },
        {
            "scale": "F major",
            "notes": ['F', 'G', 'A', 'A#', 'C', 'D', 'E']
        },
        {
            "scale": "F# major",
            "notes": ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F']
        },
        {
            "scale": "G major",
            "notes": ['G', 'A', 'B', 'C', 'D', 'E', 'F#']
        },
        {
            "scale": "G# major",
            "notes": ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G']
        },
        {
            "scale": "A major",
            "notes": ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
        },
        {
            "scale": "A# major",
            "notes": ['A#', 'C', 'D', 'D#', 'F', 'G', 'A', '']
        },
        {
            "scale": "B major",
            "notes": ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#']
        },
    ];
}
