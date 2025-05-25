const lyrics = [
        { time: 13, line: "line1" },
        { time: 15, line: "line2" },
        { time: 18.5, line: "line3" },
        { time: 24, line: "line4" },
        { time: 29, line: "line5" },
        { time: 35, line: "line6" },
        { time: 41, line: "line7" },
        { time: 48, line: "line8" },
        { time: 53, line: "line9" },
        { time: 56, line: "line10" },
        { time: 63, line: "line11" },
        { time: 68, line: "line12" },
        { time: 74, line: "line13" },
        { time: 80, line: "line14" },
        { time: 86, line: "line15" },
        { time: 89, line: "line16" },
        { time: 95, line: "line17" }
    ];

    const audio = document.getElementById("hymn");
    const lyricsContainer = document.querySelector(".lyrics");
    const lyricsWrapper = document.querySelector(".lyrics-container");
    let currentIndex = 0;

    audio.addEventListener("timeupdate", function () {
        if (currentIndex < lyrics.length && audio.currentTime >= lyrics[currentIndex].time) {
            document.querySelectorAll(".lyrics p").forEach(p => p.classList.remove("active"));

            const activeLine = document.getElementById(lyrics[currentIndex].line);
            activeLine.classList.add("active");
            const wrapperHeight = lyricsWrapper.clientHeight;
            const lineHeight = activeLine.clientHeight;
            const activeLineOffset = activeLine.offsetTop;
            const centerOffset = activeLineOffset - wrapperHeight / 2 + lineHeight / 2;

            lyricsContainer.style.transform = `translateY(-${centerOffset}px)`;

            currentIndex++;
        }
    });

    audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        currentIndex = 0;
        document.querySelectorAll(".lyrics p").forEach(p => p.classList.remove("active"));
        lyricsContainer.style.transform = "translateY(0px)";
    });

    audio.addEventListener("play", function () {
        if (audio.currentTime === 0) {
            currentIndex = 0;
            document.querySelectorAll(".lyrics p").forEach(p => p.classList.remove("active"));
            lyricsContainer.style.transform = "translateY(0px)";
        }
    });