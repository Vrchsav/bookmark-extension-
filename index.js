let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")


const  leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads=leadsFromLocalStorage
    render(myLeads)
}
deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    localStorage.clear()
    ulEl.innerHTML = myLeads
    console.log("Button clicked from dekkk")
})
deleteBtn.addEventListener("click", function() {
    myLeads.pop()
    ulEl.innerHTML = myLeads
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads)

    console.log("Button clicked from dekkk")
})

inputBtn.addEventListener("click", function () {
    inputEl.value === "" ? pass : 
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads));


    render(myLeads)
})

function render(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${Leads[i]}'>
                ${Leads[i]}
            </a>
        </li>
    `

    }

    ulEl.innerHTML = listItems
}
