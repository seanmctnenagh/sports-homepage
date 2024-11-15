export const tv = (match, breakout) =>{
    if ((match.competition === "NHL" || match.competition === "NBA") && !breakout) {
        return true;
    } 
    else if (match.competition !== "BLANK") {
        let url = `https://www.google.com/search?q=${match.homeTeam} ${match.awayTeam} tv channel`;
        url = url.replace("&", " and ");
        window.open(url, "Popup", "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=720, height=720, top=30")
    }
    return false;
}