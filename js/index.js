function tick() {
  var week = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var element = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Cherish EVERY MOMENT!"
    ),
    React.createElement(
      "div",
      { id: "calendar" },
      React.createElement(
        "h3",
        { id: "date" },
        new Date().getDate()
      ),
      React.createElement(
        "h2",
        { id: "day" },
        new Date().getFullYear(),
        " / ",
        new Date().getMonth() + 1
      ),
      React.createElement(
        "h2",
        { id: "weekday" },
        week[new Date().getDay()]
      ),
      React.createElement(
        "h2",
        { id: "time_now" },
        new Date().toLocaleTimeString().split("下午")
      )
    )
  );

  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);