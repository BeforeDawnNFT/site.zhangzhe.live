function setScore(score) {
    console.log("set");
    localStorage.setItem("score", score);
}

function getScore() {
    let score = localStorage.getItem("score");
    if (score == null || !Number.isInteger(score * 1)) {
        return null;
    }
    return score * 1;
}

export { setScore, getScore };
