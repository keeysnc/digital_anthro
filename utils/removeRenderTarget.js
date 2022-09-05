export function removeRenderTargetText() {
	const nextId = window?.document.getElementById("__next");

	if ((nextId.textContent = "__NEXT_BODY_RENDER_TARGET__")) {
		nextId.style.display = "none";
	}
}
