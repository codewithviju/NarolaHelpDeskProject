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

$("#getName").hide();
$("#cl_name").hide();
$("#hr").hide();
$("#comtask").hide();
$("#protask").hide();
$("#remaintask").hide();
$("#Queries").hide();
$("#notestitle").hide();
$("#info").hide();


const test = [
  {
    clickAbleElementId: "completed_task_btn",
    parentInputElementId: "completed",
    notesTask: "CompletedTask",
    noteinput: "CompletedInput",
    completedTaskInfo : "comtask",
    completedError : "completed_error",
    info : "info",
    addCompletedTask : "add_completed_task"
  },
  {
    clickAbleElementId: "progress_task_btn",
    parentInputElementId: "progress",
    notesTask: "ProgressTask",
    noteinput: "ProgressInput",
    completedTaskInfo : "protask",
    completedError : "progress_error",
    info : "info",
    addCompletedTask : "add_progress_task"
  },
  {
    clickAbleElementId: "remaining_task_btn",
    parentInputElementId: "remaining",
    notesTask: "RemainingTask",
    noteinput: "RemainingInput",
    completedTaskInfo : "remaintask",
    completedError : "remaining_task_error",
    info : "info",
    addCompletedTask : "add_remaining_task"
    
  },
  {
    clickAbleElementId: "query_task_btn",
    parentInputElementId: "query",
    notesTask: "QueryTask",
    noteinput: "QueryInput",
    completedTaskInfo : "Queries",
    completedError : "query_error",
    info : "info",
    addCompletedTask : "add_queries"
  },
  {
    clickAbleElementId: "notes_task_btn",
    parentInputElementId: "notes",
    notesTask: "NotesTask",
    noteinput: "NoteInput",
    completedTaskInfo : "notestitle",
    completedError : "notes_error",
    info : "info",
    addCompletedTask : "add_notes"
  },
];


for (let index = 0; index < test.length; index++) {
  const element = test[index];
  $(`#${element.parentInputElementId}`).change(function (){
    $(`#${element.completedTaskInfo}`).show()
    $(`#${element.completedError}`).show()
    $(`#${element.info}`).show()
    let value = $(`#${element.parentInputElementId}`).val()
    $(`#${element.addCompletedTask}`).append("<li> " + value + "<span style='font-weight:bold'>&nbsp;[Done] " + "  </li>")

  })
}


for (let index = 0; index < test.length; index++) {
  const element = test[index];
  $(`#${element.clickAbleElementId}`).click(function (e) {
    console.log("Button clicked");
    e.preventDefault();

    var getFieldValue = $(`#${element.parentInputElementId}`).val();

    if (getFieldValue === "") {
      $(`#${element.parentInputElementId}_error`).text(
        "Please Fill Exising Field.."
      );
    } else {
      $(`#${element.parentInputElementId}_error`).hide();

      counter += 1;
      $(`#${element.parentInputElementId}_tasks`).append(
        '<div class="form-group" id="' +
          `${element.parentInputElementId}_div` +
          counter +
          '"> <input class="form-control" placeholder="Done Task" id="' +
          `${element.parentInputElementId}_input` +
          counter +
          '" onchange="' +
          `AddValueTo${element.notesTask}` +
          "( " +
          counter +
          ' )"/> <button class="btn btn-danger" onclick="' +
          `delete${element.noteinput}` +
          "(" +
          counter +
          ')"> - </button> </div>'
      );
    }
  });
}

function AddValueToNotesTask(id) {
  let value = $("#notes_input" + id).val();

  $("#add_notes").append(
    "<li id='item" +
      id +
      "'> " +
      value +
      " " +
      "<span style='font-weight:bold'>&nbsp;[Done] " +
      " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteNoteInput(counter) {
  $("#notes_div" + counter).hide();
  $("#item" + counter).remove();
}

function AddValueToQueryTask(id) {
  let value = $("#query_input" + id).val();
  $("#add_queries").append(
    "<li id='item" +
      id +
      "'> " +
      value +
      " " +
      "<span style='font-weight:bold'>&nbsp;[Done] " +
      " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteQueryInput(counter) {
  $("#query_div" + counter).hide();
  $("#item" + counter).remove();
}

function AddValueToRemainingTask(id) {
  let value = $("#remaining_input" + id).val();
  $("#add_remaining_task").append(
    "<li id='item" +
      id +
      "'> " +
      value +
      " " +
      "<span style='font-weight:bold'>&nbsp;[Done] " +
      " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteRemainingInput(counter) {
  $("#remaining_div" + counter).hide();
  $("#item" + counter).remove();
}

function AddValueToProgressTask(id) {
  let value = $("#progress_input" + id).val();
  $("#add_progress_task").append(
    "<li id='item" +
      id +
      "'> " +
      value +
      " " +
      "<span style='font-weight:bold'>&nbsp;[Done] " +
      " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteProgressInput(counter) {
  $("#progress_div" + counter).hide();
  $("#item" + counter).remove();
}

function AddValueToCompletedTask(id) {
  let value = $("#completed_input" + id).val();
  $("#add_completed_task").append(
    "<li id='item" +
      id +
      "'> " +
      value +
      " " +
      "<span style='font-weight:bold'>&nbsp;[Done] " +
      " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteCompletedInput(counter) {
  $("#completed_div" + counter).hide();
  $("#item" + counter).remove();
}
