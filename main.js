/* emoty line because i like it */
document.getElementById("s_icon").addEventListener("click", () => {
	document.getElementById("w_settings").classList.remove("hidden")
})
document.getElementById("close_settings").addEventListener("click", () => {
	document.getElementById("w_settings").classList.add("hidden")
})
const searxhE = {
	ggl: "https://www.google.com/search?q=",
	stp: "https://www.startpage.com/search?q=",
	brv: "https://search.brave.com/search?q=",
	eco: "https://www.ecosia.org/search?q=",
	bng: "https://www.bing.com/search?q="
}
let engineSelected = localStorage.getItem("draco_engine") ?? "ggl"
document.getElementById("s_engine").value = engineSelected
document.getElementById("s_engine").addEventListener("change", () => {
	localStorage.setItem("draco_engine", document.getElementById("s_engine").value)
	engineSelected = document.getElementById("s_engine").value
})

function isValidUrl(string) {
	try {
		const url = new URL(string)
		return ["http:", "https:"].includes(url.protocol)
	} catch {
		return false
	}
}

const nexoBangs = {
	"#yt": "https://www.youtube.com/results?search_query=",
	"#px": "https://www.perplexity.com/search?q=",
	"#gm": "https://gemini.google.com/app?q=",
	"#px": "https://www.perplexity.com/search?q=",
	"#px": "https://www.perplexity.com/search?q="
}

document.getElementById("s_box").addEventListener("submit", (e) => {
	e.preventDefault()
	inputTyped = document.getElementById("s_in").value.trim()
	const divisions = inputTyped.split(" ")
	const bang = divisions[0]
	const query = divisions.slice(1).join(" ")
	if (!inputTyped) return
	if (isValidUrl(inputTyped)) {
		window.open(inputTyped)
	} else if (inputTyped.includes(".") && !inputTyped.includes(" ")) {
		window.open("https://" + inputTyped)
	} else if (nexoBangs[bang]) {
		window.open(nexoBangs[bang] + encodeURIComponent(query))
	} else {
		window.open(searxhE[engineSelected] + encodeURIComponent(inputTyped))
	}
})
