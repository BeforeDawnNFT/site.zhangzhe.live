function setScore(score) {
    localStorage.setItem("score", score);
}

function getScore() {
    let score = localStorage.getItem("score");
    if (score == null || !Number.isInteger(score * 1)) {
        return null;
    }
    return score * 1;
}

function setWallet(wallet) {
    localStorage.setItem("wallet", wallet);
}

function getWallet() {
    return localStorage.getItem("wallet");
}

export { setScore, getScore, setWallet, getWallet };
