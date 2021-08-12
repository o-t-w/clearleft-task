function daysAgo(ISOstring) {
    return parseInt(Math.abs(Date.now() - new Date(ISOstring)) / 86400000); 
}

const whenPosted = document.querySelectorAll(".when-posted");
whenPosted.forEach(element => {
    const newText = daysAgo(element.textContent);
    element.textContent = `${newText} DAYS AGO`;
    element.style.display = "";
})