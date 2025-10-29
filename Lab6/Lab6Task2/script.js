function updateDateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString('uk-UA', { hour12: false });

    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота"];
    const dayOfWeek = days[now.getDay()];

    const date = `${now.getFullYear()}-${String(now.getDate()).padStart(2, '0')}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    document.getElementById("datetime").textContent = `${time} | ${dayOfWeek}, ${date}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

function weeksUntilNewYear() {
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(nextYear, 0, 1); 

    const diffInMs = newYearDate - now;
    const weeksLeft = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));

    const message = `До Нового року залишилось ${weeksLeft} тижнів! 🎄`;
    document.getElementById("newyear_message").textContent = message;
}

weeksUntilNewYear();
setInterval(weeksUntilNewYear, 86400000); 
