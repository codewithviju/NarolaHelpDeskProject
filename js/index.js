let counter = 1;

function load() {
  $("#info").show();
}
function getClientValue() {
  var title = document.getElementById("client_name").value;
  document.getElementById("getName").innerText = title + ",";
}

function getProjectName() {
  var title = document.getElementById("project_name").value;
  document.getElementById("cl_name").innerText = title;
  document.getElementById("cl2_name").innerText = title;
}

function changeTlName() {
  var title = document.getElementById("tl_name").value;
  document.getElementById("tl_name_info").innerText = title;
}

$(document).ready(function () {
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

  $("#completed_task").change(function () {
    $("#error_task").hide();
    var value = $("#completed_task").val();

    $("#items").append("<li> " + value + "[Done] " + "  </li>");
  });

  // In Progress Task

  $("#progress_task").change(function () {
    $("#progress_task_error").hide();
    var value = $("#progress_task").val();

    $("#progress_items").append("<li> " + value + "[Done] " + " </li>");
  });

  $("#remaining_task").change(function () {
    $("#remaining_task_error").hide();
    var value = $("#remaining_task").val();

    $("#add_remaining_task").append("<li> " + value + "[Done] " + " </li>");
  });

  $("#queries").change(function () {
    $("#query_error").hide();
    var value = $("#queries").val();
    $("#add_queries").append("<li> " + value + "[Done] " + " </li>");
  });

  $("#notes").change(function () {
    $("#notes_error").hide();
    var value = $("#notes").val();
    $("#add_notes").append("<li> " + value + "[Done] " + " </li>");
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
          '"> <input class="form-control" id="input' +
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
          '"> <input class="form-control" id="pro_input' +
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
          '"> <input class="form-control" id="remaining_input' +
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
          '"> <input class="form-control" id="quries_input' +
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
          '"> <input class="form-control" id="notes_input' +
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
    "<li id='Valueitem" + id + "'> " + value + "[Done] " + "  </li>"
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
    "<li id='Progressitem" + id + "'> " + value + "[Done] " + " </li>"
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
    "<li id='Remainingitem" + id + "'> " + value + "[Done] " + " </li>"
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
    "<li id='Queryitem" + id + "'> " + value + "[Done] " + " </li>"
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
    "<li id='item" + id + "'> " + value + "[Done] " + " </li>"
  );
}

// Remove Progress Task Extra Field

function deleteNoteInput(counter) {
  $("#notes_div" + counter).hide();
  $("#item" + counter).remove();
}

// function Based Program

// let finalvalues = [];
// function addValue(id) {
//   if (id === "client_name") {
//     var value = document.getElementById(id).value;
//     document.getElementById("getName").innerText = value;
//   }
//   if (id === "project_name") {
//     var value = document.getElementById(id).value;
//     document.getElementById("cl_name").innerText = value;
//     document.getElementById("cl2_name").innerText = value;
//   }
  
// }
// // console.log(finalvalues);
// $(document).ready(function () {
  
//     var dateObj = new Date();
//     var month = dateObj.getUTCMonth() + 1;
//     var day = dateObj.getUTCDate();
//     var year = dateObj.getUTCFullYear();
  
//     var mL = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const finalMonth = mL[month - 1];
//     // newdate = year + "/" + month + "/" + day;
//     newdate = `${day}th ${finalMonth}, ${year}`;
//     $("#date").text(newdate);
//     $("#date2").text(newdate);

//     // Get Values from Each Field
//     $("#completed_task").change(function () {
//           $("#error_task").hide();
//           var value = $("#completed_task").val();
      
//           $("#items").append("<li> " + value + "[Done] " + "  </li>");
//         });
    

//   })


  // All in One Function


  // function mainButton(id,notes,notes_error,add_notes)
  // {
  //   var getFieldValue = $("#notes").val()

  //   if(getFieldValue === "")
  //   {
  //     $("notes_error").text("Please Fill Exising Field")
  //   }
  //   else {
  //             $("#notes_error").hide();
        
  //             counter += 1;
  //             $("#add_notes").append(
  //               '<div class="form-group" id="queries_div' +
  //                 counter +
  //                 '"> <input class="form-control" id="quries_input' +
  //                 counter +
  //                 '" onchange="AddValueToQueryTask( ' +
  //                 counter +
  //                 ' )"/> <button class="btn btn-danger" onclick="deleteQueryInput(' +
  //                 counter +
  //                 ')"> - </button> </div>'
  //             );
  //           }
    

  // }
  // $("#query_task_btn").click(function (e) {
  //       e.preventDefault();
    
  //       var getFieldValue = $("#queries").val();
    
  //       if (getFieldValue === "") {
  //         $("#query_error").text("Please Fill Exising Field..");
  //       } else {
  //         $("#query_error").hide();
    
  //         counter += 1;
  //         $("#query_task").append(
  //           '<div class="form-group" id="queries_div' +
  //             counter +
  //             '"> <input class="form-control" id="quries_input' +
  //             counter +
  //             '" onchange="AddValueToQueryTask( ' +
  //             counter +
  //             ' )"/> <button class="btn btn-danger" onclick="deleteQueryInput(' +
  //             counter +
  //             ')"> - </button> </div>'
  //         );
  //       }
  //     });
 