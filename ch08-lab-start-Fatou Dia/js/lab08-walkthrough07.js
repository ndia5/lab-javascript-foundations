var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border='1'>");
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";

    document.write("<th>" + day + "</th>");
}

document.write("</tr>");

var date = 1;

while (date <= 30) {
    document.write("<tr>");

    for (var col = 0; col < 7; col++) {
        if (date <= 30) {
            document.write("<td>" + date + "</td>");
            date++;
        } else {
            break; // 🔥 THIS STOPS EXTRA CELLS
        }
    }

    document.write("</tr>");
}

