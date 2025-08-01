document.getElementById('info').innerHTML = `Screen size: <span id="screenSize"></span><br>
Layout viewport size: <span id="layoutViewportSize"></span><br>
Visual viewport size: <span id="visualViewportSize"></span><br>
Visual viewport scale factor: <span id="visualViewportScale"></span><br>
Device pixel ratio: <span id="devicePixelRatio"></span>`;

let screenSizeElement = document.getElementById("screenSize");
const updateScreenWidth = () => {
    screenSizeElement.innerText = `${screen.width}px \u00d7 ${screen.height}px`;
    screen.orientation.addEventListener("change", updateScreenWidth, { once: true });
}
updateScreenWidth();

let devicePixelRatioElement = document.getElementById("devicePixelRatio");
const updateDevicePixelRatio = () => {
    let dpr = window.devicePixelRatio;
    devicePixelRatioElement.innerText = dpr;
    matchMedia(`(resolution: ${dpr}dppx)`).addEventListener("change", updateDevicePixelRatio, { once: true });
};
updateDevicePixelRatio();

let layoutViewportSizeElement = document.getElementById("layoutViewportSize");
const updateLayoutViewportWidth = () => {
    layoutViewportSizeElement.innerText = `${window.innerWidth}px \u00d7 ${window.innerHeight}px`;
    window.addEventListener("resize", updateLayoutViewportWidth, { once: true });
};
updateLayoutViewportWidth();

let visualViewportScaleElement = document.getElementById("visualViewportScale");
let visualViewportSizeElement = document.getElementById("visualViewportSize");
const updateVisualViewport = () => {
    visualViewportScaleElement.innerText = window.visualViewport.scale;
    visualViewportSizeElement.innerText = `${Math.round(window.visualViewport.width)}px \u00d7 ${Math.round(window.visualViewport.height)}px`;
    window.visualViewport.addEventListener("resize", updateVisualViewport, { once: true });
};
updateVisualViewport();