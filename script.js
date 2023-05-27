// This function is called when the page loads.
window.onload = function() {
  // Get the reference to the `#tasks` element.
  var tasks = document.getElementById("tasks");

  // Add an event listener to the `#add-task` button.
  document.getElementById("add-task").addEventListener("click", function() {
    // Get the text from the `#add-task` input.
    var task = document.getElementById("add-task").value;

    // Create a new `li` element and add it to the `#tasks` list.
    var li = document.createElement("li");
    li.textContent = task;
    tasks.appendChild(li);

    // Clear the text from the `#add-task` input.
    document.getElementById("add-task").value = "...";
  });
};