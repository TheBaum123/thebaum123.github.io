let style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/style.css"
document.head.appendChild(style)

style = document.createElement("link")
style.rel = "stylesheet"
style.href = "style/navigation.css"
document.head.appendChild(style)

for(let i = 0; i < sectionCount; i++) {
    style = document.createElement("link")
    style.rel = "stylesheet"
    style.href = "style/section" + i + ".css"
    document.head.appendChild(style)
}