let jobs = [{
    name: "bán time",
    deadline: "21-1-2025",
    leader: "Mr Luận",
    status: "Đang Tiến Hành"
},
{
    name: " time",
    deadline: "21-1-2025",
    leader: "Mr Luận",
    status: "Đang Tiến Hành"
}];

const tbodyEl = document.querySelector("tbody");
const formEl = document.querySelector("#form-edit");


function renderData(array) {
    let newJob = ``;
    for (let i = 0; i < array.length; i++) {
        newJob += `
         <tr>
                <td>${array[i].name}</td>
                <td>${array[i].deadline}</td>
                <td>${array[i].leader}</td>
                <td>${array[i].status}</td>
            <td>
                <button class="btn btn-success" onclick="edit(${i})">Sửa</button>
                <button class="btn btn-danger" onclick="deleteJob(${i})">Xóa</button>
            </td>
        </tr>
        `;
}
tbodyEl.innerHTML = newJob;
}
renderData(jobs);

function addJob(e) {
    e.preventDefault();

    let name = e.target.name.value.trim();
    let deadline = e.target.deadline.value;
    let leader = e.target.leader.value;

    let statusIndex = e.target.status.selectedIndex;
    let statusText = e.target.status.options[statusIndex].text;

    if (jobEditIndex == null) {
        jobs.push({
            name: name,
            deadline: deadline,
            leader: leader,
            status: statusText
        });
    } else {
        jobs[jobEditIndex] = {
            name: name,
            deadline: deadline,
            leader: leader,
            status: statusText
        };
        jobEditIndex = null;
        btnAddSave.innerText = "Thêm Công Việc"; 
    }
    renderData(jobs);  
    e.target.reset();
}


function deleteJob(index){
    jobs.splice(index, 1);
    renderData(jobs);
}






function searchJob() {
    let searchTerm = document.getElementById('search').value.toLowerCase();
    let filteredJobs = jobs.filter(job => job.name.toLowerCase().includes(searchTerm));
    renderData(filteredJobs); 
}


let jobEditIndex=null;
let btnAddSave=document.querySelector("#btn_add_save");
function edit(index){
    let name=jobs[index].name;
    let deadline=jobs[index].deadline;
    let leader=jobs[index].leader;
    let status=jobs[index].status;

    formEl.name.value=name;
    formEl.deadline.value=deadline;
    formEl.leader.value=leader;
    formEl.status.value=status;

    jobEditIndex=index;
    btnAddSave.innerText="Lưu";
}


