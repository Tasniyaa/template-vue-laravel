// (function () {
//     "use strict"

//     dragula([document.querySelector('#new-tasks-draggable'), document.querySelector('#todo-tasks-draggable'), document.querySelector('#inprogress-tasks-draggable'), document.querySelector('#inreview-tasks-draggable'), document.querySelector('#completed-tasks-draggable')]);

//     var myElement1 = document.getElementById('new-tasks');
//     console.log(myElement1)
//     new SimpleBar(myElement1, { autoHide: true });

//     var myElement2 = document.getElementById('todo-tasks');
//     new SimpleBar(myElement2, { autoHide: true });

//     var myElement3 = document.getElementById('inprogress-tasks');
//     new SimpleBar(myElement3, { autoHide: true });

//     var myElement4 = document.getElementById('inreview-tasks');
//     new SimpleBar(myElement4, { autoHide: true });

//     var myElement5 = document.getElementById('completed-tasks');
//     new SimpleBar(myElement5, { autoHide: true });


//     document.addEventListener("DOMContentLoaded", () => {
//         setInterval(() => {
//             let i = [
//                 document.querySelector('#new-tasks-draggable'),
//                 document.querySelector('#todo-tasks-draggable'),
//                 document.querySelector('#inprogress-tasks-draggable'),
//                 document.querySelector('#inreview-tasks-draggable'),
//                 document.querySelector('#completed-tasks-draggable')
//             ]
//             i.map((ele) => {
//                 if (ele) {
//                     if (ele.children.length == 0) {
//                         ele.classList.add("task-Null")
//                         document.querySelector(`#${ele.getAttribute("data-view-btn")}`).nextElementSibling.classList.add("d-none")
//                     }
//                     if (ele.children.length != 0) {
//                         ele.classList.remove("task-Null")
//                         document.querySelector(`#${ele.getAttribute("data-view-btn")}`).nextElementSibling.classList.remove("d-none")
//                     }
//                 }
//             })
//         }, 100);
//     })

//     /* multi select with remove button */
//     const multipleCancelButton = new Choices(
//         '#choices-multiple-remove-button1',
//         {
//             allowHTML: true,
//             removeItemButton: true,
//         }
//     );
//     const multipleCancelButton1 = new Choices(
//         '#choices-multiple-remove-button2',
//         {
//             allowHTML: true,
//             removeItemButton: true,
//         }
//     );

//     /* TargetDate Picker */
//     flatpickr("#targetDate", {
//         enableTime: true,
//         dateFormat: "Y-m-d H:i",
//     });

//      /* filepond */
//      FilePond.registerPlugin(
//         FilePondPluginImagePreview,
//         FilePondPluginImageExifOrientation,
//         FilePondPluginFileValidateSize,
//         FilePondPluginFileEncode,
//         FilePondPluginImageEdit,
//         FilePondPluginFileValidateType,
//         FilePondPluginImageCrop,
//         FilePondPluginImageResize,
//         FilePondPluginImageTransform
//     );

//     /* multiple upload */
//     const MultipleElement = document.querySelector('.multiple-filepond');
//     FilePond.create(MultipleElement,);

// })();


"use strict";

function initializeDragula() {
    dragula([
        document.querySelector('#new-tasks-draggable'),
        document.querySelector('#todo-tasks-draggable'),
        document.querySelector('#inprogress-tasks-draggable'),
        document.querySelector('#inreview-tasks-draggable'),
        document.querySelector('#completed-tasks-draggable')
    ]);
}

function initializeSimpleBar() {
    const elements = [
        'new-tasks',
        'todo-tasks',
        'inprogress-tasks',
        'inreview-tasks',
        'completed-tasks'
    ];

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            new SimpleBar(element, { autoHide: true });
        }
    });
}

function checkEmptyColumns() {
    const columns = [
        document.querySelector('#new-tasks-draggable'),
        document.querySelector('#todo-tasks-draggable'),
        document.querySelector('#inprogress-tasks-draggable'),
        document.querySelector('#inreview-tasks-draggable'),
        document.querySelector('#completed-tasks-draggable')
    ];

    columns.forEach(ele => {
        if (ele) {
            const viewBtn = document.querySelector(`#${ele.getAttribute("data-view-btn")}`);
            if (ele.children.length === 0) {
                ele.classList.add("task-Null");
                if (viewBtn) {
                    viewBtn.nextElementSibling.classList.add("d-none");
                }
            } else {
                ele.classList.remove("task-Null");
                if (viewBtn) {
                    viewBtn.nextElementSibling.classList.remove("d-none");
                }
            }
        }
    });
}

function initializeChoices() {
    new Choices('#choices-multiple-remove-button1', { allowHTML: true, removeItemButton: true });
    new Choices('#choices-multiple-remove-button2', { allowHTML: true, removeItemButton: true });
}

function initializeFlatpickr() {
    flatpickr("#targetDate", { enableTime: true, dateFormat: "Y-m-d H:i" });
}

function initializeFilePond() {
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateSize,
        FilePondPluginFileEncode,
        FilePondPluginImageEdit,
        FilePondPluginFileValidateType,
        FilePondPluginImageCrop,
        FilePondPluginImageResize,
        FilePondPluginImageTransform
    );

    const multipleElement = document.querySelector('.multiple-filepond');
    if (multipleElement) {
        FilePond.create(multipleElement);
    }
}

function initializeAll() {
    initializeDragula();
    initializeSimpleBar();
    document.addEventListener("DOMContentLoaded", () => {
        setInterval(checkEmptyColumns, 100);
    });
    initializeChoices();
    initializeFlatpickr();
    initializeFilePond();
}

export { initializeAll, initializeDragula, initializeSimpleBar, checkEmptyColumns, initializeChoices, initializeFlatpickr, initializeFilePond };