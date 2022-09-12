function setScore(score) {
    localStorage.setItem("score", score);
}

function getScore() {
    let score = localStorage.getItem("score");
    if (score == null || !Number.isInteger(score * 1)) {
        return 0;
    }
    return score * 1;
}

function setWalletScore(score) {
    localStorage.setItem("walletScore", score);
}

function getWalletScore() {
    let score = localStorage.getItem("walletScore");
    if (score == null || !Number.isInteger(score * 1)) {
        return 0;
    }
    return score * 1;
}

function setWallet(wallet) {
    localStorage.setItem("wallet", wallet);
}

function getWallet() {
    return localStorage.getItem("wallet");
}

export { setScore, getScore, setWalletScore, getWalletScore, setWallet, getWallet };
