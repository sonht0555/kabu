import * as Main from './main.js';
/* --------------- Declaration --------------- */
const stateDivs = document.querySelectorAll('.stateDiv');
const noneImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA2MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg2MFY0MEgwVjBaIiBmaWxsPSIjMTYxNjE2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNCIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNCAxNkgyNlYyNEgzNFYxNlpNMzMgMTdIMzJWMThIMzFWMTlIMzBWMjBIMjlWMjFIMjhWMjJIMjdWMjNIMzNWMTdaIiBmaWxsPSIjRkZGRkY1Ii8+Cjwvc3ZnPgo=';
/* --------------- Function ------------------ */
// Load States
async function LoadstateInPage(saveSlot, divs, dateState, stateDivs) {
    const imageStateDiv = document.getElementById(divs);
    const localSlot = await Main.getData(gameName, "0", "slotStateSaved");
    const stateDiv = document.getElementById(stateDivs);
    const pngName = gameName.replace(/\.(zip|gb|gbc|gba)$/, `_${saveSlot}.png`);
    const imageData = await Main.dowloadScreenShot(`/data/screenshots/${pngName}`) || noneImage;
    const timeData = await Main.getData(gameName, saveSlot, "saveTime");
    imageStateDiv.style.cssText = `background-image: url('${imageData}');background-size: cover;background-repeat: no-repeat;background-position: center center`;
    document.getElementById(dateState).textContent = timeData || "__";
    if (parseInt(localSlot) === parseInt(saveSlot)) {
        stateDiv.classList.add('stated');
    } else {
        stateDiv.classList.remove('stated');
    }
}
export async function wrapContent () {
    let selectedIndex = parseInt(await Main.getData(gameName, "0", "selectedIndex")) || 0;
    const updateSelectionState = async () => {
        stateDivs.forEach((stateDiv, index) => {
            if (index === selectedIndex) {
                stateDiv.classList.add('selected');
            } else {
                stateDiv.classList.remove('selected');
            }
        });
        await Main.setData(gameName, "0", "selectedIndex", selectedIndex);
    };
    updateSelectionState(); 
    ["touchend"].forEach(eventType => {
        document.querySelectorAll('#Left').forEach(button => {
            button.addEventListener(eventType, () => {
                if (statePageButton.classList.contains("active") && selectedIndex > 0) {
                    selectedIndex--;
                    updateSelectionState();
                }
            });
        });

        document.querySelectorAll('#Right').forEach(button => {
            button.addEventListener(eventType, () => {
                if (statePageButton.classList.contains("active") && selectedIndex < stateDivs.length - 1) {
                    selectedIndex++;
                    updateSelectionState();
                }
            });
        });

        document.getElementById('A').addEventListener(eventType, async () => {
            if (statePageButton.classList.contains("active")) {
                if (document.getElementById(`stateDiv0${selectedIndex}`).classList.contains('selected')) {
                    stateList.classList.toggle("visible");
                    statePageButton.classList.toggle("active");
                    document.getElementById("menu-pad").style.removeProperty("pointer-events");
                    led(selectedIndex);
                    await Main.loadState(selectedIndex);
                    await Main.setData(gameName, "0", "slotStateSaved", selectedIndex);
                    await Main.resumeGame();
                    await delay(100)
                    await Main.notiMessage(`[${selectedIndex}] Loaded State`, 1500);
                }
            }
        });

        document.getElementById('B').addEventListener(eventType, async () => {
            if (statePageButton.classList.contains("active")) {
                if (document.getElementById(`stateDiv0${selectedIndex}`).classList.contains('selected')) {
                    if (confirm(`Do you want slot [${selectedIndex}] deleted?`)) {
                        const stateName = gameName.replace(/\.(zip|gb|gbc|gba)$/, `.ss${selectedIndex}`);
                        const screenShotName = gameName.replace(/\.(zip|gb|gbc|gba)$/, "");
                        const imageStateDiv = document.getElementById(`state0${selectedIndex}`);
                        await Main.deleteFile(`/data/states/${stateName}`);
                        await delay(200)
                        await Main.deleteFile(`/data/screenshots/${screenShotName}_${selectedIndex}.png`);
                        imageStateDiv.style.backgroundImage = `url('${noneImage}')`;
                        document.getElementById(`dateState0${selectedIndex}`).textContent = "__";
                    }
                }
            }
        });
    });
}
/* --------------- DOMContentLoaded ---------- */
document.addEventListener("DOMContentLoaded", function() {
    ["touchend"].forEach(eventType => {
        //Buton Open Save States Page
        statePageButton.addEventListener(eventType, () => {
            for (let i = 0; i <= 7; i++) {
                LoadstateInPage(i, `state0${i}`, `dateState0${i}`, `stateDiv0${i}`);
            }
            stateList.classList.toggle("visible");
            statePageButton.classList.toggle("active");
            if (stateList.classList.contains("visible")) {
                document.getElementById("menu-pad").style.removeProperty("pointer-events");
                Main.resumeGame();
            } else {
                document.getElementById("menu-pad").style.setProperty("pointer-events", "none", "important");
                Main.pauseGame();
            }
        });
    });
});