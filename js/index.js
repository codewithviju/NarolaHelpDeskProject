let counter = 1;

function load() {}
function getClientValue() {
  $("#getName").show();
  var title = document.getElementById("client_name").value;
  document.getElementById("getName").innerText = "Hi" + " " + title + ",";
}

function getProjectName() {
  $("#cl_name").show();
  $("#hr").show();
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var mL = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const finalMonth = mL[month - 1];
  // newdate = year + "/" + month + "/" + day;
  newdate = `${day}th ${finalMonth}, ${year}`;
  $("#date").text(newdate);
  $("#date2").text(newdate);
  var title = document.getElementById("project_name").value;
  document.getElementById("cl_name").innerText =
    "Updates for " +
    title +
    " As on " +
    day +
    "th" +
    " " +
    finalMonth +
    "," +
    " " +
    year;
  document.getElementById("cl2_name").innerText =
    "Following Are The Updates for " +
    title +
    " As On " +
    day +
    "th" +
    " " +
    finalMonth +
    "," +
    " " +
    year;
}

function changeTlName() {
  var title = document.getElementById("tl_name").value;
  document.getElementById("tl_name_info").innerHTML = "Thanks, <br/>" + title;
}

$(document).ready(function () {
  $("#getName").hide();
  $("#cl_name").hide();
  $("#hr").hide();
  $("#comtask").hide();
  $("#protask").hide();
  $("#remaintask").hide();
  $("#Queries").hide();
  $("#notestitle").hide();
  $("#info").hide();
  $("#completed_task").change(function () {
    $("#comtask").show();
    $("#error_task").hide();
    $("#info").show();
    var value = $("#completed_task").val();

    $("#items").append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done] " + "  </li>");
  });

  // In Progress Task

  $("#progress_task").change(function () {
    $("#progress_task_error").hide();
    $("#protask").show();
    $("#info").show();
    var value = $("#progress_task").val();

    $("#progress_items").append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>");
  });

  $("#remaining_task").change(function () {
    $("#remaining_task_error").hide();
    $("#remaintask").show();
    $("#info").show();
    var value = $("#remaining_task").val();

    $("#add_remaining_task").append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>");
  });

  $("#queries").change(function () {
    $("#query_error").hide();
    $("#Queries").show();
    $("#info").show();
    var value = $("#queries").val();
    $("#add_queries").append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>");
  });

  $("#notes").change(function () {
    $("#notes_error").hide();
    $("#notestitle").show();
    $("#info").show();
    var value = $("#notes").val();
    $("#add_notes").append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done]</span> " + " </li>");
  });

  // Add More Field for Completed Task

  $("#task_btn").click(function (e) {
    e.preventDefault();
    var getData = $("#completed_task").val();

    if (getData === "") {
      $("#error_task").text("Please Fill Exising Field..");
    } else {
      $("#error_task").hide();
      // $("#items").append("<li> " + getData + "  </li>");
      counter += 1;
      $("#add_more_task").append(
        '<div class="form-group" id="box' +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="input' +
          counter +
          '" onchange="AddValue(' +
          counter +
          ')"/> <button class="btn btn-danger" onclick="remove_box(' +
          counter +
          ')">-</button> </div>'
      );
    }
  });

  // Add More Field for in - Progress Task

  $("#progress_task_btn").click(function (e) {
    e.preventDefault();

    var getFieldValue = $("#progress_task").val();

    if (getFieldValue === "") {
      $("#progress_task_error").text("Please Fill Exising Field..");
    } else {
      $("#progress_task_error").hide();

      counter += 1;
      $("#add_more_progress_task").append(
        '<div class="form-group" id="pro_div' +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="pro_input' +
          counter +
          '" onchange="AddValueToProgTask( ' +
          counter +
          ' )"/> <button class="btn btn-danger" onclick="deleteProInput(' +
          counter +
          ')"> - </button> </div>'
      );
    }
  });

  $("#remaining_task_btn").click(function (e) {
    e.preventDefault();

    var getFieldValue = $("#remaining_task").val();

    if (getFieldValue === "") {
      $("#remaining_task_error").text("Please Fill Exising Field..");
    } else {
      $("#remaining_task_error").hide();

      counter += 1;
      $("#add_more_remaining_task").append(
        '<div class="form-group" id="remaining_div' +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="remaining_input' +
          counter +
          '" onchange="AddValueToRemainingTask( ' +
          counter +
          ' )"/> <button class="btn btn-danger" onclick="deleteRemainingInput(' +
          counter +
          ')"> - </button> </div>'
      );
    }
  });

  // Queries

  $("#query_task_btn").click(function (e) {
    e.preventDefault();

    var getFieldValue = $("#queries").val();

    if (getFieldValue === "") {
      $("#query_error").text("Please Fill Exising Field..");
    } else {
      $("#query_error").hide();

      counter += 1;
      $("#query_task").append(
        '<div class="form-group" id="queries_div' +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="quries_input' +
          counter +
          '" onchange="AddValueToQueryTask( ' +
          counter +
          ' )"/> <button class="btn btn-danger" onclick="deleteQueryInput(' +
          counter +
          ')"> - </button> </div>'
      );
    }
  });

  $("#notes_task_btn").click(function (e) {
    e.preventDefault();

    var getFieldValue = $("#notes").val();

    if (getFieldValue === "") {
      $("#notes_error").text("Please Fill Exising Field..");
    } else {
      $("#notes_error").hide();

      counter += 1;
      $("#note_tasks").append(
        '<div class="form-group" id="notes_div' +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="notes_input' +
          counter +
          '" onchange="AddValueToNotesTask( ' +
          counter +
          ' )"/> <button class="btn btn-danger" onclick="deleteNoteInput(' +
          counter +
          ')"> - </button> </div>'
      );
    }
  });
});

// Add Value to the List
function AddValue(id) {
  let value = $("#input" + id).val();
  $("#items").append(
    "<li id='Valueitem" + id + "'> " + value + " " + "<span style='font-weight:bold'>&nbsp;[Done] " + "  </li>"
  );
}

// Remove Item Box
function remove_box(counter) {
  $("#box" + counter).remove();
  $("#Valueitem" + counter).remove();
}

// List of in Progress Task

function AddValueToProgTask(id) {
  let value = $("#pro_input" + id).val();
  $("#progress_items").append(
    "<li id='Progressitem" + id + "'> " + value + " " + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteProInput(counter) {
  $("#pro_div" + counter).hide();
  $("#Progressitem" + counter).remove();
}

// List of Remaning Task

function AddValueToRemainingTask(id) {
  let value = $("#remaining_input" + id).val();
  $("#add_remaining_task").append(
    "<li id='Remainingitem" + id + "'> " + value + " " + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteRemainingInput(counter) {
  $("#remaining_div" + counter).hide();
  $("#Remainingitem" + counter).remove();
}

// Query

function AddValueToQueryTask(id) {
  let value = $("#quries_input" + id).val();
  $("#add_queries").append(
    "<li id='Queryitem" + id + "'> " + value + " " + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteQueryInput(counter) {
  $("#queries_div" + counter).hide();
  $("#Queryitem" + counter).remove();
}

function AddValueToNotesTask(id) {
  let value = $("#notes_input" + id).val();
  $("#add_notes").append(
    "<li id='item" + id + "'> " + value + " " + "<span style='font-weight:bold'>&nbsp;[Done] " + " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteNoteInput(counter) {
  $("#notes_div" + counter).hide();
  $("#item" + counter).remove();
}
